/**
 * 공통 텍스트 유틸 (refactor(6a)).
 * spiral.ts / note-writer.ts에 중복돼 있던 safeJsonParse를 단일 소스로.
 */

/**
 * JSON 코드펜스(```json ... ```)를 벗기고 파싱. 실패 시 null.
 */
export function safeJsonParse(s: string): Record<string, unknown> | null {
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
