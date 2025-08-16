import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IndexNew from "./pages/IndexNew";
import StoriesNew from "./pages/StoriesNew";
import OurWork from "./pages/OurWork";
import Stories from "./pages/Stories";
import Gallery from "./pages/Gallery";
import Mission from "./pages/Mission.tsx";
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
import FloatingSocialIcons from "./components/FloatingSocialIcons";
import ApplyCourseInstitution from "./pages/ApplyCourseInstitution";
import EditCoursePage from "./pages/dashboards/adminDashboard/EditCoursePage";
import ITSkillsTraining from "./pages/ITSkillsTraining";
import BlendedLearning from "./pages/BlendedLearning";
import Technologies from "./pages/Technologies.tsx";
import AdvisoryBoard from "./pages/AdvisoryBoard.tsx";
import EOP from "./pages/EOP.tsx";
import Impact from "./pages/Impact.tsx";
import Testimonials from "./pages/Testimonials.tsx";
import ClusterEducation from "./pages/our-projects/ClusterEducation.tsx";
import GirlsEducation from "./pages/our-projects/GirlsEducation.tsx";
import TeachersTraining from "./pages/our-projects/TeachersTraining.tsx";
import OutOfSchoolChildrenEducation from "./pages/our-projects/OutOfSchoolChildrenEducation.tsx";
import PedagogyTraining from "./pages/our-projects/PedagogyTraining.tsx";
import MadarsaEducation from "./pages/our-projects/MadarsaEducation.tsx";
import SlumChildrenEducation from "./pages/our-projects/SlumChildrenEducation.tsx";
import PublicGovernmentSchoolEducation from "./pages/our-projects/PublicGovernmentSchoolEducation.tsx";
import GalleryNew from "./pages/GalleryNew.tsx";
import Neiusa from "./pages/Neiusa";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingDelivery from "./pages/ShippingDelivery";
import PricingInr from "./pages/PricingInr";
import RefundCancellations from "./pages/RefundCancellations";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner richColors position="top-center" />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Index />} /> */}
          <Route path="/" element={<IndexNew />} />
          {/* Our Work Dropdown */}
          <Route path="/our-work" element={<OurWork />} />
          {/* <Route path="/stories" element={<Stories />} /> */}
          <Route path="/stories" element={<StoriesNew />} />
          <Route path="/gallery" element={<GalleryNew />} />
          <Route path="/nei-usa" element={<Neiusa />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about/introduction" element={<Gallery />} />
          <Route
            path="/reports"
            element={
              <div className="p-8">
                <h1>Impact Reports - Coming Soon</h1>
              </div>
            }
          />
          {/* About Us Dropdown */}
          <Route path="/about/vision-mission" element={<Mission />} />
          <Route path="/about/leadership" element={<Team />} />
          <Route path="/about/workshops" element={<OurWork />} />
          <Route path="/about/blended-learning" element={<BlendedLearning />} />
          <Route path="/about/advisory-board" element={<AdvisoryBoard />} />
          <Route path="/about/technologies" element={<Technologies />} />
          <Route path="/about/eop" element={<EOP />} />
          <Route path="/about/impact" element={<Impact />} />
          <Route path="/about/testimonials" element={<Testimonials />} />

          {/* Our Projects Dropdown */}
          <Route path="/our-projects/it-skills-training" element={<ITSkillsTraining />} />
          <Route path="/our-projects/cluster-education" element={<ClusterEducation />} />
          <Route path="/our-projects/teachers-training" element={<TeachersTraining />} />
          <Route path="/our-projects/out-of-school" element={<OutOfSchoolChildrenEducation />} />
          <Route path="/our-projects/slum-children" element={<SlumChildrenEducation />} />
          <Route path="/our-projects/girls-education" element={<GirlsEducation />} />
          <Route path="/our-projects/pedagogy-training" element={<PedagogyTraining />} />
          <Route path="/our-projects/madarsa-education" element={<MadarsaEducation />} />
          <Route path="/our-projects/social-financial" element={<EOP />} />
          <Route path="/our-projects/adult-education" element={<Impact />} />
          <Route path="/our-projects/public-schools" element={<PublicGovernmentSchoolEducation />} />

          <Route path="/values" element={<Values />} />
          {/* Take Action Dropdown */}
          <Route path="/monthly-giving" element={<MonthlyGiving />} />
          {/* Take Action Dropdown */}
          <Route path="/donate" element={<Donate />} />
          <Route path="/donation/form" element={<DonationForm />} />

          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/apply-course/:id" element={<ApplyCourse />} />
          <Route path="/apply-course-institution" element={<ApplyCourseInstitution />} />

          <Route path="/login" element={<Login />} />

          <Route path="/donor/dashboard" element={<DonorDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/dashboard/course/edit/:id" element={<EditCoursePage />} />
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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/shipping-delivery" element={<ShippingDelivery />} />
          <Route path="/pricing-inr" element={<PricingInr />} />
          <Route path="/refund-cancellations" element={<RefundCancellations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTop />
        {/* <FloatingSocialIcons/> */}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
