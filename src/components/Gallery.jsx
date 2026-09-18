import { asset } from '../asset.js';
import SubHeading from './SubHeading.jsx';

export default function Gallery() {
  return (
    <section className="texture section reveal" id="gallery">
      <div className="gallery__inner">
        <div className="gallery__text">
          <SubHeading eyebrow="Instagram" title="Photo Gallery" />
          <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
          <a className="btn" href="#gallery">View More</a>
        </div>
        <div className="gallery__track">
          {[1, 2, 3, 4, 5].map((i) => (
            <a className="shot" key={i} href="#gallery" aria-label={`Фото ${i} в Instagram`}>
              <img src={asset(`gallery-${i}.jpg`)} alt="" loading="lazy" />
              <span className="shot__hover"><img src={asset('instagram.svg')} alt="" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
