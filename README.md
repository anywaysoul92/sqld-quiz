# SQLD 복습 퀴즈

SQLD 자격증 공부를 하면서 수업 내용을 바탕으로 만든 객관식 복습 퀴즈 모음입니다.
수업이 끝날 때마다 그날 배운 내용으로 퀴즈를 하나씩 추가해 나갈 예정입니다.

🔗 **바로가기**: https://anywaysoul92.github.io/sqld-quiz/

## 구성

| 경로 | 내용 |
|---|---|
| `index.html` | 전체 퀴즈 목록(허브 페이지) — 자동 생성/갱신됨 |
| `day1.html` | 1일차 — 데이터 모델링 & 엔터티 (10문항) |
| `template.html` | 모든 `dayN.html`을 찍어내는 공통 템플릿 |
| `quiz-data/dayN.json` | 회차별 문제 원본 데이터 |
| `scripts/new-quiz.mjs` | `quiz-data/dayN.json` → `dayN.html` 생성 + 허브 카드 등록 스크립트 |

## 새 회차 퀴즈 추가하는 법 (Claude에게 맡기기)

수업 끝나고 그날 PDF만 넘겨주면 Claude가 아래 과정을 대신 처리합니다.

1. PDF 내용을 읽고 지금까지의 문항과 비슷한 난이도/스타일로 객관식 10문항 초안 작성
2. `quiz-data/dayN.json`에 `day1.json`과 같은 형식으로 저장
   ```json
   {
     "day": 2,
     "pdfName": "원본 PDF 파일명.pdf",
     "pageTitle": "브라우저 탭 제목",
     "headerTitle": "SQLD 2일차 데일리 복습",
     "headerSubtitle": "이번 회차 핵심 주제",
     "hub": { "badge": "2일차", "title": "짧은 제목", "desc": "허브 카드 설명" },
     "questions": [ { "category": "...", "question": "...", "options": ["...","...","...","..."], "answer": 0, "explanation": "..." } ]
   }
   ```
3. 생성 스크립트 실행 → `dayN.html` 생성 + `index.html` 허브 카드 자동 추가/갱신
   ```bash
   node scripts/new-quiz.mjs quiz-data/day2.json
   ```
4. 커밋 후 푸시하면 GitHub Pages에 자동 반영됩니다.
   ```bash
   git add quiz-data/day2.json day2.html index.html
   git commit -m "Add SQLD Day 2 review quiz"
   git push
   ```

스크립트를 다시 실행하면 같은 `day` 번호는 기존 카드를 덮어쓰므로, 문제를 수정하고 재생성해도 허브에 중복 카드가 생기지 않습니다.

## 기술 스택

순수 HTML + Tailwind CDN + Lucide 아이콘만 사용하는 정적 페이지로, 별도 빌드 과정 없이 GitHub Pages로 바로 배포됩니다.
