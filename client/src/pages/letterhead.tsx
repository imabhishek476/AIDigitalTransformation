import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { NexiFrontIcon } from '@/components/ui/nexifront-logo';

export default function Letterhead() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Print-specific styles */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .print-page { 
            page-break-after: always; 
            min-height: 100vh;
            padding: 0;
            margin: 0;
          }
          body { margin: 0; padding: 0; }
        }
      `}</style>

      {/* Control buttons - hidden when printing */}
      <div className="no-print p-4 bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">NexiFront Letterhead Template</h1>
          <Button onClick={handlePrint}>Print Letterhead</Button>
        </div>
      </div>

      {/* Letterhead content */}
      <div className="print-page max-w-4xl mx-auto bg-white p-8">
        {/* Header with logo and company info */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex-1">
            <div className="text-4xl font-bold text-primary mb-2">NexiFront</div>
            <div className="text-lg text-secondary font-medium mb-4">Trusted Guidance for the Digital Future</div>
            
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span>123 Innovation Drive, Tech Hub, San Francisco, CA 94103</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span>(415) 555-1234</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span>contact@nexifront.com</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-2 text-primary" />
                <span>www.nexifront.com</span>
              </div>
            </div>
          </div>
          
          {/* Logo area */}
          <div className="flex justify-end">
            <NexiFrontIcon size={80} />
          </div>
        </div>

        {/* Decorative line */}
        <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mb-12"></div>

        {/* Date and recipient area */}
        <div className="mb-8">
          <div className="text-right mb-8">
            <span className="text-gray-600">Date: </span>
            <span className="border-b border-gray-300 inline-block w-32 pb-1"></span>
          </div>
          
          <div className="space-y-2">
            <div>
              <span className="text-gray-600">To: </span>
              <span className="border-b border-gray-300 inline-block w-64 pb-1"></span>
            </div>
            <div className="ml-8">
              <span className="border-b border-gray-300 inline-block w-64 pb-1"></span>
            </div>
            <div className="ml-8">
              <span className="border-b border-gray-300 inline-block w-64 pb-1"></span>
            </div>
          </div>
        </div>

        {/* Subject line */}
        <div className="mb-8">
          <span className="text-gray-600 font-medium">Subject: </span>
          <span className="border-b border-gray-300 inline-block w-96 pb-1"></span>
        </div>

        {/* Letter content area */}
        <div className="space-y-6 mb-16">
          <div className="text-gray-600">Dear ___________________________,</div>
          
          {/* Multiple lines for letter content */}
          {[...Array(15)].map((_, i) => (
            <div key={i} className="border-b border-gray-200 h-6"></div>
          ))}
        </div>

        {/* Signature area */}
        <div className="flex justify-between items-end">
          <div className="space-y-4">
            <div className="text-gray-600">Sincerely,</div>
            <div className="border-b border-gray-300 w-48 h-16"></div>
            <div className="space-y-1">
              <div className="border-b border-gray-300 w-48 pb-1"></div>
              <div className="text-sm text-gray-500">Name & Title</div>
            </div>
          </div>
          
          <div className="text-right text-sm text-gray-500">
            <div className="font-medium text-primary">NexiFront</div>
            <div>Digital Transformation Specialists</div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-4 border-t border-gray-200 text-center text-xs text-gray-400">
          Specializing in AI Integration • SEO Optimization • Digital Marketing • Website Development
        </div>
      </div>
    </div>
  );
}