

import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import AOS from 'aos';

export default function CTASection() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
      <div
        data-aos="zoom-in"
        className="max-w-4xl mx-auto"
      >
        <div className="p-8 sm:p-12 md:p-16 rounded-2xl border border-[var(--color-cyan-400-30)] bg-gradient-to-r from-[var(--color-cyan-400-5)] via-[var(--color-cyan-400-2)] to-[var(--color-cyan-400-5)] backdrop-blur-sm text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Automate?
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-gray-400)] mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
            Join BotForge to manage and automate your customer replies with intelligent messaging bots
          </p>
          
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[var(--color-cyan-400)] to-[var(--color-cyan-500)] text-black font-semibold text-base sm:text-lg hover:shadow-lg hover:shadow-[var(--color-cyan-400-shadow)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
