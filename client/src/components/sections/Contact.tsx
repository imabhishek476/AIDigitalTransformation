import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { MapPin, Mail, Phone, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { SocialIcon } from '@/components/ui/social-icons';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Company name is required'),
  service: z.string().min(1, 'Please select a service'),
  customService: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      service: '',
      customService: '',
      message: '',
    },
  });
  
  // State for showing custom service input
  const [showCustomService, setShowCustomService] = useState(false);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // If user selected custom service, include that in the message
      let submissionData = {...data};
      
      if (data.service === 'custom' && data.customService) {
        submissionData.message = `Custom Service Requested: ${data.customService}\n\n${data.message}`;
      }
      
      await apiRequest('POST', '/api/contact', submissionData);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      form.reset();
      setShowCustomService(false);
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
      console.error('Contact form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:w-1/2 lg:pr-16 mb-10 lg:mb-0"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                Ready to start your digital transformation journey? Contact us today to schedule a free consultation with our expert team.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Our Location</h3>
                    <p className="text-gray-600">123 Innovation Drive, Tech Hub, San Francisco, CA 94103</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email Us</h3>
                    <p className="text-gray-600">contact@nexifront.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Call Us</h3>
                    <p className="text-gray-600">(415) 555-1234</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <SocialIcon>
                  <Linkedin className="h-5 w-5" />
                </SocialIcon>
                <SocialIcon>
                  <Twitter className="h-5 w-5" />
                </SocialIcon>
                <SocialIcon>
                  <Facebook className="h-5 w-5" />
                </SocialIcon>
                <SocialIcon>
                  <Instagram className="h-5 w-5" />
                </SocialIcon>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="bg-light p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Alex Rivera" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="ABC Company" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service of Interest</FormLabel>
                          <Select 
                            onValueChange={(value) => {
                              field.onChange(value);
                              setShowCustomService(value === "custom");
                            }} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="ai-integration">AI Integration</SelectItem>
                              <SelectItem value="seo-optimization">SEO Optimization</SelectItem>
                              <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                              <SelectItem value="website-development">Website Development</SelectItem>
                              <SelectItem value="data-analytics">Data Analytics</SelectItem>
                              <SelectItem value="digital-strategy">Digital Strategy Consulting</SelectItem>
                              <SelectItem value="custom">What else would you love to have?</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {showCustomService && (
                      <FormField
                        control={form.control}
                        name="customService"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tell us what you're looking for</FormLabel>
                            <FormControl>
                              <Input placeholder="Describe your custom needs..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How Can We Help?</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project or requirements..." 
                              rows={4} 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
