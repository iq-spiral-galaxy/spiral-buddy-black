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

> ✅ **첫 릴리스 [v0.1.0](https://github.com/iq-spiral-galaxy/spiral-buddy-black/releases/latest) 출시** — Blue 엔진(v0.5.107)에서 분기해 우주·물리(Physis) 도메인으로 맞춤. 아래 한 줄 명령으로 바로 설치하거나, "소스에서 실행"으로 직접 띄울 수 있어요.

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

## ✨ 핵심 기능 (패밀리 공통 엔진)

- 🗺️ 로드맵 → 챕터 **나선형 학습** (depth 1 → 2 → 3, 이전 노트가 다음 세션 컨텍스트로 자동 합류)
- 💬 버디와 **Socratic 대화** — 스트리밍 · 모델 선택 · 세션 Pause/Resume
- 🎤 **음성 입력** (OS 받아쓰기) · 🔍 **Look-up** 사이드 패널 · 📊 학습 추적(활동 캘린더·streak)
- 📝 세션 종료 시 **구조화 노트** 자동 생성 (Obsidian 호환, LaTeX 수식 렌더) — *Physis는 `원리 → 경계 → 창발` 8섹션 구조로 맞춤*
- 🔁 **지난 대화 앱에서 다시보기** — 옵시디언 안 가도 그때 대화 재생
- 전체 기능 상세는 동일 엔진인 [Blue README](https://github.com/iq-spiral-galaxy/spiral-buddy-blue) 참고

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
