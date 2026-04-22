import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: 'Intelligent Responses',
    description: 'Your bot responds based on your business information, not rigid rules or keyword matching.',
    icon: '🧠',
  },
  {
    title: 'Multi-Platform Support',
    description: 'Connect and manage bots for WhatsApp and Telegram from a single interface.',
    icon: '🔗',
  },
  {
    title: 'Simple Setup',
    description: 'Describe your business, products, and operations once. No technical configuration required.',
    icon: '⚙️',
  },
  {
    title: 'Real-Time Conversations',
    description: 'View incoming messages and responses as they happen.',
    icon: '⚡',
  },
  {
    title: 'Human Takeover',
    description: 'Step into any conversation at any time and respond directly.',
    icon: '👤',
  },
  {
    title: 'Scalable Automation',
    description: 'Handle multiple customer conversations simultaneously without extra effort.',
    icon: '📈',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Built for real business communication
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg bg-white/50 border border-white/30 hover:bg-white/70 transition-colors"
          >
            <div className="text-3xl mb-2">{feature.icon}</div>
            <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
