import { asset } from '../asset.js';
import SubHeading from './SubHeading.jsx';

export default function ChefWord() {
  return (
    <section className="texture section reveal" id="chef">
      <div className="container chef__inner">
        <div className="chef__img">
          <img src={asset('chef.jpg')} alt="Шеф Kevin Luo" />
        </div>
        <div className="chef__content">
          <SubHeading eyebrow="Chef’s Word" title="What we believe in" />
          <div>
            <div className="chef__quote">
              <img src={asset('quote.svg')} alt="" aria-hidden="true" />
              <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
            </div>
            <p className="p">auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
          </div>
          <div className="chef__name">
            <p className="h4">Kevin Luo</p>
            <p className="p">Chef &amp; Founder</p>
          </div>
          <p className="chef__sign" aria-hidden="true">Kevin Luo</p>
        </div>
      </div>
    </section>
  );
}
