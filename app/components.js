'use client';

import { useEffect, useRef, useState } from 'react';

export function SiteNavigation() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: '-10% 0px -55% 0px', threshold: 0 });
    document.querySelectorAll('main > section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Main navigation">
      {['About', 'Experience', 'Education'].map((label) => (
        <a key={label} href={`#${label.toLowerCase()}`} aria-current={activeSection === label.toLowerCase() ? 'location' : undefined}>{label}</a>
      ))}
    </nav>
  );
}

export function PrintResumeButton() {
  return (
    <button className="text-button print-button" type="button" onClick={() => window.print()}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 8V3h10v5M7 17H4V9h16v8h-3M7 14h10v7H7z"/><path d="M16 11h1"/></svg>
      Print résumé
    </button>
  );
}

export function EmailContact() {
  const [status, setStatus] = useState('');
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copyEmail() {
    clearTimeout(timer.current);
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText('eramos.r10@hotmail.com');
      setCopied(true);
      setStatus('Email address copied.');
    } catch {
      setCopied(false);
      setStatus('Select and copy the email address, or click it to send a message.');
    }
    timer.current = setTimeout(() => {
      setStatus('');
      setCopied(false);
    }, 6000);
  }

  return (
    <div className="contact-details">
      <div className="contact-row">
        <span className="contact-label">Email</span>
        <div className="email-line">
          <a href="mailto:eramos.r10@hotmail.com">eramos.r10@hotmail.com</a>
          <button className="copy-button" type="button" onClick={copyEmail} aria-label={copied ? 'Email address copied' : 'Copy email address'} title="Copy email address">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V3H4v13h4"/></svg>
          </button>
        </div>
      </div>
      <div className="contact-row"><span className="contact-label">Phone</span><a href="tel:+12542443557">(254) 244-3557</a></div>
      <div className="contact-row"><span className="contact-label">Based in</span><span>Plano, Texas · United States</span></div>
      <p className="copy-status" role="status" aria-live="polite">{status}</p>
    </div>
  );
}

export function CurrentYear({ initialYear }) {
  const [year, setYear] = useState(initialYear);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <span>{year}</span>;
}
