import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/ui/contact-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { useState } from 'react';

const CallToAction = () => {
  const [showContactModal, setShowContactModal] = useState(false);

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
            Join hundreds of businesses that have successfully navigated their digital transformation journey with NexiFront's expert guidance.
          </p>
          <Dialog open={showContactModal} onOpenChange={setShowContactModal}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                Start Your Transformation Today
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
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

export default CallToAction;
