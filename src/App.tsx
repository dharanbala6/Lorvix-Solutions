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
const queryClient = new QueryClient();
const GA_MEASUREMENT_ID = 'G-4K8GZHM1P9';
let gaInitialized = false;

const GoogleAnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const sendPageView = async () => {
      const { default: ReactGA } = await import('react-ga4');
      if (!gaInitialized) {
        ReactGA.initialize(GA_MEASUREMENT_ID);
        gaInitialized = true;
      }
      ReactGA.send({ hitType: "pageview", page: location.pathname });
    };

    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    if (idleWindow.requestIdleCallback) {
      const idleId = idleWindow.requestIdleCallback(() => {
        void sendPageView();
      }, { timeout: 3000 });
      return () => idleWindow.cancelIdleCallback?.(idleId);
    }

    const timeoutId = window.setTimeout(() => {
      void sendPageView();
    }, 1500);
    return () => window.clearTimeout(timeoutId);
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
          <Route path="/lorvix-billing" element={<Software />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
