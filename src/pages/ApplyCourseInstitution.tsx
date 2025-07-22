import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

const formSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    institutionName: z.string().min(1, "Institution Name is required"),
    howDidYouFindUs: z.string().min(1, "This field is required"),
    referredBy: z.string().min(1, "Referred By is required"),
    coordinatorName: z.string().min(1, "Coordinator Name is required"),
    coordinatorContactNumber1: z.string().min(10, "Contact number must be at least 10 digits").max(10, "Contact number must be at most 10 digits").regex(/^\d+$/, "Contact number must contain only numbers"),
    coordinatorEmail: z.string().min(1, "Coordinator Email is required").email("Invalid email address"),
    coordinatorContactNumber2: z
        .string()
        .optional()
        .refine(
            (val) => !val || (val.length === 10 && /^\d+$/.test(val)),
            "Contact number must be 10 digits and contain only numbers"
        ),
    coordinatorEmail2: z.string().email("Invalid email address").or(z.literal("")),
    state: z.string().min(1, "State is required"),
    city: z.string().min(1, "City is required"),
    address: z.string().min(1, "Address is required"),
    numberOfStudents: z.string().min(1, "Number of Students is required"),
    startMonth: z.string().min(1, "Start Month is required"),
    studentList: z.instanceof(FileList).refine((files) => {
        if (files.length === 0) return true;
        return files[0].size <= 10 * 1024 * 1024;
    }, "File size must be less than 10 MB"),
    institutionLogo: z.instanceof(FileList).refine((files) => {
        if (files.length === 0) return true;
        return files[0].size <= 100 * 1024 * 1024;
    }, "File size must be less than 100 MB"),
    suitableTime: z.string().min(1, "Suitable Time is required"),
});

type FormData = z.infer<typeof formSchema>;

