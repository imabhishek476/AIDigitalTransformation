import { Button } from '@/components/ui/button';
import { StatsCard } from '@/components/ui/stats-card';
import { AIChatbotDemo } from '@/components/ui/ai-chatbot-demo';
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
  const demoRef = useRef<HTMLDivElement>(null);
  
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleChatDemo = () => {
    setShowChatDemo(!showChatDemo);
  };

  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Chat Demo Modal */}
        {showChatDemo && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={toggleChatDemo}>
            <div 
              ref={demoRef}
              onClick={(e) => e.stopPropagation()} 
              className="bg-white rounded-xl shadow-2xl w-full max-w-xl overflow-hidden"
            >
              <div className="bg-primary p-3 text-white flex justify-between items-center">
                <div>
                  <span className="font-semibold">NexiFront AI Assistant</span>
                  <p className="text-xs opacity-80">See how AI can transform patient scheduling</p>
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
              <div className="h-[600px] max-h-[80vh]">
                <AIChatbotDemo />
              </div>
            </div>
          </div>
        )}
      
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center"
        >
          <motion.div 
            variants={fadeInUp}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight">
              <span className="text-primary">Trusted</span> <span className="text-secondary">Guidance</span> for the <span className="text-primary">Digital</span> <span className="text-accent">Future</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              We help small to medium businesses modernize their digital strategy with cutting-edge AI tools, SEO optimization, and comprehensive marketing solutions.
            </p>
            <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 mb-8">
              <Button
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="text-center py-6 px-8 text-lg font-medium bg-secondary hover:bg-secondary/90 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 rounded-lg"
              >
                Start Your Transformation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('#services')}
                className="text-center py-6 px-8 text-lg font-medium border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 shadow-md hover:shadow-lg rounded-lg"
              >
                Explore Services
              </Button>
            </div>
            <div>
              <Button
                variant="link"
                onClick={toggleChatDemo}
                className="flex items-center text-secondary hover:text-secondary/80 transition-colors group"
              >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                  See AI Chatbot Demo
                </span>
                <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="md:w-1/2"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800" 
                alt="Digital transformation team meeting" 
                className="w-full h-auto" 
              />
              <button
                onClick={toggleChatDemo}
                className="absolute inset-0 bg-black/30 flex items-center justify-center group hover:bg-black/40 transition-colors"
              >
                <div className="bg-white/90 p-3 rounded-full group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <span className="sr-only">Play AI Chatbot Demo</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
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
