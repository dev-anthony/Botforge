import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { Modal } from './Modal';
import { HeaderSection } from './HeaderSection';
import { HeroSection } from './HeroSection';
import { DashboardSection } from './DashboardSection';
import { FeaturesSection } from './FeaturesSection';
import { StepsSection } from './StepsSection';
import { CTASection } from './CTASection';
import { FooterSection } from './FooterSection';

type SectionType = 'header' | 'hero' | 'dashboard' | 'features' | 'steps' | 'cta' | 'footer' | null;

interface SectionConfig {
  id: SectionType;
  title: string;
  component: React.ReactNode;
  hasOverflow?: boolean;
  gridClass: string;
}

export const LandingPage: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<SectionType>(null);

  const sections: SectionConfig[] = [
    {
      id: 'header',
      title: 'Navigation',
      component: <HeaderSection />,
      gridClass: 'col-span-1 row-span-2',
    },
    {
      id: 'hero',
      title: 'Hero',
      component: <HeroSection />,
      gridClass: 'col-span-2 row-span-2',
      hasOverflow: true,
    },
    {
      id: 'dashboard',
      title: 'Dashboard',
      component: <DashboardSection />,
      gridClass: 'col-span-2 row-span-2',
      hasOverflow: true,
    },
    {
      id: 'features',
      title: 'Features',
      component: <FeaturesSection />,
      gridClass: 'col-span-3 row-span-2',
      hasOverflow: true,
    },
    {
      id: 'steps',
      title: 'Getting Started',
      component: <StepsSection />,
      gridClass: 'col-span-2 row-span-2',
      hasOverflow: true,
    },
    {
      id: 'cta',
      title: 'Call To Action',
      component: <CTASection />,
      gridClass: 'col-span-2 row-span-1',
    },
    {
      id: 'footer',
      title: 'Footer',
      component: <FooterSection />,
      gridClass: 'col-span-3 row-span-1',
    },
  ];

  return (
    <div
      className="min-h-screen w-full p-4 md:p-8 overflow-hidden"
      style={{
        background: `linear-gradient(45deg, 
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 182, 217, 0.3) 33%,
          rgba(173, 216, 230, 0.3) 66%,
          rgba(255, 255, 255, 1) 100%)`,
        backgroundSize: '400% 400%',
        animation: 'gradient-shift 15s ease infinite',
      }}
    >
      {/* Background animation */}
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Main bento grid container */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-4 md:gap-6 auto-rows-max">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`${section.gridClass} transition-all duration-300`}
              style={{
                display: expandedSection ? (expandedSection === section.id ? 'block' : 'none') : 'block',
              }}
            >
              <GlassCard
                onClick={() => setExpandedSection(section.id)}
                hasOverflow={section.hasOverflow}
              >
                {section.component}
              </GlassCard>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for expanded sections */}
      {expandedSection && (
        <Modal
          isOpen={true}
          onClose={() => setExpandedSection(null)}
          title={sections.find((s) => s.id === expandedSection)?.title || ''}
        >
          <div className="space-y-6">
            {sections.find((s) => s.id === expandedSection)?.component}
          </div>
        </Modal>
      )}
    </div>
  );
};
