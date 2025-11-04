import { useState } from 'react';
import { BarChart, Bot, Image, Workflow } from 'lucide-react';
import { Card } from '../components/Card';

type Category = 'All' | 'Dashboards' | 'Automations' | 'Generative Media' | 'Assistants';

interface Project {
  title: string;
  category: Category;
  description: string;
  icon: typeof BarChart;
}

export function WorkGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const categories: Category[] = ['All', 'Dashboards', 'Automations', 'Generative Media', 'Assistants'];

  const projects: Project[] = [
    {
      title: 'Sales Pipeline Dashboard',
      category: 'Dashboards',
      description: 'Real-time pipeline tracking with automated forecasting and team performance metrics.',
      icon: BarChart,
    },
    {
      title: 'Customer Onboarding Flow',
      category: 'Automations',
      description: 'Multi-step workflow that syncs CRM, sends sequences, and triggers notifications.',
      icon: Workflow,
    },
    {
      title: 'Social Media Asset Generator',
      category: 'Generative Media',
      description: 'AI-powered ad creative that adapts brand guidelines to generate platform-specific assets.',
      icon: Image,
    },
    {
      title: 'Support Triage Assistant',
      category: 'Assistants',
      description: 'Intelligent chatbot that categorizes tickets, suggests responses, and escalates when needed.',
      icon: Bot,
    },
    {
      title: 'Operations Metrics Hub',
      category: 'Dashboards',
      description: 'Unified view of KPIs across tools with automated reporting and anomaly detection.',
      icon: BarChart,
    },
    {
      title: 'Lead Enrichment Engine',
      category: 'Automations',
      description: 'Automated research and scoring that appends contacts with company data and intent signals.',
      icon: Workflow,
    },
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 md:py-24 bg-gotham-950">
      <div className="max-w-gotham mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display text-gotham-50 mb-4">
            Recent builds
          </h2>
          <p className="text-lg text-gotham-400 max-w-2xl mx-auto">
            A sample of custom dashboards, automations, and generative tools we've shipped.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-gotham-950'
                  : 'bg-gotham-800 text-gotham-300 hover:bg-gotham-700 hover:text-gotham-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group">
              <project.icon className="text-primary mb-4 group-hover:text-accent transition-colors" size={32} />
              <h3 className="text-xl font-display text-gotham-50 mb-2">
                {project.title}
              </h3>
              <p className="text-gotham-300 mb-4">
                {project.description}
              </p>
              <span className="inline-block text-sm text-gotham-500 border border-gotham-700 rounded-full px-3 py-1">
                {project.category}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
