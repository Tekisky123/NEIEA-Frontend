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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SectionLoader } from "@/components/LoadingSpinner";
import * as XLSX from "xlsx";

const CourseSectionForInstitution = ({ searchQuery = "" }) => {
  const [institutions, setInstitutions] = useState([]);
  const [filteredInstitutions, setFilteredInstitutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInstitution, setSelectedInstitution] = useState(null);
  const [viewCourses, setViewCourses] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);

  const fetchInstitutions = async () => {
    try {
      const response = await axiosInstance.get("/admin/institutions");
      setInstitutions(response.data);
      setFilteredInstitutions(response.data);
    } catch (error) {
      console.error("Failed to load institutions", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInstitutions();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = institutions.filter(
        (inst) =>
          inst.institutionName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          inst.coordinatorName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          inst.email?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredInstitutions(filtered);
    } else {
      setFilteredInstitutions(institutions);
    }
  }, [searchQuery, institutions]);

  // Pagination logic
  const paginatedInstitutions = filteredInstitutions.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const totalPages = Math.ceil(filteredInstitutions.length / pageSize);

  const handleDownloadExcel = () => {
    const data = filteredInstitutions.map((inst) => ({
      "Institution Name": inst.institutionName,
      "Coordinator Name": inst.coordinatorName,
      "Email Address": inst.email,
      "Number Of Students": inst.numberOfStudents,
      "Start Month": inst.startMonth,
      "Suitable Time Slot": inst.suitableTimeSlot,
      "Applied Courses": inst.appliedCourses?.length || 0,
    }));
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Institutions Report");
    XLSX.writeFile(workbook, "institutions_report.xlsx");
  };

  const handleDownloadCoursesExcel = () => {
    if (!selectedInstitution || !selectedInstitution.appliedCourses) return;
    const data = selectedInstitution.appliedCourses.map((course) => ({
      Title: course.title,
      Overview: course.description,
      Duration: course.duration,
    }));
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Applied Courses");
    const institutionName = (selectedInstitution.institutionName || "institution").replace(/\s+/g, "_");
    XLSX.writeFile(workbook, `${institutionName}_courses.xlsx`);
  };

  return (
    <Card className="border-0 shadow-none rounded-none">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl">Institutions Management</CardTitle>
            <CardDescription>
              View all institutions and their applied courses
            </CardDescription>
          </div>
          <Button onClick={handleDownloadExcel} className="bg-ngo-color6 text-white font-bold">
            Download
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        {loading ? (
          <SectionLoader />
        ) : filteredInstitutions.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No institutions found</p>
          </div>
        ) : (
          <div className="overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Institution Name</TableHead>
                  <TableHead>Coordinator Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Number Of Students</TableHead>
                  <TableHead>Start Month</TableHead>
                  <TableHead>Suitable Time Slot</TableHead>
                  <TableHead>Applied Courses</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedInstitutions.map((inst) => (
                  <TableRow key={inst._id}>
                    <TableCell className="font-medium">{inst.institutionName}</TableCell>
                    <TableCell>{inst.coordinatorName}</TableCell>
                    <TableCell>{inst.email}</TableCell>
                    <TableCell className="max-w-xs truncate">{inst.address}</TableCell>
                    <TableCell>{inst.numberOfStudents}</TableCell>
                    <TableCell>{inst.startMonth}</TableCell>
                    <TableCell>{inst.suitableTimeSlot}</TableCell>
                    <TableCell>
                      {inst.appliedCourses?.length || 0} {" "}
                      {inst.appliedCourses?.length > 0 && (
                        <Button
                          variant="link"
                          className="text-xs text-blue-600"
                          onClick={() => {
                            setSelectedInstitution(inst);
                            setViewCourses(true);
                          }}
                        >
                          View
                        </Button>
                      )}
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
                Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
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
        Showing <strong>{paginatedInstitutions.length}</strong> of {" "}
        <strong>{filteredInstitutions.length}</strong> institutions
      </CardFooter>

      {/* View Applied Courses Dialog */}
      <Dialog open={viewCourses} onOpenChange={setViewCourses}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <div className="flex justify-between items-center">
              <DialogTitle>
                Applied Courses for: {selectedInstitution?.institutionName}
              </DialogTitle>
              {selectedInstitution?.appliedCourses?.length > 0 && (
                <Button onClick={handleDownloadCoursesExcel} className="bg-ngo-color6 mr-8 text-white font-bold">
                  Download
                </Button>
              )}
            </div>
          </DialogHeader>
          {selectedInstitution?.appliedCourses?.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Overview</TableHead>
                  <TableHead>Duration</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {selectedInstitution.appliedCourses.map((course) => (
                  <TableRow key={course._id}>
                    <TableCell>{course.title}</TableCell>
                    <TableCell className="max-w-xs truncate">{course.description}</TableCell>
                    <TableCell>{course.duration}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-muted-foreground mt-4">
              No applied courses found for this institution.
            </p>
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default CourseSectionForInstitution;
