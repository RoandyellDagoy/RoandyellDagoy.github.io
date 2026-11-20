import React from 'react';
import { content } from '../data/content';

function About() {
  const { about } = content;
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="font-display text-3xl font-bold mb-2 text-center">{about.title}</h2>
      <div className="gold-line mx-auto mb-10" />
      <div className="clay p-8 md:p-10">
        <p className="text-textSecondary leading-relaxed mb-8">{about.body}</p>
        <dl className="grid gap-4 md:grid-cols-3">
          {about.facts.map((f) => (
            <div key={f.label} className="clay-inset p-4">
              <dt className="text-xs uppercase tracking-widest text-gold mb-1">{f.label}</dt>
              <dd className="text-sm">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default About;


