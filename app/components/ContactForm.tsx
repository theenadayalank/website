'use client';

import { useState, FormEvent } from 'react';

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

    setStatus('sending');
    try {
      await new Promise((r) => setTimeout(r, 800));
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="section-padding bg-white dark:bg-slate-950">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
          CONTACT
        </h2>
        <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
        <p className="text-center text-slate-600 dark:text-slate-400 mb-8">
          <em>Get in touch</em>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary resize-y"
              placeholder="Your message"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full rounded-lg bg-primary py-3 font-medium text-white hover:bg-primary-dark disabled:opacity-50 transition-colors"
          >
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
          {status === 'success' && (
            <p className="text-center text-green-600 dark:text-green-400 text-sm">
              Thanks! Your message was sent.
            </p>
          )}
          {status === 'error' && (
            <p className="text-center text-red-600 dark:text-red-400 text-sm">
              Something went wrong. Please try again or email directly.
            </p>
          )}
        </form>

        <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
          Or email me at{' '}
          <a href="mailto:theenadayalan06@gmail.com" className="text-primary hover:underline">
            theenadayalan06@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
