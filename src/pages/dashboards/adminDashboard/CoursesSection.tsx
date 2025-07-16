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
import { MoreHorizontal } from "lucide-react";
import { toast } from "sonner";
import { SectionLoader } from "@/components/LoadingSpinner";

const CoursesSection = ({ searchQuery }) => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [viewStudents, setViewStudents] = useState(false);
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10); // Number of items per page

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

  const handleEdit = async () => {
    try {
      const response = await axiosInstance.put(
        `/admin/courses/edit/${selectedCourse._id}`,
        formData
      );
      const updated = courses.map((course) =>
        course._id === selectedCourse._id ? response.data : course
      );
      setCourses(updated);
      setFilteredCourses(updated);
      toast.success("Course updated successfully");
    } catch (error) {
      toast.error("Failed to update course");
      console.error("Edit error:", error);
    } finally {
      setSelectedCourse(null);
      setIsEditing(false);
    }
  };

  // Pagination logic
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const totalPages = Math.ceil(filteredCourses.length / pageSize);

  return (
    <Card className="border-0 shadow-none">
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
                            onClick={() => {
                              setSelectedCourse(course);
                              setIsEditing(true);
                              setFormData({
                                title: course.title,
                                description: course.description,
                              });
                            }}
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
                            onClick={() => setSelectedCourse(course)}
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
      {/* Edit Course Dialog */}
      <Dialog
        open={isEditing}
        onOpenChange={() => {
          setIsEditing(false);
          setSelectedCourse(null);
        }}
      >
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Course</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <Input
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="Course Title"
            />
            <Input
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Course Description"
            />
            <Button onClick={handleEdit}>Update</Button>
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
