import React from 'react';

function ProjectCard({ image, alt, title, codename, description, stack = [], link }) {
  const hasLink = link && link !== '#';
  const isExternal = hasLink && /^https?:\/\//.test(link);

  return (
    <article className="clay clay-hover p-4 flex flex-col">
      <img
        src={image}
        alt={alt || title}
        className="w-full h-44 object-cover rounded-lg mb-5"
      />
      <div className="px-2 flex-1">
        <p className="text-xs uppercase tracking-[0.2em] text-gold mb-1">{codename}</p>
        <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-textSecondary leading-relaxed mb-4">{description}</p>
        <ul className="flex flex-wrap gap-2 mb-5">
          {stack.map((s) => (
            <li key={s} className="clay-inset px-3 py-1 text-xs">
              {s}
            </li>
          ))}
        </ul>
      </div>
      {hasLink && (
        <a
          href={link}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="clay-gold px-5 py-2 text-sm font-semibold self-start mx-2 mb-2"
        >
          View project
        </a>
      )}
    </article>
  );
}

export default ProjectCard;

