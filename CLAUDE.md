# Claude Code Context — spiral-buddy-black 🌑

**우주(Physis) 버디.** Spiral Buddy 패밀리의 4번째. Blue(v0.5.107)에서 clone해 정체성만 입힌 **스캐폴드 상태**다. 도메인 성격에 맞춘 깊은 커스터마이즈(프롬프트·노트 구조·아이콘 등)는 아직 안 함 — 아래 TODO 참고.

## 정체성 (적용 완료)

- **테마**: 검은 우주(near-black `--bg:#050507`) + 흰/은빛 별빛 나선·accent(`--accent:#dfe7f2`). `client/styles.css :root` + `client/index.html` 스피럴 SVG에 반영.
- `package.json name`: `spiral-buddy-black` (userData 분리 → Blue와 설정 충돌 없음)
- `electron-builder.yml`: productName `Spiral Buddy Black`, appId `com.iq-lab.spiral-buddy-black`, CFBundleName `Spiral Buddy Black`
- `electron/main.cjs`: `GH_REPO = "spiral-buddy-black"`, BrowserWindow backgroundColor `#050507`
- **도메인 배선**: curatedOrg 기본값 `iq-physis-lab` (config.ts + main.cjs). 큐레이트 콘텐츠를 [IQ Physis Lab](https://github.com/iq-physis-lab)에서 가져옴.
- version `0.1.0` (새 제품), git origin 제거됨(실수 push 방지).

## 성격 (Physis / Sophia — "Derive, don't accept")

제1원리에서 실재를 유도해 우주까지 재구성. 모든 글의 흐름: **원리(왜 이렇게 작동하나) → 경계(언제 무너지나) → 창발(그 위에서 무엇이 새로 나타나나)**. LaTeX 수식 많음(`$...$` / `$$...$$`). 무채색·거대함의 톤.

## 남은 TODO (성격에 맞게 다듬기)

- [ ] **SESSION_SYSTEM 프롬프트** (`src/session-store.ts`) — Physis 페르소나로. 제1원리 유도·반증·극한 사냥 강조.
- [ ] **노트 8섹션 구조** (`src/note-writer.ts` STRUCTURE_SYSTEM + REQUIRED_SECTIONS) — `원리 → 경계(언제 깨지나) → 창발`. **수식은 LaTeX로** (Red가 Math/LaTeX 규칙을 추가한 방식 참고). Red/Green이 note-writer를 어떻게 도메인화했는지 비교: `iq-spiral-galaxy/spiral-buddy-{red,green}/src/note-writer.ts`.
- [ ] **아이콘** (`electron/build/icon.*`) — 검은 배경 흰 나선으로 재디자인 (현재 Blue 아이콘). dev 실행엔 불필요, 빌드 전 필요.
- [ ] **data/curated-categories.json** — iq-physis-lab의 7-레이어/카테고리 매핑(현재 Blue 기준). 없어도 동작하나 사이드바 그룹핑이 정확해짐.
- [ ] **남은 "Spiral Buddy" 문자열** (`main.cjs` 다이얼로그/타이틀 + buildInstallScript의 DMG/볼륨/.app 이름) — 릴리스 전 일괄 리브랜드. (GH_REPO·productName·테마는 이미 됨.)
- [ ] **거버넌스** (LICENSE/CLA/CONTRIBUTING/README) — repo 이름 `spiral-buddy-black`로 갱신. (저작권자 = Donghee Han 유지.)
- [ ] **GitHub remote + CI** — 릴리스 준비되면 `iq-spiral-galaxy/spiral-buddy-black` 생성 + release.yml 연결.

## 실행

```bash
pnpm install
pnpm build          # TypeScript → dist
pnpm electron:dev   # 앱 실행 (첫 실행 시 API 키·vault 설정)
```

> 패밀리 공통 구조·릴리스 흐름은 Blue(`iq-agent-lab/iq-spiral-buddy`)와 Red/Green 참고. 멀티레포 포팅 함정은 메모리 `rgb-multirepo-port-gotchas` 참고.
