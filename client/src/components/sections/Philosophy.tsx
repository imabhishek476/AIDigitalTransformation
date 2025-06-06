import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Users, Brain, Shield, Headphones } from 'lucide-react';

const Philosophy = () => {
  const differentiators = [
    {
      icon: Brain,
      title: 'Strategic Implementation',
      description: 'We evaluate when and how technology adds genuine value, avoiding the "AI for AI\'s sake" mentality.',
      color: 'text-primary'
    },
    {
      icon: Users,
      title: 'Collaborative Partnership',
      description: 'Our consultative process ensures solutions align with your specific business challenges and goals.',
      color: 'text-secondary'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-primary">Human-Guided</span> Digital Transformation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We believe technology should amplify human intelligence, not replace it. Our consultative approach ensures your digital transformation serves your actual business needs.
          </p>
          
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <div className="border-l-4 border-primary pl-6">
              <p className="text-xl text-gray-700 italic mb-4">
                "Generic AI tools create solutions in search of problems. We collaborate with you to solve your actual challenges."
              </p>
              <p className="text-sm text-gray-500 font-medium">— The NexiFront Approach</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {differentiators.map((item, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className={`${item.color} mb-4`}>
                <item.icon className="h-12 w-12 opacity-90" strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-primary/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-primary">The Bottom Line</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Technology should amplify human intelligence, not replace it. NexiFront's approach ensures your digital transformation is built on solid foundations with the ongoing support needed for complex, evolving business challenges.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;