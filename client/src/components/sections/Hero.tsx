import { Button } from '@/components/ui/button';
import { StatsCard } from '@/components/ui/stats-card';
import { AIChatbotDemo } from '@/components/ui/ai-chatbot-demo';
import { ContactForm } from '@/components/ui/contact-form';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* AI Demo Suite Modal */}
        {showChatDemo && (
          <div 
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" 
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
          className="relative z-10 flex flex-col lg:flex-row items-center max-w-7xl mx-auto min-h-[700px]"
        >
          <motion.div 
            variants={fadeInUp}
            className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12"
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
                Human-Guided AI Solutions
              </span>
              <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                Trusted Guidance for <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">Digital Transformation</span>
              </h1>
            </div>
            
            {/* The NexiFront Approach Quote - Prominent Placement */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 mb-8 shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-1 h-16 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                </div>
                <div>
                  <p className="text-lg text-gray-700 italic mb-3 font-medium leading-relaxed">
                    "Generic AI tools create solutions in search of problems. We collaborate with you to solve your actual challenges."
                  </p>
                  <p className="text-sm text-primary font-semibold">— The NexiFront Approach</p>
                </div>
              </div>
            </motion.div>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
              We combine cutting-edge technology with human expertise to deliver digital solutions that actually work for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
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
                className="py-4 px-8 text-base font-semibold rounded-lg transition-all duration-300 border-2 border-gray-300 hover:border-primary hover:bg-primary/5 hover:text-primary transform hover:-translate-y-1"
                aria-label="Try our AI chatbot demo and interactive tools"
                onClick={toggleChatDemo}
              >
                TRY AI DEMO
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="lg:w-1/2 relative"
          >
            {/* Floating Cards */}
            <div className="relative">
              <div className="absolute -top-8 -left-8 z-10">
                <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">AI-Powered Analytics</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 z-10">
                <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">98% Success Rate</span>
                  </div>
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
                  alt="Digital transformation team meeting"
                  className="w-full h-auto"
                  aspectRatio="4/3"
                  width={1200}
                  height={800}
                  priority={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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
