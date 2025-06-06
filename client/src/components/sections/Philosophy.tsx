import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Users, Brain, Shield, Headphones } from 'lucide-react';

const Philosophy = () => {
  const differentiators = [
    {
      icon: Users,
      title: 'Consultative Approach',
      description: 'We collaborate with you to understand your specific challenges before suggesting any solutions, ensuring tools actually serve your needs.',
      color: 'text-primary'
    },
    {
      icon: Brain,
      title: 'Human-AI Collaboration',
      description: 'We work alongside AI tools, providing the critical thinking and business context that generic automation lacks.',
      color: 'text-secondary'
    },
    {
      icon: Shield,
      title: 'Thoughtful Implementation',
      description: 'We avoid the "AI for AI\'s sake" mentality, carefully evaluating when and how AI adds genuine value.',
      color: 'text-primary'
    },
    {
      icon: Headphones,
      title: 'Ongoing Support',
      description: 'Complex solutions require ongoing human collaboration. Our dedicated team ensures long-term success.',
      color: 'text-primary'
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
            Why <span className="text-primary">Human Expertise</span> Matters in the <span className="text-secondary">AI Era</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            While others rush to deploy generic AI tools created without understanding your business, NexiFront takes a consultative approach to understand your unique challenges and create solutions that actually make sense for your situation.
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