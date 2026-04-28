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
          px-4  rounded-full border transition-all duration-300
          ${scrolled
            ? 'bg-white/10 dark:bg-black/10  border-black/10 dark:border-white/10 shadow-sm'
            : 'bg-white/10  border-black/10 dark:border-white/10'
          }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          
          <img src="/botforge_logo_clean.svg" alt=""  className='w-50'/>
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
        <header className=" w-[90%] fixed top-5 left-0 right-0 mx-auto z-50 flex items-center justify-between 
          bg-white/10 px-4  rounded-full backdrop-blur-2xl border-b border-black/10 dark:border-white/10">
          
          {/* Logo */}
           <div className="flex items-center w-40">
            <img src="/botforge_logo_clean.svg" alt=""  className=''/>
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
        <nav className={`fixed w-[90%] top-24 left-4 right-4 z-40 rounded-2xl border border-black/10 dark:border-white/10
          bg-white/10 dark:bg-black/10  p-4 flex flex-col gap-3 transition-all duration-300
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