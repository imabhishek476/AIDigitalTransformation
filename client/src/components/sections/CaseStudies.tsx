import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/ui/contact-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { CheckCircle, Target, Zap, Shield, Users, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const WhyChooseUs = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  const advantages = [
    {
      icon: Users,
      title: "Human-Guided Approach",
      description: "Unlike automated solutions, we combine AI technology with expert human oversight to ensure your digital transformation aligns with your business goals.",
      color: "text-primary"
    },
    {
      icon: Target,
      title: "Consultative Process",
      description: "We start by understanding your unique challenges and objectives, then design customized solutions that address your specific business needs.",
      color: "text-secondary"
    },
    {
      icon: Zap,
      title: "Proven Methodology",
      description: "Our systematic approach ensures sustainable results through careful planning, implementation, and ongoing optimization.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Ongoing Support",
      description: "Digital transformation doesn't end at launch. We provide continuous monitoring, updates, and strategic guidance as your business evolves.",
      color: "text-secondary"
    },
    {
      icon: TrendingUp,
      title: "Measurable Results",
      description: "Every strategy we implement includes clear metrics and regular reporting so you can see the impact on your business growth.",
      color: "text-primary"
    },
    {
      icon: CheckCircle,
      title: "Scalable Solutions",
      description: "Our solutions grow with your business, ensuring your digital infrastructure can handle increased demand and complexity.",
      color: "text-secondary"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white" aria-labelledby="advantages-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="advantages-heading" className="text-3xl md:text-4xl font-bold mb-4">Why Choose NexiFront</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our unique approach to digital transformation combines cutting-edge technology with human expertise to deliver sustainable business growth.
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className={`${advantage.color} mb-4`}>
                  <IconComponent size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Dialog open={showContactModal} onOpenChange={setShowContactModal}>
            <DialogTrigger asChild>
              <Button size="lg">
                See How We Can Help Your Business
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
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
