import { useEffect, useRef } from 'react';
import { ArrowRight, MessageCircle, Zap, Bot } from 'lucide-react';

export default function HeroSection() {
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadlineRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [
      { ref: headlineRef, delay: 0 },
      { ref: subheadlineRef, delay: 0.1 },
      { ref: descriptionRef, delay: 0.2 },
      { ref: workflowRef, delay: 0.3 },
      { ref: ctaRef, delay: 0.4 },
    ];

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        ref.current.style.animation = `slideDown 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s both`;
      }
    });
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <section className="relative w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-32 lg:py-40 min-h-screen">
        {/* Animated content */}
        <div className="w-full max-w-5xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
          {/* Headline */}
          <div ref={headlineRef}>
           <h1 className="text-sm xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent leading-tight tracking-tight">
            Sell on Autopilot.
            <br className="hidden sm:block" />
            <span className="block sm:inline"> AI Takes Orders While You Sleep.</span>
            </h1>
          </div>

          {/* Subheadline */}
        

          {/* Description */}
          <div ref={descriptionRef} className="w-full max-w-3xl mx-auto px-0.5">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed">
              Connect your WhatsApp, Telegram, or other messaging accounts. Tell us about your business. 
              BotForge's AI instantly learns your context and automatically replies to every customer message 
              with personalized, intelligent responses—24/7.
            </p>
          </div>

          {/* Workflow Steps */}
          <div
            ref={workflowRef}
            className="w-full max-w-4xl mx-auto py-4 sm:py-6 md:py-8 px-2"
          >
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 md:gap-6">
              {/* Step 1 */}
              <div className="flex-1 flex flex-col items-center text-center">
                <div className="mb-3 p-3 sm:p-4 rounded-lg bg-gradient-to-br from-cyan-400/20 to-cyan-400/5 border border-cyan-400/30">
                  <MessageCircle className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-cyan-400 mx-auto" />
                </div>
                <h3 className="font-semibold text-white text-xs sm:text-sm md:text-base mb-1">Connect Accounts</h3>
                <p className="text-xs sm:text-xs md:text-sm text-gray-400 leading-snug">Link your messaging platforms</p>
              </div>

              {/* Arrow 1 */}
              <div className="hidden sm:flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-cyan-400/60" />
              </div>

              {/* Step 2 */}
              <div className="flex-1 flex flex-col items-center text-center">
                <div className="mb-3 p-3 sm:p-4 rounded-lg bg-gradient-to-br from-cyan-400/20 to-cyan-400/5 border border-cyan-400/30">
                  <Zap className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-cyan-400 mx-auto" />
                </div>
                <h3 className="font-semibold text-white text-xs sm:text-sm md:text-base mb-1">Describe Business</h3>
                <p className="text-xs sm:text-xs md:text-sm text-gray-400 leading-snug">Tell us what you do</p>
              </div>

              {/* Arrow 2 */}
              <div className="hidden sm:flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-cyan-400/60" />
              </div>

              {/* Step 3 */}
              <div className="flex-1 flex flex-col items-center text-center">
                <div className="mb-3 p-3 sm:p-4 rounded-lg bg-gradient-to-br from-cyan-400/20 to-cyan-400/5 border border-cyan-400/30">
                  <Bot className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-cyan-400 mx-auto" />
                </div>
                <h3 className="font-semibold text-white text-xs sm:text-sm md:text-base mb-1">AI Replies 24/7</h3>
                <p className="text-xs sm:text-xs md:text-sm text-gray-400 leading-snug">Instant customer support</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-row gap-2 sm:gap-3 md:gap-4 justify-center pt-4 sm:pt-6 md:pt-8 w-full px-2"
          >
            <a
              href="#get-started"
              className="group inline-flex items-center justify-center gap-1 sm:gap-2 px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-semibold text-xs xs:text-sm sm:text-base hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Start for Free
              <ArrowRight className="w-3 xs:w-4 sm:w-5 h-3 xs:h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-1 sm:gap-2 px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 rounded-full border border-cyan-400/50 text-cyan-400 font-semibold text-xs xs:text-sm sm:text-base hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              View Demo
            </a>
          </div>
        </div>

        {/* Animated accent lines - hidden on mobile */}
        <div className="hidden lg:block absolute top-1/2 left-4 w-1 h-24 md:h-32 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent opacity-50"></div>
        <div className="hidden lg:block absolute top-1/2 right-4 w-1 h-24 md:h-32 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent opacity-50"></div>
      </section>
    </>
  );
}
