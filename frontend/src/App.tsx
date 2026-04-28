// app/layout.tsx or App.tsx
import SpaceLayout from './components/SpaceLayout';
import HeaderSection from './components/HeaderSection';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';

export default function App() {
  return (
    <SpaceLayout>
      <HeaderSection />
      <HeroSection />
      <HowItWorksSection />
      {/* all your sections go here */}
    </SpaceLayout>
  );
}