import { asset } from '../asset.js';

// маленький заголовок + ложка + большой заголовок (повторяется во всех секциях)
export default function SubHeading({ eyebrow, title, align = 'start', as: Tag = 'h2' }) {
  const mod = align === 'center' ? ' subheading--center' : align === 'end' ? ' subheading--end' : '';
  return (
    <div className={`subheading${mod}`}>
      {eyebrow && <p className="h5">{eyebrow}</p>}
      <img className="spoon" src={asset('spoon.svg')} alt="" aria-hidden="true" />
      {title && <Tag className="h2">{title}</Tag>}
    </div>
  );
}
