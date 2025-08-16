import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  X,
  Download,
  Share2,
  Heart,
  Calendar,
  MapPin,
  Users,
  Award,
  Lightbulb,
  GraduationCap,
  Building,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

// Import all gallery images
import img1 from "../images/gallary/With-Mr-Jeffrey-Sachs-chief-strategist-for-the-Sustainable-development-Goals-SDG.jpg";
import img2 from "../images/gallary/with-Mr-Fahad-Al-Sulaiti-CEO-of-Education-Above-All-EAA-the-global-educational-ageny-of-the-Qatar-government.jpg";
import img3 from "../images/gallary/WhatsApp-Image-2023-09-21-at-21.35.55.jpg";
import img4 from "../images/gallary/WhatsApp-Image-2023-09-21-at-11.26.13.jpg";
import img5 from "../images/gallary/WhatsApp-Image-2023-09-21-at-11.24.28.jpg";
import img6 from "../images/gallary/WhatsApp-Image-2023-09-21-at-11.24.27.jpg";
import img7 from "../images/gallary/WhatsApp-Image-2023-09-21-at-11.24.22.jpg";
import img8 from "../images/gallary/Pics-for-NEIUSA-7.png";
import img9 from "../images/gallary/Pics-for-NEIUSA-10.png";
import img10 from "../images/gallary/WhatsApp-Image-2023-07-27-at-18.24.020-e1690752966368.jpg";
import img11 from "../images/gallary/WhatsApp-Image-2023-07-27-at-18.24.018-e1690753006634.jpg";
import img12 from "../images/gallary/for-institutions.jpg";
import img13 from "../images/gallary/anandan-sir.png";
import img14 from "../images/gallary/Javeed3.jpg";
import img15 from "../images/gallary/Javeed2.jpg";
import img16 from "../images/gallary/Javeed1.jpg";
import img17 from "../images/gallary/Untitled-design-5.jpg";
import img18 from "../images/gallary/Untitled-design-3.jpg";
import img19 from "../images/gallary/An-esteemed-moment-as-Mr.-Javeed-Mirza-shares-the-stage-with-notable-figures-including-Mr.-Mohammad-Ali-Ashraf-Fatmi-Mr.-Zulqarnain-Mr.-Ashraf-and-Mr.-Rashid.png";
import img20 from "../images/gallary/Mr.-Javeed-Mirza-with-Former-MP-and-HRD-Minister-Mr.-Mohammad-Ali-Ashraf-Fatmi-at-a-thought-provoking-talk-on-Education-For-All-in-Riyad.png";
import img21 from "../images/gallary/Mr.-Javeed-Mirzas-Impactful-Talk-on-Education-for-All-in-Dammam.png";
import img22 from "../images/gallary/Mr.-Javeed-Mirzas-Inspiring-Discourse-on-Education-For-All-in-Jeddah.png";
import img23 from "../images/gallary/Ms.-Tasneem-Inspires-at-Education-for-All-Talk-in-Jeddah-Capturing-the-moment-when-Ms.-Tasneem-passionately-explains-NEIEAs-mission.png";
import img24 from "../images/gallary/Ms.-Tasneem-Unveils-NEIEAs-Mission-in-Educational-Talk-at-Riyadh.png";
import img25 from "../images/gallary/NEIEAs-Event-in-Riyad-Brings-Together-Influential-Leaders-in-Jeddah.png";
import img26 from "../images/gallary/the-collaboration-of-community-leaders-at-NEIEAs-impactful-event-a-talk-on-Education-For-All-in-Riyad.png";
import img27 from "../images/gallary/the-collaboration-of-community-leaders-at-NEIEAs-impactful-event-in-Riyad.png";
import img28 from "../images/gallary/Ms.-Tasmia-passionately-express-her-views-on-the-crucial-need-for-education-during-the-Education-for-All-event-in-Riyad.png";
import img29 from "../images/gallary/Prof.-Asif-Rameez-Doudi-President-of-Indo-Arab-Helping-Hands-Addresses-the-Audience-at-Education-for-All-Event-in-Jeddah.png";
import img30 from "../images/gallary/Ashraf-Shah-sheds-light-on-the-educational-growth-of-minorities-in-India-during-his-enlightening-discussion-at-Riyad.png";
import img31 from "../images/gallary/Mr.-Javeed-Mirza-Engages-in-Conversations-with-Mr.-S-M-Arif-Shah-at-Education-for-All-Event-in-Riyad.png";
import img32 from "../images/gallary/Javeed-Mirza-with-Community-Leaders-Gathering-in-Jeddah.png";
import img33 from "../images/gallary/hyd1.jpg";
import img34 from "../images/gallary/hyd2.jpg";
import img35 from "../images/gallary/NEIEA-Website-Gallery-2.0.png";
import img36 from "../images/gallary/NEIEA-Website-Gallery-2.0-1.png";
import img37 from "../images/gallary/NEIEA-Website-Gallery-2.0-2.png";
import img38 from "../images/gallary/web2-1.jpg";
import img39 from "../images/gallary/web272.jpg";
import img40 from "../images/gallary/web1.jpg";
import img41 from "../images/gallary/web273.jpg";
import img42 from "../images/gallary/web271.jpg";
import img43 from "../images/gallary/neonl3.jpg";
import img44 from "../images/gallary/neol5.jpg";
import img45 from "../images/gallary/neol4.jpg";
import img46 from "../images/gallary/exhibition.jpg";
import img47 from "../images/gallary/web1-3.jpg";
import img48 from "../images/gallary/web1-2.jpg";
import img49 from "../images/gallary/web1-1.jpg";
import img50 from "../images/gallary/web-6.jpg";
import img51 from "../images/gallary/web-5.jpg";
import img52 from "../images/gallary/web-4.jpg";
import img53 from "../images/gallary/web-3.jpg";
import img54 from "../images/gallary/web-2.jpg";
import img55 from "../images/gallary/web-1.jpg";

