import { Database, Lock, Rocket, Settings } from 'lucide-react';

export function FeatureWalkthrough() {
  const features = [
    {
      icon: Rocket,
      title: 'Fast deployment',
      description: 'Most projects go from discovery to production in one to two weeks. We use proven no-code and low-code platforms to move quickly without sacrificing quality.',
      align: 'left' as const,
    },
    {
      icon: Settings,
      title: 'Built on your stack',
      description: 'We connect to your existing tools and data sources. Everything lives in your accounts, so you maintain full control and avoid vendor lock-in.',
      align: 'right' as const,
    },
    {
      icon: Database,
      title: 'Secure and documented',
      description: 'Every build includes documentation, security checklists, and training. You get the knowledge transfer needed to maintain and extend the system.',
      align: 'left' as const,
    },
    {
      icon: Lock,
      title: 'Handover ready',
      description: 'You own all credentials, data, and source access. Optional maintenance plans available, but never required.',
      align: 'right' as const,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gotham-900">
      <div className="max-w-gotham mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display text-gotham-50 mb-4">
            How we work
          </h2>
          <p className="text-lg text-gotham-400 max-w-2xl mx-auto">
            A practical approach that delivers working tools fast.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                feature.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center gap-12`}
            >
              <div className="flex-1">
                <div className="bg-gotham-950 border border-gotham-800 rounded-gotham p-8 flex items-center justify-center min-h-[240px]">
                  <feature.icon className="text-primary" size={80} />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-display text-gotham-50 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gotham-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
