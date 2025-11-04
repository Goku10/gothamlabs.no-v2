import { Accordion, AccordionItem } from '../components/Accordion';

interface FAQProps {
  onItemOpen?: (index: number) => void;
}

export function FAQ({ onItemOpen }: FAQProps) {
  const faqItems: AccordionItem[] = [
    {
      question: 'What kinds of apps do you build?',
      answer: 'Dashboards, internal tools, data automations, chat assistants, and generative assets like ads, video, and audio. If it can be built with no-code or low-code platforms plus AI, we can deliver it.',
    },
    {
      question: 'How fast can we start?',
      answer: 'Discovery call this week, scope in 48 hours, first deliverable the following week for most projects. Complex builds may take longer, but we always provide a clear timeline upfront.',
    },
    {
      question: 'Do we own the stack?',
      answer: 'Yes. We build on your accounts when possible. You keep access, credentials, and documentation. No vendor lock-in, ever.',
    },
    {
      question: 'Is my data secure?',
      answer: 'We use reputable vendors, least-privilege access, and provide a basic security checklist with every handover. Your data stays in your systems, and we follow industry best practices.',
    },
    {
      question: 'What does it cost?',
      answer: 'Fixed-scope packages for common builds and a custom option for unique projects. Typical projects range from $5k to $25k depending on complexity. Contact us for a detailed quote.',
    },
    {
      question: 'Can you maintain it?',
      answer: 'Yes. Optional monthly care plans for updates, monitoring, and small feature requests. Maintenance is available but never required.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gotham-950">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display text-gotham-50 mb-4">
            Common questions
          </h2>
          <p className="text-lg text-gotham-400">
            Everything you need to know before getting started.
          </p>
        </div>

        <Accordion items={faqItems} onItemOpen={onItemOpen} />

        <div className="mt-12 text-center">
          <p className="text-gotham-300 mb-4">
            Have a different question?
          </p>
          <a
            href="mailto:hello@gothamlabs.io"
            className="text-primary hover:text-primary/90 underline transition-colors"
          >
            Email us at hello@gothamlabs.io
          </a>
        </div>
      </div>
    </section>
  );
}
