import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Software from "./pages/inv-master";
import WebDevelopment from "./pages/WebDevelopment";
import {
  BusinessWebsiteDesignChennai,
  WebDesignCompanyChennai,
  WebsiteDesignCostChennai,
} from "./pages/SEOLandingPages";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useEffect } from "react"; // Added
import { useLocation } from "react-router-dom"; // Added
import ScrollToTop from "@/components/ScrollToTop"; // ✅ Import ScrollToTop
import ReactGA from 'react-ga4';
ReactGA.initialize('G-4K8GZHM1P9');

const queryClient = new QueryClient();

const GoogleAnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
};

const App = () => (

  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GoogleAnalyticsTracker />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/web-design-company-chennai" element={<WebDesignCompanyChennai />} />
          <Route path="/website-design-cost-chennai" element={<WebsiteDesignCostChennai />} />
          <Route path="/business-website-design-chennai" element={<BusinessWebsiteDesignChennai />} />
          <Route path="/inv-master" element={<Software />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
