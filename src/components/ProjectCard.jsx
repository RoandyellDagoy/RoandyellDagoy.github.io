import React from 'react';

function ProjectCard({ image, alt, title, description, link }) {
  const isExternal = link && (link.startsWith('http://') || link.startsWith('https://'));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between">
      <div>
        <img
          src={image}
          alt={alt || title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-text dark:text-white">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      <div className="px-6 pb-6">
        <a
          href={link || '#'}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
