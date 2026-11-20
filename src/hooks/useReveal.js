import { useEffect } from 'react';

const SELECTOR = 'main h2, main .gold-line, main .clay';
const MAX_STAGGER = 4;

// Fades/slides elements in as they scroll into view, staggered among siblings.
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;

    const targets = [...document.querySelectorAll(SELECTOR)].filter(
      (el) => !el.parentElement.closest('.clay')
    );

    const counts = new Map();
    targets.forEach((el) => {
      const i = counts.get(el.parentElement) ?? 0;
      counts.set(el.parentElement, i + 1);
      el.setAttribute('data-reveal', '');
      el.classList.add(`reveal-d${Math.min(i, MAX_STAGGER)}`);
    });
    root.classList.add('reveal-ready');

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    targets.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      root.classList.remove('reveal-ready');
    };
  }, []);
}

