import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { content } from '../data/content';

export function useContactForm() {
  const [statusMessage, setStatusMessage] = useState('');
  const [statusColor, setStatusColor] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current
      )
      .then(() => {
        setStatusMessage(content.contact.success);
        setStatusColor('text-accent');
        formRef.current?.reset();
      })
      .catch((err) => {
        setStatusMessage(content.contact.error);
        setStatusColor('text-red-700 dark:text-red-400');
        console.error('EmailJS Error:', err);
      })
      .finally(() => setIsSubmitting(false));
  };

  return { formRef, statusMessage, statusColor, isSubmitting, handleFormSubmit };
}
