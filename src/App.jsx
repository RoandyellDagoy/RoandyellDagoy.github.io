import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusColor, setStatusColor] = useState('');
  const formRef = useRef(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  // Sync theme to root element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current
    )
      .then(() => {
        setStatusMessage('✅ Message sent successfully!');
        setStatusColor('text-green-600');
        formRef.current.reset();
      })
      .catch((err) => {
        setStatusMessage('❌ Failed to send message. Try again.');
        setStatusColor('text-red-600');
        console.error('EmailJS Error:', err);
      });
  };

  return (
    <div className="min-h-screen bg-base text-text font-sans transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-base backdrop-blur-md shadow-md">
        <a href="#" className="text-2xl font-extrabold text-text hover:scale-110 transition">KDev.</a>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-accent transition">Home</a>
            <a href="#projects" className="hover:text-accent">Projects</a>
            <a href="#contact" className="hover:text-accent transition">Contact</a>
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            id="theme-switch"
            className="p-2 rounded-full hover:bg-base transition cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? (
              <svg className="moon-icon w-6 h-6 fill-text" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z" />
              </svg>
            ) : (
              <svg className="sun-icon w-6 h-6 fill-text" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            id="menu-icon"
            className="md:hidden p-2 rounded hover:bg-baseVariant cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 fill-text" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <nav
        id="mobile-menu"
        className={`${isMenuOpen ? 'flex' : 'hidden'} fixed top-16 left-0 w-full bg-base shadow-md flex-col items-center space-y-4 py-6 md:hidden z-50`}
      >
        <a href="#home" onClick={() => setIsMenuOpen(false)} className="menu-link hover:text-accent">Home</a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)} className="menu-link hover:text-accent">Projects</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="menu-link hover:text-accent">Contact</a>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-lg mb-6">
          <img src="/images/Dagoy, Roandyell Khen 2x2.png" alt="Profile Picture" className="w-full h-full object-cover" />
        </div>

        <h1 className="text-5xl font-bold mb-4">Hi, I’m Roandyell Khen</h1>
        <p className="text-lg text-textSecondary max-w-xl">A Computer Science graduate building clean, responsive, and modern web experiences.</p>
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

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex flex-col justify-center items-center text-justify px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl w-full">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img src="/images/Screenshot 2025-08-25 004054.png" alt="Portfolio website screenshot" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-text dark:text-white">Portfolio Project</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                A responsive and modern portfolio website featuring a fully functional light/dark mode, intuitive navigation, and well-structured sections that highlight personal details, projects, and skills. Designed with clean code and attention to user experience, this project demonstrates strong front-end development practices and showcases my ability to create visually appealing and functional websites.
              </p>
              <a href="#" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">View project</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img src="/images/Screenshot 2025-09-16 004434.png" alt="E-commerce Wordpress website screenshot" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-text dark:text-white">E-commerce (Wordpress)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                An eCommerce website developed and customized in WordPress with Elementor is a streamlined online store that displays products, details, and a checkout option all on a single page. Using Elementor’s drag-and-drop builder, the site can be easily designed with custom layouts, product sections, and responsive design, making it user-friendly and visually appealing for customers.
              </p>
              <a
                href="https://demo-wordpress-website.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                View project
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img src="/images/Screenshot 2025-10-11 103257.png" alt="Chatbot screenshot" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-text dark:text-white">Chatbot</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                A responsive and interactive chatbot application built with React.js to provide real-time communication and automated assistance for users. Designed with a clean UI and modular components, it can handle dynamic conversations, process user input, and deliver instant responses. This project highlights proficiency in React state management, component reusability, showcasing the ability to create intelligent and engaging user experiences.
              </p>
              <a
                href="https://chatbot-gemini-sandy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                View project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-textSecondary mb-8">Have a project in mind or just want to connect? Let’s talk!</p>

        <form ref={formRef} onSubmit={handleFormSubmit} id="contact-form" className="flex flex-col gap-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="p-3 rounded-lg border border-baseVariant bg-base text-text"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="p-3 rounded-lg border border-baseVariant bg-base text-text"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded-lg border border-baseVariant bg-base text-text"
            required
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 hover:scale-105 transition cursor-pointer"
          >
            Send Message
          </button>
        </form>

        {statusMessage && (
          <p id="form-status" className={`mt-4 font-semibold ${statusColor}`}>
            {statusMessage}
          </p>
        )}
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-baseVariant text-textSecondary">
        <p>© 2025 Emperor Khen. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
