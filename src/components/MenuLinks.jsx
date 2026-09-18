export default function MenuLinks() {
  return (
    <section className="menu-links" id="menu">
      <ul className="menu-links__list">
        <li data-reveal="up" style={{ '--i': 0 }}><a href="#special">Bar Menu</a></li>
        <li data-reveal="up" style={{ '--i': 1 }}><a href="#special">Food Menu</a></li>
        <li data-reveal="up" style={{ '--i': 2 }}><a href="#special">Desserts Menu</a></li>
      </ul>
    </section>
  );
}
