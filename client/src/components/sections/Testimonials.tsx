import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Award, BookOpen, Users, Lightbulb, Clock, Target } from 'lucide-react';

const OurMethodology = () => {
  const methodologySteps = [
    {
      icon: Users,
      step: "01",
      title: "Discovery & Assessment",
      description: "We begin with in-depth consultations to understand your business goals, current challenges, and growth objectives.",
      color: "text-primary"
    },
    {
      icon: Target,
      step: "02", 
      title: "Strategic Planning",
      description: "Our team develops a customized digital transformation roadmap aligned with your specific business needs and budget.",
      color: "text-secondary"
    },
    {
      icon: Lightbulb,
      step: "03",
      title: "Solution Design",
      description: "We design and prototype solutions that integrate seamlessly with your existing operations while maximizing efficiency.",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      step: "04",
      title: "Implementation",
      description: "Our experts handle the technical implementation with minimal disruption to your daily business operations.",
      color: "text-secondary"
    },
    {
      icon: Award,
      step: "05",
      title: "Testing & Optimization",
      description: "We thoroughly test all systems and optimize performance to ensure everything works perfectly before launch.",
      color: "text-primary"
    },
    {
      icon: Clock,
      step: "06",
      title: "Ongoing Support",
      description: "Post-launch, we provide continuous monitoring, updates, and strategic guidance as your business evolves.",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5" aria-labelledby="methodology-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="methodology-heading" className="text-3xl md:text-4xl font-bold mb-4">Our Proven Methodology</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A systematic approach to digital transformation that ensures sustainable results and long-term success for your business.
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {methodologySteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 bg-primary text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                  {step.step}
                </div>
                <div className={`${step.color} mb-4`}>
                  <IconComponent size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default OurMethodology;
