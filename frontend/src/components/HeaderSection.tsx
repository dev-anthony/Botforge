import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  const linkClass =
    'text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200';

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl items-center justify-between
          px-6 py-3 rounded-full border transition-all duration-300
          ${scrolled
            ? 'bg-white/60 dark:bg-black/60 backdrop-blur-2xl border-black/10 dark:border-white/10 shadow-sm'
            : 'bg-white/40 dark:bg-black/40 backdrop-blur-xl border-black/10 dark:border-white/10'
          }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center">
            {/* Inline bot icon */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="3" y="5" width="10" height="8" rx="2" stroke="#00F0FF" strokeWidth="1.2"/>
              <rect x="5.5" y="7.5" width="2" height="1.5" rx="0.5" fill="#00F0FF"/>
              <rect x="8.5" y="7.5" width="2" height="1.5" rx="0.5" fill="#00F0FF"/>
              <line x1="8" y1="5" x2="8" y2="3" stroke="#00F0FF" strokeWidth="1.2" strokeLinecap="round"/>
              <circle cx="8" cy="2.5" r="0.8" fill="#00F0FF"/>
              <rect x="6" y="10" width="4" height="1" rx="0.5" fill="#00F0FF" opacity="0.5"/>
            </svg>
          </div>
          <span className="font-mono font-bold text-sm tracking-wide text-black dark:text-white">
            Bot<span className="text-cyan-400">Forge</span>
          </span>
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#get-started"
          className="text-sm font-semibold px-5 py-2 rounded-full bg-cyan-400 text-black hover:bg-cyan-300 transition-all duration-200 hover:scale-105 active:scale-95"
        >
          Get started
        </a>
      </header>

      {/* Mobile Header */}
      <div className="md:hidden">
        {/* Fixed top bar */}
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4
          bg-white/60 dark:bg-black/60 backdrop-blur-2xl border-b border-black/10 dark:border-white/10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="3" y="5" width="10" height="8" rx="2" stroke="#00F0FF" strokeWidth="1.2"/>
                <rect x="5.5" y="7.5" width="2" height="1.5" rx="0.5" fill="#00F0FF"/>
                <rect x="8.5" y="7.5" width="2" height="1.5" rx="0.5" fill="#00F0FF"/>
                <line x1="8" y1="5" x2="8" y2="3" stroke="#00F0FF" strokeWidth="1.2" strokeLinecap="round"/>
                <circle cx="8" cy="2.5" r="0.8" fill="#00F0FF"/>
                <rect x="6" y="10" width="4" height="1" rx="0.5" fill="#00F0FF" opacity="0.5"/>
              </svg>
            </div>
            <span className="font-mono font-bold text-sm text-black dark:text-white">
              Bot<span className="text-cyan-400">Forge</span>
            </span>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-black/20 dark:border-white/20 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </header>

        {/* Mobile dropdown */}
        <nav className={`fixed top-16 left-4 right-4 z-40 rounded-2xl border border-black/10 dark:border-white/10
          bg-white/80 dark:bg-black/80 backdrop-blur-2xl p-4 flex flex-col gap-3 transition-all duration-300
          ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-3 pointer-events-none'}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white py-2 px-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#get-started"
            onClick={() => setIsOpen(false)}
            className="mt-1 text-sm font-semibold text-center px-5 py-2.5 rounded-full bg-cyan-400 text-black hover:bg-cyan-300 transition-all"
          >
            Get started
          </a>
        </nav>

        {/* Backdrop */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-30 bg-black/20 dark:bg-black/50 backdrop-blur-sm"
          />
        )}
      </div>
    </>
  );
}

export default HeaderSection;