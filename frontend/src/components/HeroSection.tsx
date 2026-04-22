import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
        Automate customer conversations on WhatsApp and Telegram
      </h2>

      <p className="text-lg text-gray-700">
        Create intelligent bots for your business without writing rules or code. Describe your business once, and your bot handles customer inquiries automatically.
      </p>

      <p className="text-base text-gray-600 border-l-4 border-purple-500 pl-4">
        Respond to messages instantly, reduce repetitive work, and stay available to your customers at all times.
      </p>

      <div className="flex gap-4 pt-4">
        <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg transition-shadow">
          Create Your Bot
        </button>
        <button className="flex-1 border-2 border-purple-600 text-purple-600 font-semibold py-3 px-4 rounded-lg hover:bg-purple-50 transition-colors">
          View Demo
        </button>
      </div>
    </div>
  );
};
