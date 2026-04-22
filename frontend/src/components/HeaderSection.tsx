import React from 'react';

export const HeaderSection: React.FC = () => {
  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600" />
          <h1 className="text-2xl font-bold text-gray-900">BotForge</h1>
        </div>
      </div>

      <nav className="space-y-3">
        {['Features', 'How It Works', 'Pricing', 'Dashboard', 'Login'].map((item) => (
          <a
            key={item}
            href="#"
            className="block text-gray-700 hover:text-purple-600 transition-colors font-medium"
          >
            {item}
          </a>
        ))}
      </nav>

      <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition-shadow mt-4">
        Get Started
      </button>
    </div>
  );
};
