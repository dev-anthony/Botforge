import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import AOS from 'aos';

export default function CTASection() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="relative w-full py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8">
      <div data-aos="zoom-in" className="max-w-4xl mx-auto">
        <div className="p-8 sm:p-10 rounded-2xl border border-[var(--color-cyan-400-30)] bg-gradient-to-r from-[var(--color-cyan-400-5)] via-[var(--color-cyan-400-2)] to-[var(--color-cyan-400-5)] backdrop-blur-sm text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Automate?
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-gray-400)] mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
            Join BotForge to manage and automate your customer replies with intelligent messaging bots
          </p>

          <a
            href="#get-started"
            className="inline-flex items-center gap-2 px-7 sm:px-9 py-3 rounded-full bg-gradient-to-r from-[var(--color-cyan-400)] to-[var(--color-cyan-500)] text-black font-semibold text-sm sm:text-base hover:shadow-lg hover:[box-shadow:0_10px_20px_var(--color-cyan-400-shadow)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}