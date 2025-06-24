import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axiosInstance";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  GraduationCap,
  Clock,
  Users,
  ArrowRight,
  BookOpen,
  Laptop,
  Briefcase,
  Globe,
  Award,
  Target,
  CheckCircle,
  Calendar,
  MapPin,
  Star,
  Play,
  Download,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axiosInstance.get("/course/getAllCourses");
        setCourses(response.data);
      } catch (error) {
        console.error("Failed to fetch courses", error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <Layout>
      <section className="py-24 bg-gradient-to-br from-ngo-encore to-ngo-rumors text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-ngo-true-joy text-white mb-6 text-lg px-6 py-2 rounded-full">
              NEIEA Course Catalog
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-8 leading-tight">
              Skills for
              <span className="text-ngo-true-joy block">Tomorrow's World</span>
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed mb-12">
              Discover our comprehensive range of courses designed to equip
              learners with essential skills for the modern economy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-ngo-encore mb-8">
              Available Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore all the skill-based, vocational, and technical courses
              currently open for enrollment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course._id} className="hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <CardTitle className="text-ngo-encore text-xl font-semibold mb-2">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="mb-3 text-gray-600">
                    {course.description || "No description provided."}
                  </CardDescription>
                  {course.duration && (
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Clock className="w-4 h-4 mr-2 text-ngo-true-joy" />
                      {course.duration}
                    </div>
                  )}
                  <Button
                    onClick={() => navigate(`/apply-course/${course._id}`)}
                    className="w-full bg-ngo-encore hover:bg-ngo-encore/90 text-white rounded-full font-medium"
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
