import React from 'react';

function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-lg mb-6">
        <img
          src="/images/Dagoy, Roandyell Khen 2x2.png"
          alt="Profile Picture"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-5xl font-bold mb-4">Hi, I’m Roandyell Khen</h1>
      <p className="text-lg text-textSecondary max-w-xl">
        A Computer Science graduate building clean, responsive, and modern web experiences.
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="https://drive.google.com/file/d/1J3OIxZ6zxb-YxkuL4hjCSxAS6WJphUt7/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 hover:scale-105 transition"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;
