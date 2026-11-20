import React from 'react';
import { content } from '../data/content';

function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-textSecondary">
      <div className="gold-line mx-auto mb-4" />
      <p>{content.footer}</p>
    </footer>
  );
}

export default Footer;
