import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import AdminDashboard from "@/pages/admin";
import Letterhead from "@/pages/letterhead";
import Invoice from "@/pages/invoice";
import LogoDemo from "@/pages/logo-demo";
import ResponsiveTest from "@/pages/responsive-test";
import LayoutGuide from "@/pages/layout-guide";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function Router() {
  const [location] = useLocation();
  const isAdmin = location === "/admin";
  const isTemplate = location === "/letterhead" || location === "/invoice";
  
  return (
    <div className="flex flex-col min-h-screen">
      {!isAdmin && !isTemplate && (
        <>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded">
            Skip to main content
          </a>
          <Header />
        </>
      )}
      <main id="main-content" className="flex-grow" role="main">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/letterhead" component={Letterhead} />
          <Route path="/invoice" component={Invoice} />
          <Route path="/logo-demo" component={LogoDemo} />
          <Route path="/responsive-test" component={ResponsiveTest} />
          <Route path="/layout-guide" component={LayoutGuide} />
          <Route component={NotFound} />
        </Switch>
      </main>
      {!isAdmin && !isTemplate && <Footer />}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
