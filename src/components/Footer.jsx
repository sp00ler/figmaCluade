import { asset } from '../asset.js';
import SubHeading from './SubHeading.jsx';

export default function Footer() {
  return (
    <footer className="footer" id="contact-us">
      <div className="footer__bg" aria-hidden="true" />
      <div className="container">
        <div className="newsletter">
          <div className="newsletter__head">
            <SubHeading eyebrow="Newsletter" title="Subscribe to Our Newsletter" align="center" />
            <p className="p p--white">And never miss latest Updates!</p>
          </div>
          <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email Address" aria-label="Email" required />
            <button className="btn" type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <h4 className="h4">Contact Us</h4>
            <div>
              <p className="p p--white">9 W 53rd St, New York, NY 10019, USA</p>
              <p className="p p--white">+1 212-344-1230<br />+1 212-555-1230</p>
            </div>
          </div>
          <div className="footer__center">
            <p className="footer__logo">Gerícht</p>
            <div className="footer__center-body">
              <p className="p p--white">"The best way to find yourself is to lose yourself in the service of others.”</p>
              <img className="spoon" src={asset('spoon.svg')} alt="" aria-hidden="true" />
              <div className="footer__social">
                <a href="#" aria-label="Facebook"><img src={asset('facebook.svg')} alt="" /></a>
                <a href="#" aria-label="Twitter"><img src={asset('twitter.svg')} alt="" /></a>
                <a href="#" aria-label="Instagram"><img src={asset('instagram-sm.svg')} alt="" /></a>
              </div>
            </div>
          </div>
          <div className="footer__col">
            <h4 className="h4">Working Hours</h4>
            <div>
              <p className="p p--white">Monday-Friday:<br />08:00 am -12:00 am</p>
              <p className="p p--white" style={{ marginTop: 8 }}>Saturday-Sunday:<br />07:00am -11:00 pm</p>
            </div>
          </div>
        </div>
        <p className="p footer__copy">2021 Gerícht. All Rights reserved.</p>
      </div>
      <a className="footer__top" href="#home">Top</a>
    </footer>
  );
}
