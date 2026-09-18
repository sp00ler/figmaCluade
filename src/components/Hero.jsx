import { useState } from 'react';
import { asset } from '../asset.js';

export default function Hero() {
  const [slide, setSlide] = useState(0);
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__heading">
            <p className="h5 hero-in" style={{ '--i': 0 }}>Chase the new Flavour</p>
            <img className="spoon" src={asset('spoon.svg')} alt="" aria-hidden="true" />
            <h1 className="h1 hero-in" style={{ '--i': 1 }}>The key to Fine dining</h1>
          </div>
          <p className="p hero-in" style={{ '--i': 2 }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
          <a className="btn hero-in" style={{ '--i': 3 }} href="#menu">Explore Menu</a>
        </div>
        <div className="hero__img hero-in" style={{ '--i': 1.5 }}>
          <img src={asset('hero.jpg')} alt="Запечённый лосось с лимоном и орегано" />
        </div>
      </div>

      <div className="hero__hashtags" aria-hidden="true">
        <span>#Gericht</span>
        <span>#Bar</span>
      </div>

      <div className="hero__slider">
        {['01', '02', '03', '04'].map((n, i) => (
          <span key={n} style={{ display: 'contents' }}>
            <button className={slide === i ? 'is-active' : ''} onClick={() => setSlide(i)} aria-label={`Слайд ${n}`}>{n}</button>
            {i === 0 && <i aria-hidden="true" />}
          </span>
        ))}
      </div>

      <a className="hero__scroll" href="#about">Scroll</a>
    </section>
  );
}
