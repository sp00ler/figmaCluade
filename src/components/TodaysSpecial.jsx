import { asset } from '../asset.js';
import SubHeading from './SubHeading.jsx';

const WINES = [
  ['Chapel Hill Shiraz', '$56', 'AU | Bottle'],
  ['Catena Malbec', '$59', 'AR | Bottle'],
  ['La Vieille Rosé', '$44', 'FR | 750 ml'],
  ['Rhino Pale Ale', '$31', 'CA | 750 ml'],
  ['Irish Guinness', '$26', 'IE | 750 ml'],
];
const COCKTAILS = [
  ['Aperol Spritz', '$20', 'Aperol | Villa Marchesi prosecco | soda | 30ml'],
  ["Dark 'N' Stormy", '$16', 'Dark rum | Ginger beer | Slice of lime'],
  ['Daiquiri', '$10', 'Rum | Citrus juice | Sugar'],
  ['Old Fashioned', '$31', 'Bourbon | Brown sugar | Angostura Bitters'],
  ['Negroni', '$26', 'Gin | Sweet Vermouth | Campari | Orange garnish'],
];

function MenuCol({ title, items }) {
  return (
    <div className="special__col">
      <h3 className="h3">{title}</h3>
      <ul className="special__list">
        {items.map(([name, price, tags], i) => (
          <li className="dish" key={name} data-reveal="clip-h" style={{ '--i': i }}>
            <div className="dish__row">
              <span className="dish__name">{name}</span>
              <span className="dish__rule" aria-hidden="true" />
              <span className="dish__price">{price}</span>
            </div>
            <p className="p">{tags}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TodaysSpecial() {
  return (
    <section className="section" id="special">
      <div className="container special">
        <SubHeading eyebrow="Menu that fits you palatte" title="Today’s Special" align="center" />
        <div className="special__grid">
          <MenuCol title="Wine & Beer" items={WINES} />
          <img className="special__img" src={asset('special.jpg')} alt="Коктейль у барной стойки" data-reveal="clip-h" data-parallax="drift" />
          <MenuCol title="Cocktails" items={COCKTAILS} />
        </div>
        <a className="btn" href="#special">View More</a>
      </div>
    </section>
  );
}
