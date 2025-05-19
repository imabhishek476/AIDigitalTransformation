import { Button } from '@/components/ui/button';
import { CaseStudyCard } from '@/components/ui/case-study-card';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { CASE_STUDIES } from '@/lib/constants';

const CaseStudies = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how we've helped businesses across industries achieve digital transformation success.
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {CASE_STUDIES.map((study, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <CaseStudyCard 
                image={study.image}
                industry={study.industry}
                industryColor={study.industryColor}
                title={study.title}
                description={study.description}
                resultValue={study.resultValue}
                linkColor={study.linkColor}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('#contact')}
          >
            See How We Can Help Your Business
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
