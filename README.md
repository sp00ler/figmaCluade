# Gerícht — Restaurant Home

Вёрстка страницы **Restaurant Home** из макета Figma
[Gericht_myPractice](https://www.figma.com/design/cYwKqac4nPDAahz0XYTB3m/Gericht_myPractice) (узел `509:18`).

Стек: Vite + React 18, чистый CSS на переменных (токены сняты с макета). Адаптив 1920 → 360.

## Запуск

```bash
npm install
FIGMA_TOKEN=figd_xxx npm run assets   # один раз: выгружает картинки и иконки из Figma в public/img
npm run dev
```

Windows PowerShell:

```powershell
$env:FIGMA_TOKEN="figd_xxx"; npm run assets
```

Токен: Figma → Settings → Security → Personal access tokens → Generate new token, scope `File content: Read-only`.

## Структура

```
scripts/figma-assets.json      какие узлы Figma выгружать и в каком формате
scripts/fetch-figma-assets.mjs выгрузка через Figma REST API
src/index.css                  токены, секции, брейкпоинты 1440 / 1150 / 850 / 650
src/components/                по компоненту на секцию макета
```

## Токены

| Роль | Значение |
|---|---|
| Фон | `#0C0B08` / `#0C0C0C` |
| Акцент | `#DCCA87` |
| Текст вторичный | `#AAAAAA` |
| Светлый | `#F5EFDB` |
| Заголовки | Cormorant Upright 90 / 64 / 45 / 32 / 23 |
| Текст | Open Sans 16 / 1.75, трекинг 4% |

## Что осталось

Другие фреймы макета (Bar Home, About Us, Services, Contact Us, Team, Chef Detail, Blog ×3, FAQ, Coming Soon, 404) пока не свёрстаны.
