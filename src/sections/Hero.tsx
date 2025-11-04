import { Zap } from 'lucide-react';
import { Button } from '../components/Button';

interface HeroProps {
  onContactClick: () => void;
}

export function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gotham-900 to-gotham-950 opacity-50" />

      <div className="relative max-w-gotham mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-gotham-50 mb-6">
            Build Pro-grade AI tools without the wait
          </h1>

          <p className="text-xl md:text-2xl text-gotham-300 mb-8 max-w-3xl mx-auto">
            Gotham Labs designs and ships no-code and vibe-code products that run your workflows, reports, and creative at speed.
          </p>

          <Button
            onClick={onContactClick}
            className="text-lg"
            data-track="cta_primary_click"
            data-location="hero"
          >
            <Zap className="inline-block mr-2" size={20} />
            Start a project
          </Button>

          <p className="text-sm text-gotham-500 mt-6">
            Built with Bubble · Webflow · Make · Zapier · OpenAI
          </p>
        </div>
      </div>
    </section>
  );
}
