import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axiosInstance";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MoreHorizontal } from "lucide-react";
import { toast } from "sonner";
import { SectionLoader } from "@/components/LoadingSpinner";
import CourseCard from "@/components/CourseCard";
import { useNavigate } from "react-router-dom";

const CoursesSection = ({ searchQuery = "" }) => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [viewStudents, setViewStudents] = useState(false);
  const [viewCourseCard, setViewCourseCard] = useState(false);
  const initialFormData = {
    title: "",
    description: "",
    duration: "",
    level: "beginner",
    fees: 0,
    targetAudience: "",
    whatsappLink: "",
    image: null,
  };
  const [formData, setFormData] = useState(initialFormData);
  const [previewImage, setPreviewImage] = useState("");
  const [editLoading, setEditLoading] = useState(false);
  const [editError, setEditError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10); // Number of items per page
  const navigate = useNavigate();

  const fetchCourses = async () => {
    try {
      const response = await axiosInstance.get("/admin/courses");
      setCourses(response.data);
      setFilteredCourses(response.data);
    } catch (error) {
      toast.error("Failed to load courses");
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = courses.filter(
        (course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCourses(filtered);
    } else {
      setFilteredCourses(courses);
    }
    setCurrentPage(1); // Reset to the first page whenever the search query changes
  }, [searchQuery, courses]);

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(
        `/admin/courses/delete/${selectedCourse._id}`
      );
      const updated = courses.filter((c) => c._id !== selectedCourse._id);
      setCourses(updated);
      setFilteredCourses(updated);
      toast.success("Course deleted successfully");
    } catch (error) {
      toast.error("Failed to delete course");
      console.error("Delete error:", error);
    } finally {
      setSelectedCourse(null);
      setIsDeleting(false);
    }
  };

  const openEdit = (course) => {
    setSelectedCourse(course);
    setIsEditing(true);
    setFormData({
      title: course.title || "",
      description: course.description || "",
      duration: course.duration || "",
      level: course.level || "beginner",
      fees: Number(course.fees) || 0,
      targetAudience: (course.targetAudience || []).join(", "),
      whatsappLink: course.whatsappLink || "",
      image: null,
    });
    setPreviewImage(course.imageUrl || "");
    setEditError("");
  };

  const handleEdit = async () => {
    setEditLoading(true);
    setEditError("");
    try {
      let response;
      if (formData.image) {
        // If a new image is uploaded, use multipart/form-data
        const data = new FormData();
        data.append("title", formData.title);
        data.append("description", formData.description);
        data.append("duration", formData.duration);
        data.append("level", formData.level);
        data.append("fees", String(formData.fees));
        data.append("targetAudience", formData.targetAudience);
        data.append("whatsappLink", formData.whatsappLink);
        data.append("image", formData.image);
        response = await axiosInstance.put(
          `/admin/courses/edit/${selectedCourse._id}`,
          data,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      } else {
        // No new image, send as JSON
        response = await axiosInstance.put(
          `/admin/courses/edit/${selectedCourse._id}`,
          {
            title: formData.title,
            description: formData.description,
            duration: formData.duration,
            level: formData.level,
            fees: formData.fees,
            targetAudience: formData.targetAudience,
            whatsappLink: formData.whatsappLink,
          }
        );
      }
      const updated = courses.map((course) =>
        course._id === selectedCourse._id ? response.data.data : course
      );
      setCourses(updated);
      setFilteredCourses(updated);
      toast.success("Course updated successfully");
      setIsEditing(false);
      setSelectedCourse(null);
    } catch (error) {
      setEditError(
        error?.response?.data?.message || "Failed to update course. Please check all fields."
      );
    } finally {
      setEditLoading(false);
    }
  };

  // Pagination logic
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const totalPages = Math.ceil(filteredCourses.length / pageSize);

  return (
    <Card className="border-0 rounded-none shadow-none">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl">Courses Management</CardTitle>
            <CardDescription>
              Manage all available courses in the system
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <SectionLoader />
        ) : filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No courses found</p>
          </div>
        ) : (
          <div className="overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Overview</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedCourses.map((course) => (
                  <TableRow key={course._id}>
                    <TableCell className="font-medium">
                      {course.title}
                    </TableCell>
                    <TableCell className="max-w-xs truncate">
                      {course.description}
                    </TableCell>
                    <TableCell>{course.duration}</TableCell>
                    <TableCell>
                      {course.applicants?.length || 0}{" "}
                      {course.applicants?.length > 0 && (
                        <Button
                          variant="link"
                          className="text-xs text-blue-600"
                          onClick={() => {
                            setSelectedCourse(course);
                            setViewStudents(true);
                          }}
                        >
                          View
                        </Button>
                      )}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => navigate(`/admin/dashboard/course/edit/${course._id}`)}
                          >
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => {
                              setSelectedCourse(course);
                              setIsDeleting(true);
                            }}
                          >
                            Delete
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => {
                              setSelectedCourse(course);
                              setViewCourseCard(true);
                            }}
                          >
                            View
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {/* Pagination Controls */}
            <div className="flex justify-end items-center mt-4 gap-2">
              <Button
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              >
                Previous
              </Button>
              <span>
                Page <strong>{currentPage}</strong> of{" "}
                <strong>{totalPages}</strong>
              </span>
              <Button
                variant="outline"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between text-sm text-muted-foreground">
        Showing <strong>{paginatedCourses.length}</strong> of{" "}
        <strong>{filteredCourses.length}</strong> courses
      </CardFooter>
      {/* View Students Dialog */}
      <Dialog open={viewStudents} onOpenChange={setViewStudents}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>
              Applicants for: {selectedCourse?.title}
            </DialogTitle>
          </DialogHeader>
          {selectedCourse?.applicants?.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Applied On</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {selectedCourse.applicants.map((applicant) => (
                  <TableRow key={applicant._id}>
                    <TableCell>{applicant.fullName || "-"}</TableCell>
                    <TableCell>{applicant.email || "-"}</TableCell>
                    <TableCell>{applicant.phone || "-"}</TableCell>
                    <TableCell className="max-w-xs truncate">
                      {applicant.message || "—"}
                    </TableCell>
                    <TableCell>
                      {new Date(applicant.appliedAt).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-muted-foreground mt-4">
              No applicants found for this course.
            </p>
          )}
        </DialogContent>
      </Dialog>
      {/* View Course Modal */}
      <Dialog open={viewCourseCard} onOpenChange={setViewCourseCard}>
        <DialogContent className="max-w-lg w-full">
          <DialogHeader>
            <DialogTitle>Course Details</DialogTitle>
          </DialogHeader>
          {selectedCourse && (
            <CourseCard
              title={selectedCourse.title}
              description={selectedCourse.description}
              duration={selectedCourse.duration}
              imageUrl={selectedCourse.imageUrl}
              level={selectedCourse.level}
              targetAudience={selectedCourse.targetAudience}
              fees={selectedCourse.fees}
            />
          )}
          <div className="flex justify-end mt-4">
            <Button variant="outline" onClick={() => setViewCourseCard(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      {/* Edit Course Dialog */}
      <Dialog
        open={isEditing}
        onOpenChange={() => {
          setIsEditing(false);
          setSelectedCourse(null);
        }}
      >
        <DialogContent className="max-w-lg w-full">
          <DialogHeader>
            <DialogTitle>Edit Course</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {editError && <div className="text-red-500 text-sm">{editError}</div>}
            <Input
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Course Title"
              required
            />
            <Textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Course Description"
              required
            />
            <Input
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              placeholder="Duration (e.g., 8 weeks)"
              required
            />
            <div className="flex gap-2">
              <select
                value={formData.level}
                onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                className="flex-1 border rounded px-2 py-2 text-sm"
                required
              >
                <option value="">Select Level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
              <Input
                type="number"
                value={formData.fees}
                onChange={(e) => setFormData({ ...formData, fees: Number(e.target.value) })}
                placeholder="Fees"
                min={0}
                className="flex-1"
                required
              />
            </div>
            <Input
              value={formData.targetAudience}
              onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
              placeholder="Target Audience (comma separated)"
              required
            />
            <Input
              value={formData.whatsappLink}
              onChange={(e) => setFormData({ ...formData, whatsappLink: e.target.value })}
              placeholder="WhatsApp Link"
              required
            />
            <div>
              <label className="block text-xs text-gray-500 mb-1">Course Image</label>
              {previewImage && (
                <img src={previewImage} alt="Current" className="h-24 rounded mb-2" />
              )}
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setFormData({ ...formData, image: file });
                    setPreviewImage(URL.createObjectURL(file));
                  }
                }}
              />
              <div className="text-xs text-gray-400 mt-1">Leave blank to keep current image.</div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => { setIsEditing(false); setSelectedCourse(null); }}>
                Cancel
              </Button>
              <Button onClick={handleEdit} disabled={editLoading} className="bg-ngo-color6 text-white font-bold">
                {editLoading ? "Updating..." : "Update"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {/* Delete Confirmation Dialog */}
      <Dialog
        open={isDeleting}
        onOpenChange={() => {
          setIsDeleting(false);
          setSelectedCourse(null);
        }}
      >
        <DialogContent className="max-w-sm text-center">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <p>Are you sure you want to delete this course?</p>
          <div className="flex justify-center gap-4 mt-4">
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setIsDeleting(false);
                setSelectedCourse(null);
              }}
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default CoursesSection;
