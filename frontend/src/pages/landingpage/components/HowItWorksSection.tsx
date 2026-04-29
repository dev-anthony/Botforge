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
      description: "Tell the system what you sell, your pricing, delivery options, working hours, and common customer questions. This becomes your bot's knowledge base.",
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
    <section className="relative w-full py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8">

      {/* Section Title */}
      <div data-aos="fade-down" data-aos-duration="300" className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-[var(--color-cyan-200)] to-[var(--color-cyan-400)] bg-clip-text text-transparent mb-3">
          How It Works
        </h2>
        <p className="text-sm sm:text-base text-[var(--color-gray-400)] leading-relaxed">
          Five simple steps to automate your customer support and boost sales
        </p>
      </div>

      {/* Steps Container */}
      <div className="max-w-6xl mx-auto">

        {/* ── Desktop Timeline ──────────────────── */}
        <div className="hidden md:block">
          {steps.map((step, idx) => (
            <div
              key={idx}
              data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={`${idx * 40}`}
              data-aos-duration="300"
              className="flex items-center gap-8 mb-8 last:mb-0"
            >
              {idx % 2 === 0 ? (
                <>
                  <div className="flex-1">
                    <div className="p-5 rounded-lg border border-[var(--color-cyan-400-20)] bg-[var(--color-cyan-400-5)] hover:bg-[var(--color-cyan-400-10)] transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 rounded-lg bg-[var(--color-cyan-400-10)]">
                          <step.icon className="w-5 h-5 text-[var(--color-cyan-400)]" />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-white mb-1">{step.title}</h3>
                          <p className="text-[var(--color-gray-400)] text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-cyan-400-10)] border-2 border-[var(--color-cyan-400-50)] flex items-center justify-center">
                      <span className="text-xl font-bold text-[var(--color-cyan-400)]">{step.number}</span>
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-[var(--color-cyan-400-50)] to-transparent mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1"></div>
                </>
              ) : (
                <>
                  <div className="flex-1"></div>
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-cyan-400-10)] border-2 border-[var(--color-cyan-400-50)] flex items-center justify-center">
                      <span className="text-xl font-bold text-[var(--color-cyan-400)]">{step.number}</span>
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-[var(--color-cyan-400-50)] to-transparent mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="p-5 rounded-lg border border-[var(--color-cyan-400-20)] bg-[var(--color-cyan-400-5)] hover:bg-[var(--color-cyan-400-10)] transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 rounded-lg bg-[var(--color-cyan-400-10)]">
                          <step.icon className="w-5 h-5 text-[var(--color-cyan-400)]" />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-white mb-1">{step.title}</h3>
                          <p className="text-[var(--color-gray-400)] text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* ── Mobile Vertical ───────────────────── */}
        <div className="md:hidden space-y-5">
          {steps.map((step, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={`${idx * 40}`}
              data-aos-duration="300"
              className="relative"
            >
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-cyan-400-10)] border-2 border-[var(--color-cyan-400-50)] flex items-center justify-center">
                    <span className="text-base font-bold text-[var(--color-cyan-400)]">{step.number}</span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="absolute left-1/2 top-full -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-[var(--color-cyan-400-50)] to-transparent mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pt-1">
                  <div className="p-4 rounded-lg border border-[var(--color-cyan-400-20)] bg-[var(--color-cyan-400-5)] hover:bg-[var(--color-cyan-400-10)] transition-all duration-300">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-[var(--color-cyan-400-10)] flex-shrink-0">
                        <step.icon className="w-4 h-4 text-[var(--color-cyan-400)]" />
                      </div>
                      <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="text-[var(--color-gray-400)] text-xs leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}