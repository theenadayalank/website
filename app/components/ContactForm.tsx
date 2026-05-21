'use client';

import { FormEvent, useState } from 'react';
import { site } from '@/lib/profile';
import { SectionHeading } from './SectionHeading';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  function validate(form: FormData): { name?: string; email?: string; message?: string } {
    const err: { name?: string; email?: string; message?: string } = {};
    const name = (form.get('name') as string)?.trim();
    const email = (form.get('email') as string)?.trim();
    const message = (form.get('message') as string)?.trim();
    if (!name) err.name = 'Name is required';
    if (!email) err.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) err.email = 'Invalid email';
    if (!message) err.message = 'Message is required';
    return err;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const err = validate(formData);
    setErrors(err);
    if (Object.keys(err).length > 0) return;

    const name = (formData.get('name') as string).trim();
    const email = (formData.get('email') as string).trim();
    const message = (formData.get('message') as string).trim();

    setStatus('sending');
    try {
      const mailto = `mailto:${site.email}?subject=${encodeURIComponent(`Portfolio contact from ${name}`)}&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)}`;
      window.location.href = mailto;
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="section-padding bg-white dark:bg-slate-950">
      <div className="container-narrow">
        <SectionHeading title="CONTACT" subtitle="Get in touch" />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              placeholder="Your name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              placeholder="Your message"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full rounded-lg bg-primary py-3 font-medium text-white transition-colors hover:bg-primary-dark disabled:opacity-50"
          >
            {status === 'sending' ? 'Opening email…' : 'Send message'}
          </button>
          {status === 'success' && (
            <p className="text-center text-sm text-green-600 dark:text-green-400">
              Your email client should open with your message ready to send.
            </p>
          )}
          {status === 'error' && (
            <p className="text-center text-sm text-red-600 dark:text-red-400">
              Something went wrong. Please email directly.
            </p>
          )}
        </form>

        <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          Or email me at{' '}
          <a href={`mailto:${site.email}`} className="text-primary hover:underline">
            {site.email}
          </a>
        </p>
      </div>
    </section>
  );
}
