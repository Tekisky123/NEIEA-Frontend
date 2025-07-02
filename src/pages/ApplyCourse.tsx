import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "@/lib/axiosInstance";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { statesAndCities } from "@/lib/statesAndCities";
import { referredByOptions } from "@/lib/referredBy";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// Define the schema for form validation
const formSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  motherTongue: z.string().min(1, "Mother Tongue is required"),
  age: z.string().min(1, "Age is required"),
  gender: z.string().min(1, "Gender is required"),
  isStudent: z.string().min(1, "This field is required"),
  classStudying: z.string().min(1, "This field is required"),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),
  whatsappNumber: z.string().min(10, "WhatsApp number must be at least 10 digits"),
  referredBy: z.string().min(1, "Referred By is required"),
  convenientTimeSlot: z.string().min(1, "Convenient Time Slot is required"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const ApplyCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [cities, setCities] = useState<string[]>([]);

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

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
    const { name, value } = e.target;
    setValue(name, value);

    if (name === "state") {
      const selectedState = statesAndCities.find((s) => s.state === value);
      setCities(selectedState ? selectedState.cities : []);
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      await axiosInstance.post(`/course/apply/${id}`, data);
      setShowDialog(true);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Application submission failed");
    }
  };

  if (!course) return null;

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <div className="bg-white shadow-xl rounded-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Apply for {course.title}</h1>
          <p className="text-gray-600 mb-8 text-lg">{course.description}</p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Course Details</h2>
            <p className="text-gray-600 mb-2"><strong>Duration:</strong> {course.duration}</p>
            <p className="text-gray-600 mb-2">
              <strong>Requirements:</strong> Students are expected to commit themselves for serious learning during the whole course by attending every day (Mandatory attendance is 90%), being punctual, and completing the homework on time.
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Infrastructure Requirements:</strong> Schools/Institutions are requested to allocate 1 hour time every day for the students and provide a classroom with LED Screen and high-speed internet. Individual students should have a Smartphone/Laptop/Desktop and high-speed internet.
            </p>
            <p className="text-gray-600">
              <strong>Certification:</strong> Certification is issued for students who complete the above course requirements.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <Input id="fullName" {...register("fullName")} placeholder="Your Full Name" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                {errors.fullName && <p className="mt-2 text-sm text-red-600">{errors.fullName.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Input id="email" {...register("email")} type="email" placeholder="Your Email" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <Input id="phone" {...register("phone")} placeholder="Phone Number" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>}
              </div>
              <div>
                <label htmlFor="motherTongue" className="block text-sm font-medium text-gray-700">Mother Tongue</label>
                <Input id="motherTongue" {...register("motherTongue")} placeholder="Mother Tongue" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                {errors.motherTongue && <p className="mt-2 text-sm text-red-600">{errors.motherTongue.message}</p>}
              </div>
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                <Input id="age" {...register("age")} placeholder="Age" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                {errors.age && <p className="mt-2 text-sm text-red-600">{errors.age.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <div className="flex mt-4 items-center gap-4">
                  {["Male", "Female", "Others"].map((gender) => (
                    <div key={gender} className="flex items-center">
                      <input
                        type="radio"
                        id={gender}
                        {...register("gender")}
                        value={gender}
                        checked={watch("gender") === gender}
                        onChange={() => setValue("gender", gender)}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label htmlFor={gender} className="ml-2 block text-sm text-gray-700">
                        {gender}
                      </label>
                    </div>
                  ))}
                </div>
                {errors.gender && <p className="mt-2 text-sm text-red-600">{errors.gender.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Are you a student?</label>
                <div className="flex mt-4 items-center gap-4">
                  {["Yes", "No"].map((option) => (
                    <div key={option} className="flex items-center">
                      <input
                        type="radio"
                        id={option}
                        {...register("isStudent")}
                        value={option}
                        checked={watch("isStudent") === option}
                        onChange={() => setValue("isStudent", option)}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label htmlFor={option} className="ml-2 block text-sm text-gray-700">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
                {errors.isStudent && <p className="mt-2 text-sm text-red-600">{errors.isStudent.message}</p>}
              </div>
              <div>
                <label htmlFor="classStudying" className="block text-sm font-medium text-gray-700">Which class are you studying in?</label>
                <Input id="classStudying" {...register("classStudying")} placeholder="Which class are you studying in?" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                {errors.classStudying && <p className="mt-2 text-sm text-red-600">{errors.classStudying.message}</p>}
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                <select id="state" {...register("state")} onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                  <option value="">Select State</option>
                  {statesAndCities.map((stateData) => (
                    <option key={stateData.state} value={stateData.state}>{stateData.state}</option>
                  ))}
                </select>
                {errors.state && <p className="mt-2 text-sm text-red-600">{errors.state.message}</p>}
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <select id="city" {...register("city")} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                {errors.city && <p className="mt-2 text-sm text-red-600">{errors.city.message}</p>}
              </div>
              <div>
                <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700">WhatsApp Contact Number</label>
                <Input id="whatsappNumber" {...register("whatsappNumber")} placeholder="WhatsApp Contact Number" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                {errors.whatsappNumber && <p className="mt-2 text-sm text-red-600">{errors.whatsappNumber.message}</p>}
              </div>
              <div>
                <label htmlFor="referredBy" className="block text-sm font-medium text-gray-700">Referred By</label>
                <select id="referredBy" {...register("referredBy")} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                  {referredByOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {errors.referredBy && <p className="mt-2 text-sm text-red-600">{errors.referredBy.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Convenient Time Slot</label>
                <div className="flex mt-4 items-center gap-4">
                  {["9:00 PM - 10:00 PM"].map((slot) => (
                    <div key={slot} className="flex items-center">
                      <input
                        type="radio"
                        id={slot}
                        {...register("convenientTimeSlot")}
                        value={slot}
                        checked={watch("convenientTimeSlot") === slot}
                        onChange={() => setValue("convenientTimeSlot", slot)}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label htmlFor={slot} className="ml-2 block text-sm text-gray-700">
                        {slot}
                      </label>
                    </div>
                  ))}
                </div>
                {errors.convenientTimeSlot && <p className="mt-2 text-sm text-red-600">{errors.convenientTimeSlot.message}</p>}
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Why are you applying for this course? (Optional)</label>
              <Textarea id="message" {...register("message")} placeholder="Why are you applying for this course?" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div className="col-span-1 md:col-span-2">
              <Button type="submit" className="w-full bg-ngo-color1 hover:bg-ngo-color2 text-white font-medium py-3 px-4 rounded-lg shadow-sm">
                Submit Application
              </Button>
            </div>
          </form>

          <Dialog open={showDialog} onOpenChange={setShowDialog}>
            <DialogContent className="text-center max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-800">Application Submitted!</DialogTitle>
              </DialogHeader>
              <p className="text-gray-600 mt-4">
                We've received your application for <strong>{course.title}</strong>. You will hear from us soon!
              </p>
              <p className="text-gray-600 mt-4">
                You have successfully registered for the NEIEA Foundational English Course. We will inform you about the start of the class in the WhatsApp group.
              </p>
              <p className="text-gray-600 mt-4">
                Best regards from Team NEIEA
              </p>
              <p className="text-gray-600 mt-4">
                For more details, please contact:
                <br />
                Ms. Taskeen - +917090770784
                <br />
                Ms. Saara - +919019431646
              </p>
              <Button
                className="mt-6 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
                onClick={() => {
                  setShowDialog(false);
                  navigate("/courses");
                }}
              >
                Go Back to Courses
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Layout>
  );
};

export default ApplyCourse;