const GalleryNew = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-advance slider
  useEffect(() => {
    if (!isAutoPlay || !isModalOpen) return;
    
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [isAutoPlay, isModalOpen, currentSlideIndex]);

  // Gallery images with metadata
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: img1,
      title: "Meeting with Mr. Jeffrey Sachs",
      subtitle: "Chief Strategist for Sustainable Development Goals (SDG)",
      category: "leadership",
      date: "2023",
      location: "Global Summit",
      description: "Strategic discussion on educational development goals and sustainable practices.",
      tags: ["Leadership", "SDG", "Global Summit"]
    },
    {
      id: 2,
      src: img2,
      title: "Partnership with Education Above All",
      subtitle: "Meeting with Mr. Fahad Al-Sulaiti, CEO of EAA",
      category: "partnerships",
      date: "2023",
      location: "Qatar",
      description: "Collaboration with the global educational agency of the Qatar government.",
      tags: ["Partnership", "EAA", "Qatar"]
    },
    {
      id: 3,
      src: img3,
      title: "Community Engagement Event",
      subtitle: "WhatsApp Image from September 21, 2023",
      category: "events",
      date: "September 21, 2023",
      location: "Community Center",
      description: "Local community engagement and educational outreach program.",
      tags: ["Community", "Outreach", "Education"]
    },
    {
      id: 4,
      src: img4,
      title: "Educational Workshop",
      subtitle: "Morning Session on September 21, 2023",
      category: "workshops",
      date: "September 21, 2023",
      location: "Workshop Venue",
      description: "Interactive workshop focusing on innovative teaching methodologies.",
      tags: ["Workshop", "Teaching", "Innovation"]
    },
    {
      id: 5,
      src: img5,
      title: "Learning Session",
      subtitle: "Educational Activities",
      category: "learning",
      date: "September 21, 2023",
      location: "Learning Center",
      description: "Students engaged in collaborative learning activities.",
      tags: ["Learning", "Collaboration", "Students"]
    },
    {
      id: 6,
      src: img6,
      title: "Group Discussion",
      subtitle: "Interactive Learning Environment",
      category: "learning",
      date: "September 21, 2023",
      location: "Discussion Room",
      description: "Students participating in group discussions and peer learning.",
      tags: ["Discussion", "Peer Learning", "Group Work"]
    },
    {
      id: 7,
      src: img7,
      title: "Presentation Session",
      subtitle: "Student Presentations",
      category: "presentations",
      date: "September 21, 2023",
      location: "Presentation Hall",
      description: "Students showcasing their projects and research findings.",
      tags: ["Presentations", "Projects", "Research"]
    },
    {
      id: 8,
      src: img8,
      title: "NEIUSA Collaboration",
      subtitle: "Partnership Development",
      category: "partnerships",
      date: "2023",
      location: "International",
      description: "Strengthening international educational partnerships and collaborations.",
      tags: ["Partnership", "International", "Collaboration"]
    },
    {
      id: 9,
      src: img9,
      title: "Strategic Planning",
      subtitle: "Future Vision Development",
      category: "leadership",
      date: "2023",
      location: "Strategy Session",
      description: "Planning session for future educational initiatives and programs.",
      tags: ["Strategy", "Planning", "Future"]
    },
    {
      id: 10,
      src: img10,
      title: "Summer Program",
      subtitle: "July 27, 2023 Activities",
      category: "programs",
      date: "July 27, 2023",
      location: "Summer Camp",
      description: "Summer educational program engaging students in various activities.",
      tags: ["Summer Program", "Activities", "Engagement"]
    },
    {
      id: 11,
      src: img11,
      title: "Learning Activities",
      subtitle: "Interactive Summer Session",
      category: "programs",
      date: "July 27, 2023",
      location: "Activity Center",
      description: "Students participating in hands-on learning activities.",
      tags: ["Hands-on", "Learning", "Activities"]
    },
    {
      id: 12,
      src: img12,
      title: "Institutional Partnership",
      subtitle: "For Educational Institutions",
      category: "partnerships",
      date: "2023",
      location: "Partnership Meeting",
      description: "Building partnerships with educational institutions for better outreach.",
      tags: ["Institutions", "Partnership", "Outreach"]
    },
    {
      id: 13,
      src: img13,
      title: "Anandan Sir",
      subtitle: "Educational Leadership",
      category: "leadership",
      date: "2023",
      location: "Leadership Meeting",
      description: "Leadership discussion on educational strategies and implementation.",
      tags: ["Leadership", "Strategy", "Education"]
    },
    {
      id: 14,
      src: img14,
      title: "Javeed Mirza",
      subtitle: "Community Leadership",
      category: "leadership",
      date: "2023",
      location: "Community Event",
      description: "Javeed Mirza engaging with community leaders and stakeholders.",
      tags: ["Leadership", "Community", "Engagement"]
    },
    {
      id: 15,
      src: img15,
      title: "Leadership Meeting",
      subtitle: "Strategic Discussion",
      category: "leadership",
      date: "2023",
      location: "Meeting Room",
      description: "Strategic planning session with key stakeholders.",
      tags: ["Strategy", "Planning", "Stakeholders"]
    },
    {
      id: 16,
      src: img16,
      title: "Team Building",
      subtitle: "Collaborative Session",
      category: "team",
      date: "2023",
      location: "Team Session",
      description: "Team building activities fostering collaboration and unity.",
      tags: ["Team Building", "Collaboration", "Unity"]
    },
    {
      id: 17,
      src: img17,
      title: "Design Workshop",
      subtitle: "Creative Learning",
      category: "workshops",
      date: "2023",
      location: "Design Studio",
      description: "Creative workshop focusing on design thinking and innovation.",
      tags: ["Design", "Creativity", "Innovation"]
    },
    {
      id: 18,
      src: img18,
      title: "Innovation Session",
      subtitle: "Creative Problem Solving",
      category: "workshops",
      date: "2023",
      location: "Innovation Lab",
      description: "Session focused on innovative problem-solving approaches.",
      tags: ["Innovation", "Problem Solving", "Creativity"]
    },
    {
      id: 19,
      src: img19,
      title: "Esteemed Gathering",
      subtitle: "Mr. Javeed Mirza with Notable Figures",
      category: "leadership",
      date: "2023",
      location: "Leadership Summit",
      description: "Esteemed moment as Mr. Javeed Mirza shares the stage with notable figures.",
      tags: ["Leadership", "Summit", "Notable Figures"]
    },
    {
      id: 20,
      src: img20,
      title: "Education For All Talk",
      subtitle: "Mr. Javeed Mirza with Former MP and HRD Minister",
      category: "events",
      date: "2023",
      location: "Riyadh",
      description: "Thought-provoking talk on Education For All with former MP and HRD Minister.",
      tags: ["Education For All", "Government", "Riyadh"]
    },
    {
      id: 21,
      src: img21,
      title: "Impactful Talk in Dammam",
      subtitle: "Mr. Javeed Mirza's Educational Discourse",
      category: "events",
      date: "2023",
      location: "Dammam",
      description: "Mr. Javeed Mirza's impactful talk on Education for All in Dammam.",
      tags: ["Education For All", "Dammam", "Impact"]
    },
    {
      id: 22,
      src: img22,
      title: "Inspiring Discourse in Jeddah",
      subtitle: "Mr. Javeed Mirza's Educational Talk",
      category: "events",
      date: "2023",
      location: "Jeddah",
      description: "Mr. Javeed Mirza's inspiring discourse on Education For All in Jeddah.",
      tags: ["Education For All", "Jeddah", "Inspiration"]
    },
    {
      id: 23,
      src: img23,
      title: "Ms. Tasneem's Mission",
      subtitle: "NEIEA's Mission Explanation in Jeddah",
      category: "events",
      date: "2023",
      location: "Jeddah",
      description: "Ms. Tasneem passionately explains NEIEA's mission during the Education for All talk.",
      tags: ["Mission", "Jeddah", "Passion"]
    },
    {
      id: 24,
      src: img24,
      title: "Mission Unveiling in Riyadh",
      subtitle: "Ms. Tasneem's Educational Talk",
      category: "events",
      date: "2023",
      location: "Riyadh",
      description: "Ms. Tasneem unveils NEIEA's mission in educational talk at Riyadh.",
      tags: ["Mission", "Riyadh", "Education"]
    },
    {
      id: 25,
      src: img25,
      title: "NEIEA's Event in Riyadh",
      subtitle: "Influential Leaders Gathering",
      category: "events",
      date: "2023",
      location: "Riyadh",
      description: "NEIEA's event in Riyadh brings together influential leaders in Jeddah.",
      tags: ["Event", "Riyadh", "Leaders"]
    },
    {
      id: 26,
      src: img26,
      title: "Community Leaders Collaboration",
      subtitle: "Education For All Event in Riyadh",
      category: "events",
      date: "2023",
      location: "Riyadh",
      description: "The collaboration of community leaders at NEIEA's impactful event.",
      tags: ["Community", "Collaboration", "Riyadh"]
    },
    {
      id: 27,
      src: img27,
      title: "Community Leaders Event",
      subtitle: "Impactful Gathering in Riyadh",
      category: "events",
      date: "2023",
      location: "Riyadh",
      description: "The collaboration of community leaders at NEIEA's impactful event in Riyadh.",
      tags: ["Community", "Event", "Riyadh"]
    },
    {
      id: 28,
      src: img28,
      title: "Ms. Tasmia's Views",
      subtitle: "Education Need Discussion in Riyadh",
      category: "events",
      date: "2023",
      location: "Riyadh",
      description: "Ms. Tasmia passionately expresses her views on the crucial need for education.",
      tags: ["Education Need", "Passion", "Riyadh"]
    },
    {
      id: 29,
      src: img29,
      title: "Prof. Asif Rameez Doudi",
      subtitle: "President of Indo-Arab Helping Hands",
      category: "leadership",
      date: "2023",
      location: "Jeddah",
      description: "Prof. Asif Rameez Doudi addresses the audience at Education for All Event.",
      tags: ["Leadership", "Indo-Arab", "Jeddah"]
    },
    {
      id: 30,
      src: img30,
      title: "Ashraf Shah's Discussion",
      subtitle: "Educational Growth of Minorities in India",
      category: "events",
      date: "2023",
      location: "Riyadh",
      description: "Ashraf Shah sheds light on the educational growth of minorities in India.",
      tags: ["Minorities", "India", "Growth"]
    },
    {
      id: 31,
      src: img31,
      title: "Mr. Javeed Mirza's Conversations",
      subtitle: "Education For All Event in Riyadh",
      category: "events",
      date: "2023",
      location: "Riyadh",
      description: "Mr. Javeed Mirza engages in conversations with Mr. S M Arif Shah.",
      tags: ["Conversations", "Riyadh", "Engagement"]
    },
    {
      id: 32,
      src: img32,
      title: "Community Leaders Gathering",
      subtitle: "Mr. Javeed Mirza in Jeddah",
      category: "events",
      date: "2023",
      location: "Jeddah",
      description: "Javeed Mirza with community leaders gathering in Jeddah.",
      tags: ["Community", "Leaders", "Jeddah"]
    },
    {
      id: 33,
      src: img33,
      title: "NEIEA Exhibition 2025",
      subtitle: "",
      category: "events",
      date: "2023",
      location: "Hyderabad",
      description: "Local community engagement event in Hyderabad.",
      tags: ["Hyderabad", "Community", "Local"]
    },
    {
      id: 34,
      src: img34,
      title: "NEIEA Exhibition 2025",
      subtitle: "",
      category: "events",
      date: "2023",
      location: "Hyderabad",
      description: "Educational outreach program in Hyderabad.",
      tags: ["Hyderabad", "Outreach", "Education"]
    },
    {
      id: 35,
      src: img35,
      title: "NEIEA Exhibition 2025",
      subtitle: "",
      category: "digital",
      date: "2023",
      location: "Online",
      description: "Showcasing NEIEA's digital presence and online initiatives.",
      tags: ["Digital", "Website", "Online"]
    },
    {
      id: 36,
      src: img36,
      title: "NEIEA Exhibition 2025",
      subtitle: "",
      category: "digital",
      date: "2023",
      location: "Online",
      description: "Enhanced digital gallery showcasing NEIEA's online presence.",
      tags: ["Digital", "Gallery", "Enhanced"]
    },
    {
      id: 37,
      src: img37,
      title: "NEIEA Exhibition 2025",
      subtitle: "",
      category: "digital",
      date: "2023",
      location: "Online",
      description: "Modern digital platform for showcasing NEIEA's initiatives.",
      tags: ["Digital", "Platform", "Modern"]
    },
    {
      id: 38,
      src: img38,
      title: "Rebublic Day India 2025",
      subtitle: "",
      category: "digital",
      date: "2023",
      location: "Development Lab",
      description: "Web development and digital innovation initiatives.",
      tags: ["Web Development", "Innovation", "Digital"]
    },
    {
      id: 39,
      src: img39,
      title: "Rebublic Day India 2025",
      subtitle: "",
      category: "digital",
      date: "2023",
      location: "Development Lab",
      description: "Technical excellence in web development and digital solutions.",
      tags: ["Web Development", "Technical", "Excellence"]
    },
    {
      id: 40,
      src: img40,
      title: "Rebublic Day India 2025",
      subtitle: "",
      category: "digital",
      date: "2023",
      location: "Development Lab",
      description: "Comprehensive digital solutions for educational platforms.",
      tags: ["Digital Solutions", "Platform", "Education"]
    },
    {
      id: 41,
      src: img41,
      title: "Rebublic Day India 2025",
      subtitle: "",
      category: "digital",
      date: "2023",
      location: "Development Lab",
      description: "Innovative platform development for educational technology.",
      tags: ["Innovation", "Platform", "Technology"]
    },
    {
      id: 42,
      src: img42,
      title: "Rebublic Day India 2025",
      subtitle: "",
      category: "digital",
      date: "2023",
      location: "Development Lab",
      description: "Modern technology implementation in educational platforms.",
      tags: ["Modern Technology", "Implementation", "Education"]
    },
    {
      id: 43,
      src: img43,
      title: "Neon Light 3",
      subtitle: "Creative Design",
      category: "design",
      date: "2023",
      location: "Design Studio",
      description: "Creative design elements with neon lighting effects.",
      tags: ["Design", "Neon", "Creative"]
    },
    {
      id: 44,
      src: img44,
      title: "Neon Light 5",
      subtitle: "Artistic Expression",
      category: "design",
      date: "2023",
      location: "Design Studio",
      description: "Artistic expression through neon lighting and design.",
      tags: ["Artistic", "Neon", "Expression"]
    },
    {
      id: 45,
      src: img45,
      title: "Neon Light 4",
      subtitle: "Visual Innovation",
      category: "design",
      date: "2023",
      location: "Design Studio",
      description: "Visual innovation through creative neon lighting design.",
      tags: ["Visual", "Innovation", "Neon"]
    },
    {
      id: 46,
      src: img46,
      title: "Exhibition",
      subtitle: "Showcase Event",
      category: "events",
      date: "2023",
      location: "Exhibition Center",
      description: "Exhibition showcasing NEIEA's programs and achievements.",
      tags: ["Exhibition", "Showcase", "Achievements"]
    },
    {
      id: 47,
      src: img47,
      title: "Web1-3",
      subtitle: "",
    //   title: "Web Design 1",
    //   subtitle: "Creative Layout",
      category: "design",
      date: "2023",
      location: "Design Studio",
      description: "Creative web design layout and user experience.",
      tags: ["Web Design", "Creative", "Layout"]
    },
    {
      id: 48,
      src: img48,
      title: "Web1-2",
      subtitle: "",
    //   title: "Web Design 2",
    //   subtitle: "User Experience",
      category: "design",
      date: "2023",
      location: "Design Studio",
      description: "User experience focused web design and interface.",
      tags: ["Web Design", "User Experience", "Interface"]
    },
    {
      id: 49,
      src: img49,
      title: "Web1-1",
      subtitle: "",
    //   title: "Web Design 3",
    //   subtitle: "Modern Interface",
      category: "design",
      date: "2023",
      location: "Design Studio",
      description: "Modern interface design for educational platforms.",
      tags: ["Interface", "Modern", "Education"]
    },
    {
      id: 50,
      src: img50,
      title: "Web-6",
      subtitle: "",
    //   title: "Web Gallery 6",
    //   subtitle: "Digital Collection",
      category: "digital",
      date: "2023",
      location: "Online Gallery",
      description: "Digital collection showcasing various web elements.",
      tags: ["Digital", "Collection", "Web"]
    },
    {
      id: 51,
      src: img51,
      title: "Web-5",
      subtitle: "",
    //   title: "Web Gallery 5",
    //   subtitle: "Online Showcase",
      category: "digital",
      date: "2023",
      location: "Online Gallery",
      description: "Online showcase of web development projects.",
      tags: ["Online", "Showcase", "Projects"]
    },
    {
      id: 52,
      src: img52,
      title: "Web-4",
      subtitle: "",
    //   title: "Web Gallery 4",
    //   subtitle: "Digital Portfolio",
      category: "digital",
      date: "2023",
      location: "Online Gallery",
      description: "Digital portfolio of web development work.",
      tags: ["Digital", "Portfolio", "Development"]
    },
    {
      id: 53,
      src: img53,
      title: "Web-3",
      subtitle: "",
    //   title: "Web Gallery 3",
    //   subtitle: "Creative Showcase",
      category: "digital",
      date: "2023",
      location: "Online Gallery",
      description: "Creative showcase of digital design work.",
      tags: ["Creative", "Showcase", "Design"]
    },
    {
      id: 54,
      src: img54,
      title: "Web-2",
      subtitle: "",
    //   title: "Web Gallery 2",
    //   subtitle: "Design Collection",
      category: "design",
      date: "2023",
      location: "Online Gallery",
      description: "Collection of creative design elements and concepts.",
      tags: ["Design", "Collection", "Creative"]
    },
    {
      id: 55,
      src: img55,
    //   title: "Web Gallery 1",
    //   subtitle: "Digital Innovation",
      title: "Web-1",
      subtitle: "",
      category: "digital",
      date: "2023",
      location: "Online Gallery",
      description: "Digital innovation showcase and creative concepts.",
      tags: ["Digital", "Innovation", "Creative"]
    }
  ];

  const categories = [
    { id: "all", name: "All Images", icon: <Globe className="w-4 h-4" />, count: galleryImages.length },
    { id: "events", name: "Events", icon: <Calendar className="w-4 h-4" />, count: galleryImages.filter(img => img.category === "events").length },
    { id: "leadership", name: "Leadership", icon: <Award className="w-4 h-4" />, count: galleryImages.filter(img => img.category === "leadership").length },
    { id: "partnerships", name: "Partnerships", icon: <Users className="w-4 h-4" />, count: galleryImages.filter(img => img.category === "partnerships").length },
    { id: "workshops", name: "Workshops", icon: <Lightbulb className="w-4 h-4" />, count: galleryImages.filter(img => img.category === "workshops").length },
    { id: "learning", name: "Learning", icon: <GraduationCap className="w-4 h-4" />, count: galleryImages.filter(img => img.category === "learning").length },
    { id: "digital", name: "Digital", icon: <Building className="w-4 h-4" />, count: galleryImages.filter(img => img.category === "digital").length },
    { id: "design", name: "Design", icon: <Award className="w-4 h-4" />, count: galleryImages.filter(img => img.category === "design").length },
    { id: "team", name: "Team", icon: <Users className="w-4 h-4" />, count: galleryImages.filter(img => img.category === "team").length },
    { id: "programs", name: "Programs", icon: <GraduationCap className="w-4 h-4" />, count: galleryImages.filter(img => img.category === "programs").length },
    { id: "presentations", name: "Presentations", icon: <Award className="w-4 h-4" />, count: galleryImages.filter(img => img.category === "presentations").length }
  ];

  // Create reversed arrays for consistent ordering
  const reversedGalleryImages = [...galleryImages].reverse();
  const filteredImages = selectedCategory === "all" 
    ? reversedGalleryImages 
    : galleryImages.filter(img => img.category === selectedCategory).reverse();

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    // Find the index in the reversed array
    const reverseIndex = reversedGalleryImages.findIndex(img => img.id === image.id);
    setCurrentSlideIndex(reverseIndex);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ngo-color1 via-ngo-color1 to-ngo-color3 text-white py-16 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <Badge className="bg-ngo-color4 text-white mb-4">Our Visual Journey</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-4">
            NEIEA Gallery
          </h1>
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore our journey through education, innovation, and community impact. 
            From leadership meetings to community events, discover the moments that shape our mission.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-ngo-color4 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.icon}
                {category.name}
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => openModal(image)}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-ngo-color4 text-white text-xs">
                      {image.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 mb-1">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-xs line-clamp-1">
                    {image.subtitle}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    {image.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

                         {/* Image Display */}
             <div className="relative">
               <img
                 src={reversedGalleryImages[currentSlideIndex].src}
                 alt={reversedGalleryImages[currentSlideIndex].title}
                 className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
               />
               
               {/* Image Info Overlay */}
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                 <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                   {reversedGalleryImages[currentSlideIndex].title}
                 </h2>
                 <p className="text-lg sm:text-xl text-gray-200 mb-3">
                   {reversedGalleryImages[currentSlideIndex].subtitle}
                 </p>
                 <div className="flex flex-wrap gap-2 mb-3">
                   {reversedGalleryImages[currentSlideIndex].tags.map((tag, index) => (
                     <Badge key={index} className="bg-ngo-color4/80 text-white">
                       {tag}
                     </Badge>
                   ))}
                 </div>
                 <div className="flex items-center gap-4 text-sm text-gray-300">
                   <div className="flex items-center gap-1">
                     <Calendar className="w-4 h-4" />
                     {reversedGalleryImages[currentSlideIndex].date}
                   </div>
                   <div className="flex items-center gap-1">
                     <MapPin className="w-4 h-4" />
                     {reversedGalleryImages[currentSlideIndex].location}
                   </div>
                 </div>
               </div>
             </div>

            {/* Navigation Controls */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Bottom Controls */}
            <div className="absolute bottom-[-1] left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
              <button
                onClick={toggleAutoPlay}
                className="text-white hover:text-ngo-color4 transition-colors duration-300"
              >
                {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              
                             {/* Slide Indicators */}
               <div className="flex space-x-2">
                 {reversedGalleryImages.map((_, index) => (
                   <button
                     key={index}
                     onClick={() => setCurrentSlideIndex(index)}
                     className={`w-2 h-2 rounded-full transition-all duration-300 ${
                       index === currentSlideIndex
                         ? "bg-ngo-color4 scale-125"
                         : "bg-white/50 hover:bg-white/75"
                     }`}
                   />
                 ))}
               </div>
               
               <span className="text-white text-sm">
                 {currentSlideIndex + 1} / {reversedGalleryImages.length}
               </span>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-ngo-color6 mb-4">
            Join Our Visual Story
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Be part of our journey in transforming education. Your support helps us create more moments worth capturing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button className="bg-ngo-color4 hover:bg-ngo-color4/90 text-white">
                Support Our Mission
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button variant="outline" className="border-2 border-ngo-color6 text-ngo-color6 hover:bg-ngo-color6 hover:text-white">
                Become a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  location: string;
  description: string;
  tags: string[];
}

export default GalleryNew;
