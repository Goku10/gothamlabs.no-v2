import { Check } from 'lucide-react';

export function Pricing() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'Quick call to understand your workflow, pain points, and goals. We ask questions and take notes.',
    },
    {
      number: '02',
      title: 'Scope',
      description: 'Within 48 hours, you get a detailed proposal with timeline, deliverables, and fixed cost.',
    },
    {
      number: '03',
      title: 'Build & Ship',
      description: 'We design, build, test, and document. You review at key milestones. We hand over everything when done.',
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gotham-900">
      <div className="max-w-gotham mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display text-gotham-50 mb-4">
            How it works
          </h2>
          <p className="text-lg text-gotham-400 max-w-2xl mx-auto">
            A transparent process from first call to final handover.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-[23px] top-8 bottom-8 w-0.5 bg-gotham-700 hidden md:block" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10">
                    <span className="text-gotham-950 font-display font-bold text-sm">
                      {step.number}
                    </span>
                  </div>

                  <div className="flex-1 pb-8">
                    <h3 className="text-2xl font-display text-gotham-50 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gotham-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-gotham-950 border border-gotham-800 rounded-gotham p-8">
            <h3 className="text-2xl font-display text-gotham-50 mb-6">
              What's included
            </h3>
            <ul className="space-y-3">
              {[
                'Complete source code and documentation',
                'Security checklist and best practices guide',
                'Training session for your team',
                'Full credential and account ownership',
                '30-day support window for questions',
                'Optional maintenance plans available',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="text-success flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gotham-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
