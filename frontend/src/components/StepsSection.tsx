import React from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Create an account',
    description: 'Sign up and access your dashboard.',
  },
  {
    number: 2,
    title: 'Connect your platform',
    description: 'Link your WhatsApp Business number or Telegram bot.',
  },
  {
    number: 3,
    title: 'Describe your business',
    description: 'Provide details about your products, services, and operations.',
  },
  {
    number: 4,
    title: 'Activate your bot',
    description: 'Your bot starts responding to customer messages automatically.',
  },
  {
    number: 5,
    title: 'Monitor and manage',
    description: 'Track conversations, review responses, and step in when needed.',
  },
];

export const StepsSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Get started in minutes
      </h2>

      <div className="space-y-4">
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white font-bold">
                {step.number}
              </div>
              {idx < steps.length - 1 && (
                <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-pink-600 mx-auto mt-2 opacity-30" />
              )}
            </div>
            <div className="pt-1">
              <h3 className="font-semibold text-gray-900">Step {step.number} — {step.title}</h3>
              <p className="text-gray-700 text-sm mt-1">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
