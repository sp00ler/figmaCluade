import { asset } from '../asset.js';
import SubHeading from './SubHeading.jsx';

const POSTS = [
  ['16 Apr 2021', '- Annalisa L', 'tips for prepping and caring for your grill', 'blog-1.jpg'],
  ['23 May 2021', '-John Micheal', 'summer cocktails and mocktails', 'blog-2.jpg'],
  ['06 Aug 2021', '-Fred W', 'easy cooking for college students', 'blog-3.jpg'],
];

export default function Blogs() {
  return (
    <section className="section" id="blog">
      <div className="container blogs">
        <SubHeading eyebrow="Blogs" title="Gerícht updates" align="center" />
        <div className="blogs__grid">
          {POSTS.map(([date, author, title, img]) => (
            <article className="post" key={title}>
              <img className="post__img" src={asset(img)} alt={title} loading="lazy" />
              <div className="post__meta">
                <span className="p p--white">{date}</span>
                <span className="p p--white">{author}</span>
              </div>
              <div className="post__body">
                <h3 className="post__title"><a href="#blog">{title}</a></h3>
                <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                <a className="link-golden" href="#blog">Read More</a>
              </div>
            </article>
          ))}
        </div>
        <a className="btn" href="#blog">View More</a>
      </div>
    </section>
  );
}
