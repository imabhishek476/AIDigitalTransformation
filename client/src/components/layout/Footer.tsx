import { Link } from 'wouter';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Phone, Clock } from 'lucide-react';
import { SocialIcon } from '@/components/ui/social-icons';
import { NexiFrontLogo } from '@/components/ui/nexifront-logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: 'AI Integration', href: '#' },
    { name: 'SEO Optimization', href: '#' },
    { name: 'Digital Marketing', href: '#' },
    { name: 'Website Development', href: '#' },
    { name: 'Data Analytics', href: '#' },
    { name: 'Digital Strategy', href: '#' },
  ];
  
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About section */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <NexiFrontLogo width={130} height={40} />
            </Link>
            <p className="text-gray-400 mb-6">
              Your partner in digital transformation, helping businesses embrace AI technology and modern marketing solutions.
            </p>
            <div className="flex space-x-4">
              <SocialIcon>
                <Linkedin className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon>
                <Twitter className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon>
                <Facebook className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon>
                <Instagram className="h-5 w-5" />
              </SocialIcon>
            </div>
          </div>
          
          {/* Services section */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links section */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('#') ? (
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info section */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3 text-secondary" />
                <span className="text-gray-400">123 Innovation Drive, San Francisco, CA 94103</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mt-1 mr-3 text-secondary" />
                <span className="text-gray-400">contact@nexifront.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mt-1 mr-3 text-secondary" />
                <span className="text-gray-400">(415) 555-1234</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mt-1 mr-3 text-secondary" />
                <span className="text-gray-400">Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} NexiFront. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
