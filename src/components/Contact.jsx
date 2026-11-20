import React from 'react';
import { useContactForm } from '../hooks/useContactForm';
import { content } from '../data/content';

const field = 'clay-inset p-4 text-text placeholder:text-textSecondary w-full';

function Contact() {
  const { formRef, statusMessage, statusColor, isSubmitting, handleFormSubmit } = useContactForm();
  const { contact } = content;

  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center">
      <h2 className="font-display text-3xl font-bold mb-2">{contact.title}</h2>
      <div className="gold-line mx-auto mb-6" />
      <p className="text-textSecondary mb-8">{contact.intro}</p>

      <form ref={formRef} onSubmit={handleFormSubmit} className="clay p-8 flex flex-col gap-4 text-left">
        <input type="text" name="user_name" placeholder="Your Name" className={field} required />
        <input type="email" name="user_email" placeholder="Your Email" className={field} required />
        <textarea name="message" placeholder="Your Message" rows="5" className={field} required />
        <button
          type="submit"
          disabled={isSubmitting}
          className="clay-gold px-8 py-3 font-semibold self-center cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? contact.sending : contact.send}
        </button>
      </form>

      {statusMessage && (
        <p role="status" className={`mt-4 font-semibold ${statusColor}`}>
          {statusMessage}
        </p>
      )}
    </section>
  );
}

export default Contact;
