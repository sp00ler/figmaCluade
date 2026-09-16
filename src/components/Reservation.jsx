import { useState } from 'react';
import { asset } from '../asset.js';
import SubHeading from './SubHeading.jsx';

const TIMES = ['11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'];

export default function Reservation() {
  const [sent, setSent] = useState(false);
  const today = new Date().toISOString().slice(0, 10);
  return (
    <section className="section" id="reservation">
      <div className="container">
        <div className="reservation__box">
          <SubHeading eyebrow="Reservations" title="Book A Table" align="center" />
          <div className="reservation__fields">
            <label className="field">
              <select defaultValue="1" aria-label="Количество гостей">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? 'person' : 'persons'}</option>
                ))}
              </select>
              <img src={asset('angle.svg')} alt="" aria-hidden="true" />
            </label>
            <label className="field">
              <input type="date" defaultValue={today} min={today} aria-label="Дата" />
              <img src={asset('angle.svg')} alt="" aria-hidden="true" />
            </label>
            <label className="field">
              <select defaultValue={TIMES[0]} aria-label="Время">
                {TIMES.map((t) => <option key={t}>{t}</option>)}
              </select>
              <img src={asset('angle.svg')} alt="" aria-hidden="true" />
            </label>
          </div>
          <button className="btn" onClick={() => setSent(true)}>{sent ? 'Booked!' : 'Book Now'}</button>
        </div>
      </div>
    </section>
  );
}
