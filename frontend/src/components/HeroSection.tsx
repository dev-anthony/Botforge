import { useEffect } from 'react';
import { ArrowRight, MessageCircle, Zap, Bot } from 'lucide-react';
import AOS from 'aos';

export default function HeroSection() {
  useEffect(() => {
    AOS.refresh();
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

      <section className="relative w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pt-32 sm:pt-40 md:pt-48 lg:pt-56 pb-20 sm:pb-24 md:pb-32 min-h-screen">
        {/* Animated content */}
        <div className="w-full max-w-5xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
          {/* Headline */}
          <div data-aos="fade-down" data-aos-delay="70">
           <h1 className="text-[23px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent leading-tight tracking-tight">
            Run your customer support on autopilot.
            <br className="hidden sm:block" />
            <span className="block sm:inline"> AI Takes Orders While You Rest.</span>
            </h1>
          </div>

          {/* Subheadline */}
        

          {/* Description */}
          <div data-aos="fade-up" data-aos-delay="100" className="w-full max-w-3xl mt-8 mx-auto px-0.5">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed">
              Connect your WhatsApp, Telegram, or other messaging accounts. Tell us about your business. 
              BotForge's AI instantly learns your context and automatically replies to every customer message 
              with personalized, intelligent responses 24/7.
            </p>
          </div>

          {/* Workflow Steps */}
          <div
            data-aos="fade-up"
            data-aos-delay="130"
            className="w-full max-w-4xl mt-4 mx-auto py-4 sm:py-6 md:py-8 px-2"
          >
            <div className="flex flex-row items-center justify-between gap-2 xs:gap-3 sm:gap-4 lg:gap-6">
              {/* Step 1 */}
              <div className="flex-1 flex flex-col items-center text-center">
                <div className="mb-2 xs:mb-3 p-2 xs:p-3 rounded-lg bg-gradient-to-br from-cyan-400/20 to-cyan-400/5 border border-cyan-400/30">
                  <MessageCircle className="w-5 xs:w-5 sm:w-6 h-5 xs:h-5 sm:h-6 text-cyan-400 mx-auto" />
                </div>
                <h3 className="font-semibold text-white text-xs xs:text-xs sm:text-sm mb-0.5">Connect Accounts</h3>
                <p className="text-xs text-gray-400 leading-tight hidden xs:block">Link your messaging</p>
              </div>

              {/* Arrow 1 */}
              <div className="flex items-center justify-center flex-shrink-0">
                <ArrowRight className="w-4 xs:w-4 sm:w-5 h-4 xs:h-4 sm:h-5 text-cyan-400/60" />
              </div>

              {/* Step 2 */}
              <div className="flex-1 flex flex-col items-center text-center">
                <div className="mb-2 xs:mb-3 p-2 xs:p-3 rounded-lg bg-gradient-to-br from-cyan-400/20 to-cyan-400/5 border border-cyan-400/30">
                  <Zap className="w-5 xs:w-5 sm:w-6 h-5 xs:h-5 sm:h-6 text-cyan-400 mx-auto" />
                </div>
                <h3 className="font-semibold text-white text-xs xs:text-xs sm:text-sm mb-0.5">Describe Business</h3>
                <p className="text-xs text-gray-400 leading-tight hidden xs:block">Tell us what</p>
              </div>

              {/* Arrow 2 */}
              <div className="flex items-center justify-center flex-shrink-0">
                <ArrowRight className="w-4 xs:w-4 sm:w-5 h-4 xs:h-4 sm:h-5 text-cyan-400/60" />
              </div>

              {/* Step 3 */}
              <div className="flex-1 flex flex-col items-center text-center">
                <div className="mb-2 xs:mb-3 p-2 xs:p-3 rounded-lg bg-gradient-to-br from-cyan-400/20 to-cyan-400/5 border border-cyan-400/30">
                  <Bot className="w-5 xs:w-5 sm:w-6 h-5 xs:h-5 sm:h-6 text-cyan-400 mx-auto" />
                </div>
                <h3 className="font-semibold text-white text-xs xs:text-xs sm:text-sm mb-0.5">AI Replies 24/7</h3>
                <p className="text-xs text-gray-400 leading-tight hidden xs:block">Instant support</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            data-aos="zoom-in"
            data-aos-delay="160"
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
