import SpaceLayout from '../../components/SpaceLayout';
import HeaderSection from './components/HeaderSection';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import DashboardSection from './components/DashboardSection';
import FeaturesSection from './components/FeaturesSection';
import CTASection from './components/CTASection';
import FooterSection from './components/FooterSection';

export default function LandingPage() {
  return (
    <SpaceLayout>
      <HeaderSection />
      <HeroSection />
      <HowItWorksSection />
      <DashboardSection />
      <FeaturesSection />
      <CTASection/>
      <FooterSection/>
    </SpaceLayout>
  );
}