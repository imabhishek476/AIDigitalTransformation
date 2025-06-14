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
      icon: TrendingUp,
      title: "Measurable ROI",
      description: "Every strategy includes clear metrics and regular reporting so you can track the impact on your business growth and revenue.",
      color: "text-primary"
    },
    {
      icon: CheckCircle,
      title: "Scalable Infrastructure",
      description: "Our solutions grow with your business, ensuring your digital systems can handle increased demand and complexity.",
      color: "text-secondary"
    },
    {
      icon: Shield,
      title: "Ongoing Partnership",
      description: "We provide continuous monitoring, updates, and strategic guidance as your business evolves and new opportunities emerge.",
      color: "text-primary"
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
          <h2 id="advantages-heading" className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">What</span>{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">You Get</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tangible business outcomes from your digital transformation investment.
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
