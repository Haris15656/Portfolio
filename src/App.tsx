import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import OptiFitShowcase from "./pages/OptiFitShowcase.tsx";
import DecentraDomainShowcase from "./pages/DecentraDomainShowcase.tsx";
import EcoManageShowcase from "./pages/EcoManageShowcase.tsx";
import PlaywrightShowcase from "./pages/PlaywrightShowcase.tsx";
import ApiTestingShowcase from "./pages/ApiTestingShowcase.tsx";
import RobotStateShowcase from "./pages/RobotStateShowcase.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/showcase/optifit" element={<OptiFitShowcase />} />
          <Route path="/showcase/decentradomain" element={<DecentraDomainShowcase />} />
          <Route path="/showcase/ecomanage" element={<EcoManageShowcase />} />
          <Route path="/showcase/playwright-ui-automation" element={<PlaywrightShowcase />} />
          <Route path="/showcase/api-testing-framework" element={<ApiTestingShowcase />} />
          <Route path="/showcase/robot-state-testing" element={<RobotStateShowcase />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
