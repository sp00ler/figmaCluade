import { asset } from '../asset.js';
import SubHeading from './SubHeading.jsx';

const TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.';
const PEOPLE = [
  ['Wade Warren', 'Sommelier', 'avatar-1.jpg'],
  ['Jane Cooper', 'Chef', 'avatar-2.jpg'],
  ['Robert Fox', 'Chef', 'avatar-3.jpg'],
  ['Brooklyn Simmons', 'Caterer', 'avatar-4.jpg'],
];

export default function Testimony() {
  return (
    <section className="section" id="testimony">
      <div className="container testimony">
        <SubHeading eyebrow="Testimony" title="Happy customers" align="center" />
        <div className="testimony__grid">
          {PEOPLE.map(([name, role, img], i) => (
            <figure className="review" key={name} data-reveal="clip-h" style={{ '--i': i }}>
              <div className="review__avatar">
                <img src={asset(img)} alt={name} />
                <img className="review__q" src={asset('quote.svg')} alt="" aria-hidden="true" />
              </div>
              <div className="review__body">
                <blockquote className="p">{TEXT}</blockquote>
                <figcaption className="review__who">
                  <p className="h4">{name}</p>
                  <p className="p p--crimson">{role}</p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
