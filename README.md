# SQLD 복습 퀴즈

SQLD 자격증 공부를 하면서 수업 내용을 바탕으로 만든 객관식 복습 퀴즈 모음입니다.
수업이 끝날 때마다 그날 배운 내용으로 퀴즈를 하나씩 추가해 나갈 예정입니다.
문제별 풀이 시간과 총 풀이 시간을 자동으로 측정해 결과 화면과 오답노트에서 보여주고,
실제 SQLD 시험 페이스(90분/50문항 ≈ 문항당 1.5분)에 맞춰 문항당 90초 제한시간을 두어 시간 초과 시 자동으로 다음 문항으로 넘어갑니다.

🔗 **바로가기**: https://anywaysoul92.github.io/sqld-quiz/

## 구성

| 경로 | 내용 |
|---|---|
| `index.html` | 전체 퀴즈 목록(허브 페이지) — 자동 생성/갱신됨 |
| `day1.html` | 1일차 — 데이터 모델링 & 엔터티 (10문항) |
| `day2.html` | 2일차 — 관계·식별자·정규화 (15문항, 정규화 집중 5문항 포함) |
| `day3.html` | 3일차 — SQL 기초·CRUD·NULL 함수 (10문항, 쿼리 실행결과형 포함) |
| `day4.html` | 4일차 — 문자·숫자 함수·GROUP BY·ROLLUP (10문항, 쿼리 실행결과형 포함) |
| `template.html` | 모든 `dayN.html`을 찍어내는 공통 템플릿 |
| `quiz-data/dayN.json` | 회차별 문제 원본 데이터 |
| `scripts/new-quiz.mjs` | `quiz-data/dayN.json` → `dayN.html` 생성 + 허브 카드 등록 스크립트 |
| `og-image.png` | 링크드인 등 SNS 공유 시 뜨는 미리보기 카드 이미지 (모든 페이지 공용) |

## 회차별 학습 내용

### 1일차 — 데이터 모델링 & 엔터티 ([day1.html](day1.html))

1. 데이터 모델링의 이해 (RDBMS/오라클 구조, 엔터티·속성·식별자 개념 소개)
2. 데이터 모델링이란? — 현실세계 데이터를 추상화·단순화·명확화하여 모델로 표현
3. 데이터 모델링의 세 가지 관점 — 데이터(What) / 프로세스(How) / 상관관계(Relationship)
4. 데이터 모델링 유의사항 — 유연성 / 유일성 / 일관성
5. 데이터 모델링의 3단계 — 개념적(추상) → 논리적(정규화) → 물리적(DB 구현)
6. 데이터 모델링의 스키마 구조 (ANSI-SPARC) — 외부 스키마 / 개념 스키마 / 내부 스키마
7. 데이터 독립성 — 논리적 데이터 독립성 / 물리적 데이터 독립성
8. 데이터 모델링의 3요소 — 엔터티 / 관계 / 속성
9. ERD(개체관계다이어그램) 작성 순서 — 엔터티 도출 → 배치 → 관계 설정 → 관계명 기술 → 관계차수 설정 → 선택사항 기술
10. 엔터티가 되기 위한 조건 — 고유 식별 가능, 2개 이상의 인스턴스, 속성 보유, 업무적 의미
11. 엔터티의 분류
    - 실체 유무에 따른 분류: 유형 엔터티 / 무형(개념) 엔터티
    - 발생 시점에 따른 분류: 기본 엔터티 / 중심 엔터티 / 행위 엔터티

### 2일차 — 관계·식별자·정규화 ([day2.html](day2.html))

1. 엔터티/속성 명명 규칙 — 좋은 이름 vs 나쁜 이름(약어·모호한 단어 지양)
2. 속성의 분류 — 특성(기본/설계/파생), 분해 가능 여부(단일/복합), 값의 개수(단일값/다중값), 도메인
3. 관계의 유형 — 존재관계(강한 관계) / 행위관계
4. 식별자의 종류 — 기본키 / 후보키 / 대체키 / 외래키
5. 본질 식별자 vs 인조 식별자
6. 식별 관계 vs 비식별 관계 — 자식 기본키의 부모 기본키 포함 여부
7. 조인(JOIN)의 종류 — 내부조인 / 외부조인(좌·우·완전) / 자연조인 / 셀프조인 / 카르테시안조인
8. 트랜잭션과 ACID 특성 — 원자성 / 일관성 / 격리성 / 지속성
9. NULL 값의 이해 — 비교 연산 불가, 집계함수 처리, NVL·COALESCE
10. **정규화 집중 학습 (5문항)** — 함수적 종속 개념 → 제1정규형(원자값) → 제2정규형(부분함수종속 제거) → 제3정규형(이행함수종속 제거) → 종합정리

### 3일차 — SQL 기초·CRUD·NULL 함수 ([day3.html](day3.html))

같은 강의 자료(2026-07-18)와 2026-07-19 내용이 한 PDF에 이어져 있어, 07-18 분량을 3일차로 분리했습니다.

