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
import { Search, Clock, User, BookOpen, Users, IndianRupee, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SkeletonLoading from "../components/SkeletonLoading";
import Layout from "@/components/Layout";

interface Course {
  _id: string;
  title: string;
  description: string;
  duration?: string;
  imageUrl?: string;
  instructor?: string;
  level?: string;
  targetAudience?: string[];
  fees?: number;
}

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [role, setRole] = useState<"student" | "institution">("student");
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setIsLoading(true);
        const response = await axiosInstance.get("/course/getAllCourses");
        const coursesWithDummyImages = response.data.map((course: Course) => ({
          ...course,
          imageUrl: course.imageUrl || "https://img.freepik.com/free-photo/learning-education-ideas-insight-intelligence-study-concept_53876-120116.jpg?semt=ais_hybrid&w=740",
          // instructor: course.instructor || "John Doe",
          level: course.level || "Beginner",
          targetAudience: course.targetAudience || ["General"],
          fees: course.fees || 0,
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
    const filtered = courses.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  }, [searchTerm, courses]);

  const toggleCourseSelection = (courseId: string) => {
    setSelectedCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const handleSubmit = () => {
    if (selectedCourses.length === 0) {
      alert("Please select at least one course.");
      return;
    }
    const query = new URLSearchParams();
    selectedCourses.forEach((id) => query.append("courseIds", id));
    navigate(`/apply-course-institution?${query.toString()}`);
  };

  const handleCardClick = (courseId: string) => {
    if (role === "institution") {
      toggleCourseSelection(courseId);
    }
  };

  return (
    <Layout>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-ngo-color6 mb-4">
              Available Courses for Enrollments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore all educational courses as well as skill-based, vocational, and technical courses
              currently open for enrollment.

            </p>
          </div>
          <div className="flex justify-center mb-6 space-x-4">
            <button
              onClick={() => setRole("student")}
              className={`px-4 py-2 rounded-md ${role === "student"
                ? "bg-ngo-color6 text-white"
                : "bg-white border border-gray-300"
                }`}
            >
              Individual Learner
            </button>
            <button
              onClick={() => setRole("institution")}
              className={`px-4 py-2 rounded-md ${role === "institution"
                ? "bg-ngo-color6 text-white"
                : "bg-white border border-gray-300"
                }`}
            >
              Institution
            </button>
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
          {role === "institution" && selectedCourses.length > 0 && (
            <div className="fixed bottom-6 sm:bottom-[23rem] md:bottom-[18rem] left-6 sm:md:left-[40rem] z-40 flex flex-col items-center space-y-2">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 text-sm text-blue-700 rounded shadow mb-2">
                <strong>{selectedCourses.length}</strong> course(s) selected
              </div>
              <Button
                onClick={handleSubmit}
                className="bg-ngo-color6 hover:bg-ngo-color2 text-white font-bold px-6 py-3 rounded-full shadow-lg text-base border-2 border-ngo-color2 transition-all duration-300"
                style={{ minWidth: 160 }}
              >
                Apply Now
              </Button>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {isLoading
              ? Array(8).fill(0).map((_, index) => (
                <Card key={index} className="h-80">
                  <SkeletonLoading />
                </Card>
              ))
              : filteredCourses.map((course) => {
                const isSelected =
                  role === "institution" &&
                  selectedCourses.includes(course._id);
                return (
                  <Card
                    key={course._id}
                    className={`flex flex-col hover:shadow-md transition-shadow cursor-pointer select-none ${isSelected ? "ring-2 ring-ngo-color6 ring-offset-2" : ""}`}
                    tabIndex={role === "institution" ? 0 : -1}
                    aria-pressed={isSelected}
                    onClick={() => handleCardClick(course._id)}
                    onKeyDown={(e) => {
                      if (role === "institution" && (e.key === "Enter" || e.key === " ")) {
                        handleCardClick(course._id);
                      }
                    }}
                  >
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
                        {/* {course.instructor && (
                          <div className="flex items-center text-xs text-gray-500 truncate">
                            <User className="w-3 h-3 mr-1 text-ngo-color4" />
                            <span>Instructor: {course.instructor}</span>
                          </div>
                        )} */}
                        {course.level && (
                          <div className="flex items-center text-xs text-gray-500 truncate">
                            <BookOpen className="w-3 h-3 mr-1 text-ngo-color4" />
                            <span>Level: {course.level}</span>
                          </div>
                        )}
                        {course.targetAudience && (
                          <div className="flex items-center text-xs text-gray-500 truncate">
                            <Users className="w-3 h-3 mr-1 text-ngo-color4" />
                            <span>Target Audience: {course.targetAudience.join(", ")}</span>
                          </div>
                        )}
                        {course.fees !== undefined && (
                          <div className="flex items-center text-xs text-gray-500 truncate">
                            <IndianRupee className="w-3 h-3 mr-1 text-ngo-color4" />
                            <span>Fees: ₹{course.fees}</span>
                          </div>
                        )}
                      </div>
                      {role === "student" && (
                        <Button
                          onClick={() => navigate(`/apply-course/${course._id}`)}
                          className="mt-auto w-full bg-ngo-color6 hover:bg-ngo-color6/90 text-white text-xs py-1"
                        >
                          Apply Now
                        </Button>
                      )}
                      {role === "institution" && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCourseSelection(course._id);
                          }}
                          className={`mt-auto w-full flex items-center justify-center gap-2 ${isSelected
                            ? "bg-green-100 border-green-500 text-green-700 hover:bg-green-200"
                            : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                          {isSelected ? (
                            <>
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span>Selected</span>
                            </>
                          ) : (
                            "Select Course"
                          )}
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
