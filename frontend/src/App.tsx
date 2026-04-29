// app/layout.tsx or App.tsx
import SpaceLayout from './components/SpaceLayout';
import HeaderSection from './components/HeaderSection';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import DashboardSection from './components/DashboardSection';

export default function App() {
  return (
    <SpaceLayout>
      <HeaderSection />
      <HeroSection />
      <HowItWorksSection />
      <DashboardSection />
      {/* all your sections go here */}
    </SpaceLayout>
  );
}