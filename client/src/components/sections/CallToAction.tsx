import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

const CallToAction = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-white/80 text-lg mb-8">
            Join hundreds of businesses that have successfully navigated their digital transformation journey with our expert guidance.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => scrollToSection('#contact')}
            className="bg-white text-primary hover:bg-white/90"
          >
            Start Your Transformation Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
