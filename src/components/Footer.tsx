import { Twitter } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Data Products', href: '#data-products' },
        { label: 'Pricing', href: '#contact' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Join Network', href: '#community' },
        { label: 'Twitter', href: 'https://twitter.com/hushsense', external: true },
        { label: 'Blog', href: '#blog' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#contact' },
        { label: 'Terms of Service', href: '#contact' },
        { label: 'docs', href: '' },
      ],
    },
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="/assets/hushsense-logo.jpg" 
                  alt="HushSense Logo" 
                  className="h-10 w-auto object-contain rounded-lg border border-border/20"
                />
              </div>
              <p className="text-background/80 mb-6 leading-relaxed">
                Your guide to a quieter world. Measure noise, find tranquility, 
                and shape your city with decentralized data.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com/hushsense"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-smooth"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="text-background/80 hover:text-background transition-smooth"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>


          {/* Bottom Footer */}
          <div className="border-t border-background/20 pt-8">
            <div className="text-center">
              <div className="text-background/60 text-sm">
                © 2025 HushSense. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;