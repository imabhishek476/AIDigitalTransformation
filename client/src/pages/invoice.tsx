import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function Invoice() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Print-specific styles */}
      <style jsx>{`
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
          <h1 className="text-2xl font-bold text-primary">NexiFront Invoice Template</h1>
          <Button onClick={handlePrint}>Print Invoice</Button>
        </div>
      </div>

      {/* Invoice content */}
      <div className="print-page max-w-4xl mx-auto bg-white p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex-1">
            <div className="text-4xl font-bold text-primary mb-2">NexiFront</div>
            <div className="text-lg text-secondary font-medium mb-4">Digital Transformation Specialists</div>
            
            <div className="space-y-1 text-sm text-gray-600">
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
          
          {/* Logo and Invoice title */}
          <div className="text-right">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 ml-auto">
              <span className="text-white font-bold text-xl">NF</span>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">INVOICE</div>
          </div>
        </div>

        {/* Decorative line */}
        <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mb-8"></div>

        {/* Invoice details and Bill To */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Bill To:</h3>
            <div className="space-y-2">
              <div className="border-b border-gray-300 pb-1 w-full"></div>
              <div className="border-b border-gray-300 pb-1 w-full"></div>
              <div className="border-b border-gray-300 pb-1 w-full"></div>
              <div className="border-b border-gray-300 pb-1 w-full"></div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Invoice #:</span>
              <span className="border-b border-gray-300 pb-1 w-32"></span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Date:</span>
              <span className="border-b border-gray-300 pb-1 w-32"></span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Due Date:</span>
              <span className="border-b border-gray-300 pb-1 w-32"></span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Project:</span>
              <span className="border-b border-gray-300 pb-1 w-32"></span>
            </div>
          </div>
        </div>

        {/* Services table */}
        <div className="mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="border border-gray-300 p-3 text-left">Description</th>
                <th className="border border-gray-300 p-3 text-center w-20">Qty</th>
                <th className="border border-gray-300 p-3 text-right w-24">Rate</th>
                <th className="border border-gray-300 p-3 text-right w-24">Amount</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(8)].map((_, i) => (
                <tr key={i} className="border-b">
                  <td className="border border-gray-300 p-3">
                    <div className="border-b border-gray-200 pb-1 w-full h-4"></div>
                  </td>
                  <td className="border border-gray-300 p-3 text-center">
                    <div className="border-b border-gray-200 pb-1 w-full h-4"></div>
                  </td>
                  <td className="border border-gray-300 p-3 text-right">
                    <div className="border-b border-gray-200 pb-1 w-full h-4"></div>
                  </td>
                  <td className="border border-gray-300 p-3 text-right">
                    <div className="border-b border-gray-200 pb-1 w-full h-4"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals section */}
        <div className="flex justify-end mb-8">
          <div className="w-80">
            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-medium">Subtotal:</span>
                <span className="border-b border-gray-300 pb-1 w-24"></span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-medium">Tax (____%):</span>
                <span className="border-b border-gray-300 pb-1 w-24"></span>
              </div>
              <div className="flex justify-between py-3 border-b-2 border-primary bg-primary/5">
                <span className="font-bold text-lg">Total:</span>
                <span className="border-b-2 border-primary pb-1 w-32 font-bold"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment terms and notes */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Payment Terms:</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <div>• Payment due within 30 days</div>
              <div>• Late payments subject to 1.5% monthly fee</div>
              <div>• Make checks payable to NexiFront</div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Notes:</h3>
            <div className="space-y-2">
              <div className="border-b border-gray-200 h-4"></div>
              <div className="border-b border-gray-200 h-4"></div>
              <div className="border-b border-gray-200 h-4"></div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-6">
          <div className="text-center">
            <div className="text-lg font-semibold text-primary mb-2">Thank you for your business!</div>
            <div className="text-sm text-gray-500">
              Questions about this invoice? Contact us at contact@nexifront.com or (415) 555-1234
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}