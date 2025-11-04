import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { ContactModal } from './components/ContactModal';
import ChatWidget from './components/ChatWidget';
import { Hero } from './sections/Hero';
import { ProblemValue } from './sections/ProblemValue';
import { WorkGallery } from './sections/WorkGallery';
import { DashboardShowcase } from './sections/DashboardShowcase';
import { FeatureWalkthrough } from './sections/FeatureWalkthrough';
import { SocialProof } from './sections/SocialProof';
import { Pricing } from './sections/Pricing';
import { FAQ } from './sections/FAQ';
import { CTABand } from './sections/CTABand';
import { Footer } from './sections/Footer';
import { setupAnalytics, trackEvent } from './lib/analytics';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    setupAnalytics();
  }, []);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
    trackEvent({ event: 'cta_primary_click', location: 'nav_or_hero' });
  };

  const handleFAQOpen = (index: number) => {
    trackEvent({ event: 'faq_open', index });
  };

  return (
    <div className="min-h-screen">
      <Navbar onContactClick={handleContactClick} />

      <main>
        <Hero onContactClick={handleContactClick} />
        <ProblemValue />
        <WorkGallery />
        <DashboardShowcase />
        <FeatureWalkthrough />
        <SocialProof />
        <div data-track-view="pricing_view">
          <Pricing />
        </div>
        <FAQ onItemOpen={handleFAQOpen} />
        <CTABand onContactClick={handleContactClick} />
      </main>

      <Footer />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <ChatWidget />
    </div>
  );
}

export default App;
