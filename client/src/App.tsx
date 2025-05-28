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
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function Router() {
  const [location] = useLocation();
  const isAdmin = location === "/admin";
  const isTemplate = location === "/letterhead" || location === "/invoice";
  
  return (
    <div className="flex flex-col min-h-screen">
      {!isAdmin && !isTemplate && <Header />}
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/letterhead" component={Letterhead} />
          <Route path="/invoice" component={Invoice} />
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
