import React from 'react';
import { useContactForm } from '../hooks/useContactForm';

function Contact() {
  const { formRef, statusMessage, statusColor, isSubmitting, handleFormSubmit } = useContactForm();

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <p className="text-textSecondary mb-8">
        Have a project in mind or just want to connect? Let’s talk!
      </p>

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
          disabled={isSubmitting}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 hover:scale-105 transition cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {statusMessage && (
        <p id="form-status" className={`mt-4 font-semibold ${statusColor}`}>
          {statusMessage}
        </p>
      )}
    </section>
  );
}

export default Contact;
