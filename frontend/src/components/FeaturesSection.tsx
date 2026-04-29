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
    <section className="relative w-full py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8">

      {/* Section Title */}
      <div data-aos="fade-down" className="text-center max-w-4xl mx-auto mb-6 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-[var(--color-cyan-200)] to-[var(--color-cyan-400)] bg-clip-text text-transparent mb-3">
          Built for Productivity
        </h2>
        <p className="text-sm sm:text-base text-[var(--color-gray-400)] leading-relaxed">
          Everything you need to automate and autopilot conversations at scale
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={`${idx * 50}`}
              className="group p-4 sm:p-5 rounded-lg border border-[var(--color-cyan-400-20)] bg-gradient-to-br from-[var(--color-cyan-400-5)] to-[var(--color-cyan-400-2)] hover:border-[var(--color-cyan-400-30)] hover:bg-[var(--color-cyan-400-10)] transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[var(--color-cyan-400-10)] group-hover:bg-[var(--color-cyan-400-20)] transition-colors flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-[var(--color-cyan-400)]" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-[var(--color-gray-400)] leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}