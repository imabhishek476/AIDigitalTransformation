import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { Badge } from './badge';
import { trackDemoInteraction } from '@/lib/analytics';
import { Zap, TrendingUp, Users, Target } from 'lucide-react';

interface DemoCardProps {
  title: string;
  description: string;
  demoType: string;
  metrics: {
    label: string;
    value: string;
    change: string;
    icon: React.ReactNode;
  }[];
}

export function InteractiveDemoCard({ title, description, demoType, metrics }: DemoCardProps) {
  const [isActive, setIsActive] = useState(false);
  const [currentMetric, setCurrentMetric] = useState(0);

  const handleDemoStart = () => {
    setIsActive(true);
    trackDemoInteraction(demoType);
    
    // Cycle through metrics every 2 seconds
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 2000);

    // Stop after 8 seconds
    setTimeout(() => {
      clearInterval(interval);
      setIsActive(false);
      setCurrentMetric(0);
    }, 8000);
  };

  return (
    <Card className="relative overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          <Badge variant={isActive ? "default" : "secondary"}>
            {isActive ? "Running" : "Demo"}
          </Badge>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {/* Demo Metrics Display */}
          <div className="bg-slate-50 rounded-lg p-4 min-h-[120px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {isActive ? (
                <motion.div
                  key={currentMetric}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    {metrics[currentMetric]?.icon}
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {metrics[currentMetric]?.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metrics[currentMetric]?.label}
                  </div>
                  <div className="text-xs text-green-600 font-medium">
                    {metrics[currentMetric]?.change}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-muted-foreground"
                >
                  <Zap className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm">Click "Start Demo" to see results</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Demo Control */}
          <Button
            onClick={handleDemoStart}
            disabled={isActive}
            className="w-full"
            variant={isActive ? "secondary" : "default"}
          >
            {isActive ? "Demo Running..." : "Start Demo"}
          </Button>
        </div>
      </CardContent>

      {/* Animated background effect when active */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </Card>
  );
}

// Sample demo cards data
export const demoCards = [
  {
    title: "AI Lead Scoring",
    description: "See how AI identifies and prioritizes your best prospects",
    demoType: "ai_lead_scoring",
    metrics: [
      {
        label: "Lead Quality Score",
        value: "94%",
        change: "+23% vs manual",
        icon: <Target className="h-6 w-6 text-blue-600" />
      },
      {
        label: "Conversion Rate",
        value: "31%",
        change: "+127% improvement",
        icon: <TrendingUp className="h-6 w-6 text-green-600" />
      },
      {
        label: "Qualified Leads",
        value: "156",
        change: "+89% this month",
        icon: <Users className="h-6 w-6 text-purple-600" />
      }
    ]
  },
  {
    title: "SEO Performance Boost",
    description: "Watch your search rankings improve with our optimization",
    demoType: "seo_performance",
    metrics: [
      {
        label: "Keyword Rankings",
        value: "#3",
        change: "+15 positions",
        icon: <TrendingUp className="h-6 w-6 text-blue-600" />
      },
      {
        label: "Organic Traffic",
        value: "2,847",
        change: "+156% growth",
        icon: <Users className="h-6 w-6 text-green-600" />
      },
      {
        label: "Page Load Speed",
        value: "1.2s",
        change: "67% faster",
        icon: <Zap className="h-6 w-6 text-orange-600" />
      }
    ]
  }
];