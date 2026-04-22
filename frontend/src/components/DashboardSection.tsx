import React from 'react';

export const DashboardSection: React.FC = () => {
  const keyPoints = [
    'View all customer conversations in one place',
    'Track how many messages your bot handles',
    'Monitor response activity and performance',
    'Step in manually when needed',
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Everything runs from one simple dashboard
        </h2>
        <p className="text-gray-700 mt-3">
          Monitor conversations, track activity, and manage your bots in real time. Every message passes through a single system that understands your business and responds accordingly.
        </p>
      </div>

      <div className="space-y-3">
        {keyPoints.map((point, idx) => (
          <div key={idx} className="flex gap-3 items-start">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-baby-pink to-light-blue flex-shrink-0 mt-1" />
            <span className="text-gray-700">{point}</span>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-white/20">
        <p className="text-sm text-gray-600 italic">
          💡 You stay in control while the system handles the routine work.
        </p>
      </div>

      <div className="h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg opacity-50 flex items-center justify-center">
        <span className="text-gray-500">[Dashboard Preview]</span>
      </div>
    </div>
  );
};
