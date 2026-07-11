#!/usr/bin/env node
// Generates dayN.html from a quiz-data/dayN.json file and registers it on index.html.
// Usage: node scripts/new-quiz.mjs quiz-data/day2.json

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const dataPath = process.argv[2];
if (!dataPath) {
  console.error('Usage: node scripts/new-quiz.mjs <quiz-data/dayN.json>');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(path.resolve(rootDir, dataPath), 'utf8'));

const required = ['day', 'pdfName', 'headerTitle', 'headerSubtitle', 'pageTitle', 'hub', 'questions'];
for (const key of required) {
  if (!(key in data)) {
    console.error(`Missing required field "${key}" in ${dataPath}`);
    process.exit(1);
  }
}

const outFile = `day${data.day}.html`;
const template = fs.readFileSync(path.join(rootDir, 'template.html'), 'utf8');

const html = template
  .replaceAll('{{TITLE}}', data.pageTitle)
  .replaceAll('{{HEADER_TITLE}}', data.headerTitle)
  .replaceAll('{{HEADER_SUBTITLE}}', data.headerSubtitle)
  .replaceAll('{{PDF_NAME}}', data.pdfName)
  .replaceAll('{{QUESTION_COUNT}}', String(data.questions.length))
  .replace('{{QUIZ_DATA_JSON}}', JSON.stringify(data.questions, null, 2));

fs.writeFileSync(path.join(rootDir, outFile), html);
console.log(`Wrote ${outFile} (${data.questions.length} questions)`);

// --- Update index.html hub with a card for this day ---
const indexPath = path.join(rootDir, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

const card = `      <a href="${outFile}" class="group block bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:border-indigo-300 hover:shadow-md transition">
        <div class="flex items-center justify-between mb-3">
          <span class="px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-semibold">${data.hub.badge}</span>
          <i data-lucide="arrow-right" class="w-4 h-4 text-slate-300 group-hover:text-indigo-500 transition"></i>
        </div>
        <h2 class="font-bold text-slate-900 mb-1">${data.hub.title}</h2>
        <p class="text-xs text-slate-500">${data.hub.desc}</p>
      </a>`;

const cardBlockRegex = new RegExp(
  `\\n\\s*<a href="${outFile}"[\\s\\S]*?<\\/a>`
);

if (cardBlockRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(cardBlockRegex, `\n${card}`);
  console.log(`Updated existing card for ${outFile} in index.html`);
} else {
  const marker = '<!-- 다음 회차 추가 시 이 자리에 카드를 복사해서 붙여넣고 day2.html 등으로 연결하세요 -->';
  if (!indexHtml.includes(marker)) {
    console.error('Could not find insertion marker in index.html');
    process.exit(1);
  }
  indexHtml = indexHtml.replace(marker, `${card}\n\n      ${marker}`);
  console.log(`Added new card for ${outFile} to index.html`);
}

fs.writeFileSync(indexPath, indexHtml);
