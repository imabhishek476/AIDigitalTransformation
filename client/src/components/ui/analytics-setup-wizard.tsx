import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { Input } from './input';
import { Badge } from './badge';
import { Progress } from './progress';
import { CheckCircle, Copy, ExternalLink, AlertCircle, BarChart3 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const steps = [
  {
    id: 1,
    title: "Create Google Analytics Account",
    description: "Set up your free Google Analytics account",
    action: "Visit Google Analytics",
    url: "https://analytics.google.com/",
    instructions: [
      "Click 'Get started for free'",
      "Sign in with your Google account",
      "Click 'Start measuring'"
    ]
  },
  {
    id: 2,
    title: "Configure Property Settings",
    description: "Set up your website property",
    instructions: [
      "Account name: 'NexiFront'",
      "Property name: 'NexiFront Website'",
      "Choose your timezone and currency",
      "Select 'Web' as platform"
    ]
  },
  {
    id: 3,
    title: "Create Data Stream",
    description: "Connect your website to analytics",
    instructions: [
      "Enter your website URL",
      "Stream name: 'NexiFront Main Site'",
      "Click 'Create stream'",
      "Copy your Measurement ID (G-XXXXXXXXXX)"
    ]
  },
  {
    id: 4,
    title: "Add to Replit",
    description: "Configure analytics in your project",
    instructions: [
      "Go to Secrets tab in Replit",
      "Add key: VITE_GA_MEASUREMENT_ID",
      "Paste your Measurement ID as value",
      "Click 'Add Secret'"
    ]
  }
];

export function AnalyticsSetupWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [measurementId, setMeasurementId] = useState('');
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const { toast } = useToast();

  const progress = (completedSteps.length / steps.length) * 100;

  const handleStepComplete = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
    if (stepId < steps.length) {
      setCurrentStep(stepId + 1);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Text copied to clipboard",
    });
  };

  const handleMeasurementIdSubmit = () => {
    if (measurementId.match(/^G-[A-Z0-9]{10}$/)) {
      copyToClipboard(measurementId);
      handleStepComplete(4);
      toast({
        title: "Analytics Setup Complete!",
        description: "Your measurement ID has been copied. Add it to Replit Secrets.",
      });
    } else {
      toast({
        title: "Invalid Format",
        description: "Measurement ID should look like G-XXXXXXXXXX",
        variant: "destructive"
      });
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-blue-600" />
          Google Analytics Setup Wizard
        </CardTitle>
        <CardDescription>
          Follow these steps to track your website performance
        </CardDescription>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Setup Status</span>
            <span>{completedSteps.length}/{steps.length} complete</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <AnimatePresence mode="wait">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: currentStep === step.id ? 1 : 0.6,
                x: 0,
                scale: currentStep === step.id ? 1 : 0.95
              }}
              className={`border rounded-lg p-4 ${
                currentStep === step.id ? 'border-blue-200 bg-blue-50/50' : 'border-gray-200'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  {completedSteps.includes(step.id) ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <div className={`w-5 h-5 rounded-full border-2 ${
                      currentStep === step.id ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                    }`}>
                      {currentStep === step.id && (
                        <div className="w-full h-full rounded-full bg-white scale-50" />
                      )}
                    </div>
                  )}
                  <div>
                    <h3 className="font-medium">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
                <Badge variant={completedSteps.includes(step.id) ? "default" : "secondary"}>
                  Step {step.id}
                </Badge>
              </div>

              <div className="ml-8 space-y-2">
                {step.instructions.map((instruction, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    {instruction}
                  </div>
                ))}
              </div>

              {step.url && (
                <div className="ml-8 mt-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(step.url, '_blank')}
                    className="gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {step.action}
                  </Button>
                </div>
              )}

              {step.id === 4 && currentStep === 4 && (
                <div className="ml-8 mt-3 space-y-3">
                  <div className="flex gap-2">
                    <Input
                      placeholder="G-XXXXXXXXXX"
                      value={measurementId}
                      onChange={(e) => setMeasurementId(e.target.value)}
                      className="font-mono"
                    />
                    <Button onClick={handleMeasurementIdSubmit} size="sm">
                      Verify & Copy
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-amber-600">
                    <AlertCircle className="h-4 w-4" />
                    Paste your Measurement ID from Google Analytics
                  </div>
                </div>
              )}

              {currentStep === step.id && step.id < 4 && (
                <div className="ml-8 mt-3">
                  <Button
                    onClick={() => handleStepComplete(step.id)}
                    size="sm"
                    variant="default"
                  >
                    Mark Complete
                  </Button>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {completedSteps.length === steps.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-emerald-50 border border-emerald-200 rounded-lg p-4"
          >
            <div className="flex items-center gap-2 text-emerald-700 font-medium mb-2">
              <CheckCircle className="h-5 w-5" />
              Analytics Setup Complete!
            </div>
            <p className="text-sm text-emerald-600">
              Your website is now tracking visitor behavior, form submissions, and performance metrics. 
              Data will appear in Google Analytics within 24-48 hours.
            </p>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}