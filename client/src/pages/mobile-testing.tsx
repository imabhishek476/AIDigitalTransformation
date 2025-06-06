import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Smartphone, Wifi, Eye, Share2, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function MobileTesting() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Testing Your Website on iPhone
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple steps to check how your website works on your phone
          </p>
        </div>

        {/* Step-by-step guide */}
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Step 1 */}
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Badge className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center">1</Badge>
                <Wifi className="text-blue-600" size={24} />
                <span>Make Sure You're on the Same Network</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600">
                Your iPhone and computer need to be on the same WiFi network to access your development site.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-blue-800 mb-2">Check this:</p>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Both devices connected to same WiFi</li>
                  <li>• Not using cellular data on iPhone</li>
                  <li>• Not using VPN on either device</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Badge className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center">2</Badge>
                <Share2 className="text-green-600" size={24} />
                <span>Get Your Website Link</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600">
                Your website is running at a local address that your iPhone can access.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-green-800 mb-2">Your website URL:</p>
                <div className="bg-white p-3 rounded border font-mono text-sm">
                  https://your-replit-url.replit.app
                </div>
                <p className="text-xs text-green-700 mt-2">
                  This is the same URL you see in your browser
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Badge className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center">3</Badge>
                <Smartphone className="text-purple-600" size={24} />
                <span>Open on Your iPhone</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600">
                Open Safari on your iPhone and visit your website.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-purple-800 mb-2">On your iPhone:</p>
                <ol className="text-sm text-purple-700 space-y-1">
                  <li>1. Open Safari browser</li>
                  <li>2. Type or paste your website URL</li>
                  <li>3. Tap Go</li>
                  <li>4. Wait for site to load</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Badge className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center">4</Badge>
                <Eye className="text-orange-600" size={24} />
                <span>Test These Features</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600">
                Try these actions to make sure everything works well on mobile:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-medium text-orange-800 mb-2">Navigation Test</h4>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Tap the menu button (3 lines)</li>
                    <li>• Try each menu item</li>
                    <li>• Tap "Get Started" button</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-medium text-orange-800 mb-2">Contact Form Test</h4>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Scroll to contact section</li>
                    <li>• Tap in form fields</li>
                    <li>• Try typing your info</li>
                    <li>• Test submit button</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What to Look For */}
          <Card>
            <CardHeader>
              <CardTitle>What Should Work Well</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">Easy Tapping</div>
                  <p className="text-sm text-gray-600">
                    All buttons should be easy to tap with your finger
                  </p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Clear Text</div>
                  <p className="text-sm text-gray-600">
                    You can read everything without zooming in
                  </p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">Smooth Scrolling</div>
                  <p className="text-sm text-gray-600">
                    Page scrolls smoothly, no horizontal scrolling needed
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Troubleshooting */}
          <Card>
            <CardHeader>
              <CardTitle>If Something Doesn't Work</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-medium text-yellow-800 mb-2">Can't Access the Site?</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Check WiFi connection on both devices</li>
                    <li>• Try refreshing the page</li>
                    <li>• Make sure you typed the URL correctly</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-medium text-red-800 mb-2">Buttons Too Small or Hard to Tap?</h4>
                  <p className="text-sm text-red-700">
                    Let me know and I can make them larger for better mobile experience.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <Link href="/">
              <Button size="lg" className="mr-4">
                <ArrowRight className="mr-2" size={20} />
                Go to Your Website
              </Button>
            </Link>
            <p className="text-sm text-gray-500">
              Copy the URL from your browser's address bar to use on your iPhone
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}