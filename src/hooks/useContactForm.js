import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

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
        setStatusMessage('✅ Message sent successfully!');
        setStatusColor('text-green-600');
        if (formRef.current) {
          formRef.current.reset();
        }
      })
      .catch((err) => {
        setStatusMessage('❌ Failed to send message. Try again.');
        setStatusColor('text-red-600');
        console.error('EmailJS Error:', err);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return {
    formRef,
    statusMessage,
    statusColor,
    isSubmitting,
    handleFormSubmit,
  };
}
