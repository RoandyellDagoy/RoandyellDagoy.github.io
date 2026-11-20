// Mirrors contents.md - keep both in sync.
export const content = {
  brand: { logo: 'KDev.', name: 'Roandyell Khen Dagoy' },
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Classified Portfolio // File 001',
    tagline: "The name's Dagoy. Roandyell Dagoy.",
    role: 'Web Developer · Available for Projects',
    sub: 'I build websites and AI-driven systems that win clients, delivered with precision and on brief.',
    photo: '/images/Dagoy, Roandyell Khen 2x2.png',
    resume:
      'https://drive.google.com/file/d/1J3OIxZ6zxb-YxkuL4hjCSxAS6WJphUt7/view?usp=sharing',
    primaryCta: 'Request a Quote',
    secondaryCta: 'View Services',
    resumeCta: 'Download Resume',
  },
  services: {
    title: 'Services',
    intro: 'Every engagement is run like a mission: clear objective, clean execution, results you can rely on.',
    items: [
      {
        code: '01',
        title: 'Business & Portfolio Websites',
        description:
          'Fast, responsive, custom-built websites that present your brand clearly and turn visitors into inquiries.',
        points: ['Custom React build', 'Mobile-first, responsive layout', 'Working contact form'],
      },
      {
        code: '02',
        title: 'WordPress Websites',
        description:
          'Custom WordPress websites built with Elementor, designed to look sharp and be easy for you to manage.',
        points: ['Custom Elementor layouts', 'Responsive on every device', 'Easy to update yourself'],
      },
      {
        code: '03',
        title: 'AI-Driven System Development',
        description:
          'Systems with AI at the core, from Gemini-powered chatbots to intelligent features built into your web apps.',
        points: ['Gemini API integration', 'Clean, modular interface', 'Real-time responses'],
      },
    ],
    processTitle: 'How I Work',
    process: [
      { step: 'Brief', text: 'We define the objective, audience and scope.' },
      { step: 'Plan', text: 'I outline the structure, design direction and timeline.' },
      { step: 'Execute', text: 'I build it, with updates along the way.' },
      { step: 'Deliver', text: 'You get a tested, polished site, ready to launch.' },
    ],
    cta: 'Start a Project',
  },
  about: {
    title: 'Mission Briefing',
    body:
      "I'm a Computer Science graduate who treats every project like a mission: understand the objective, plan carefully, and deliver clean, reliable results. I specialise in modern front-end work with React, and I enjoy turning ideas into fast, accessible interfaces that feel effortless to use.",
    facts: [
      { label: 'Focus', value: 'React, responsive UI, WordPress' },
      { label: 'Approach', value: 'Clean code, calm under pressure' },
      { label: 'Status', value: 'Open to new projects' },
    ],
  },
  skills: {
    title: 'The Arsenal',
    groups: [
      { name: 'Front-end', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'] },
      { name: 'CMS', items: ['WordPress', 'Elementor'] },
      { name: 'Back-end basics', items: ['PHP'] },
      { name: 'Tools', items: ['Git', 'GitHub', 'Vite', 'EmailJS'] },
    ],
  },
  projects: { title: 'Proof of Work' },
  contact: {
    title: 'Send a Dispatch',
    intro:
      'Tell me about your project: what you need, your timeline and your goals. Your message will be handled with discretion.',
    send: 'Send Message',
    sending: 'Sending...',
    success: 'Message delivered. I will be in touch.',
    error: 'Transmission failed. Please try again.',
  },
  theme: { toLight: 'Switch to light mode', toDark: 'Switch to dark mode' },
  footer: '© 2025 Roandyell Khen Dagoy. All rights reserved. Dagoy will return.',
};
