import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "@/lib/axiosInstance";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";

const ApplyCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showDialog, setShowDialog] = useState(false);

  // Fetch course details
  const fetchCourse = async () => {
    try {
      const response = await axiosInstance.get(`/course/getOneCourse/${id}`);
      setCourse(response.data);
    } catch (error) {
      toast.error("Failed to load course");
    }
  };

  useEffect(() => {
    fetchCourse();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axiosInstance.post(`/course/apply/${id}`, form);
      setShowDialog(true);
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Application submission failed"
      );
    }
  };

  if (!course) return null;

  return (
    <Layout>
      <div className="container mx-auto py-16 px-4 max-w-2xl">
        <h1 className="text-3xl font-bold text-ngo-encore mb-4">
          Apply for {course.title}
        </h1>
        <p className="text-muted-foreground mb-8">{course.description}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            required
            name="fullName"
            placeholder="Your Full Name"
            value={form.fullName}
            onChange={handleChange}
          />
          <Input
            required
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            required
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />
          <Textarea
            name="message"
            placeholder="Why are you applying for this course? (Optional)"
            value={form.message}
            onChange={handleChange}
          />

          <Button type="submit" className="bg-ngo-encore text-white w-full">
            Submit Application
          </Button>
        </form>

        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent className="text-center max-w-md">
            <DialogHeader>
              <DialogTitle>Application Submitted!</DialogTitle>
            </DialogHeader>
            <p className="text-muted-foreground mt-2">
              We've received your application for <strong>{course.title}</strong>.
              You will hear from us soon!
            </p>
            <Button
              className="mt-6 bg-ngo-true-joy text-white"
              onClick={() => {
                setShowDialog(false);
                navigate("/courses"); // or homepage if you prefer
              }}
            >
              Go Back to Courses
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default ApplyCourse;
