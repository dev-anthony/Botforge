// app/layout.tsx or App.tsx
import SpaceLayout from './components/SpaceLayout';
import HeaderSection from './components/HeaderSection';
import HeroSection from './components/HeroSection';

export default function App() {
  return (
    <SpaceLayout>
      <HeaderSection />
      <HeroSection />
      {/* all your sections go here */}
    </SpaceLayout>
  );
}