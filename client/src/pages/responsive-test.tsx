import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { NexiFrontLogo } from '@/components/ui/nexifront-logo';
import { Monitor, Tablet, Smartphone, Ruler, Eye } from 'lucide-react';

export default function ResponsiveTest() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [currentBreakpoint, setCurrentBreakpoint] = useState('');

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      
      // Determine current breakpoint
      const width = window.innerWidth;
      if (width < 640) setCurrentBreakpoint('xs');
      else if (width < 768) setCurrentBreakpoint('sm');
      else if (width < 1024) setCurrentBreakpoint('md');
      else if (width < 1280) setCurrentBreakpoint('lg');
      else if (width < 1536) setCurrentBreakpoint('xl');
      else setCurrentBreakpoint('2xl');
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const breakpoints = [
    { name: 'Mobile', size: '< 640px', prefix: 'xs', color: 'bg-red-100 text-red-800' },
    { name: 'Small', size: '640px+', prefix: 'sm', color: 'bg-orange-100 text-orange-800' },
    { name: 'Tablet', size: '768px+', prefix: 'md', color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Desktop', size: '1024px+', prefix: 'lg', color: 'bg-green-100 text-green-800' },
    { name: 'Large', size: '1280px+', prefix: 'xl', color: 'bg-blue-100 text-blue-800' },
    { name: 'Extra Large', size: '1536px+', prefix: '2xl', color: 'bg-purple-100 text-purple-800' }
  ];

  const getCurrentBreakpoint = () => {
    return breakpoints.find(bp => bp.prefix === currentBreakpoint) || breakpoints[0];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with real-time info */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold">Responsive Layout Analyzer</h1>
              <NexiFrontLogo width={120} height={36} />
            </div>
            
            <div className="flex items-center space-x-4 flex-wrap gap-2">
              <Badge variant="outline" className="flex items-center space-x-1">
                <Ruler size={14} />
                <span>{windowSize.width} × {windowSize.height}px</span>
              </Badge>
              <Badge className={getCurrentBreakpoint().color}>
                <Eye size={14} className="mr-1" />
                {getCurrentBreakpoint().name} ({getCurrentBreakpoint().prefix})
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Current Breakpoint Visualization */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {breakpoints.map((bp) => (
              <Card 
                key={bp.prefix} 
                className={`text-center transition-all ${
                  bp.prefix === currentBreakpoint 
                    ? 'ring-2 ring-blue-500 shadow-lg scale-105' 
                    : 'opacity-60'
                }`}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">{bp.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-gray-600">{bp.size}</p>
                  <Badge variant="outline" className="mt-1 text-xs">
                    {bp.prefix}:
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Layout Test Sections */}
      <div className="container mx-auto px-4 py-8 space-y-8">
        
        {/* Navigation Test */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Monitor size={20} />
              <span>Navigation Behavior</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="block md:hidden">
                <Badge variant="secondary">Mobile Navigation Active</Badge>
                <p className="text-sm text-gray-600 mt-2">Hamburger menu should be visible</p>
              </div>
              <div className="hidden md:block">
                <Badge variant="secondary">Desktop Navigation Active</Badge>
                <p className="text-sm text-gray-600 mt-2">Horizontal menu should be visible</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grid Layout Test */}
        <Card>
          <CardHeader>
            <CardTitle>Grid Layout Demonstration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div 
                  key={item} 
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg text-center"
                >
                  <div className="text-2xl font-bold text-gray-700">#{item}</div>
                  <div className="text-xs text-gray-500 mt-2">
                    <span className="block sm:hidden">1 col (mobile)</span>
                    <span className="hidden sm:block md:hidden">2 cols (small)</span>
                    <span className="hidden md:block lg:hidden">2 cols (tablet)</span>
                    <span className="hidden lg:block xl:hidden">3 cols (desktop)</span>
                    <span className="hidden xl:block">4 cols (large)</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Typography Scale Test */}
        <Card>
          <CardHeader>
            <CardTitle>Typography Responsiveness</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
              Responsive Heading
            </h1>
            <p className="text-sm md:text-base lg:text-lg">
              This paragraph scales with screen size to maintain readability across devices.
            </p>
            <div className="text-xs text-gray-500">
              Current size: 
              <span className="sm:hidden"> text-2xl (mobile)</span>
              <span className="hidden sm:block md:hidden"> text-3xl (small)</span>
              <span className="hidden md:block lg:hidden"> text-3xl (tablet)</span>
              <span className="hidden lg:block xl:hidden"> text-4xl (desktop)</span>
              <span className="hidden xl:block"> text-5xl (large)</span>
            </div>
          </CardContent>
        </Card>

        {/* Spacing and Layout Test */}
        <Card>
          <CardHeader>
            <CardTitle>Spacing and Padding</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-2 md:p-4 lg:p-6 xl:p-8 bg-blue-50 rounded">
                <div className="text-sm text-gray-600">
                  Responsive padding: 
                  <span className="md:hidden"> p-2 (mobile)</span>
                  <span className="hidden md:block lg:hidden"> p-4 (tablet)</span>
                  <span className="hidden lg:block xl:hidden"> p-6 (desktop)</span>
                  <span className="hidden xl:block"> p-8 (large)</span>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <div className="flex-1 p-4 bg-green-50 rounded">
                  <div className="text-sm">
                    <span className="md:hidden">Stacked (mobile)</span>
                    <span className="hidden md:block">Side by side (tablet+)</span>
                  </div>
                </div>
                <div className="flex-1 p-4 bg-yellow-50 rounded">
                  <div className="text-sm">Layout adapts to screen size</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>How to Test Responsiveness</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Browser Testing</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Open browser dev tools (F12)</li>
                  <li>• Click device toolbar icon</li>
                  <li>• Select different device presets</li>
                  <li>• Drag to resize viewport manually</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What to Look For</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Navigation changes to hamburger menu</li>
                  <li>• Grid columns adjust automatically</li>
                  <li>• Text remains readable at all sizes</li>
                  <li>• No horizontal scrolling on mobile</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}