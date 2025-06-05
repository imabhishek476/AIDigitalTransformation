import { ServiceCard } from '@/components/ui/service-card';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { SERVICES } from '@/lib/constants';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-cool" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold mb-4">Our Digital Transformation Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to elevate your business in the digital landscape, powered by cutting-edge AI technologies and marketing expertise.
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Available services"
        >
          {SERVICES.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <ServiceCard
                icon={service.icon}
                iconColor={service.iconColor}
                title={service.title}
                description={service.description}
                features={service.features}
                learnMoreColor={service.learnMoreColor}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
