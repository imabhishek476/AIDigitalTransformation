import { motion } from 'framer-motion';
import { AnalyticsSetupWizard } from '@/components/ui/analytics-setup-wizard';
import { ROICalculator, LiveMetricsDashboard, SpeedTestDemo } from '@/components/ui/interactive-features';
import { InteractiveDemoCard, demoCards } from '@/components/ui/interactive-demo-card';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, Settings, Zap } from 'lucide-react';

export default function DemoFeatures() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/50 pt-24">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive Demo Features
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of digital transformation with our interactive tools and analytics setup
          </p>
          <Badge variant="outline" className="mt-4">
            Live Demo Environment
          </Badge>
        </motion.div>

        <Tabs defaultValue="setup" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="setup" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Analytics Setup
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Interactive Tools
            </TabsTrigger>
            <TabsTrigger value="demos" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Live Demos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="setup" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <AnalyticsSetupWizard />
            </motion.div>

            <Card>
              <CardHeader>
                <CardTitle>What Gets Tracked</CardTitle>
                <CardDescription>
                  Once analytics are set up, you'll automatically track these key metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { metric: 'Page Views & Navigation', description: 'Track visitor journey through your site' },
                    { metric: 'Contact Form Submissions', description: 'Monitor lead generation effectiveness' },
                    { metric: 'Demo Interactions', description: 'See which demos engage users most' },
                    { metric: 'Scroll Depth Analysis', description: 'Understand content engagement levels' },
                    { metric: 'Performance Metrics', description: 'Core Web Vitals and load times' },
                    { metric: 'User Engagement', description: 'Time on site and interaction patterns' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-medium text-sm mb-1">{item.metric}</h4>
                      <p className="text-xs text-gray-600">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tools" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <ROICalculator />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <SpeedTestDemo />
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="demos" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <LiveMetricsDashboard />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {demoCards.map((demo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <InteractiveDemoCard {...demo} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}