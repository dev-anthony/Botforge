import React from 'react';

export const CTASection: React.FC = () => {
  return (
    <div className="space-y-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Start automating your customer communication today
      </h2>

      <p className="text-lg text-gray-700 max-w-xl mx-auto">
        Set up your bot in minutes and let your business respond instantly to every message.
      </p>

      <div className="flex gap-4 pt-4 justify-center flex-col sm:flex-row">
        <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-shadow">
          Get Started Now
        </button>
        <button className="flex-1 border-2 border-purple-600 text-purple-600 font-semibold py-3 px-8 rounded-lg hover:bg-purple-50 transition-colors">
          See How It Works
        </button>
      </div>
    </div>
  );
};
