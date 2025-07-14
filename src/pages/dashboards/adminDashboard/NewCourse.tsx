import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import axiosInstance from "@/lib/axiosInstance";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { PlusCircle } from "lucide-react";

const courseSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  description: z.string().min(1, "Course overview is required").max(500),
  imageUrl: z.string().url("Must be a valid URL").optional(),
  instructor: z.string().min(1, "Instructor is required"),
  level: z.enum(["beginner", "intermediate", "advanced"], {
    required_error: "Level is required",
  }),
  duration: z.string().min(1, "Duration is required"),
  targetAudience: z.array(z.string()).min(1, "Target audience is required"),
  fees: z.number().min(0, "Fees must be a positive number"),
  whatsappLink: z.string().url("Must be a valid URL"),
});

const NewCourse = () => {
  const form = useForm({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      title: "",
      description: "",
      imageUrl: "https://img.freepik.com/free-photo/learning-education-ideas-insight-intelligence-study-concept_53876-120116.jpg?semt=ais_hybrid&w=740",
      instructor: "",
      level: undefined,
      duration: "",
      targetAudience: [""],
      fees: 0,
      whatsappLink: ""
    },
  });

  const onSubmit = async (data) => {
    try {
      await axiosInstance.post("/admin/courses", data);
      toast.success("Course created successfully");
      form.reset();
    } catch (error) {
      toast.error("Failed to create course");
      console.error("Create course error:", error);
    }
  };

  return (
    <Card className="border-0 shadow-none">
      <CardHeader>
        <CardTitle className="text-xl">Create New Course</CardTitle>
        <CardDescription>
          Fill in the details to create a new course
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Title *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter course title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="instructor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instructor *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter instructor name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Level *</FormLabel>
                    <FormControl>
                      <select {...field} className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                        <option value="">Select a level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duration *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 8 weeks" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fees"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fees *</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter course fees"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Overview *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter course overview - What will be taught?"
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="targetAudience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Audience *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter target audience, separated by commas"
                      {...field}
                      onChange={(e) => field.onChange(e.target.value.split(','))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="whatsappLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>WhatsApp Link *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter WhatsApp link" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end pt-4">
              <Button type="submit" className="w-full md:w-auto">
                <PlusCircle className="w-4 h-4 mr-2" />
                Create Course
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default NewCourse;
