import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

interface NavbarProps {
  onContactClick: () => void;
}

export function Navbar({ onContactClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Automations', href: '#automations' },
    { label: 'Dashboards', href: '#dashboards' },
    { label: 'Generative Media', href: '#generative' },
    { label: 'Pricing', href: '#pricing' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === '#pricing') {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-gotham-950/90 backdrop-blur-md border-b border-gotham-900">
      <div className="max-w-gotham mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3 group">
              <img
                src="/image.png"
                alt="Gotham Labs(WIP)"
                className="h-10 w-10 transition-transform group-hover:scale-105"
              />
              <span className="text-2xl font-display text-primary group-hover:text-primary/90 transition-colors">
                Gotham Labs(WIP)
              </span>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-gotham-300 hover:text-gotham-100 transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
            <Button onClick={onContactClick} className="ml-4">
              Start a project
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gotham-300 hover:text-gotham-100 p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-gotham-800">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-gotham-300 hover:text-gotham-100 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button onClick={onContactClick} className="mt-2">
                Start a project
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
