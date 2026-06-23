# Claude Code Context — spiral-buddy-black 🌑

**우주(Physis) 버디.** Spiral Buddy 패밀리의 4번째. Blue(v0.5.107)에서 clone해 분기. 정체성·색·도메인 배선 + **도메인 커스터마이즈(프롬프트·노트 구조·아이콘·카테고리·KaTeX) 완료, 거버넌스·CI 정리, setup wizard physis화, 릴리스 [v0.1.2](https://github.com/iq-spiral-galaxy/spiral-buddy-black/releases/latest) published** (2026-06-23, 3 OS 빌드 성공·DMG 검증).

> ⚠️ **CI/패키징 함정 2종**(pnpm 11 ↔ electron-builder, 패밀리 공통) — release.yml `env: PNPM_CONFIG_NODE_LINKER: hoisted` + install `--config.dangerouslyAllowAllBuilds=true` + electron-builder.yml `includeSubNodeModules: true`. 빼면 install 실패 또는 런타임 `Cannot find package 'minimatch'` 크래시. 상세·검증법은 메모리 [[rgb-multirepo-port-gotchas]] 함정 5·6.

## 정체성 (적용 완료)

- **테마**: 검은 우주(near-black `--bg:#050507`) + 흰/은빛 별빛 나선·accent(`--accent:#dfe7f2`). `client/styles.css :root` + `client/index.html` 스피럴 SVG에 반영.
- `package.json name`: `spiral-buddy-black` (userData 분리 → Blue와 설정 충돌 없음)
- `electron-builder.yml`: productName `Spiral Buddy Black`, appId `com.iq-lab.spiral-buddy-black`, CFBundleName `Spiral Buddy Black`
- `electron/main.cjs`: `GH_REPO = "spiral-buddy-black"`, BrowserWindow backgroundColor `#050507`
- **도메인 배선**: curatedOrg 기본값 `iq-physis-lab` (config.ts + main.cjs). 큐레이트 콘텐츠를 [IQ Physis Lab](https://github.com/iq-physis-lab)에서 가져옴.
- version `0.1.0` (새 제품), git origin 제거됨(실수 push 방지).

## 성격 (Physis / Sophia — "Derive, don't accept")

제1원리에서 실재를 유도해 우주까지 재구성. 모든 글의 흐름: **원리(왜 이렇게 작동하나) → 경계(언제 무너지나) → 창발(그 위에서 무엇이 새로 나타나나)**. LaTeX 수식 많음(`$...$` / `$$...$$`). 무채색·거대함의 톤.

## 도메인 커스터마이즈 (완료 — 2026-06-23)

- [x] **SESSION_SYSTEM 프롬프트** (`src/session-store.ts`) — Physis(Sophia, "Derive, don't accept") 페르소나. 제1원리 유도·반증·극한 사냥·환원/창발. `MATH_RENDER_NOTE` export 추가(Red 패턴) → SESSION_SYSTEM + routes의 lookup/chapter-context 프롬프트에 주입.
- [x] **노트 8섹션 구조** (`src/note-writer.ts` STRUCTURE_SYSTEM + REQUIRED_SECTIONS) — `한 줄 요약 → 핵심 원리(제1원리 유도) → 직관/비유 → 경계/극한(언제 무너지나) → 헷갈렸던 지점 → 창발(그 위에서 나타나는 것) → 이전 연결 → 다음에 볼 것`. 수식 LaTeX 규칙 + cross-layer 태그(symmetry/least-action/entropy/information/emergence). (green의 `extractSectionBody`/`splitRuleItems`는 /rules 엔드포인트 전용이라 미도입 — black엔 해당 기능 없음.)
- [x] **KaTeX 채팅 렌더링** (`client/index.html` + `client/app.js`) — Red처럼 채팅에서 `$...$`/`$$...$$` 렌더. black은 esm.sh CDN 패턴이라 `marked-katex-extension@5.1.10` import + `katex@0.16.21` CSS. `nonStandard:true`(한국어 조사 경계) 필수. **노트는 Obsidian MathJax가 별도로 렌더 — 클라이언트 무관.**
- [x] **아이콘** (`electron/build/icon.svg`+`icon.png`) — 검은 우주 + 흰/은빛 나선으로 리컬러. SVG 그라디언트만 교체(나선 경로 유지) 후 `qlmanage -t -s 1024`로 PNG 재생성(rsvg/magick 없음 → macOS 내장).
- [x] **data/curated-domains.json** — ⚠️ 실제 파일명은 `curated-domains.json`(레거시명이 `curated-categories.json`). org 키를 `iq-physis-lab`로, iq-physis-lab 7-레이어(0 물리언어 ~ 6 종합) 36 repo 매핑. (이전엔 `iq-dev-lab` 키라 사이드바 그룹핑이 깨져 있었음.)
- [x] **"Spiral Buddy" 문자열·설치 스크립트** (`main.cjs` 다이얼로그/타이틀 + buildInstallScript DMG/볼륨/.app, `electron-builder.yml` CFBundleDisplayName·shortcutName·publish.repo·dmg.title) — 전부 `Spiral Buddy Black`로. ⚠️ DMG 파일명은 `Spiral.Buddy.Black-<ver>...dmg`로 추정(electron-builder가 공백→점, Blue 실측 기준) — **실제 CI 빌드로 미검증**.

## 거버넌스·릴리스 (완료/진행)

- [x] **거버넌스** (LICENSE/CLA.md/CONTRIBUTING.md/README.md) — 이미 존재했고 Blue 잔재(`spiral-buddy-blue`/`Spiral Buddy Blue`)를 `spiral-buddy-black`으로 정리. 저작권자 Donghee Han 유지. README의 Blue 링크는 의도적 패밀리 참조라 유지.
- [x] **클라이언트 리브랜드 잔재** — 분기 시 놓친 것들 정리: `client/index.html` 브랜드 타이틀이 "Spiral Buddy Blue"였음(가장 큰 노출), setup wizard·설정 모달의 `iq-dev-lab` 표시 문자열, `displayWorkspaceName`/`_parentDirOfRoadmapRoot`를 `iq-<x>-lab` 제네릭으로. 자동 다운로드 **기능**은 이미 `CURATED_ORG="iq-physis-lab"`로 정상이었고 표시만 잔재였음.
- [x] **GitHub remote + CI** — origin = `iq-spiral-galaxy/spiral-buddy-black`(이미 연결, public). 워크플로 release.yml(v* 태그 트리거)·cla.yml·dco.yml 존재 + Blue 잔재(릴리스 노트 다운로드 URL·CLA 문서 링크) 정리.
- [x] **첫 릴리스 v0.1.0 published** (2026-06-23) — 3 OS CI 빌드 성공. 아티팩트 이름 `Spiral.Buddy.Black-0.1.0-*`(+ alias `Spiral-Buddy-latest-*`)이 추정과 정확히 일치 → buildInstallScript·릴리스 노트 테이블 검증됨.
- [x] **CI pnpm 11 빌드게이트 우회** — pnpm 11.1.1이 `onlyBuiltDependencies`(package.json/.npmrc/pnpm-workspace.yaml 전부)를 무시해 electron/esbuild postinstall이 막힘 → `ERR_PNPM_IGNORED_BUILDS` install 실패. release.yml install에 `--config.dangerouslyAllowAllBuilds=true` 추가로 해결(clean-room 재현·검증). **패밀리 공통 잠재 이슈** — Red/Green/Blue도 다음 릴리스 때 동일 패치 필요. [[rgb-multirepo-port-gotchas]] 참고.

## 실행

```bash
pnpm install
pnpm build          # TypeScript → dist
pnpm electron:dev   # 앱 실행 (첫 실행 시 API 키·vault 설정)
```

> 패밀리 공통 구조·릴리스 흐름은 Blue(`iq-agent-lab/iq-spiral-buddy`)와 Red/Green 참고. 멀티레포 포팅 함정은 메모리 `rgb-multirepo-port-gotchas` 참고.