const ApplyCourseInstitution = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [cities, setCities] = useState<string[]>([]);
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const queryParams = new URLSearchParams(location.search);
    const courseIds = queryParams.getAll("courseIds");

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
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                if (key !== "studentList" && key !== "institutionLogo") {
                    formData.append(key, value);
                }
            });

            courseIds.forEach((id) => {
                formData.append("courseIds", id);
            });

            if (data.studentList && data.studentList.length > 0) {
                formData.append("studentList", data.studentList[0]);
            }
            if (data.institutionLogo && data.institutionLogo.length > 0) {
                formData.append("institutionLogo", data.institutionLogo[0]);
            }

            await axiosInstance.post(`/course/apply-institution`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            toast.success("Application submitted successfully!");
            navigate("/courses");
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || "Application submission failed");
        }
    };

    return (
        <Layout>
            <div className="container mx-auto py-12 px-4 max-w-4xl">
                <div className="bg-white shadow-xl rounded-xl p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Apply for Courses</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                                <Input id="email" {...register("email")} type="email" placeholder="Your Email" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="institutionName" className="block text-sm font-medium text-gray-700">Name of Institution/Madarsa/Organization/Other *</label>
                                <Input id="institutionName" {...register("institutionName")} placeholder="Institution Name" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                                {errors.institutionName && <p className="mt-2 text-sm text-red-600">{errors.institutionName.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="howDidYouFindUs" className="block text-sm font-medium text-gray-700">How did you find us? *</label>
                                <select id="howDidYouFindUs" {...register("howDidYouFindUs")} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                                    <option value="">Select Option</option>
                                    <option value="Facebook">Facebook</option>
                                    <option value="LinkedIn">LinkedIn</option>
                                    <option value="Instagram">Instagram</option>
                                    <option value="Website">Website</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.howDidYouFindUs && <p className="mt-2 text-sm text-red-600">{errors.howDidYouFindUs.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="referredBy" className="block text-sm font-medium text-gray-700">Referred By *</label>
                                <select id="referredBy" {...register("referredBy")} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                                    <option value="">Select Option</option>
                                    {referredByOptions.map((option) => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                                {errors.referredBy && <p className="mt-2 text-sm text-red-600">{errors.referredBy.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="coordinatorName" className="block text-sm font-medium text-gray-700">Institution coordinator's name *</label>
                                <Input id="coordinatorName" {...register("coordinatorName")} placeholder="Coordinator Name" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                                {errors.coordinatorName && <p className="mt-2 text-sm text-red-600">{errors.coordinatorName.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="coordinatorContactNumber1" className="block text-sm font-medium text-gray-700">Institution coordinator's Contact Number-1 *</label>
                                <Input id="coordinatorContactNumber1" {...register("coordinatorContactNumber1")} placeholder="Contact Number" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                                {errors.coordinatorContactNumber1 && <p className="mt-2 text-sm text-red-600">{errors.coordinatorContactNumber1.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="coordinatorEmail" className="block text-sm font-medium text-gray-700">Institution coordinator's Email *</label>
                                <Input id="coordinatorEmail" {...register("coordinatorEmail")} type="email" placeholder="Coordinator Email" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                                {errors.coordinatorEmail && <p className="mt-2 text-sm text-red-600">{errors.coordinatorEmail.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="coordinatorContactNumber2" className="block text-sm font-medium text-gray-700">Institution coordinator's Contact Number-2</label>
                                <Input id="coordinatorContactNumber2" {...register("coordinatorContactNumber2")} placeholder="Contact Number" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                                {errors.coordinatorContactNumber2 && <p className="mt-2 text-sm text-red-600">{errors.coordinatorContactNumber2.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="coordinatorEmail2" className="block text-sm font-medium text-gray-700">Institution coordinator's Email-2</label>
                                <Input id="coordinatorEmail2" {...register("coordinatorEmail2")} type="email" placeholder="Coordinator Email" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                                {errors.coordinatorEmail2 && <p className="mt-2 text-sm text-red-600">{errors.coordinatorEmail2.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State *</label>
                                <select id="state" {...register("state")} onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                                    <option value="">Select State</option>
                                    {statesAndCities.map((stateData) => (
                                        <option key={stateData.state} value={stateData.state}>{stateData.state}</option>
                                    ))}
                                </select>
                                {errors.state && <p className="mt-2 text-sm text-red-600">{errors.state.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City *</label>
                                <select id="city" {...register("city")} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                                    <option value="">Select City</option>
                                    {cities.map((city) => (
                                        <option key={city} value={city}>{city}</option>
                                    ))}
                                </select>
                                {errors.city && <p className="mt-2 text-sm text-red-600">{errors.city.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Institution/School's Address *</label>
                                <Textarea id="address" {...register("address")} placeholder="Address" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                                {errors.address && <p className="mt-2 text-sm text-red-600">{errors.address.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="numberOfStudents" className="block text-sm font-medium text-gray-700">Number of students who will be attending the class *</label>
                                <Input id="numberOfStudents" {...register("numberOfStudents")} placeholder="Number of Students" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                                {errors.numberOfStudents && <p className="mt-2 text-sm text-red-600">{errors.numberOfStudents.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="startMonth" className="block text-sm font-medium text-gray-700">When is the earliest you can start *</label>
                                <select id="startMonth" {...register("startMonth")} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                                    <option value="">Select Month</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                                {errors.startMonth && <p className="mt-2 text-sm text-red-600">{errors.startMonth.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="studentList" className="block text-sm font-medium text-gray-700">Upload Student List</label>
                                <Input id="studentList" type="file" {...register("studentList")} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                                {errors.studentList && <p className="mt-2 text-sm text-red-600">{errors.studentList.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="institutionLogo" className="block text-sm font-medium text-gray-700">Upload Institution Logo</label>
                                <Input id="institutionLogo" type="file" {...register("institutionLogo")} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                                {errors.institutionLogo && <p className="mt-2 text-sm text-red-600">{errors.institutionLogo.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="suitableTime" className="block text-sm font-medium text-gray-700">Suitable Time for Class *</label>
                                <Input id="suitableTime" {...register("suitableTime")} placeholder="Suitable Time" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                                {errors.suitableTime && <p className="mt-2 text-sm text-red-600">{errors.suitableTime.message}</p>}
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-2">
                            <Button type="submit" className="w-full bg-ngo-color1 hover:bg-ngo-color2 text-white font-medium py-3 px-4 rounded-lg shadow-sm">
                                Submit Application
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default ApplyCourseInstitution;
