import { Wheat, Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Impact', href: '#impact' },
    { name: 'Partnership', href: '#partnership' },
  ];

  const resources = [
    { name: 'News', href: '#news' },
    { name: 'Media Resources', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Careers', href: '#' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Suppliers', href: '#' },
    { name: 'Tender', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="py-16 bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 p-6 rounded-lg">
            <div className="flex items-center space-x-2 mb-6">
              <Wheat className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold text-white">Africa Improved Foods</span>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Building a better future for Africa by addressing hunger and malnutrition through 
              resilient food systems and nutritious, affordable products.
            </p>

            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-400" />
                <span>info@africaimprovedfoods.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-green-400 mt-1" />
                <span>
                  Kigali Special Economic Zone<br />
                  Agri-Park, Silos Site<br />
                  Kigali, Rwanda
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-400" />
                <span>+250 123 456 789</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-6 text-green-300">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-6 text-green-300">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-6 text-green-300">Legal</h3>
            <ul className="space-y-3">
              {legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <div>
            © {currentYear} Africa Improved Foods. All rights reserved.
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg transition-all duration-300 transform hover:scale-110 hover:text-green-400"
                >
                  <Icon className="h-5 w-5 text-green-400" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40 bg-green-800 text-white"
        aria-label="Back to top"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};
