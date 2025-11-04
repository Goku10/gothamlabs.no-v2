import { Mail, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    product: [
      { name: 'Projects', href: '#projects' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'How it works', href: '#pricing' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Contact', href: 'mailto:hello@gothamlabs.io' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  };

  const socials = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gotham-950 border-t border-gotham-900">
      <div className="max-w-gotham mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/image.png"
                alt="Gotham Labs"
                className="h-8 w-8"
              />
              <h3 className="text-xl font-display text-primary">
                Gotham Labs
              </h3>
            </div>
            <p className="text-gotham-400 text-sm mb-4">
              Custom AI tools, dashboards, and automations built fast.
            </p>
            <a
              href="mailto:hello@gothamlabs.io"
              className="flex items-center gap-2 text-gotham-300 hover:text-gotham-100 transition-colors text-sm"
            >
              <Mail size={16} />
              hello@gothamlabs.io
            </a>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gotham-200 uppercase tracking-wide mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gotham-400 hover:text-gotham-100 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gotham-200 uppercase tracking-wide mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gotham-400 hover:text-gotham-100 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gotham-200 uppercase tracking-wide mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gotham-400 hover:text-gotham-100 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gotham-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gotham-500 text-sm">
            &copy; {currentYear} Gotham Labs. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-gotham-400 hover:text-gotham-100 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
