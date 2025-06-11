import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { Badge } from './badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';
import { 
  Zap, 
  TrendingUp, 
  Shield, 
  Smartphone, 
  Search, 
  Bot,
  BarChart3,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const features = [
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Google Analytics Integration',
    description: 'Complete tracking setup with performance monitoring',
    benefits: ['Real-time visitor tracking', 'Conversion rate optimization', 'Performance insights', 'ROI measurement'],
    demoUrl: '/demo#setup'
  },
  {
    id: 'performance',
    icon: Zap,
    title: 'Speed Optimization',
    description: 'Lightning-fast loading with advanced caching',
    benefits: ['Under 2-second load times', 'Mobile-optimized delivery', 'SEO performance boost', 'User experience enhancement'],
    demoUrl: '/demo#tools'
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO Excellence',
    description: 'Comprehensive search engine optimization',
    benefits: ['Higher search rankings', 'Increased organic traffic', 'Local SEO optimization', 'Content strategy'],
    demoUrl: '/demo#demos'
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Responsive design that works on all devices',
    benefits: ['Touch-friendly interface', 'Fast mobile loading', 'App-like experience', 'Cross-device consistency'],
    demoUrl: '/demo#demos'
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with data protection',
    benefits: ['SSL encryption', 'Data backup systems', 'Privacy compliance', 'Secure hosting'],
    demoUrl: '/demo#setup'
  },
  {
    id: 'ai',
    icon: Bot,
    title: 'AI Integration',
    description: 'Smart automation and customer engagement',
    benefits: ['Chatbot assistance', 'Lead qualification', 'Automated responses', 'Predictive analytics'],
    demoUrl: '/demo#demos'
  }
];

export function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState('analytics');
  const currentFeature = features.find(f => f.id === activeFeature) || features[0];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Complete Digital Solutions
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to transform your business with cutting-edge technology and proven methodologies
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Feature List */}
        <div className="lg:col-span-1 space-y-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeFeature === feature.id;
            
            return (
              <motion.button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                  isActive 
                    ? 'border-blue-200 bg-blue-50 shadow-md' 
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`h-5 w-5 ${isActive ? 'text-blue-600' : 'text-gray-600'}`} />
                  <div>
                    <h3 className={`font-medium ${isActive ? 'text-blue-900' : 'text-gray-900'}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm ${isActive ? 'text-blue-700' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Feature Details */}
        <div className="lg:col-span-2">
          <motion.div
            key={currentFeature.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <currentFeature.icon className="h-8 w-8 text-blue-600" />
                    <div>
                      <CardTitle className="text-xl">{currentFeature.title}</CardTitle>
                      <CardDescription className="text-base">
                        {currentFeature.description}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary">Featured</Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentFeature.benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      className="flex-1"
                      onClick={() => window.location.href = currentFeature.demoUrl}
                    >
                      <span>See {currentFeature.title} Demo</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}