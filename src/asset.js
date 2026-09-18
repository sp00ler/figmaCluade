// все картинки лежат в public/img (выгружаются скриптом npm run assets)
export const asset = (name) => `${import.meta.env.BASE_URL}img/${name}`;
