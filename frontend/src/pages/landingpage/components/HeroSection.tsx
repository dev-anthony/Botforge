import { useEffect } from 'react';
import { ArrowRight, MessageCircle, Zap, Bot } from 'lucide-react';
import AOS from 'aos';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-50px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section className="relative w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pt-36 sm:pt-40 md:pt-44 pb-12 sm:pb-16 md:pb-20 min-h-screen">
        <div className="w-full max-w-5xl mx-auto text-center space-y-4 sm:space-y-5">

          {/* Headline */}
          <div data-aos="fade-down" data-aos-delay="0" data-aos-duration="300">
            <h1 className="text-[22px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-white via-[var(--color-cyan-200)] to-[var(--color-cyan-400)] bg-clip-text text-transparent leading-tight tracking-tight">
              Run your customer support on autopilot.
              <br className="hidden sm:block" />
              <span className="block sm:inline"> AI Takes Orders While You Rest.</span>
            </h1>
          </div>

          {/* Description */}
          <div data-aos="fade-up" data-aos-delay="80" data-aos-duration="300" className="w-full max-w-3xl mt-4 mx-auto px-0.5">
            <p className="text-xs sm:text-sm md:text-base text-[var(--color-gray-400)] leading-relaxed">
              Connect your WhatsApp, Telegram, or other messaging accounts. Tell us about your business.
              BotForge's AI instantly learns your context and automatically replies to every customer message
              with personalized, intelligent responses 24/7.
            </p>
          </div>

          {/* Workflow Steps */}
          <div
            data-aos="fade-up"
            data-aos-delay="140"
            data-aos-duration="300"
            className="w-full max-w-4xl mt-2 mx-auto py-4 sm:py-6 px-2"
          >
            <div className="flex flex-col gap-2">

              {/* ── Icons row (always aligned) ── */}
              <div className="flex flex-row items-center justify-between gap-2 sm:gap-4 lg:gap-6">
                <div className="flex-1 flex justify-center">
                  <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-[var(--color-cyan-400-20)] to-[var(--color-cyan-400-5)] border border-[var(--color-cyan-400-30)]">
                    <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6 text-[var(--color-cyan-400)]" />
                  </div>
                </div>
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-[var(--color-cyan-400-50)] flex-shrink-0" />
                <div className="flex-1 flex justify-center">
                  <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-[var(--color-cyan-400-20)] to-[var(--color-cyan-400-5)] border border-[var(--color-cyan-400-30)]">
                    <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-[var(--color-cyan-400)]" />
                  </div>
                </div>
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-[var(--color-cyan-400-50)] flex-shrink-0" />
                <div className="flex-1 flex justify-center">
                  <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-[var(--color-cyan-400-20)] to-[var(--color-cyan-400-5)] border border-[var(--color-cyan-400-30)]">
                    <Bot className="w-5 sm:w-6 h-5 sm:h-6 text-[var(--color-cyan-400)]" />
                  </div>
                </div>
              </div>

              {/* ── Labels row (text can wrap freely) ── */}
              <div className="flex flex-row justify-between gap-2 sm:gap-4 lg:gap-6">
                <div className="flex-1 text-center">
                  <h3 className="font-semibold text-white text-[13px] sm:text-sm mb-0.5">Connect Accounts</h3>
                  <p className="text-[11px] sm:text-xs text-[var(--color-gray-400)] leading-tight hidden sm:block">Link your messaging</p>
                </div>
                <div className="w-4 sm:w-5 flex-shrink-0" /> {/* spacer to match arrow width */}
                <div className="flex-1 text-center">
                  <h3 className="font-semibold text-white text-[13px] sm:text-sm mb-0.5">Describe Business</h3>
                  <p className="text-[11px] sm:text-xs text-[var(--color-gray-400)] leading-tight hidden sm:block">Tell us what you do</p>
                </div>
                <div className="w-4 sm:w-5 flex-shrink-0" /> {/* spacer to match arrow width */}
                <div className="flex-1 text-center">
                  <h3 className="font-semibold text-white text-[13px] sm:text-sm mb-0.5">AI Replies 24/7</h3>
                  <p className="text-[11px] sm:text-xs text-[var(--color-gray-400)] leading-tight hidden sm:block">Instant support</p>
                </div>
              </div>

            </div>
          </div>

          {/* CTA Buttons */}
          <div
            data-aos="zoom-in"
            data-aos-delay="190"
            data-aos-duration="300"
            className="flex flex-row gap-2 sm:gap-3 justify-center pt-4 sm:pt-6 w-full px-2"
          >
            <Link
             to="/signin"
              className="group inline-flex items-center justify-center gap-1 sm:gap-2 px-5 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[var(--color-cyan-400)] to-[var(--color-cyan-500)] text-black font-semibold text-xs sm:text-sm hover:shadow-lg hover:[box-shadow:0_10px_20px_var(--color-cyan-400-shadow)] transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Start for Free
              <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-1 sm:gap-2 px-5 sm:px-8 py-2.5 sm:py-3 rounded-full border border-[var(--color-cyan-400-50)] text-[var(--color-cyan-400)] font-semibold text-xs sm:text-sm hover:bg-[var(--color-cyan-400-10)] transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              View Demo
            </a>
          </div>
        </div>

        {/* Accent lines */}
        <div className="hidden lg:block absolute top-1/2 left-4 w-1 h-24 bg-gradient-to-b from-transparent via-[var(--color-cyan-400-30)] to-transparent opacity-50"></div>
        <div className="hidden lg:block absolute top-1/2 right-4 w-1 h-24 bg-gradient-to-b from-transparent via-[var(--color-cyan-400-30)] to-transparent opacity-50"></div>
      </section>
    </>
  );
}