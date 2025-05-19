import { TestimonialCard } from '@/components/ui/testimonial-card';
import { ClientLogoCarousel } from '@/components/ui/client-logo-carousel';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { TESTIMONIALS } from '@/lib/constants';

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear directly from businesses we've helped transform.
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <TestimonialCard 
                quote={testimonial.quote}
                authorInitials={testimonial.authorInitials}
                authorName={testimonial.authorName}
                authorTitle={testimonial.authorTitle}
                authorColor={testimonial.authorColor}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Trusted by Innovative Companies</h3>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
          <ClientLogoCarousel />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
