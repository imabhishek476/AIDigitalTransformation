import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    if (isOpen) setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-primary text-2xl font-bold">Nexus<span className="text-secondary">Digital</span></span>
          </Link>
          
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-600 hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
          
          <Button
            onClick={() => scrollToSection('#contact')}
            className="hidden md:block"
          >
            Get Started
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden text-gray-500 hover:text-primary hover:bg-transparent"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-3 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-gray-600 hover:text-primary font-medium py-2 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
