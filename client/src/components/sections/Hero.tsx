import { Button } from '@/components/ui/button';
import { StatsCard } from '@/components/ui/stats-card';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const stats = [
  { value: '250+', label: 'Clients Transformed' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '300%', label: 'Average ROI' },
];

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              Transform Your <span className="text-primary">Digital Presence</span> with AI-Powered Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              We help small to medium businesses modernize their digital strategy with cutting-edge AI tools, SEO optimization, and comprehensive marketing solutions.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="text-center"
              >
                Start Your Transformation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('#services')}
                className="text-center border-primary text-primary hover:bg-primary/5"
              >
                Explore Services
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="md:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800" 
              alt="Digital transformation team meeting" 
              className="rounded-xl shadow-xl w-full h-auto" 
            />
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
