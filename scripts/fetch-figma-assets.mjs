// Выгрузка картинок и иконок из Figma в public/img.
// Запуск: FIGMA_TOKEN=figd_xxx npm run assets
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const token = process.env.FIGMA_TOKEN;
if (!token) {
  console.error('Нет FIGMA_TOKEN. Figma → Settings → Security → Personal access tokens → Generate (scope: file_content:read).');
  process.exit(1);
}

const { fileKey, assets } = JSON.parse(await readFile(join(root, 'scripts/figma-assets.json'), 'utf8'));
const outDir = join(root, 'public/img');
await mkdir(outDir, { recursive: true });

// группируем по формату и масштабу, чтобы сделать минимум запросов к API
const groups = new Map();
for (const a of assets) {
  const key = `${a.format}@${a.scale ?? 1}`;
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push(a);
}

let ok = 0;
for (const [key, list] of groups) {
  const [format, scale] = key.split('@');
  const ids = list.map((a) => a.node).join(',');
  const url = `https://api.figma.com/v1/images/${fileKey}?ids=${encodeURIComponent(ids)}&format=${format}&scale=${scale}` +
    (format === 'svg' ? '&svg_outline_text=true&svg_include_id=false' : '');
  const res = await fetch(url, { headers: { 'X-Figma-Token': token } });
  if (!res.ok) throw new Error(`Figma API ${res.status}: ${await res.text()}`);
  const { images, err } = await res.json();
  if (err) throw new Error(err);

  for (const a of list) {
    const src = images[a.node];
    if (!src) { console.warn(`  пропуск ${a.file}: узел ${a.node} не отрендерился`); continue; }
    const bin = Buffer.from(await (await fetch(src)).arrayBuffer());
    await writeFile(join(outDir, a.file), bin);
    ok++;
    console.log(`  ✓ ${a.file}`);
  }
}
console.log(`Готово: ${ok}/${assets.length} файлов в public/img`);
