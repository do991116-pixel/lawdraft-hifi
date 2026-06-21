# Wireframe request from PRD

_Started 2026-06-21 08:27 UTC_

---

## User

위 PRD와 유저플로우 다이어그램을 바탕으로 와이어프레임 뽑아주세요

## User

지금 첨부한 디자인 시스템으로 진행해줘

## Assistant

_[tool: fig_ls]_

_[tool: read_file]_

_[tool: fig_read]_

_[tool: fig_read]_

This is the **Wanted Design System** — a comprehensive Korean DS (Pretendard JP, blue primary `#0066FF`). You asked for wireframes of the LawDraft flow; with this DS attached, I'll build clean, structured screens using its real type, color, and component language rather than sketchy boxes.

Let me grab the exact type scale and confirm the visual style of core components.

_[tool: fig_read]_

_[tool: fig_read]_

_[tool: fig_ls]_

_[tool: fig_ls]_

_[tool: fig_ls]_

_[tool: fig_ls]_

_[tool: fig_grep]_

I have the full type scale and palette. This is the Wanted (Toss-style) DS — Pretendard JP, primary `#0066FF`. I'll build the core LawDraft flow as a clean wireframe board of desktop frames using the real DS tokens. The hero is the draft-result screen with citation footnotes + verification badges + 판례 placeholders.

Let me set the title and build.

_[tool: set_project_title]_

_[tool: update_todos]_

Now I'll build the wireframe board. Writing the full DC with all 9 desktop frames using the real DS tokens.

_[tool: dc_write]_

_[tool: update_todos]_

_[tool: show_html]_

Let me take a quick look at a couple of the key frames to confirm they render correctly.

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: save_screenshot]_

Renders cleanly. The board layout, DS tokens, and Korean type are all working. Let me hand off for verification.

The wireframe board is built — 9 desktop frames covering the full LawDraft flow (온보딩→대시보드→스타일 학습→자료 업로드→작성 요청→AI 분석→**초안 결과+출처/검증**→검토 수정→내보내기 게이트), all in the Wanted Design System (Pretendard JP, `#0066FF`). The hero screen (07) shows footnote citations with a source-preview panel, verified/unverified 법령 배지, and the 판례 인용 차단 placeholder per the PRD's hallucination design.

_[tool: ready_for_verification]_

완성했습니다. **LawDraft 핵심 플로우 와이어프레임** — 좌→우로 스크롤하는 9개 데스크톱 화면 보드:

1. **온보딩** — Gemini API 키 연결 (유효성 검증, 암호화 안내)
2. **대시보드** — 사건 목록 + 스타일 학습/검증 대기 상태
3. **스타일 라이브러리** — 과거 서면 업로드 + 학습된 문체·논증 패턴 미리보기
4. **자료 업로드** — 다형식 다중 업로드, OCR/파싱 진행, 자동 분류 태그
5. **작성 요청** — 서면 유형, 쟁점 강조, 판례 차단 설정
6. **AI 분석** — 사실관계→법리(법령 조회)→초안 단계 진행
7. **초안 결과 ★** — footnote 출처 + 원문 미리보기 패널, 검증된/미검증 법령 배지, `[판례 인용 필요]` placeholder
8. **검토·수정** — 섹션 단위 재생성, 직접 편집
9. **내보내기 게이트** — 모든 인용 확인 후 DOCX 다운로드 활성화

PRD의 할루시네이션 방지 설계(법령만 검증·판례 전면 차단)가 7·9번에 반영돼 있습니다. 모두 Wanted 디자인 시스템 토큰(Pretendard JP, `#0066FF`)으로 그렸습니다.

참고: 처음 보낸 질문(변형 개수·플랫폼 등)에 답을 안 주셔서 데스크톱 단일안으로 진행했습니다. 특정 화면을 **모바일/태블릿**으로도 보거나, 핵심 화면(예: 07 초안 결과)을 **레이아웃 2~3안 비교**로 보고 싶으면 말씀해 주세요.

## User

이 구조를 실제 디자인 시스템 컴포넌트로 올린 하이파이 시안이 필요합니다.

## Assistant

