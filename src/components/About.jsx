import { asset } from '../asset.js';

export default function About() {
  return (
    <section className="texture section reveal" id="about">
      <div className="container about__inner">
        <img className="about__g" src={asset('g-about.svg')} alt="" aria-hidden="true" />
        <div className="about__col about__col--left">
          <div className="subheading subheading--end">
            <h2 className="h2">About Us</h2>
            <img className="spoon" src={asset('spoon.svg')} alt="" aria-hidden="true" />
          </div>
          <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <a className="btn" href="#about">Know More</a>
        </div>
        <img className="about__knife" src={asset('knife.png')} alt="Нож шефа" />
        <div className="about__col">
          <div className="subheading">
            <h2 className="h2">Our History</h2>
            <img className="spoon" src={asset('spoon.svg')} alt="" aria-hidden="true" />
          </div>
          <p className="p">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
          <a className="btn" href="#about">Know More</a>
        </div>
      </div>
    </section>
  );
}
