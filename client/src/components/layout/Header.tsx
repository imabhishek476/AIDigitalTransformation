import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/ui/contact-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { NexiFrontLogo } from '@/components/ui/nexifront-logo';
import { Z_INDICES } from '@/lib/layout-stability';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
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
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <header 
        className={cn(
          "fixed w-full transition-all duration-300",
          isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
        )}
        style={{ zIndex: Z_INDICES.FIXED }}
        role="banner"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link 
              href="/" 
              className="flex items-center space-x-2"
              aria-label="NexiFront - Home"
            >
              <NexiFrontLogo width={150} height={45} />
            </Link>
          
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-600 hover:text-primary font-medium transition-colors"
                aria-label={`Navigate to ${link.label} section`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          
          <Dialog open={showContactModal} onOpenChange={setShowContactModal}>
            <DialogTrigger asChild>
              <Button
                className="hidden md:block bg-secondary hover:bg-secondary/90 text-white ml-6"
                aria-label="Get started with NexiFront services"
              >
                Get Started
              </Button>
            </DialogTrigger>
            <DialogContent 
              className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto"
              style={{ zIndex: Z_INDICES.MODAL }}
            >
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center mb-2">
                  Start Your Digital Transformation
                </DialogTitle>
                <p className="text-muted-foreground text-center mb-6">
                  Tell us about your project and we'll get back to you within 24 hours with a personalized proposal.
                </p>
              </DialogHeader>
              <ContactForm onSuccess={() => setShowContactModal(false)} />
            </DialogContent>
          </Dialog>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden text-gray-500 hover:text-primary hover:bg-transparent min-h-[48px] min-w-[48px]"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
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
            style={{ zIndex: Z_INDICES.DROPDOWN }}
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-gray-600 hover:text-primary font-medium py-4 px-2 transition-colors rounded-md hover:bg-gray-50 min-h-[48px] text-base"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2">
                <Dialog open={showContactModal} onOpenChange={setShowContactModal}>
                  <DialogTrigger asChild>
                    <Button
                      className="w-full bg-secondary hover:bg-secondary/90 text-white"
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </DialogTrigger>
                  <DialogContent 
                    className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto"
                    style={{ zIndex: Z_INDICES.MODAL }}
                  >
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-center mb-2">
                        Start Your Digital Transformation
                      </DialogTitle>
                      <p className="text-muted-foreground text-center mb-6">
                        Tell us about your project and we'll get back to you within 24 hours with a personalized proposal.
                      </p>
                    </DialogHeader>
                    <ContactForm onSuccess={() => setShowContactModal(false)} />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
};

export default Header;
