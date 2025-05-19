import { ProcessStep } from '@/components/ui/process-step';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const processSteps = [
  {
    number: 1,
    title: 'Discovery',
    description: 'We analyze your current digital presence, business goals, and challenges to create a foundation for transformation.'
  },
  {
    number: 2,
    title: 'Strategy',
    description: 'Develop a comprehensive roadmap tailored to your specific needs and digital transformation objectives.'
  },
  {
    number: 3,
    title: 'Implementation',
    description: 'Execute the strategy with our expert team, implementing AI tools, digital marketing, and SEO solutions.'
  },
  {
    number: 4,
    title: 'Optimization',
    description: 'Continuous monitoring and refinement to ensure your digital transformation delivers ongoing results.'
  }
];

const Process = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Transformation Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A systematic approach to digital transformation that ensures successful outcomes for your business.
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-4 gap-8"
        >
          {processSteps.map((step) => (
            <motion.div key={step.number} variants={fadeInUp}>
              <ProcessStep 
                number={step.number}
                title={step.title}
                description={step.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