1. TRUNCATE vs DROP — 삭제 대상, 롤백 가능 여부, 식별자 초기화 차이
2. SQL 언어 분류 — DDL(CREATE/ALTER/DROP/TRUNCATE) / DML(SELECT/INSERT/UPDATE/DELETE) / DCL(GRANT/REVOKE) / TCL(COMMIT/ROLLBACK/SAVEPOINT)
3. SQL 실행 순서 — FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY
4. CASE WHEN 문법과 실행 결과 해석 (쿼리형)
5. NVL 타입 불일치 오류 — 대체값과 컬럼 타입 일치 필요 (쿼리형)
6. NULL 비교 문법 — WHERE 컬럼 = NULL은 항상 틀림, IS NULL/IS NOT NULL 사용 (쿼리형)
7. 오라클의 암시적 형변환 — 문자열과 숫자 비교 시 TO_NUMBER 자동 적용 (쿼리형)
8. 집계함수와 NULL — SUM(COL2)+SUM(COL3) 실행결과 계산 (쿼리형)
9. 컬럼별 합 vs 행 단위 합 — SUM(A)+SUM(B) 와 SUM(A+B)의 결과가 다른 이유 (쿼리형)
10. NULL과 빈 문자열('') — 오라클과 SQL Server의 처리 차이

### 4일차 — 문자·숫자 함수·GROUP BY·ROLLUP ([day4.html](day4.html))

같은 PDF의 2026-07-19 분량입니다.

1. 문자 함수 — UPPER/LOWER 실행 결과 (쿼리형)
2. ASCII 함수 — 문자 코드값, 여러 글자 입력 시 첫 글자만 반환 (쿼리형)
3. TRIM 계열 함수 — LTRIM/RTRIM/TRIM과 CONCAT 결합 시 공백 처리 (쿼리형)
4. LENGTH 함수 — 문자열 길이 계산 (쿼리형)
5. REPLACE 함수 — 세 번째 인자(바꿀 문자) 생략 시 삭제 동작
6. IN 연산자 — 단일 컬럼(OR 비교) vs 튜플/복수 컬럼(AND-OR 비교) 차이
7. GROUP BY·HAVING — 학과별 평균 조건 필터링 실행결과 (쿼리형)
8. CASE WHEN 3가지 규칙 — 순서대로 검사, ELSE 생략 시 NULL, 별칭 필요성
9. ROLLUP 결과 해석 — 소계(Subtotal)와 총계(Grand Total) 구분 (쿼리형)
10. ROLLUP vs CUBE — 계층적 소계만 vs 모든 컬럼 조합 집계

## 새 회차 퀴즈 추가하는 법 (Claude에게 맡기기)

수업 끝나고 그날 PDF만 넘겨주면 Claude가 아래 과정을 대신 처리합니다.

1. PDF 내용을 읽고 지금까지의 문항과 비슷한 난이도/스타일로 객관식 문항 초안 작성 (기본 10문항, 특별히 약한 주제가 있으면 그 주제만 추가 문항으로 보강 — 예: 2일차는 정규화가 약해서 정규화 집중 5문항을 더해 15문항으로 구성). SQL 활용(2과목) 내용이면 개념 문항뿐 아니라 실제 CREATE/INSERT/SELECT 쿼리를 주고 실행 결과를 맞히는 문항도 섞어서 출제
2. `quiz-data/dayN.json`에 `day1.json`~`day4.json`과 같은 형식으로 저장. 문항에 SQL/테이블 코드가 필요하면 `code` 필드(줄바꿈은 `\n`)를 추가하면 문제 화면에 코드 블록으로 표시됨
   ```json
   {
     "day": 5,
     "pdfName": "원본 PDF 파일명.pdf",
     "pageTitle": "브라우저 탭 제목",
     "headerTitle": "SQLD 5일차 데일리 복습",
     "headerSubtitle": "이번 회차 핵심 주제",
     "hub": { "badge": "5일차", "title": "짧은 제목", "desc": "허브 카드 설명" },
     "questions": [
       { "category": "...", "question": "...", "options": ["...","...","...","..."], "answer": 0, "explanation": "..." },
       { "category": "쿼리형 예시", "question": "다음 쿼리의 실행 결과는?", "code": "SELECT * FROM T\nWHERE COL > 0;", "options": ["...","...","...","..."], "answer": 0, "explanation": "..." }
     ]
   }
   ```
3. 생성 스크립트 실행 → `dayN.html` 생성 + `index.html` 허브 카드 자동 추가/갱신
   ```bash
   node scripts/new-quiz.mjs quiz-data/day3.json
   ```
4. 커밋 후 푸시하면 GitHub Pages에 자동 반영됩니다.
   ```bash
   git add quiz-data/day3.json day3.html index.html
   git commit -m "Add SQLD Day 3 review quiz"
   git push
   ```

스크립트를 다시 실행하면 같은 `day` 번호는 기존 카드를 덮어쓰므로, 문제를 수정하고 재생성해도 허브에 중복 카드가 생기지 않습니다.

## 기술 스택

순수 HTML + Tailwind CDN + Lucide 아이콘만 사용하는 정적 페이지로, 별도 빌드 과정 없이 GitHub Pages로 바로 배포됩니다.
