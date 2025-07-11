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
import { Input } from "@/components/ui/input";
import { Search, Clock, User, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SkeletonLoading from "../components/SkeletonLoading";

interface Course {
  _id: string;
  title: string;
  description: string;
  duration?: string;
  imageUrl?: string;
  instructor?: string;
  level?: string;
}

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setIsLoading(true);
        const response = await axiosInstance.get("/course/getAllCourses");
        const coursesWithDummyImages = response.data.map((course: Course) => ({
          ...course,
          imageUrl: course.imageUrl || "https://img.freepik.com/free-photo/learning-education-ideas-insight-intelligence-study-concept_53876-120116.jpg?semt=ais_hybrid&w=740",
          instructor: course.instructor || "John Doe",
          level: course.level || "Beginner",
        }));
        setCourses(coursesWithDummyImages);
        setFilteredCourses(coursesWithDummyImages);
      } catch (error) {
        console.error("Failed to fetch courses", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    const filtered = courses.filter((course) => {
      const matchesSearchTerm = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearchTerm;
    });
    setFilteredCourses(filtered);
  }, [searchTerm, courses]);

  return (
    <Layout>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-ngo-color6 mb-4">
              Available Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore all the skill-based, vocational, and technical courses currently open for enrollment.
            </p>
          </div>
          <div className="flex justify-center mb-6">
            <div className="relative w-full md:w-1/2">
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {isLoading
              ? Array(8).fill(0).map((_, index) => (
                  <Card key={index} className="h-80">
                    <SkeletonLoading />
                  </Card>
                ))
              : filteredCourses.map((course) => (
                  <Card key={course._id} className="flex flex-col">
                    {course.imageUrl && (
                      <img
                        src={course.imageUrl}
                        alt={course.title}
                        className="w-full h-32 object-cover"
                      />
                    )}
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm font-bold truncate">{course.title}</CardTitle>
                      <CardDescription className="text-xs text-gray-600 line-clamp-3">
                        {course.description || "No description provided."}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-3 flex flex-col flex-grow">
                      <div className="space-y-1 mb-2">
                        {course.duration && (
                          <div className="flex items-center text-xs text-gray-500 truncate">
                            <Clock className="w-3 h-3 mr-1 text-ngo-color4" />
                            <span>Duration: {course.duration}</span>
                          </div>
                        )}
                        {course.instructor && (
                          <div className="flex items-center text-xs text-gray-500 truncate">
                            <User className="w-3 h-3 mr-1 text-ngo-color4" />
                            <span>Instructor: {course.instructor}</span>
                          </div>
                        )}
                        {course.level && (
                          <div className="flex items-center text-xs text-gray-500 truncate">
                            <BookOpen className="w-3 h-3 mr-1 text-ngo-color4" />
                            <span>Level: {course.level}</span>
                          </div>
                        )}
                      </div>
                      <Button
                        onClick={() => navigate(`/apply-course/${course._id}`)}
                        className="mt-auto w-full bg-ngo-color6 hover:bg-ngo-color6/90 text-white text-xs py-1"
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
