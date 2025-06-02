import { TeamMember } from '@/components/ui/team-member';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { TEAM_MEMBERS } from '@/lib/constants';

const Team = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our diverse team of digital transformation specialists brings together expertise across AI, marketing, and technology.
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <TeamMember 
                image={member.image}
                name={member.name}
                title={member.title}
                titleColor={member.titleColor}
                description={member.description}
                socials={member.socials}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 p-10 bg-primary/5 rounded-xl"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-10">
              <h3 className="text-2xl font-bold mb-4">Our Philosophy: Solutions That Actually Work</h3>
              <p className="text-gray-600 mb-4">
                We don't believe in pre-packaged solutions or generic AI tools that someone created without understanding your business. Instead, we take a consultative approach—diving deep into your specific challenges to create solutions that make sense.
              </p>
              <p className="text-gray-600">
                Our collaborative process ensures you get long-term solutions that actually work for your unique situation, not cookie-cutter implementations that work poorly because they weren't designed with your needs in mind.
              </p>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Our team collaborating on digital transformation solutions" 
                className="rounded-lg shadow-md w-full h-auto" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
