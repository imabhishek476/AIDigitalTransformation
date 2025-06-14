import { Button } from '@/components/ui/button';
import { StatsCard } from '@/components/ui/stats-card';
import { AIChatbotDemo } from '@/components/ui/ai-chatbot-demo';
import { ContactForm } from '@/components/ui/contact-form';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Z_INDICES } from '@/lib/layout-stability';
import { useState, useRef } from 'react';

const stats = [
  { value: '250+', label: 'Clients Transformed' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '300%', label: 'Average ROI' },
];

const Hero = () => {
  const [showChatDemo, setShowChatDemo] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const demoRef = useRef<HTMLDivElement>(null);

  const toggleChatDemo = () => {
    setShowChatDemo(!showChatDemo);
  };

  return (
    <section id="hero" className="pt-28 pb-20 bg-gradient-hero relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* AI Demo Suite Modal */}
        {showChatDemo && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4" 
            style={{ zIndex: Z_INDICES.MODAL_BACKDROP }}
            onClick={toggleChatDemo}
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-title"
            aria-describedby="demo-description"
          >
            <div 
              ref={demoRef}
              onClick={(e) => e.stopPropagation()} 
              className="bg-white rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden max-h-[90vh] overflow-y-auto"
              style={{ zIndex: Z_INDICES.MODAL }}
            >
              <div className="bg-primary p-4 text-white flex justify-between items-center">
                <div>
                  <span id="demo-title" className="font-semibold text-lg">NexiFront AI Demo Suite</span>
                  <p id="demo-description" className="text-sm opacity-90">Experience our AI-powered solutions</p>
                </div>
                <button 
                  onClick={toggleChatDemo}
                  className="text-white hover:text-white/80 transition-colors"
                  aria-label="Close demo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* AI Chatbot Demo */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-center">AI Chatbot Assistant</h3>
                    <div className="border rounded-lg overflow-hidden h-[500px]">
                      <AIChatbotDemo />
                    </div>
                  </div>
                  
                  {/* Interactive Tools */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-center">Interactive Tools</h3>
                    <div className="space-y-4">
                      <Link href="/demo" className="block">
                        <div className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-all group cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900 group-hover:text-primary">ROI Calculator</h4>
                              <p className="text-sm text-gray-600">Calculate your digital transformation ROI</p>
                            </div>
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                      
                      <Link href="/demo" className="block">
                        <div className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-all group cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900 group-hover:text-primary">Analytics Setup</h4>
                              <p className="text-sm text-gray-600">Configure Google Analytics in minutes</p>
                            </div>
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                      
                      <Link href="/demo" className="block">
                        <div className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-all group cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900 group-hover:text-primary">Speed Test Tool</h4>
                              <p className="text-sm text-gray-600">Analyze your website performance</p>
                            </div>
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                      
                      <div className="mt-6 pt-4 border-t">
                        <Link href="/demo">
                          <Button className="w-full bg-secondary hover:bg-secondary/90">
                            View All Interactive Demos →
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col lg:flex-row items-center min-h-[700px]"
        >
          <motion.div 
            variants={fadeInUp}
            className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12"
          >
            <div className="mb-6">
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-4 font-medium">
                Human-Guided AI Solutions
              </div>
              
              {/* The NexiFront Approach Quote - Moved Higher */}
              <motion.div 
                variants={fadeInUp}
                className="bg-white/90 backdrop-blur-sm border border-gray-300/60 rounded-2xl p-6 mb-6 shadow-lg"
              >
                <div>
                  <p className="text-lg text-gray-700 italic mb-3 font-medium leading-relaxed">
                    "Generic AI tools create solutions in search of problems. We collaborate with you to solve your actual challenges."
                  </p>
                  <p className="text-sm text-primary font-semibold">— The NexiFront Approach</p>
                </div>
              </motion.div>
              
              <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">Trusted Guidance for</span>{' '}
                <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">Digital Transformation</span>
              </h1>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
              Combining cutting-edge AI technology with human expertise to deliver personalized solutions that drive real business results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-lg">
              <Dialog open={showContactModal} onOpenChange={setShowContactModal}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white py-4 px-8 text-base font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    aria-label="Get started with NexiFront services - open contact form"
                  >
                    GET STARTED
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
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
                size="lg"
                variant="outline"
                className="py-4 px-8 text-base font-semibold rounded-lg transition-all duration-300 border-2 border-gray-800 text-gray-800 hover:border-primary hover:bg-primary hover:text-white transform hover:-translate-y-1"
                aria-label="Try our AI chatbot demo and interactive tools"
                onClick={toggleChatDemo}
              >
                TRY AI DEMO
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="lg:w-1/2 relative max-w-lg mx-auto lg:mx-0"
          >
            {/* Floating Cards - Fixed positioning */}
            <div className="relative">
              <div 
                className="absolute top-8 left-8 transform -translate-x-2 -translate-y-2 floating-element"
                style={{ zIndex: Z_INDICES.DROPDOWN }}
              >
                <div className="bg-white rounded-xl p-3 shadow-xl border border-gray-200 backdrop-blur-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-gray-800 whitespace-nowrap">AI Analytics</span>
                  </div>
                </div>
              </div>
              
              <div 
                className="absolute bottom-8 right-8 transform translate-x-2 translate-y-2 floating-element"
                style={{ zIndex: Z_INDICES.DROPDOWN }}
              >
                <div className="bg-white rounded-xl p-3 shadow-xl border border-gray-200 backdrop-blur-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-gray-800 whitespace-nowrap">98% Success</span>
                  </div>
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 relative">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
                  alt="Digital transformation team meeting"
                  className="w-full h-auto"
                  aspectRatio="4/3"
                  width={1200}
                  height={800}
                  priority={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          role="region"
          aria-label="Company statistics"
        >
          {stats.map((stat, index) => (
            <StatsCard key={index} value={stat.value} label={stat.label} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
