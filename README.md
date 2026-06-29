# 🌀 Spiral Buddy — 🌑 Black

> AI 버디와 함께하는 **나선형 학습** 데스크톱 앱 — **우주·물리 학습용 버디**.
> 검은 우주 배경에 흰 별빛 나선. 제1원리에서 유도해 우주까지 — *"Derive, don't accept."*

> [iq-spiral-galaxy](https://github.com/iq-spiral-galaxy) 패밀리:
> 🔴 [Red](https://github.com/iq-spiral-galaxy/spiral-buddy-red)(AI·수학) · 🟢 [Green](https://github.com/iq-spiral-galaxy/spiral-buddy-green)(실천적 지혜) · 🔵 [Blue](https://github.com/iq-spiral-galaxy/spiral-buddy-blue)(개발) · **🌑 Black(우주·물리)** · ⚪ [White](https://github.com/iq-spiral-galaxy/spiral-buddy-white)(마음·의식)

<p align="center">
  <img alt="release" src="https://img.shields.io/github/v/release/iq-spiral-galaxy/spiral-buddy-black?style=flat-square">
  <img alt="platforms" src="https://img.shields.io/badge/macOS%20%C2%B7%20Windows%20%C2%B7%20Linux-supported-555?style=flat-square">
  <img alt="license" src="https://img.shields.io/badge/license-MIT-green?style=flat-square">
</p>

---

> ✅ **macOS · Windows · Linux 정식 릴리스.** 아래 한 줄 명령으로 바로 설치하거나, "소스에서 실행"으로 직접 띄울 수 있어요. (최신 버전은 위 배지 참고.)

<details>
<summary>⚡ <b>30초 설치 — 한 줄 명령으로 바로 받기</b> &nbsp;(클릭해서 펼치기)</summary>

<br/>

> 💡 `latest` URL은 항상 최신 릴리스를 가리킵니다. 코드 서명 전이라 macOS는 첫 실행 시 위 명령의 `xattr -cr`(또는 우클릭 → 열기)가 필요할 수 있어요.

**🍎 macOS — Apple Silicon (M1/M2/M3/M4)**

```bash
osascript -e 'tell application "Spiral Buddy Black" to quit' 2>/dev/null; sleep 1; \
cd /tmp && \
curl -fL -o /tmp/spiral.dmg "https://github.com/iq-spiral-galaxy/spiral-buddy-black/releases/latest/download/Spiral-Buddy-latest-arm64.dmg" && \
MOUNT=$(hdiutil attach -nobrowse /tmp/spiral.dmg | grep -o '/Volumes/.*' | head -1) && \
rm -rf '/Applications/Spiral Buddy Black.app' && \
cp -R "$MOUNT/Spiral Buddy Black.app" /Applications/ && \
hdiutil detach -quiet "$MOUNT" && \
xattr -cr '/Applications/Spiral Buddy Black.app' && \
rm -f /tmp/spiral.dmg && \
open '/Applications/Spiral Buddy Black.app'
```

**🍎 macOS — Intel**

```bash
osascript -e 'tell application "Spiral Buddy Black" to quit' 2>/dev/null; sleep 1; \
cd /tmp && \
curl -fL -o /tmp/spiral.dmg "https://github.com/iq-spiral-galaxy/spiral-buddy-black/releases/latest/download/Spiral-Buddy-latest.dmg" && \
MOUNT=$(hdiutil attach -nobrowse /tmp/spiral.dmg | grep -o '/Volumes/.*' | head -1) && \
rm -rf '/Applications/Spiral Buddy Black.app' && \
cp -R "$MOUNT/Spiral Buddy Black.app" /Applications/ && \
hdiutil detach -quiet "$MOUNT" && \
xattr -cr '/Applications/Spiral Buddy Black.app' && \
rm -f /tmp/spiral.dmg && \
open '/Applications/Spiral Buddy Black.app'
```

**🪟 Windows (PowerShell)**

```powershell
$ErrorActionPreference = "Stop"
Get-Process "Spiral Buddy Black" -EA SilentlyContinue | Stop-Process -Force
$exe = "$env:TEMP\spiral-buddy-black-setup.exe"
Invoke-WebRequest -Uri "https://github.com/iq-spiral-galaxy/spiral-buddy-black/releases/latest/download/Spiral-Buddy-latest-Setup.exe" -OutFile $exe
Start-Process -FilePath $exe -ArgumentList "/S" -Wait
Remove-Item $exe -Force
$app = "$env:LOCALAPPDATA\Programs\spiral-buddy-black\Spiral Buddy Black.exe"
if (Test-Path $app) { Start-Process $app }
```

**🐧 Linux**

```bash
curl -fL -o ~/SpiralBuddyBlack.AppImage "https://github.com/iq-spiral-galaxy/spiral-buddy-black/releases/latest/download/Spiral-Buddy-latest.AppImage"
chmod +x ~/SpiralBuddyBlack.AppImage
~/SpiralBuddyBlack.AppImage
```

</details>

## 🌌 무엇을 배우나 — IQ Physis Lab (Sophia)

제1원리에서 실재를 유도해 우주까지 한 층씩 재구성합니다. 모든 학습은 같은 흐름으로 닫힙니다 —
**원리**(왜 이렇게 작동하나) → **경계**(언제 무너지나) → **창발**(그 위에서 무엇이 새로 나타나나).

7-레이어 스택 (학습 자료: [iq-physis-lab](https://github.com/iq-physis-lab)):

| | 레이어 |
|---|---|
| L0 | 물리학의 언어 (차원·변분·대칭·근사·측정) |
| L1 | 고전 세계 (역학·장·파동·카오스) |
| L2 | 통계 세계 (엔트로피·비가역성·상전이) |
| L3 | 양자 세계 (중첩·얽힘·장·표준모형) |
| L4 | 상대성 & 우주 (시공간·블랙홀·우주론) |
| L5 | 최전선 — 미완성 (양자중력·끈·홀로그래피) |
| L6 | 합성 (대칭성·최소작용·엔트로피·정보·창발) |

> 큐레이트 콘텐츠 매핑(`curatedOrg = iq-physis-lab`): 7-레이어에 36개 레포 매핑 완료 — 설정/setup에서 역할 프리셋으로 한 번에 받기.

## ✨ 기능 — 이 버디가 하는 일

### 🌑 Physis 버디만의 것

- **제1원리 튜터 (Sophia, _"Derive, don't accept"_)** — 답을 떠먹여주는 대신, 가장 적은 가정(대칭·변분원리·보존법칙)에서 직접 **유도하게** 이끕니다. 차원분석을 반사적으로 시키고("양변 차원 맞아?"), 흔한 **직관의 함정**을 먼저 짚어 무너지는 걸 보여주고, 원리에서 **반증 가능한 예측**을 끌어냅니다. 모든 설명은 `원리 → 경계(언제 무너지나) → 창발`로 닫힙니다.
- **∑ 수식이 1급 시민** — 채팅에서 LaTeX(`$E=mc^2$`, `$$\nabla\cdot\mathbf{E}=\rho/\varepsilon_0$$`)를 **KaTeX로 실시간 렌더**. 한국어 조사가 붙는 수식($\hbar$는…)까지 안 깨지게 처리합니다. 저장된 노트는 Obsidian의 MathJax로 렌더됩니다.
- **📝 `원리 → 경계 → 창발` 8섹션 노트** — 세션을 끝내면(**End & Save**) 대화가 자동으로 구조화된 Obsidian 노트가 됩니다: *한 줄 요약 · 핵심 원리(제1원리 유도) · 직관/비유 · 경계·극한(언제 무너지나) · 헷갈렸던 지점 · 창발 · 이전 학습 연결 · 다음에 볼 것*. 핵심 원리엔 **유도 골격(가정 → 단계 → 결과 법칙)과 차원 점검**까지 담겨, 외운 게 아니라 *다시 유도할 수 있는* 노트가 됩니다. 노트마다 횡단 원리 태그가 자동으로 붙습니다.
- **🧬 횡단 원리 색인** — 우주를 가로지르는 5개 원리(**대칭 · 최소작용 · 엔트로피 · 정보 · 창발**)가 **어느 레이어/노트에서 다시 나타났는지** 한데 모아 보여줍니다. 사이드바 **🧬 횡단 원리** 버튼 → 원리별 노트 목록(레이어·깊이·날짜 + **왜 거기서 그 원리가 나타났는지** 창발 스니펫, 클릭하면 Obsidian 점프) + 검색. 게다가 각 원리는 6층 **종합 레포**와 1:1로 이어져 **"이 원리로 종합 학습 →"** 한 번에 그 로드맵으로 갑니다. 나선 학습의 연결조직이 눈에 보이고, 패턴 발견 → 종합 학습으로 직행하는 닫힌 루프. _예: 최소작용 → 고전역학·광학·일반상대성·경로적분 노트 → `least-action-everywhere`._
- **🧪 Physis 퀴즈** — 한 번에 한 단계씩 깊어집니다: 제1원리 확인 → 극한·적용 → 직관의 함정 → 횡단·예측.
- **🌌 7-레이어 큐레이션** — [iq-physis-lab](https://github.com/iq-physis-lab)의 36개 학습 레포가 0층(물리의 언어)부터 6층(종합)까지 레이어별 아이콘으로 정리됩니다. setup/설정에서 역할 프리셋(기초부터 · 양자 트랙 · 상대성·우주 트랙 · 전 우주)으로 한 번에 받기.

### 🌀 공통 엔진 (나선 학습)

- **나선형 학습** — 로드맵 → 챕터를 depth 1 → 2 → 3로 되짚습니다. 이전 노트가 다음 세션의 컨텍스트로 자동 합류해 같은 주제가 점점 깊어집니다. 다음에 뭘 볼지 추천도 해주는데, 노트의 *경계*가 얇으면(어디서 무너지는지 안 짚었으면) 같은 챕터를 **경계·극한 공략**으로 더 깊이 권합니다 — Physis에서 깊이는 경계를 미는 것.
- **💬 Socratic 대화** — 스트리밍 응답 · 모델 선택 · 세션 Pause/Resume.
- **🎤 음성 입력**(OS 받아쓰기) · **🔍 Look-up** 사이드 패널(모르는 개념 즉시 조회) · **📊 학습 활동** 캘린더·연속일(streak).
- **🔁 지난 대화 다시보기** — 옵시디언을 열지 않아도 앱에서 그때 대화를 재생.
- **⬇️ 자동 업데이트** — 새 릴리스가 나오면 앱 안에서 받기.

> 학습 흐름: **로드맵 선택 → 챕터 시작 → 버디와 Socratic 대화 → End & Save로 노트 저장 → 다음 세션에서 더 깊이.** 엔진은 [Blue](https://github.com/iq-spiral-galaxy/spiral-buddy-blue)와 공유하며, 더 상세한 엔진 동작은 Blue README를 참고하세요.

## 🏗️ 소스에서 실행

```bash
pnpm install
pnpm build            # TypeScript → dist
pnpm electron:dev     # 데스크톱 앱 (또는 pnpm dev 로 브라우저 모드)
```

첫 실행 시 Setup: **Anthropic API 키**(`sk-ant-...`) + **노트 보관함 폴더**(Obsidian vault 자동 감지).

## 📂 데이터 위치

- 노트: `<vault>/spiral-buddy/` · 휴지통: `…/.trash/` (30일 후 자동 청소)
- 앱 설정: `~/Library/Application Support/spiral-buddy-black/` (macOS)

재설치해도 위 데이터는 보존됩니다.

## 🤝 Contributing & License

PR/이슈 환영 (큰 변경은 이슈로 먼저 논의). 기여 전 [CLA](CLA.md)·[CONTRIBUTING](CONTRIBUTING.md) 확인.
**MIT** · © 2026 Donghee Han (한동희, @e9ua1)
