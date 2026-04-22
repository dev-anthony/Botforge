import React from 'react';

export const FooterSection: React.FC = () => {
  const links = ['Features', 'How It Works', 'Pricing', 'Login', 'Sign Up'];
  const legal = ['Terms of Service', 'Privacy Policy'];

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600" />
          <h3 className="font-bold text-gray-900 text-lg">BotForge</h3>
        </div>
        <p className="text-sm text-gray-700">
          Automated messaging for modern businesses.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 py-4">
        <div>
          <div className="space-y-2">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="block text-sm text-gray-700 hover:text-purple-600 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="space-y-2">
            {legal.map((item) => (
              <a
                key={item}
                href="#"
                className="block text-sm text-gray-700 hover:text-purple-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-white/20">
        <p className="text-xs text-gray-600">
          © 2026 BotForge. All rights reserved.
        </p>
      </div>
    </div>
  );
};
