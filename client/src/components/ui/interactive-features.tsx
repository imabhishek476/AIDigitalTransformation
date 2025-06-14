import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { Badge } from './badge';
import { Slider } from './slider';
import { trackEvent } from '@/lib/analytics';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  MousePointer, 
  Eye,
  Calculator,
  Zap,
  Target
} from 'lucide-react';

// ROI Calculator Component
export function ROICalculator() {
  const [monthlyVisitors, setMonthlyVisitors] = useState([1000]);
  const [currentConversion, setCurrentConversion] = useState([2]);
  const [averageValue, setAverageValue] = useState([100]);
  const [improvementTarget, setImprovementTarget] = useState([50]);

  const currentMonthlyRevenue = (monthlyVisitors[0] * currentConversion[0] / 100) * averageValue[0];
  const improvedConversion = currentConversion[0] * (1 + improvementTarget[0] / 100);
  const projectedRevenue = (monthlyVisitors[0] * improvedConversion / 100) * averageValue[0];
  const monthlyIncrease = projectedRevenue - currentMonthlyRevenue;
  const annualIncrease = monthlyIncrease * 12;

  useEffect(() => {
    const timer = setTimeout(() => {
      trackEvent('roi_calculator_used', 'engagement', 'calculator_interaction');
    }, 3000);
    return () => clearTimeout(timer);
  }, [monthlyVisitors, currentConversion, averageValue, improvementTarget]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-green-600" />
          ROI Calculator
        </CardTitle>
        <CardDescription>
          See the potential impact of digital transformation on your revenue
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">
              Monthly Website Visitors: {monthlyVisitors[0].toLocaleString()}
            </label>
            <Slider
              value={monthlyVisitors}
              onValueChange={setMonthlyVisitors}
              max={50000}
              min={100}
              step={100}
              className="w-full"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Current Conversion Rate: {currentConversion[0]}%
            </label>
            <Slider
              value={currentConversion}
              onValueChange={setCurrentConversion}
              max={10}
              min={0.5}
              step={0.1}
              className="w-full"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Average Order Value: ${averageValue[0]}
            </label>
            <Slider
              value={averageValue}
              onValueChange={setAverageValue}
              max={1000}
              min={10}
              step={10}
              className="w-full"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Target Improvement: +{improvementTarget[0]}%
            </label>
            <Slider
              value={improvementTarget}
              onValueChange={setImprovementTarget}
              max={200}
              min={10}
              step={5}
              className="w-full"
            />
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 gap-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              ${monthlyIncrease.toFixed(0)}
            </div>
            <div className="text-sm text-gray-600">Monthly Increase</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              ${annualIncrease.toFixed(0)}
            </div>
            <div className="text-sm text-gray-600">Annual Increase</div>
          </div>
        </motion.div>

        <Button className="w-full" onClick={() => trackEvent('roi_calculator_cta', 'conversion', 'get_started')}>
          Get Started with These Results
        </Button>
      </CardContent>
    </Card>
  );
}

// Live Metrics Dashboard Preview
export function LiveMetricsDashboard() {
  const [metrics, setMetrics] = useState({
    visitors: 127,
    engagement: 68,
    conversions: 12,
    revenue: 2340
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        visitors: prev.visitors + Math.floor(Math.random() * 3),
        engagement: Math.max(50, Math.min(100, prev.engagement + (Math.random() - 0.5) * 10)),
        conversions: prev.conversions + (Math.random() > 0.7 ? 1 : 0),
        revenue: prev.revenue + Math.floor(Math.random() * 200)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const metricsData = [
    { label: 'Active Visitors', value: metrics.visitors, icon: Users, color: 'text-blue-600', change: '+12%' },
    { label: 'Engagement Score', value: `${metrics.engagement.toFixed(1)}%`, icon: Eye, color: 'text-green-600', change: '+8%' },
    { label: 'Conversions Today', value: metrics.conversions, icon: Target, color: 'text-purple-600', change: '+24%' },
    { label: 'Revenue Today', value: `$${metrics.revenue}`, icon: DollarSign, color: 'text-orange-600', change: '+15%' }
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-blue-600" />
          Live Analytics Preview
        </CardTitle>
        <CardDescription>
          Real-time metrics you'll see with proper analytics setup
        </CardDescription>
        <Badge variant="outline" className="w-fit">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
          Live Demo
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {metricsData.map((metric, index) => (
            <motion.div
              key={metric.label}
              layout
              className="p-4 border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <metric.icon className={`h-5 w-5 ${metric.color}`} />
                <Badge variant="secondary" className="text-xs">
                  {metric.change}
                </Badge>
              </div>
              <motion.div
                key={metric.value}
                initial={{ scale: 1.1, color: '#16a34a' }}
                animate={{ scale: 1, color: '#000000' }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold"
              >
                {metric.value}
              </motion.div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Interactive Speed Test
export function SpeedTestDemo() {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<{
    loadTime: number;
    score: number;
    recommendations: string[];
  } | null>(null);

  const runSpeedTest = async () => {
    setIsRunning(true);
    setProgress(0);
    setResults(null);

    trackEvent('speed_test_started', 'engagement', 'performance_demo');

    // Simulate speed test progress
    for (let i = 0; i <= 100; i += 2) {
      await new Promise(resolve => setTimeout(resolve, 50));
      setProgress(i);
    }

    // Simulate results
    const mockResults = {
      loadTime: 1.2 + Math.random() * 0.8,
      score: 85 + Math.floor(Math.random() * 10),
      recommendations: [
        'Optimize images for faster loading',
        'Enable compression for better performance',
        'Minimize CSS and JavaScript files'
      ]
    };

    setResults(mockResults);
    setIsRunning(false);
    trackEvent('speed_test_completed', 'engagement', 'performance_demo');
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-yellow-600" />
          Website Speed Test
        </CardTitle>
        <CardDescription>
          See how performance optimization impacts your site
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!isRunning && !results && (
          <Button onClick={runSpeedTest} className="w-full">
            Run Speed Test
          </Button>
        )}

        {isRunning && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
              <span className="text-sm">Testing website performance...</span>
            </div>
          </div>
        )}

        <AnimatePresence>
          {results && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    {results.loadTime.toFixed(1)}s
                  </div>
                  <div className="text-sm text-gray-600">Load Time</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">
                    {results.score}/100
                  </div>
                  <div className="text-sm text-gray-600">Performance Score</div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm">Optimization Opportunities:</h4>
                {results.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    {rec}
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => setResults(null)}
              >
                Run Another Test
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}