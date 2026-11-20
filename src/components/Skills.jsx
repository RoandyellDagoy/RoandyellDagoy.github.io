import React from 'react';
import { content } from '../data/content';

function Skills() {
  const { skills } = content;
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="font-display text-3xl font-bold mb-2 text-center">{skills.title}</h2>
      <div className="gold-line mx-auto mb-10" />
      <div className="grid gap-6 md:grid-cols-2">
        {skills.groups.map((g) => (
          <div key={g.name} className="clay p-6">
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold mb-4">{g.name}</h3>
            <ul className="flex flex-wrap gap-3">
              {g.items.map((item) => (
                <li key={item} className="btn-clay px-4 py-2 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;