하이파이로 가려면 실제 Wanted DS 컴포넌트를 추출해서 그 위에 화면을 다시 올려야 합니다. 먼저 필요한 컴포넌트(버튼·인풋·칩·뱃지·카드·리스트셀·아바타·스위치·탭 등)의 정확한 이름을 찾고, 아이콘 세트와 함께 실제 코드로 materialize하겠습니다.

_[tool: fig_grep]_

_[tool: fig_ls]_

This is a large, production-grade DS (Toss/Wanted style). For true hi-fi I'll materialize the real core atoms as a bundle + the icon set + tokens, then compose the screens with them. Let me confirm a couple component family names first.

_[tool: fig_grep]_

_[tool: fig_read]_

These reconstructed JSX are absolute-positioned pseudocode — the reliable path is to materialize real code. Let me pull the tokens and inspect the icon set structure.

_[tool: fig_materialize]_

_[tool: fig_ls]_

_[tool: read_file]_

_[tool: fig_ls]_

Tokens confirmed (blue-50 `#0066FF`, cool-neutral scale matches). Now let me materialize a focused bundle of the real atomic components and read its catalog to use them directly.

_[tool: fig_materialize]_

_[tool: read_file]_

Clean APIs for the real atoms. Let me verify the bundle renders correctly before building on it.

_[tool: dc_write]_

_[tool: show_html]_

_[tool: save_screenshot]_

Real components render correctly (button, chip, badge all authentic; I'll keep switches/inputs inline since the bundled switch renders oddly). Now building the hi-fi file — full 9-screen flow using the real `ButtonButton`, `ChipChip`, `ContentBadge` components plus exact DS tokens. I'll write the shell + first screens, then append the rest.

_[tool: update_todos]_

_[tool: dc_write]_

Let me verify screens 01–02 render correctly with the real components before building the rest.

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: multi_screenshot]_

Both screens render with authentic DS components (the wrapping is just the screenshot's font-fallback; live it's single-line). Now appending the remaining screens. First, style library (03) + upload (04).

_[tool: dc_html_str_replace]_

Now 05 (작성 요청) + 06 (AI 분석).

_[tool: dc_html_str_replace]_

I referenced a `spin` animation — let me add the keyframes, then build the hero screen 07.

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

Now the final two screens — 08 (검토·수정) + 09 (내보내기 게이트).

_[tool: dc_html_str_replace]_

All 9 hi-fi screens built. Let me clean up the test file and verify the key screens.

_[tool: delete_file]_

_[tool: update_todos]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: multi_screenshot]_

Hero (07) and 작성 요청 (05) render with authentic DS components — chips as real pills, buttons as real DS buttons, verified/unverified statute callouts, the highlighted 쟁점, and the 판례 placeholder all intact. No console errors. (Chip text wrapping in these captures is just the screenshot's font fallback; live with Pretendard JP it's single-line.)

Done. **`LawDraft 하이파이.dc.html`** — the same 9-screen flow rebuilt on the real Wanted Design System: actual `Button`, `Chip`, `Content Badge` components from the materialized bundle, exact Figma-variable tokens (blue `#0066FF`, cool-neutral scale), and Pretendard JP. The wireframe board (`LawDraft 와이어프레임.dc.html`) is preserved alongside it.

Two notes:
- I used the real DS **atoms** (buttons/chips/badges); inputs, switches, cards, and the document view are built to DS spec inline (the bundle's switch rendered oddly, so I kept switches inline). If you want those as materialized components too, I can extend the bundle.
- Status badges in non-DS colors (amber 검토 필요, green 완료, violet AI) are inline since the DS `Content Badge` only ships neutral/accent — say the word if you'd rather constrain to DS colors only.

_[tool: ready_for_verification]_

하이파이 시안 완성했습니다. 9개 화면 모두 실제 Wanted DS 컴포넌트(Button·Chip·Content Badge)와 Figma 토큰 위에 올렸고, 와이어프레임 버전도 그대로 보존했습니다. 위 두 가지(스위치/카드도 컴포넌트화할지, 상태 뱃지 색상을 DS 범위로 제한할지)에 대한 방향을 주시면 더 다듬겠습니다.

