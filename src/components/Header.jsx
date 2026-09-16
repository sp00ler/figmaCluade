import { useState } from 'react';

const NAV = ['Home', 'Pages', 'Contact Us', 'Blog', 'Landing'];
const href = (s) => `#${s.toLowerCase().replace(/\s+/g, '-')}`;

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header" id="home">
      <a className="header__logo" href="#home">Gerícht</a>
      <ul className="header__nav">
        {NAV.map((item) => <li key={item}><a href={href(item)}>{item}</a></li>)}
      </ul>
      <div className="header__side">
        <a href="#login">Log in / registration</a>
        <span className="header__line" aria-hidden="true" />
        <a href="#reservation">Book table</a>
      </div>
      <button className="header__burger" aria-label="Меню" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        <span /><span /><span />
      </button>
      <nav className={`header__mobile${open ? ' is-open' : ''}`} aria-hidden={!open}>
        {NAV.map((item) => <a key={item} href={href(item)} onClick={() => setOpen(false)}>{item}</a>)}
        <a href="#reservation" onClick={() => setOpen(false)}>Book Table</a>
      </nav>
    </header>
  );
}
