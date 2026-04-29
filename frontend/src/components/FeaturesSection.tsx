
import { useEffect } from 'react';
import { Zap, Radio, BarChart3, Settings, MessageSquare, Inbox, Lock } from 'lucide-react';
import AOS from 'aos';

export default function FeaturesSection() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'Dynamic Response Generation',
      description: 'No rules or predefined responses needed. The system generates replies dynamically based on your business context.',
    },
    {
      icon: Radio,
      title: 'Multi-Channel Support',
      description: 'Operate across WhatsApp and Telegram seamlessly. Manage multiple channels from a single system without switching tools.',
    },
    {
      icon: BarChart3,
      title: 'Context-Aware Replies',
      description: 'Each response is personalized based on your business information, ensuring accuracy and consistency.',
    },
    {
      icon: Settings,
      title: 'Non-Technical Setup',
      description: 'Describe your business once. No ongoing configuration or technical maintenance required.',
    },
    {
      icon: Inbox,
      title: 'Centralized Dashboard',
      description: 'Monitor all conversations in one place. Review interactions and track bot performance over time.',
    },
    {
      icon: MessageSquare,
      title: 'Real-Time Messaging',
      description: 'Respond instantly to multiple customers at once without delays or manual effort.',
    },
    {
      icon: Lock,
      title: 'Full Control',
      description: 'Step in anytime to take over chats manually. You always have complete control over conversations.',
    },
  ];

  return (
    <>
      <section className="relative w-full py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-8">
        {/* Section Title */}
        <div
          data-aos="fade-down"
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-[var(--color-cyan-200)] to-[var(--color-cyan-400)] bg-clip-text text-transparent mb-4 sm:mb-6">
            Built for Productivity
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[var(--color-gray-400)] leading-relaxed">
            Everything you need to automate and autopilot conversations at scale
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={`${idx * 50}`}
                className="group p-6 sm:p-7 rounded-lg border border-[var(--color-cyan-400-20)] bg-gradient-to-br from-[var(--color-cyan-400-5)] to-[var(--color-cyan-400-2)] hover:border-[var(--color-cyan-400-30)] hover:bg-[var(--color-cyan-400-10)] transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-[var(--color-cyan-400-10)] group-hover:bg-[var(--color-cyan-400-20)] transition-colors">
                    <feature.icon className="w-6 h-6 text-[var(--color-cyan-400)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-[var(--color-gray-400)] leading-relaxed">{feature.description}</p>
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
