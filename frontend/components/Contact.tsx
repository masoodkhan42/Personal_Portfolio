'use client';

import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ContactFormData {
  firstName: string;
  email: string;
  message: string;
}

export default function Contact() {
  const containerRef = useRef<HTMLElement | null>(null);

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 82%',
          once: true,
        },
        defaults: { ease: 'power3.out' },
      });

      tl.from('.contact-header', {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          '.contact-card',
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          '-=0.35'
        )
        .from(
          '.contact-field',
          {
            y: 12,
            opacity: 0,
            duration: 0.45,
            stagger: 0.06,
          },
          '-=0.4'
        );
    },
    { scope: containerRef }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to send message.');
      }

      setStatus('submitted');
      setFormData({
        firstName: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
      alert(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      );
      setStatus('idle');
    }
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="w-full bg-white text-neutral-900 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      {/* Section Heading Above the Card */}
      <div className="contact-header mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-violet-600" />
          <span className="text-xs font-bold tracking-wider text-violet-800">
            DIRECT CONTACT
          </span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl md:text-5xl">
          Let’s Connect
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-700 sm:text-base">
          Reach out for project inquiries, AI integration, or backend system consulting.
        </p>
      </div>

      {/* Outer Rounded Container Card */}
      <div className="contact-card w-full max-w-[620px] bg-white border border-neutral-200 shadow-xl rounded-[32px] p-6 sm:p-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="grid grid-cols-1 gap-4">
            <div className="contact-field border border-neutral-800 bg-white px-3.5 py-2.5 transition-colors focus-within:border-neutral-950 focus-within:ring-1 focus-within:ring-neutral-950">
              <label
                htmlFor="firstName"
                className="block font-mono text-xs font-bold text-neutral-900 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full font-mono text-sm text-neutral-900 placeholder-neutral-400 bg-transparent focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="contact-field border border-neutral-800 bg-white px-3.5 py-2.5 transition-colors focus-within:border-neutral-950 focus-within:ring-1 focus-within:ring-neutral-950">
            <label
              htmlFor="email"
              className="block font-mono text-xs font-bold text-neutral-900 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="w-full font-mono text-sm text-neutral-900 placeholder-neutral-400 bg-transparent focus:outline-none"
            />
          </div>

          {/* Your Message */}
          <div className="contact-field border border-neutral-800 bg-white px-3.5 py-2.5 transition-colors focus-within:border-neutral-950 focus-within:ring-1 focus-within:ring-neutral-950">
            <label
              htmlFor="message"
              className="block font-mono text-xs font-bold text-neutral-900 mb-1"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more..."
              className="w-full font-mono text-sm text-neutral-900 placeholder-neutral-400 bg-transparent focus:outline-none resize-none"
            />
          </div>

          {/* Submit CTA */}
          <div className="contact-field pt-2">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-neutral-950 hover:bg-neutral-800 active:scale-[0.995] disabled:opacity-60 text-white font-mono text-xs uppercase tracking-[0.14em] py-4 px-6 transition-all cursor-pointer"
            >
              {status === 'submitting'
                ? 'SENDING...'
                : status === 'submitted'
                ? 'MESSAGE SENT'
                : 'LET’S GET STARTED'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}