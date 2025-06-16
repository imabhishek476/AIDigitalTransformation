import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertCircle, Smartphone, Monitor, Users } from 'lucide-react';
import { Link } from 'wouter';

export default function LayoutGuide() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Website Layout - What Really Matters for Your Business
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are the 3 most important things about how your website looks on different devices, 
            explained in simple terms that affect your business success.
          </p>
        </div>

        {/* Top 3 Critical Areas */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          
          {/* Mobile Experience */}
          <Card className="border-l-4 border-l-emerald-500">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Smartphone className="text-emerald-600" size={24} />
                <span>1. Mobile Phone Experience</span>
              </CardTitle>
              <Badge className="bg-emerald-100 text-emerald-800 w-fit">MOST CRITICAL</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-600">
                Over 60% of your visitors will use phones. If your site doesn't work well on mobile, 
                you lose more than half your potential customers.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle size={16} className="text-emerald-500" />
                  <span>Text is readable without zooming</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle size={16} className="text-emerald-500" />
                  <span>Buttons are easy to tap with fingers</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle size={16} className="text-emerald-500" />
                  <span>Contact form works smoothly</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle size={16} className="text-emerald-500" />
                  <span>Page loads quickly</span>
                </div>
              </div>
              
              <p className="text-xs text-emerald-700 bg-emerald-50 p-2 rounded">
                ✓ Your site already handles this well - navigation collapses to a menu button, 
                text stays readable, and forms work on all phone sizes.
              </p>
            </CardContent>
          </Card>

          {/* Navigation Usability */}
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="text-blue-600" size={24} />
                <span>2. Easy Navigation</span>
              </CardTitle>
              <Badge className="bg-blue-100 text-blue-800 w-fit">VERY IMPORTANT</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-600">
                Visitors need to find your services and contact information quickly, 
                or they'll leave for a competitor's site.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Menu appears clearly on all devices</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>"Get Started" button is prominent</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Contact section is easy to find</span>
                </div>
              </div>
              
              <p className="text-xs text-blue-700 bg-blue-50 p-2 rounded">
                ✓ Your navigation automatically adapts - full menu on computers, 
                hamburger menu on phones, with clear call-to-action buttons.
              </p>
            </CardContent>
          </Card>

          {/* Professional Appearance */}
          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Monitor className="text-purple-600" size={24} />
                <span>3. Professional Look</span>
              </CardTitle>
              <Badge className="bg-purple-100 text-purple-800 w-fit">IMPORTANT</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-600">
                Your site needs to look trustworthy and professional to convert visitors 
                into customers, especially for business services.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Logo and branding consistent</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Content arranged neatly</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Nothing looks broken or crowded</span>
                </div>
              </div>
              
              <p className="text-xs text-purple-700 bg-purple-50 p-2 rounded">
                ✓ Your site maintains professional spacing and layout across all screen sizes, 
                with your new logo displaying consistently.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Simple Testing Guide */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How to Check Your Site Works Well (Simple 2-Minute Test)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center space-x-2">
                  <Smartphone size={18} />
                  <span>Phone Test</span>
                </h4>
                <ol className="text-sm space-y-2 text-gray-600">
                  <li>1. Open your site on your phone</li>
                  <li>2. Can you read everything without zooming?</li>
                  <li>3. Can you easily tap the menu and buttons?</li>
                  <li>4. Can you fill out the contact form?</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold mb-3 flex items-center space-x-2">
                  <Monitor size={18} />
                  <span>Computer Test</span>
                </h4>
                <ol className="text-sm space-y-2 text-gray-600">
                  <li>1. Make your browser window very narrow</li>
                  <li>2. Make it very wide</li>
                  <li>3. Does everything still look good?</li>
                  <li>4. Is navigation always visible and working?</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What This Means for Your Business */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What This Means for Your Business</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">More Leads</div>
                <p className="text-sm text-gray-600">
                  When mobile visitors can easily use your site, more will contact you
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">Looks Professional</div>
                <p className="text-sm text-gray-600">
                  Consistent layout builds trust and credibility with potential clients
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">Competitive Edge</div>
                <p className="text-sm text-gray-600">
                  Many small business sites don't work well on mobile - yours does
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg">
                See Your Live Site
              </Button>
            </Link>
            <Link href="/responsive-test">
              <Button variant="outline" size="lg">
                Technical Testing Tool
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            Your site is already set up to work well on all devices. The technical details are handled automatically.
          </p>
        </div>

      </div>
    </div>
  );
}