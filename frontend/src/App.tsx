// app/layout.tsx or App.tsx
import SpaceLayout from './components/SpaceLayout';
import HeaderSection from './components/HeaderSection';

export default function App() {
  return (
    <SpaceLayout>
      <HeaderSection />
      {/* all your sections go here */}
    </SpaceLayout>
  );
}