import React from 'react';
import { content } from '../data/content';

function Hero() {
  const { hero, brand, services } = content;
  return (
    <section id="home" className="min-h-screen px-6 pt-28 pb-16 flex items-center">
      <div className="max-w-6xl w-full mx-auto grid gap-10 lg:gap-16 lg:grid-cols-5 items-stretch">
        {/* Profile */}
        <div className="clay lg:col-span-2 px-8 py-10 flex flex-col items-center justify-center text-center">
          <div className="w-40 h-40 rounded-xl overflow-hidden border-4 border-gold mb-6">
            <img src={hero.photo} alt={`${brand.name} portrait`} className="w-full h-full object-cover" />
          </div>

          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">{hero.eyebrow}</p>
          <h1 className="font-display text-3xl md:text-4xl font-black mb-3">{brand.name}</h1>
          <div className="gold-line mb-4" />
          <p className="font-display italic text-lg text-gold mb-3">{hero.tagline}</p>
          <p className="text-sm tracking-widest uppercase text-textSecondary mb-4">{hero.role}</p>
          <p className="text-textSecondary">{hero.sub}</p>

          <div className="mt-8 flex flex-col gap-3 w-full max-w-[16rem]">
            <a href="#contact" className="clay-gold px-7 py-3 font-semibold text-center">
              {hero.primaryCta}
            </a>
            <a href={hero.resume} target="_blank" rel="noopener noreferrer" className="btn-clay px-7 py-3 font-semibold text-center">
              {hero.resumeCta}
            </a>
          </div>
        </div>

        {/* Services */}
        <div id="services" className="lg:col-span-3 flex flex-col gap-4">
          <div className="mb-2">
            <h2 className="font-display text-2xl font-bold">{services.title}</h2>
            <div className="gold-line mt-2 mb-3" />
            <p className="text-textSecondary text-sm">{services.intro}</p>
          </div>
          {services.items.map((s) => (
            <article key={s.code} className="clay clay-hover flex-1 p-5 flex items-start gap-4">
              <span className="font-display text-3xl font-black text-gold w-12 shrink-0 leading-none pt-1">
                {s.code}
              </span>
              <div className="flex-1">
                <h3 className="font-display text-lg font-bold mb-1 leading-tight">{s.title}</h3>
                <p className="text-sm text-textSecondary leading-relaxed mb-3">{s.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li key={p} className="clay-inset px-3 py-1 text-xs">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;

