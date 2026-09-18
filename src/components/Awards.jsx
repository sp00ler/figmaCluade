import { asset } from '../asset.js';
import SubHeading from './SubHeading.jsx';

const AWARDS = [
  ['Bib Gourmond', 'award-1.svg'],
  ['Rising Star', 'award-2.svg'],
  ['AA Hospitality', 'award-3.svg'],
  ['Outstanding Chef', 'award-4.svg'],
];

export default function Awards() {
  return (
    <section className="texture section" id="awards">
      <div className="container awards__inner">
        <div className="awards__left">
          <SubHeading eyebrow="Awards & recognition" title="Our Laurels" />
          <div className="awards__grid">
            {AWARDS.map(([title, icon], i) => (
              <div className="award" key={title} data-reveal="rotate" style={{ '--i': i }}>
                <img src={asset(icon)} alt="" aria-hidden="true" />
                <div className="award__text">
                  <p className="award__title">{title}</p>
                  <p className="p">Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="awards__img" data-reveal="clip-h" data-parallax="drift">
          <img className="photo" src={asset('awards.jpg')} alt="Бокалы с вином" />
          <img className="g" src={asset('g-awards.svg')} alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
