import { Card } from '../components/Card';
import { Quote, TrendingUp } from 'lucide-react';

export function SocialProof() {
  const testimonials = [
    {
      quote: "Gotham Labs delivered our custom dashboard in under two weeks. It's already saving our team 10 hours a week on reporting.",
      author: "Sarah Chen",
      role: "VP Operations",
    },
    {
      quote: "Finally, a team that understands both the tech and the business. They built exactly what we needed, not what they wanted to sell.",
      author: "Marcus Rodriguez",
      role: "Head of Marketing",
    },
  ];

  const outcomes = [
    {
      before: 'Manual reports took 6 hours weekly',
      after: 'Automated dashboards update in real-time',
    },
    {
      before: 'Lead enrichment required 3 VA hours per day',
      after: 'Automated pipeline adds 200+ qualified contacts daily',
    },
    {
      before: 'Campaign creative needed 2 days per variant',
      after: 'AI generator produces 50 variants in minutes',
    },
  ];

  return (
    <>
      <section className="py-16 md:py-24 bg-gotham-950">
        <div className="max-w-gotham mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-gotham-50 mb-4">
              What clients say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <Quote className="text-primary/20 absolute top-6 right-6" size={48} />
                <p className="text-lg text-gotham-200 mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gotham-800 pt-4">
                  <p className="text-gotham-50 font-medium">{testimonial.author}</p>
                  <p className="text-gotham-400 text-sm">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gotham-900">
        <div className="max-w-gotham mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-gotham-50 mb-4">
              Outcomes that matter
            </h2>
            <p className="text-lg text-gotham-400 max-w-2xl mx-auto">
              Real efficiency gains from teams that switched to custom automation.
            </p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            {outcomes.map((outcome, index) => (
              <div key={index} className="bg-gotham-950 border border-gotham-800 rounded-gotham p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <p className="text-gotham-400 mb-1 text-sm">Before</p>
                    <p className="text-gotham-200">{outcome.before}</p>
                  </div>
                  <TrendingUp className="text-primary hidden md:block flex-shrink-0" size={24} />
                  <div className="flex-1">
                    <p className="text-gotham-400 mb-1 text-sm">After</p>
                    <p className="text-gotham-50 font-medium">{outcome.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
