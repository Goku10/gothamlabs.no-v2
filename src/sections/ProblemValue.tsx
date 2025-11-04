import { AlertCircle, Target, Zap } from 'lucide-react';
import { Card } from '../components/Card';

export function ProblemValue() {
  const problems = [
    {
      icon: AlertCircle,
      title: 'Stuck in spreadsheets',
      description: 'Manual workflows eat hours every week, limiting what your team can achieve.',
    },
    {
      icon: Target,
      title: 'Custom tools take months',
      description: 'Traditional dev cycles are slow and expensive, delaying critical projects.',
    },
    {
      icon: Zap,
      title: 'AI promises without delivery',
      description: 'Generic tools lack the precision your business needs to move forward.',
    },
  ];

  const values = [
    {
      icon: Zap,
      title: 'Built fast',
      description: 'From discovery call to first deliverable in one week for most projects.',
    },
    {
      icon: Target,
      title: 'Custom to your team',
      description: 'Tailored dashboards, automations, and assistants that fit your exact workflows.',
    },
    {
      icon: AlertCircle,
      title: 'You own everything',
      description: 'Full access, credentials, and documentation. No vendor lock-in.',
    },
  ];

  return (
    <>
      <section className="py-16 md:py-24 bg-gotham-950">
        <div className="max-w-gotham mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-gotham-50 mb-4">
              The usual blockers
            </h2>
            <p className="text-lg text-gotham-400 max-w-2xl mx-auto">
              Teams lose momentum waiting for tools that should already exist.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <Card key={index}>
                <problem.icon className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-display text-gotham-50 mb-2">
                  {problem.title}
                </h3>
                <p className="text-gotham-300">
                  {problem.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gotham-900">
        <div className="max-w-gotham mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-gotham-50 mb-4">
              What you get with Gotham Labs
            </h2>
            <p className="text-lg text-gotham-400 max-w-2xl mx-auto">
              Practical tools that slot into your stack and start working immediately.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <value.icon className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-display text-gotham-50 mb-2">
                  {value.title}
                </h3>
                <p className="text-gotham-300">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
