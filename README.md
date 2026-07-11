# SQLD 복습 퀴즈

SQLD 자격증 공부를 하면서 수업 내용을 바탕으로 만든 객관식 복습 퀴즈 모음입니다.
수업이 끝날 때마다 그날 배운 내용으로 퀴즈를 하나씩 추가해 나갈 예정입니다.

🔗 **바로가기**: https://anywaysoul92.github.io/sqld-quiz/

## 구성

| 파일 | 내용 |
|---|---|
| `index.html` | 전체 퀴즈 목록(허브 페이지) |
| `day1.html` | 1일차 — 데이터 모델링 & 엔터티 (10문항) |

## 새 회차 퀴즈 추가하는 법

1. `day1.html`을 복사해서 `day2.html`(또는 해당 회차 번호)로 저장합니다.
2. 파일 안의 `quizData` 배열 내용을 그날 배운 내용에 맞는 문제/보기/정답/해설로 교체합니다.
3. `index.html`의 `quiz-list` 안에 카드를 하나 복사해서 `href`를 새 파일명으로, 제목/설명을 새 회차 내용으로 바꿉니다.
4. 커밋 후 푸시하면 GitHub Pages에 자동 반영됩니다.

```bash
git add day2.html index.html
git commit -m "Add SQLD Day 2 review quiz"
git push
```

## 기술 스택

순수 HTML + Tailwind CDN + Lucide 아이콘만 사용하는 정적 페이지로, 별도 빌드 과정 없이 GitHub Pages로 바로 배포됩니다.
