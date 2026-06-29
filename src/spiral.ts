import type { Chapter, Roadmap } from "./roadmap.js";
import type { SpiralNote } from "./vault.js";
import { noteBelongsToRoadmap, noteMatchesChapter } from "./vault.js";
import { completeOnce, type ClaudeClient } from "./claude.js";

export interface SpiralSuggestion {
  recommendedChapterId: string | null;
  rationale: string;
  related: SpiralNote[];
  mode: "first-time" | "deeper-layer" | "next-chapter" | "cross-link";
}

const SUGGEST_SYSTEM = `You analyze a learner's roadmap and their past spiral-buddy notes, then suggest what to study next.

You output STRICT JSON only, no prose, no markdown fences, matching this shape:
{
  "recommendedChapterId": string | null,
  "mode": "first-time" | "deeper-layer" | "next-chapter" | "cross-link",
  "rationale": string,
  "relatedChapterIds": string[]
}

Each past note line includes \`경계: 충실|얇음\` — whether that note actually stress-tested the principle's boundary (limits, where it breaks).

Principles:
- If no prior notes exist → mode "first-time", pick the earliest chapter.
- If the user has notes on a topic at depth 1 and seems uncertain about parts of it → mode "deeper-layer", recommend the SAME chapter again (deeper).
- **Physis 신호**: a note with \`경계: 얇음\` means the learner didn't probe where the principle fails — prefer mode "deeper-layer" on that SAME chapter so they attack 경계·극한·반례 this time. In Physis, "going deeper" = pushing the boundary. Say so in the rationale.
- If previous chapters have solid depth-1 notes (경계까지 "충실") → mode "next-chapter", advance.
- If two distant chapters connect to recent learning → mode "cross-link".
- Choose recommendedChapterId from the provided list. Return null only if nothing fits.
- "relatedChapterIds" must reference items from the provided notes.
- Keep rationale under 280 chars, written in Korean if the notes are Korean, else English.`;

// 노트의 "경계 / 극한" 섹션이 실제로 채워졌는지 — deeper-layer 신호용.
// 비었거나 placeholder거나 60자 미만이면 "얇음"(경계를 안 짚음).
function boundaryStatus(body: string): "충실" | "얇음" {
  const lines = (body ?? "").split("\n");
  const start = lines.findIndex((l) => /^##\s+경계\s*\/\s*극한/.test(l));
  if (start === -1) return "얇음";
  const rest = lines.slice(start + 1);
  const end = rest.findIndex((l) => /^##\s+/.test(l));
  const text = (end === -1 ? rest : rest.slice(0, end))
    .join(" ")
    .replace(/[`*_>#]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!text || /다루지 않음/.test(text)) return "얇음";
  return text.length >= 60 ? "충실" : "얇음";
}

export async function suggestNext(
  client: ClaudeClient,
  roadmap: Roadmap,
  chapters: Chapter[],
  allNotes: SpiralNote[],
): Promise<SpiralSuggestion> {
  // 이 로드맵에 속하는 노트만 추리기
  const notes = allNotes.filter((n) =>
    noteBelongsToRoadmap(n, { roadmapId: roadmap.id, roadmapName: roadmap.name }),
  );

  if (chapters.length === 0) {
    return {
      recommendedChapterId: null,
      rationale: "No chapters found in roadmap.",
      related: [],
      mode: "first-time",
    };
  }

  if (notes.length === 0) {
    const first = chapters[0]!;
    return {
      recommendedChapterId: first.id,
      rationale: `${roadmap.name} 로드맵의 이전 학습 기록이 없어. 첫 챕터부터 시작하자.`,
      related: [],
      mode: "first-time",
    };
  }

  const chapterIndex = chapters
    .map((c) => `- id: "${c.id}" · title: "${c.title}"`)
    .join("\n");

  const noteIndex = notes
    .slice(0, 30)
    .map(
      (n) =>
        `- chapter_id: "${n.chapterId ?? "?"}" · topic: "${n.topic}" · depth: ${n.depth} · 경계: ${boundaryStatus(n.body)} · date: ${n.date} · summary: ${n.summary || "(none)"}`,
    )
    .join("\n");

  const userMsg = `# Roadmap: ${roadmap.name}
Chapters:
${chapterIndex}

# Past spiral-buddy notes for this roadmap (newest first)
${noteIndex}

Suggest what the learner should study next. Return JSON only.`;

  const { text } = await completeOnce(client, {
    system: SUGGEST_SYSTEM,
    messages: [{ role: "user", content: userMsg }],
    maxTokens: 1024,
  });

  const parsed = safeJsonParse(text);
  const recommendedId =
    typeof parsed?.recommendedChapterId === "string"
      ? parsed.recommendedChapterId
      : null;
  const mode = isMode(parsed?.mode) ? parsed.mode : "next-chapter";
  const rationale =
    typeof parsed?.rationale === "string" ? parsed.rationale : "(no rationale)";
  const relatedIds: string[] = Array.isArray(parsed?.relatedChapterIds)
    ? (parsed.relatedChapterIds as unknown[]).filter(
        (x): x is string => typeof x === "string",
      )
    : [];

  // 관련 노트: relatedChapterIds에 포함된 것 + 추천된 챕터의 노트
  const chaptersById = new Map(chapters.map((c) => [c.id, c]));
  const related = notes.filter((n) => {
    if (
      recommendedId &&
      noteMatchesChapter(n, {
        roadmapId: roadmap.id,
        roadmapName: roadmap.name,
        chapterId: recommendedId,
        chapterTitle: chaptersById.get(recommendedId)?.title,
      })
    ) {
      return true;
    }
    return relatedIds.some((cid) =>
      noteMatchesChapter(n, {
        roadmapId: roadmap.id,
        roadmapName: roadmap.name,
        chapterId: cid,
        chapterTitle: chaptersById.get(cid)?.title,
      }),
    );
  });

  return { recommendedChapterId: recommendedId, rationale, related, mode };
}

function isMode(v: unknown): v is SpiralSuggestion["mode"] {
  return (
    v === "first-time" ||
    v === "deeper-layer" ||
    v === "next-chapter" ||
    v === "cross-link"
  );
}

function safeJsonParse(s: string): Record<string, unknown> | null {
  try {
    const cleaned = s
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/```\s*$/i, "")
      .trim();
    return JSON.parse(cleaned);
  } catch {
    return null;
  }
}
