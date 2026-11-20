import React from 'react';
import { content } from '../data/content';

function Process() {
  const { services } = content;
  return (
    <section id="process" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="font-display text-3xl font-bold mb-2 text-center">{services.processTitle}</h2>
      <div className="gold-line mx-auto mb-10" />
      <ol className="grid gap-4 md:grid-cols-4">
        {services.process.map((p, i) => (
          <li key={p.step} className="clay p-5">
            <p className="text-xs uppercase tracking-widest text-gold mb-1">
              {String(i + 1).padStart(2, '0')} Â· {p.step}
            </p>
            <p className="text-sm">{p.text}</p>
          </li>
        ))}
      </ol>
      <div className="text-center mt-10">
        <a href="#contact" className="clay-gold inline-block px-8 py-3 font-semibold">
          {services.cta}
        </a>
      </div>
    </section>
  );
}

export default Process;


