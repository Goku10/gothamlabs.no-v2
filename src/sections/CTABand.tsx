import { Button } from '../components/Button';
import { Zap } from 'lucide-react';

interface CTABandProps {
  onContactClick: () => void;
}

export function CTABand({ onContactClick }: CTABandProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gotham-900 to-gotham-950">
      <div className="max-w-gotham mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-display text-gotham-50 mb-6">
          Ready to build?
        </h2>
        <p className="text-xl text-gotham-300 mb-8 max-w-2xl mx-auto">
          Let's talk about your project. Discovery call this week, scope within 48 hours.
        </p>
        <Button
          onClick={onContactClick}
          className="text-lg"
          data-track="cta_primary_click"
          data-location="cta_band"
        >
          <Zap className="inline-block mr-2" size={20} />
          Start a project
        </Button>
      </div>
    </section>
  );
}
