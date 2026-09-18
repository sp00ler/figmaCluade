import { useState } from 'react';
import { asset } from '../asset.js';

// ссылку на реальное видео подставить в VIDEO_URL
const VIDEO_URL = '';

export default function Video() {
  const [playing, setPlaying] = useState(false);
  return (
    <section className="video" id="video">
      {playing && VIDEO_URL ? (
        <iframe className="video__frame" src={VIDEO_URL} title="Gericht video" allow="autoplay; fullscreen" />
      ) : (
        <button className="video__play" data-reveal="clip-h" onClick={() => setPlaying(true)} aria-label="Смотреть видео">
          <img src={asset('play.svg')} alt="" />
        </button>
      )}
    </section>
  );
}
