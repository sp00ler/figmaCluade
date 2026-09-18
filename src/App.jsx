import { asset } from './asset.js';
import { useReveal } from './useReveal.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Reservation from './components/Reservation.jsx';
import MenuLinks from './components/MenuLinks.jsx';
import TodaysSpecial from './components/TodaysSpecial.jsx';
import ChefWord from './components/ChefWord.jsx';
import Testimony from './components/Testimony.jsx';
import Video from './components/Video.jsx';
import Awards from './components/Awards.jsx';
import Blogs from './components/Blogs.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useReveal();
  return (
    <div className="page">
      <img className="decor decor--wave" src={asset('wave.svg')} alt="" aria-hidden="true" />
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <img key={i} className={`decor decor--s${i}`} src={asset(`sign-${i}.svg`)} alt="" aria-hidden="true" />
      ))}
      <Header />
      <main>
        <Hero />
        <About />
        <Reservation />
        <MenuLinks />
        <TodaysSpecial />
        <ChefWord />
        <Testimony />
        <Video />
        <Awards />
        <Blogs />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
