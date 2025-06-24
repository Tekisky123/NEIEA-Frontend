import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OurWork from "./pages/OurWork";
import Stories from "./pages/Stories";
import Gallery from "./pages/Gallery";
import Mission from "./pages/Mission";
import Team from "./pages/Team";
import Values from "./pages/Values";
import Donate from "./pages/Donate";
import MonthlyGiving from "./pages/MonthlyGiving";
import Courses from "./pages/Courses";
import Volunteer from "./pages/Volunteer";
import NotFound from "./pages/NotFound";
import DonationForm from "./pages/DonationForm";
import ScrollToTop from "./components/ui/ScrollToTop";
import Login from "./pages/Login";
import DonorDashboard from "./pages/dashboards/donorDashboard/DonorDashboard";
import AdminDashboard from "./pages/dashboards/adminDashboard/AdminDashboard";
import ApplyCourse from "./pages/ApplyCourse";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster  />
      <Sonner richColors position="top-center" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Our Work Dropdown */}
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/reports"
            element={
              <div className="p-8">
                <h1>Impact Reports - Coming Soon</h1>
              </div>
            }
          />
          {/* About Us Dropdown */}
          <Route path="/mission" element={<Mission />} />
          <Route path="/team" element={<Team />} />
          <Route path="/values" element={<Values />} />
          {/* Take Action Dropdown */}
          <Route path="/monthly-giving" element={<MonthlyGiving />} />
          {/* Take Action Dropdown */}
          <Route path="/donate" element={<Donate />} />
          <Route path="/donation/form" element={<DonationForm />} />

          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/apply-course/:id" element={<ApplyCourse />} />

          <Route path="/login" element={<Login />} />

          <Route path="/donor/dashboard" element={<DonorDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          {/* Additional Pages */}
          <Route
            path="/events"
            element={
              <div className="p-8">
                <h1>Events - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/donor-dashboard"
            element={
              <div className="p-8">
                <h1>Donor Dashboard - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/admin"
            element={
              <div className="p-8">
                <h1>Admin Panel - Coming Soon</h1>
              </div>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
