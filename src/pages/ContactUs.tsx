import { useState } from "react";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    MapPin,
    Mail,
    Phone,
    Clock,
    Send,
    MessageCircle,
    Building,
    Globe,
    CheckCircle,
    AlertCircle,
} from "lucide-react";
import axiosInstance from "@/lib/axiosInstance";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        state: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("idle");
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        state: "",
        message: "",
    });

    const contactInfo = {
        address: "22-2-472/3, Panjathan colony, Hyderabad, TS, 500024 IN.",
        email: "feedback@neiea.org",
        phone: "+91 70907 70784",
        workingHours: "Monday - Friday: 9:00 AM - 6:00 PM IST",
    };

    const indianStates = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
        "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
        "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
        "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
        "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh",
        "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Puducherry",
        "Jammu and Kashmir", "Ladakh", "Other",
    ];

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePhone = (phone) => {
        const re = /^\+91\d{10}$/;
        return re.test(phone);
    };

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => ({ ...prev, [field]: "" }));
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = { ...errors };

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
            valid = false;
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
            valid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Please provide a valid email";
            valid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
            valid = false;
        } else if (!validatePhone(formData.phone)) {
            newErrors.phone = "Please provide a valid Indian phone number (e.g., +911234567890)";
            valid = false;
        }

        if (!formData.state) {
            newErrors.state = "State is required";
            valid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const response = await axiosInstance.post("/contact", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 201 || response.status === 200) {
                setSubmitStatus("success");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    state: "",
                    subject: "",
                    message: "",
                });
                navigate('/contact-us')
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-ngo-color1 via-ngo-color1 to-ngo-color3 text-white py-16 sm:py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-ngo-color4/20 rounded-full blur-3xl transform translate-x-48 -translate-y-48" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-ngo-color2/20 rounded-full blur-3xl transform -translate-x-48 translate-y-48" />
                <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
                    <Badge className="bg-ngo-color4 text-white mb-6 px-4 py-2 text-sm">
                        Get In Touch
                    </Badge>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
                        Contact Us
                    </h1>
                    <p className="text-white/90 text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
                        Have questions about our programs? Want to get involved?
                        We'd love to hear from you. Reach out and let's start a conversation.
                    </p>
                </div>
            </section>

            {/* Contact Information & Form Section */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <Badge className="bg-ngo-color4/10 text-ngo-color4 border border-ngo-color4/20 mb-4">
                                    Contact Information
                                </Badge>
                                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-6">
                                    Let's Start a Conversation
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    We're here to help and answer any questions you might have.
                                    Reach out to us through any of these channels.
                                </p>
                            </div>
                            <div className="space-y-6">
                                {/* Address */}
                                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-ngo-color4/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <MapPin className="w-6 h-6 text-ngo-color4" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Address</h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                    {contactInfo.address}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                {/* Email */}
                                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-ngo-color4/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Mail className="w-6 h-6 text-ngo-color4" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                                                <a
                                                    href={`mailto:${contactInfo.email}`}
                                                    className="text-ngo-color4 hover:text-ngo-color4/80 transition-colors duration-300"
                                                >
                                                    {contactInfo.email}
                                                </a>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                {/* Phone */}
                                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-ngo-color4/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Phone className="w-6 h-6 text-ngo-color4" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                                                <a
                                                    href={`tel:${contactInfo.phone}`}
                                                    className="text-ngo-color4 hover:text-ngo-color4/80 transition-colors duration-300"
                                                >
                                                    {contactInfo.phone}
                                                </a>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                {/* Working Hours */}
                                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-ngo-color4/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Clock className="w-6 h-6 text-ngo-color4" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Working Hours</h3>
                                                <p className="text-gray-600">{contactInfo.workingHours}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            {/* Additional Info */}
                            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Contact Us?</h3>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        <span>Learn about our educational programs</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        <span>Get information about volunteering</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        <span>Discuss partnership opportunities</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        <span>Share feedback and suggestions</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="space-y-6">
                            <div>
                                <Badge className="bg-green-100 text-green-700 border border-green-200 mb-4">
                                    Send Message
                                </Badge>
                                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-6">
                                    Get In Touch
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Fill out the form below and we'll get back to you as soon as possible.
                                </p>
                            </div>
                            <Card className="border-0 shadow-xl">
                                <CardContent className="p-8">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name Fields */}
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                                                    First Name *
                                                </Label>
                                                <Input
                                                    id="firstName"
                                                    type="text"
                                                    value={formData.firstName}
                                                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                                                    placeholder="First Name"
                                                    required
                                                    className="w-full"
                                                />
                                                {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                                                    Last Name *
                                                </Label>
                                                <Input
                                                    id="lastName"
                                                    type="text"
                                                    value={formData.lastName}
                                                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                                                    placeholder="Last Name"
                                                    required
                                                    className="w-full"
                                                />
                                                {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
                                            </div>
                                        </div>
                                        {/* Email & Phone */}
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                                    Email *
                                                </Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                                    placeholder="your@email.com"
                                                    required
                                                    className="w-full"
                                                />
                                                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                                                    Phone *
                                                </Label>
                                                <Input
                                                    id="phone"
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) => handleInputChange("phone", e.target.value)}
                                                    placeholder="+91 12345 67890"
                                                    required
                                                    className="w-full"
                                                />
                                                {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                                            </div>
                                        </div>
                                        {/* State */}
                                        <div className="space-y-2">
                                            <Label htmlFor="state" className="text-sm font-medium text-gray-700">
                                                State *
                                            </Label>
                                            <Select
                                                value={formData.state}
                                                onValueChange={(value) => handleInputChange("state", value)}
                                                required
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select your state" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {indianStates.map((state) => (
                                                        <SelectItem key={state} value={state}>
                                                            {state}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            {errors.state && <p className="text-red-500 text-xs">{errors.state}</p>}
                                        </div>
                                        {/* Subject */}
                                        <div className="space-y-2">
                                            <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                                                Subject
                                            </Label>
                                            <Input
                                                id="subject"
                                                type="text"
                                                value={formData.subject}
                                                onChange={(e) => handleInputChange("subject", e.target.value)}
                                                placeholder="What is this about?"
                                                className="w-full"
                                            />
                                        </div>
                                        {/* Message */}
                                        <div className="space-y-2">
                                            <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                                                Your Message *
                                            </Label>
                                            <Textarea
                                                id="message"
                                                value={formData.message}
                                                onChange={(e) => handleInputChange("message", e.target.value)}
                                                placeholder="Tell us more about your inquiry..."
                                                rows={5}
                                                required
                                                className="w-full resize-none"
                                            />
                                            {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                                        </div>
                                        {/* Submit Button */}
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-ngo-color4 hover:bg-ngo-color4/90 text-white py-3 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center gap-2">
                                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                    Sending...
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-2">
                                                    <Send className="w-5 h-5" />
                                                    Send Message
                                                </div>
                                            )}
                                        </Button>
                                        {/* Success/Error Messages */}
                                        {submitStatus === "success" && (
                                            <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                                                <CheckCircle className="w-5 h-5 text-green-600" />
                                                <span className="text-green-800 font-medium">
                                                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                                                </span>
                                            </div>
                                        )}
                                        {submitStatus === "error" && (
                                            <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                                                <AlertCircle className="w-5 h-5 text-red-600" />
                                                <span className="text-red-800 font-medium">
                                                    Something went wrong. Please try again or contact us directly.
                                                </span>
                                            </div>
                                        )}
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section Placeholder */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-6">
                            Find Us
                        </h2>
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                                <iframe
                                    src="https://maps.google.com/maps?q=22-2-472%2F3%2C%20Panjathan%20colony%2CHyderabad&t=m&z=10&output=embed&iwloc=near"
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    aria-hidden="false"
                                    tabIndex={0}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ContactUs;
