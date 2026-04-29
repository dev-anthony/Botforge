import { useEffect } from 'react';
import { MessageSquare, Zap, TrendingUp, MessageCircle, Bot } from 'lucide-react';
import AOS from 'aos';

export default function DashboardSection() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const stats = [
    {
      title: 'Active Bots',
      value: '12',
      icon: Bot,
      change: '+2 this week',
    },
    {
      title: 'Messages Today',
      value: '1,247',
      icon: MessageSquare,
      change: '+18% from yesterday',
    },
    {
      title: 'Response Rate',
      value: '98.5%',
      icon: TrendingUp,
      change: 'Excellent',
    },
    {
      title: 'Avg Response Time',
      value: '0.5s',
      icon: Zap,
      change: 'Very fast',
    },
  ];

  const bots = [
    {
      name: 'Support Bot',
      platform: 'Telegram',
      logo: '📱',
      status: 'online',
      messages: 342,
    },
    {
      name: 'Sales Bot',
      platform: 'WhatsApp',
      logo: '💬',
      status: 'online',
      messages: 589,
    },
    {
      name: 'Order Bot',
      platform: 'WhatsApp',
      logo: '🛒',
      status: 'online',
      messages: 316,
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent mb-4 sm:mb-6">
            Powerful Dashboard
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
            Everything you need to manage your bots in one place
          </p>
        </div>

        {/* Single Unified Dashboard Container */}
        <div className="max-w-7xl mx-auto">
          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            className="p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-cyan-400/30 bg-gradient-to-br from-cyan-400/8 via-cyan-400/3 to-transparent backdrop-blur-xl shadow-2xl"
          >
            {/* Dashboard Header */}
            <div className="mb-6 pb-4 border-b border-cyan-400/20">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">Dashboard Overview</h3>
              <p className="text-xs sm:text-sm text-gray-400">Real-time analytics of your bot performance</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-4 rounded-lg border border-cyan-400/20 bg-cyan-400/5 hover:bg-cyan-400/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5 sm:mb-1">{stat.title}</p>
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-white">{stat.value}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-cyan-400/10">
                      <stat.icon className="w-4 sm:w-4 h-4 sm:h-4 text-cyan-400" />
                    </div>
                  </div>
                  <p className="text-xs text-cyan-400/70">{stat.change}</p>
                </div>
              ))}
            </div>

            {/* Analytics Chart with Line Graph */}
            <div className="mt-6 pt-6 border-t border-cyan-400/20">
              <div className="mb-4">
                <p className="text-sm font-semibold text-white mb-1">Message Analytics</p>
                <p className="text-xs text-gray-400">Incoming messages vs Outgoing responses</p>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                  <span className="text-xs sm:text-sm text-gray-300">Incoming Messages</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  <span className="text-xs sm:text-sm text-gray-300">Outgoing Responses</span>
                </div>
              </div>

              {/* Line Chart */}
              <div className="h-32 sm:h-40 rounded-lg bg-gradient-to-br from-cyan-400/5 to-cyan-400/2 border border-cyan-400/10 p-4 flex items-end justify-between gap-1 relative">
                {/* Grid lines */}
                <div className="absolute inset-0 rounded-lg flex flex-col justify-between p-4 pointer-events-none">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="border-b border-cyan-400/5 w-full"></div>
                  ))}
                </div>

                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full w-10 flex flex-col justify-between text-xs text-gray-500 p-4">
                  <span>800</span>
                  <span>600</span>
                  <span>400</span>
                  <span>200</span>
                  <span>0</span>
                </div>

                {/* SVG Chart */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  style={{ pointerEvents: 'none' }}
                  viewBox="0 0 700 200"
                  preserveAspectRatio="none"
                >
                  {/* Incoming Messages Line (Cyan) */}
                  <polyline
                    points="0,120 80,80 160,100 240,50 320,70 400,40 480,60 560,30 640,50 700,20"
                    fill="none"
                    stroke="#00F0FF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.8"
                  />

                  {/* Outgoing Responses Line (Emerald) */}
                  <polyline
                    points="0,140 80,110 160,130 240,90 320,110 400,80 480,100 560,70 640,90 700,60"
                    fill="none"
                    stroke="#34D399"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.8"
                  />
                </svg>
              </div>

              {/* X-axis labels */}
              <div className="flex justify-between text-xs text-gray-500 mt-2 px-4">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>

            {/* Active Bots Section Inside Dashboard */}
            <div className="mt-6 pt-6 border-t border-cyan-400/20">
              <h4 className="text-lg font-semibold text-white mb-4">Your Active Bots</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {bots.map((bot, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-lg border border-cyan-400/20 bg-cyan-400/5 hover:bg-cyan-400/10 transition-all duration-300"
                  >
                    {/* Bot Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="text-2xl sm:text-3xl">{bot.logo}</div>
                        <div>
                          <h4 className="text-sm sm:text-base font-semibold text-white">{bot.name}</h4>
                          <p className="text-xs text-gray-400">{bot.platform}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className={`w-2 h-2 rounded-full ${bot.status === 'online' ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                        <p className="text-xs font-medium text-gray-300 capitalize">{bot.status}</p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-cyan-400/20 to-transparent mb-3"></div>

                    {/* Bot Stats */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <MessageCircle className="w-3 h-3 text-cyan-400/70" />
                          <p className="text-xs text-gray-400">Messages</p>
                        </div>
                        <p className="text-base font-bold text-white">{bot.messages}</p>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2 rounded bg-cyan-400/5 border border-cyan-400/10">
                          <p className="text-xs text-gray-400 mb-0.5">Response</p>
                          <p className="text-sm font-semibold text-cyan-400">98%</p>
                        </div>
                        <div className="p-2 rounded bg-cyan-400/5 border border-cyan-400/10">
                          <p className="text-xs text-gray-400 mb-0.5">Avg Time</p>
                          <p className="text-sm font-semibold text-cyan-400">0.3s</p>
                        </div>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <button className="w-full mt-3 py-2 px-3 rounded-lg text-xs sm:text-sm font-medium text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/10 transition-all duration-300">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

