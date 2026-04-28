import { useEffect } from 'react';
import { UserPlus, MessageSquare, Zap, Brain, BarChart3 } from 'lucide-react';
import AOS from 'aos';

export default function HowItWorksSection() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Create Account & Connect',
      description: 'Sign up and select your messaging platform (WhatsApp or Telegram). Connect your account by providing your bot token or business number.',
      icon: UserPlus,
    },
    {
      number: '02',
      title: 'Describe Your Business',
      description: 'Tell the system what you sell, your pricing, delivery options, working hours, and common customer questions. This becomes your bot\'s knowledge base.',
      icon: MessageSquare,
    },
    {
      number: '03',
      title: 'Bot Activated',
      description: 'Once setup is complete, your bot goes live. It receives customer messages, matches them to your business, and processes them using your business information.',
      icon: Zap,
    },
    {
      number: '04',
      title: 'AI Generates Responses',
      description: 'The system dynamically creates personalized responses based on your business context and sends them instantly to customers.',
      icon: Brain,
    },
    {
      number: '05',
      title: 'Monitor & Control',
      description: 'Access your dashboard to see all conversations, review bot responses, and step in manually whenever you need to handle something personally.',
      icon: BarChart3,
    },
  ];

  return (
    <>
      <section className="relative w-full py-16 sm:py-20 md:py-28 lg:py-36 px-4 sm:px-6 md:px-8">
        {/* Section Title */}
        <div
          data-aos="fade-down"
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent mb-4 sm:mb-6">
            How It Works
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
            Five simple steps to automate your customer support and boost sales
          </p>
        </div>

        {/* Steps Container */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline View */}
          <div className="hidden md:block">
            {steps.map((step, idx) => (
              <div
                key={idx}
                data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
                data-aos-delay={`${idx * 100}`}
                className="flex items-center gap-8 mb-12 last:mb-0"
              >
                {/* Left Content */}
                {idx % 2 === 0 ? (
                  <>
                    <div className="flex-1">
                      <div className="p-6 rounded-lg border border-cyan-400/20 bg-cyan-400/5 hover:bg-cyan-400/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-cyan-400/10">
                            <step.icon className="w-6 h-6 text-cyan-400" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center Step Number */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-cyan-400/10 border-2 border-cyan-400/50 flex items-center justify-center">
                        <span className="text-2xl font-bold text-cyan-400">{step.number}</span>
                      </div>
                      {idx < steps.length - 1 && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-cyan-400/50 to-transparent mt-2"></div>
                      )}
                    </div>

                    {/* Right Empty */}
                    <div className="flex-1"></div>
                  </>
                ) : (
                  <>
                    {/* Left Empty */}
                    <div className="flex-1"></div>

                    {/* Center Step Number */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-cyan-400/10 border-2 border-cyan-400/50 flex items-center justify-center">
                        <span className="text-2xl font-bold text-cyan-400">{step.number}</span>
                      </div>
                      {idx < steps.length - 1 && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-cyan-400/50 to-transparent mt-2"></div>
                      )}
                    </div>

                    {/* Right Content */}
                    <div className="flex-1">
                      <div className="p-6 rounded-lg border border-cyan-400/20 bg-cyan-400/5 hover:bg-cyan-400/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-cyan-400/10">
                            <step.icon className="w-6 h-6 text-cyan-400" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Mobile & Tablet Vertical View */}
          <div className="md:hidden space-y-6 sm:space-y-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={`${idx * 100}`}
                className="relative"
              >
                {/* Step Number Badge */}
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-cyan-400/10 border-2 border-cyan-400/50 flex items-center justify-center">
                      <span className="text-lg sm:text-xl font-bold text-cyan-400">{step.number}</span>
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="absolute left-1/2 top-full -translate-x-1/2 w-0.5 h-8 sm:h-10 bg-gradient-to-b from-cyan-400/50 to-transparent mt-2"></div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 pt-1 sm:pt-2">
                    <div className="p-4 sm:p-5 md:p-6 rounded-lg border border-cyan-400/20 bg-cyan-400/5 hover:bg-cyan-400/10 transition-all duration-300">
                      <div className="flex items-start gap-3 sm:gap-4 mb-3">
                        <div className="p-2 sm:p-2.5 rounded-lg bg-cyan-400/10 flex-shrink-0">
                          <step.icon className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-400" />
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
