import { asset } from '../asset.js';
import SubHeading from './SubHeading.jsx';

export default function Gallery() {
  return (
    <section className="texture section" id="gallery">
      <div className="gallery__inner">
        <div className="gallery__text" data-reveal="up">
          <SubHeading eyebrow="Instagram" title="Photo Gallery" />
          <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
          <a className="btn" href="#gallery">View More</a>
        </div>
        {/* data-reveal goes on the track itself, not per-shot: .gallery__track
            is a horizontal scroll container (overflow-x: auto for the drag
            strip), and animation-timeline: view() always binds to the
            NEAREST ancestor scroll container — for a child of a horizontally
            scrolling box, the vertical (block-axis) scroll range inside it
            is zero, so a per-shot view-timeline degenerates to permanently
            "fully revealed" and never animates. */}
        <div className="gallery__track" data-reveal="up">
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
