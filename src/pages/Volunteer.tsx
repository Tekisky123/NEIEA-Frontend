import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import axios from "axios";
import axiosInstance from "@/lib/axiosInstance";
import { useNavigate } from "react-router-dom";
import { BookOpen, Heart, Users } from "lucide-react";

type LanguageProficiency = {
  speaking: boolean;
  writing: boolean;
  reading: boolean;
  none: boolean;
};

type Address = {
  city: string;
  state: string;
  country: string;
};

type SocialMedia = {
  facebook: string;
  linkedIn: string;
  instagram: string;
  twitter: string;
  youTube: string;
};

type ContentCreation = {
  hasExperience: boolean;
  createdBefore: string[];
  toolsUsed: string[];
};

type Outreach = {
  hasOutreachExperience: boolean;
  outreachActivities: string[];
};

type Fundraising = {
  hasFundraisingExperience: boolean;
  fundraisingTypes: string[];
};

type FormData = {
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  phone: string;
  emergencyPhone: string;
  email: string;
  address: Address;
  languageProficiency: {
    english: LanguageProficiency;
    hindi: LanguageProficiency;
    urdu: LanguageProficiency;
    bengali: LanguageProficiency;
    telugu: LanguageProficiency;
    kannada: LanguageProficiency;
    marathi: LanguageProficiency;
    otherLanguage: string;
  };
  dailyCommitment: string;
  availability: string[];
  volunteerField: string;
  socialMedia?: SocialMedia;
  contentCreation?: ContentCreation;
  outreach?: Outreach;
  fundraising?: Fundraising;
  teachingExperience?: string;
  onlineTeachingYears?: string;
  ageGroups?: string[];
  confidentSubjects?: string[];
  relevantExperience: string;
  motivation: string;
  commitmentDuration: string;
  dateOfJoining: string;
};

type Errors = {
  [key: string]: string;
};

const VolunteerForm = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    phone: "",
    emergencyPhone: "",
    email: "",
    address: {
      city: "",
      state: "",
      country: "",
    },
    languageProficiency: {
      english: { speaking: false, writing: false, reading: false, none: false },
      hindi: { speaking: false, writing: false, reading: false, none: false },
      urdu: { speaking: false, writing: false, reading: false, none: false },
      bengali: { speaking: false, writing: false, reading: false, none: false },
      telugu: { speaking: false, writing: false, reading: false, none: false },
      kannada: { speaking: false, writing: false, reading: false, none: false },
      marathi: { speaking: false, writing: false, reading: false, none: false },
      otherLanguage: "",
    },
    dailyCommitment: "",
    availability: [],
    volunteerField: "",
    socialMedia: {
      facebook: "",
      linkedIn: "",
      instagram: "",
      twitter: "",
      youTube: "",
    },
    contentCreation: {
      hasExperience: false,
      createdBefore: [],
      toolsUsed: [],
    },
    outreach: {
      hasOutreachExperience: false,
      outreachActivities: [],
    },
    fundraising: {
      hasFundraisingExperience: false,
      fundraisingTypes: [],
    },
    teachingExperience: "",
    onlineTeachingYears: "",
    ageGroups: [],
    confidentSubjects: [],
    relevantExperience: "",
    motivation: "",
    commitmentDuration: "",
    dateOfJoining: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const navigate = useNavigate();

  const validateStep1 = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.address.city) newErrors.city = "City is required";
    if (!formData.address.state) newErrors.state = "State is required";
    if (!formData.address.country) newErrors.country = "Country is required";
    if (!formData.dailyCommitment) newErrors.dailyCommitment = "Daily commitment is required";
    if (formData.availability.length === 0) newErrors.availability = "Availability is required";
    if (!formData.volunteerField) newErrors.volunteerField = "Volunteer field is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Errors = {};
    if (formData.volunteerField === "Teaching") {
      if (!formData.teachingExperience) newErrors.teachingExperience = "Teaching experience is required";
      if (!formData.onlineTeachingYears) newErrors.onlineTeachingYears = "Online teaching years is required";
      if (!formData.ageGroups || formData.ageGroups.length === 0) newErrors.ageGroups = "Age groups are required";
      if (!formData.confidentSubjects || formData.confidentSubjects.length === 0) newErrors.confidentSubjects = "Subjects are required";
    }
    if (formData.volunteerField === "Social Media Management") {
      if (!formData.socialMedia) newErrors.socialMedia = "Social media details are required";
      else {
        if (!formData.socialMedia.facebook) newErrors.facebook = "Facebook experience is required";
        if (!formData.socialMedia.linkedIn) newErrors.linkedIn = "LinkedIn experience is required";
        if (!formData.socialMedia.instagram) newErrors.instagram = "Instagram experience is required";
        if (!formData.socialMedia.twitter) newErrors.twitter = "Twitter experience is required";
        if (!formData.socialMedia.youTube) newErrors.youTube = "YouTube experience is required";
      }
    }
    else if (formData.volunteerField === "Content Creation") {
      if (!formData.contentCreation) newErrors.contentCreation = "Content creation details are required";
      else {
        if (formData.contentCreation.hasExperience === undefined) newErrors.hasExperience = "Experience status is required";
        if (!formData.contentCreation.createdBefore || formData.contentCreation.createdBefore.length === 0)
          newErrors.createdBefore = "Created before details are required";
        if (!formData.contentCreation.toolsUsed || formData.contentCreation.toolsUsed.length === 0)
          newErrors.toolsUsed = "Tools used details are required";
      }
    }
    else if (formData.volunteerField === "Outreach") {
      if (!formData.outreach) newErrors.outreach = "Outreach details are required";
      else {
        if (formData.outreach.hasOutreachExperience === undefined) newErrors.hasOutreachExperience = "Outreach experience status is required";
        if (!formData.outreach.outreachActivities || formData.outreach.outreachActivities.length === 0)
          newErrors.outreachActivities = "Outreach activities are required";
      }
    }
    else if (formData.volunteerField === "Fundraising") {
      if (!formData.fundraising) newErrors.fundraising = "Fundraising details are required";
      else {
        if (formData.fundraising.hasFundraisingExperience === undefined) newErrors.hasFundraisingExperience = "Fundraising experience status is required";
        if (!formData.fundraising.fundraisingTypes || formData.fundraising.fundraisingTypes.length === 0)
          newErrors.fundraisingTypes = "Fundraising types are required";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.relevantExperience) newErrors.relevantExperience = "Relevant experience is required";
    if (!formData.motivation) newErrors.motivation = "Motivation is required";
    if (!formData.commitmentDuration) newErrors.commitmentDuration = "Commitment duration is required";
    if (!formData.dateOfJoining) newErrors.dateOfJoining = "Date of joining is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      if (formData.volunteerField === "Other") {
        setStep(3);
      } else {
        setStep(2);
      }
    }
    else if (step === 2 && validateStep2()) setStep(3);
  };

  const handleBack = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep3()) {
      setIsSubmitting(true);
      try {
        const payload = { ...formData };
        if (payload.volunteerField !== "Social Media Management") {
          delete payload.socialMedia; // Remove socialMedia if not needed
        }
        const response = await axiosInstance.post("/volunteer", payload);
        console.log("Form submitted:", response.data);
        alert("Thanks for contacting us! We will get in touch with you shortly.");
        navigate('/volunteer');
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNestedChange = (field: keyof Address, value: string) => {
    setFormData((prev) => ({
      ...prev,
      address: { ...prev.address, [field]: value },
    }));
  };

  const handleArrayChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => {
      const currentArray = prev[field] as string[];
      return {
        ...prev,
        [field]: currentArray.includes(value)
          ? currentArray.filter((item) => item !== value)
          : [...currentArray, value],
      };
    });
  };

  const handleLanguageChange = (
    lang: keyof FormData["languageProficiency"],
    skill: keyof LanguageProficiency,
    checked: boolean
  ) => {
    // Skip if it's "otherLanguage", since that's a string, not an object
    if (lang === "otherLanguage") {
      return; // or handle it separately if needed
    }

    setFormData((prev) => ({
      ...prev,
      languageProficiency: {
        ...prev.languageProficiency,
        [lang]: {
          ...prev.languageProficiency[lang],
          [skill]: checked,
        },
      },
    }));
  };

  const handleSocialMediaChange = (platform: keyof SocialMedia, value: string) => {
    setFormData((prev) => ({
      ...prev,
      socialMedia: {
        ...prev.socialMedia,
        [platform]: value,
      },
    }));
  };

  const handleContentCreationChange = (field: keyof ContentCreation, value: boolean | string[]) => {
    setFormData((prev) => ({
      ...prev,
      contentCreation: {
        ...prev.contentCreation,
        [field]: value,
      },
    }));
  };

  const handleOutreachChange = (field: keyof Outreach, value: boolean | string[]) => {
    setFormData((prev) => ({
      ...prev,
      outreach: {
        ...prev.outreach,
        [field]: value,
      },
    }));
  };

  const handleFundraisingChange = (field: keyof Fundraising, value: boolean | string[]) => {
    setFormData((prev) => ({
      ...prev,
      fundraising: {
        ...prev.fundraising,
        [field]: value,
      },
    }));
  };

  const volunteerBenefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Transform Lives",
      description: "Teach and mentor students who need guidance",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Strengthen Communities",
      description: "Support programs that uplift marginalized groups.",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Enhance Your Skills",
      description: "Gain hands-on experience in various roles.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Be Part of a Movement",
      description: "Work with like-minded individuals passionate about change.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-ngo-color2 to-ngo-color5 text-white">

        <div className="container mx-auto px-4">

          <div className="text-center max-w-4xl mx-auto">

            <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-8 leading-tight">

              Volunteer for
              <span className="text-ngo-color4 block"> Educational Change </span>
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed mb-12">

              Join NEIEA as a Volunteer and Make a Difference!
            </p>
            <a href="#volunteer-form">

              <Button className="bg-ngo-color4 hover:bg-ngo-color4/90 text-white px-8 py-4 text-lg">

                Join Now
              </Button>
            </a>

          </div>
        </div>
      </section>
      {
  /* Why Volunteer Section */
}
<section className="py-24 bg-white">
  
  <div className="container mx-auto px-4">
    
    <div className="text-center mb-16">
      
      <h2 className="text-4xl lg:text-5xl font-heading font-bold text-ngo-color6 mb-8">
        
        Why Volunteer With NEIEA?
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        
        NEIEA is a dedicated NGO committed to empowering underserved communities
        through education and skill development. We believe in the power of
        collective efforts to bring meaningful change, and we are looking for
        passionate individuals to join us as volunteers. If you have the drive
        to make an impact, we need you!
      </p>
    </div>
    <div className="text-center mb-16">
      
      <h2 className="text-4xl lg:text-5xl font-heading font-bold text-ngo-color6 mb-8">
        
        Who Can Volunteer?
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        
        Anyone passionate about making a difference! Whether you are a student,
        working professional, or retiree, your time and skills can change lives.
        By becoming a volunteer, you will:
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {volunteerBenefits.map((benefit, index) => (
        <Card
          key={index}
          className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow"
        >
          
          <CardContent className="p-8">
            
            <div className="w-16 h-16 bg-ngo-color4/10 rounded-full flex items-center justify-center mx-auto mb-6">
              
              <div className="text-ngo-color4">{benefit.icon}</div>
            </div>
            <h3 className="text-xl font-heading font-bold text-ngo-color6 mb-4">
              
              {benefit.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              
              {benefit.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>;

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-ngo-color6 mb-4">Volunteer Registration</h2>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                <div
                  className="bg-ngo-color4 h-2.5 rounded-full"
                  style={{ width: `${(step - 1) * 33.33}%` }}
                ></div>
              </div>
              <p className="text-lg text-gray-600">
                Step {step} of 3 ({Math.round(((step - 1) / 3) * 100)}% complete)
              </p>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <form id="volunteer-form" onSubmit={handleSubmit}>
                  {/* Step 1: Personal Information */}
                  {step === 1 && (
                    <>
                      <h3 className="text-2xl font-bold text-ngo-color6 mb-6">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <Label>First Name *</Label>
                          <Input
                            value={formData.firstName}
                            onChange={(e) => handleChange("firstName", e.target.value)}
                            className={errors.firstName ? "border-red-500" : ""}
                          />
                          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                        </div>
                        <div>
                          <Label>Last Name *</Label>
                          <Input
                            value={formData.lastName}
                            onChange={(e) => handleChange("lastName", e.target.value)}
                            className={errors.lastName ? "border-red-500" : ""}
                          />
                          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                        </div>
                        <div>
                          <Label>Date of Birth *</Label>
                          <Input
                            type="date"
                            value={formData.dob}
                            onChange={(e) => handleChange("dob", e.target.value)}
                            className={errors.dob ? "border-red-500" : ""}
                          />
                          {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
                        </div>
                        <div>
                          <Label>Gender *</Label>
                          <RadioGroup
                            value={formData.gender}
                            onValueChange={(value) => handleChange("gender", value)}
                            className={errors.gender ? "border-red-500" : ""}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="Male" id="male" />
                              <Label htmlFor="male">Male</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="Female" id="female" />
                              <Label htmlFor="female">Female</Label>
                            </div>
                          </RadioGroup>
                          {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
                        </div>
                        <div>
                          <Label>Phone *</Label>
                          <Input
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            className={errors.phone ? "border-red-500" : ""}
                          />
                          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>
                        <div>
                          <Label>Emergency Contact Number</Label>
                          <Input
                            value={formData.emergencyPhone}
                            onChange={(e) => handleChange("emergencyPhone", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label>Email *</Label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            className={errors.email ? "border-red-500" : ""}
                          />
                          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                      </div>

                      <h4 className="text-lg font-semibold mb-4">Address *</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div>
                          <Label>City *</Label>
                          <Input
                            value={formData.address.city}
                            onChange={(e) => handleNestedChange("city", e.target.value)}
                            className={errors.city ? "border-red-500" : ""}
                          />
                          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                        </div>
                        <div>
                          <Label>State *</Label>
                          <Input
                            value={formData.address.state}
                            onChange={(e) => handleNestedChange("state", e.target.value)}
                            className={errors.state ? "border-red-500" : ""}
                          />
                          {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
                        </div>
                        <div>
                          <Label>Country *</Label>
                          <Input
                            value={formData.address.country}
                            onChange={(e) => handleNestedChange("country", e.target.value)}
                            className={errors.country ? "border-red-500" : ""}
                          />
                          {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
                        </div>
                      </div>

                      <h4 className="text-lg font-semibold mb-4">Language Proficiency *</h4>
                      {(Object.keys(formData.languageProficiency) as Array<keyof FormData["languageProficiency"]>)
                        .filter((lang) => lang !== "otherLanguage")
                        .map((lang) => (
                          <div key={lang} className="mb-4">
                            <Label className="capitalize">{lang}</Label>
                            <div className="flex space-x-4">
                              {(Object.keys(formData.languageProficiency[lang]) as Array<keyof LanguageProficiency>).map((skill) => (
                                <div key={skill} className="flex items-center space-x-2">
                                  <Checkbox
                                    checked={formData.languageProficiency[lang][skill]}
                                    onCheckedChange={(checked) => handleLanguageChange(lang, skill, !!checked)}
                                  />
                                  <Label className="capitalize">{skill}</Label>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}

                      <div className="mb-6">
                        <Label>Other Language</Label>
                        <Input
                          value={formData.languageProficiency.otherLanguage}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              languageProficiency: {
                                ...prev.languageProficiency,
                                otherLanguage: e.target.value,
                              },
                            }))
                          }
                        />
                      </div>

                      <div className="mb-6">
                        <Label>Daily Commitment *</Label>
                        <Select
                          value={formData.dailyCommitment}
                          onValueChange={(value) => handleChange("dailyCommitment", value)}
                        >
                          <SelectTrigger className={errors.dailyCommitment ? "border-red-500" : ""}>
                            <SelectValue placeholder="Select hours" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-2 hours">1-2 hours</SelectItem>
                            <SelectItem value="2-3 hours">2-3 hours</SelectItem>
                            <SelectItem value="3-4 hours">3-4 hours</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.dailyCommitment && <p className="text-red-500 text-sm">{errors.dailyCommitment}</p>}
                      </div>

                      <div className="mb-6">
                        <Label>Availability *</Label>
                        {["Early Morning (6:00 AM - 9:00 AM)", "Late Morning (9:00 AM - 12:00 PM)", "Afternoon (12:00 PM - 4:00 PM)", "Evening (4:00 PM - 8:00 PM)", "Late Evening (8:00 PM - 11:00 PM)"].map((time) => (
                          <div key={time} className="flex items-center space-x-2">
                            <Checkbox
                              checked={formData.availability.includes(time)}
                              onCheckedChange={() => handleArrayChange("availability", time)}
                            />
                            <Label>{time}</Label>
                          </div>
                        ))}
                        {errors.availability && <p className="text-red-500 text-sm">{errors.availability}</p>}
                      </div>

                      <div className="mb-6">
                        <Label>Volunteer Field *</Label>
                        <Select
                          value={formData.volunteerField}
                          onValueChange={(value) => handleChange("volunteerField", value)}
                        >
                          <SelectTrigger className={errors.volunteerField ? "border-red-500" : ""}>
                            <SelectValue placeholder="Select field" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Teaching">Teaching</SelectItem>
                            <SelectItem value="Social Media Management">Social Media Management</SelectItem>
                            <SelectItem value="Content Creation">Content Creation</SelectItem>
                            <SelectItem value="Outreach">Outreach</SelectItem>
                            <SelectItem value="Fundraising">Fundraising</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.volunteerField && <p className="text-red-500 text-sm">{errors.volunteerField}</p>}
                      </div>
                    </>
                  )}

                  {/* Step 2: Dynamic Fields Based on Volunteer Role */}
                  {step === 2 && (
                    <>
                      <h3 className="text-2xl font-bold text-ngo-color6 mb-6">
                        {formData.volunteerField === "Social Media Management" ? "Social Media Experience" :
                          formData.volunteerField === "Content Creation" ? "Content Creation Experience" :
                            formData.volunteerField === "Outreach" ? "Outreach Experience" :
                              formData.volunteerField === "Fundraising" ? "Fundraising Experience" :
                                formData.volunteerField === "Teaching" ? "Teaching Experience" :
                                  "Additional Information"}
                      </h3>

                      {/* Teaching */}
                      {formData.volunteerField === "Teaching" && (
                        <>
                          <div className="mb-6">
                            <Label>Do you have formal teaching experience? *</Label>
                            <RadioGroup
                              value={formData.teachingExperience || ""}
                              onValueChange={(value) => handleChange("teachingExperience", value)}
                              className={errors.teachingExperience ? "border-red-500" : ""}
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Yes" id="teaching-yes" />
                                <Label htmlFor="teaching-yes">Yes</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="No" id="teaching-no" />
                                <Label htmlFor="teaching-no">No</Label>
                              </div>
                            </RadioGroup>
                            {errors.teachingExperience && <p className="text-red-500 text-sm">{errors.teachingExperience}</p>}
                          </div>

                          <div className="mb-6">
                            <Label>How many years of online teaching experience do you have? *</Label>
                            <Select
                              value={formData.onlineTeachingYears || ""}
                              onValueChange={(value) => handleChange("onlineTeachingYears", value)}
                              className={errors.onlineTeachingYears ? "border-red-500" : ""}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select years" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="No Experience">No Experience</SelectItem>
                                <SelectItem value="Less than 1 year">Less than 1 year</SelectItem>
                                <SelectItem value="1-3 years">1-3 years</SelectItem>
                                <SelectItem value="4-6 years">4-6 years</SelectItem>
                                <SelectItem value="More than 6 years">More than 6 years</SelectItem>
                              </SelectContent>
                            </Select>
                            {errors.onlineTeachingYears && <p className="text-red-500 text-sm">{errors.onlineTeachingYears}</p>}
                          </div>

                          <div className="mb-6">
                            <Label>What age groups have you taught? *</Label>
                            {[
                              "Early Childhood (Preschool to Kindergarten)",
                              "Primary School (Grades 1-5)",
                              "Middle School (Grades 6-8)",
                              "High School (Grades 9-12)",
                              "College/University",
                              "Adult Learners",
                              "Fresher"
                            ].map((group) => (
                              <div key={group} className="flex items-center space-x-2">
                                <Checkbox
                                  checked={formData.ageGroups?.includes(group)}
                                  onCheckedChange={(checked) => {
                                    const updated = formData.ageGroups || [];
                                    handleArrayChange(
                                      "ageGroups",
                                      checked ? group : ""
                                    );
                                  }}
                                />
                                <Label>{group}</Label>
                              </div>
                            ))}
                            {errors.ageGroups && <p className="text-red-500 text-sm">{errors.ageGroups}</p>}
                          </div>

                          <div className="mb-6">
                            <Label>What subjects are you most confident teaching? *</Label>
                            {["Mathematics", "Science", "English", "Computers", "Other"].map((subject) => (
                              <div key={subject} className="flex items-center space-x-2">
                                <Checkbox
                                  checked={formData.confidentSubjects?.includes(subject)}
                                  onCheckedChange={(checked) => {
                                    const updated = formData.confidentSubjects || [];
                                    handleArrayChange(
                                      "confidentSubjects",
                                      checked ? subject : ""
                                    );
                                  }}
                                />
                                <Label>{subject}</Label>
                              </div>
                            ))}
                            {errors.confidentSubjects && <p className="text-red-500 text-sm">{errors.confidentSubjects}</p>}
                          </div>
                        </>
                      )}

                      {/* Social Media Management */}
                      {formData.volunteerField === "Social Media Management" && (
                        <>
                          {(["facebook", "linkedIn", "instagram", "twitter", "youTube"] as const).map((platform) => (
                            <div key={platform} className="mb-6">
                              <Label className="capitalize">{platform}</Label>
                              <Select
                                value={formData.socialMedia?.[platform] || ""}
                                onValueChange={(value) => handleSocialMediaChange(platform, value)}
                              >
                                <SelectTrigger className={errors[platform] ? "border-red-500" : ""}>
                                  <SelectValue placeholder="Select experience" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Expert">Expert</SelectItem>
                                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                                  <SelectItem value="Beginner">Beginner</SelectItem>
                                  <SelectItem value="No Experience">No Experience</SelectItem>
                                </SelectContent>
                              </Select>
                              {errors[platform] && <p className="text-red-500 text-sm">{errors[platform]}</p>}
                            </div>
                          ))}
                        </>
                      )}

                      {/* Content Creation */}
                      {formData.volunteerField === "Content Creation" && (
                        <>
                          <div className="mb-6">
                            <Label>Do you have experience creating PowerPoint presentations, flyers, or social media posts?</Label>
                            <RadioGroup
                              value={formData.contentCreation?.hasExperience ? "Yes" : "No"}
                              onValueChange={(value) => handleContentCreationChange("hasExperience", value === "Yes")}
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Yes" id="content-creation-yes" />
                                <Label htmlFor="content-creation-yes">Yes</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="No" id="content-creation-no" />
                                <Label htmlFor="content-creation-no">No</Label>
                              </div>
                            </RadioGroup>
                          </div>

                          <div className="mb-6">
                            <Label>Which of the following have you created before?</Label>
                            {["PowerPoint Presentations (PPT)", "Flyers (Printed or Digital)", "Social Media Posts (Instagram, Facebook, Twitter, etc.)", "Posters", "Brochures"].map((item) => (
                              <div key={item} className="flex items-center space-x-2">
                                <Checkbox
                                  checked={formData.contentCreation?.createdBefore?.includes(item)}
                                  onCheckedChange={(checked) => {
                                    const updated = formData.contentCreation?.createdBefore || [];
                                    handleContentCreationChange(
                                      "createdBefore",
                                      checked ? [...updated, item] : updated.filter((i) => i !== item)
                                    );
                                  }}
                                />
                                <Label>{item}</Label>
                              </div>
                            ))}
                          </div>

                          <div className="mb-6">
                            <Label>Which tools or software do you use for designing?</Label>
                            {["Microsoft PowerPoint", "Canva", "Adobe Photoshop", "Adobe Illustrator", "Google Slides", "Other"].map((tool) => (
                              <div key={tool} className="flex items-center space-x-2">
                                <Checkbox
                                  checked={formData.contentCreation?.toolsUsed?.includes(tool)}
                                  onCheckedChange={(checked) => {
                                    const updated = formData.contentCreation?.toolsUsed || [];
                                    handleContentCreationChange(
                                      "toolsUsed",
                                      checked ? [...updated, tool] : updated.filter((i) => i !== tool)
                                    );
                                  }}
                                />
                                <Label>{tool}</Label>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      {/* Outreach */}
                      {formData.volunteerField === "Outreach" && (
                        <>
                          <div className="mb-6">
                            <Label>Have you been involved in any outreach activities before?</Label>
                            <RadioGroup
                              value={formData.outreach?.hasOutreachExperience ? "Yes" : "No"}
                              onValueChange={(value) => handleOutreachChange("hasOutreachExperience", value === "Yes")}
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Yes" id="outreach-yes" />
                                <Label htmlFor="outreach-yes">Yes</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="No" id="outreach-no" />
                                <Label htmlFor="outreach-no">No</Label>
                              </div>
                            </RadioGroup>
                          </div>

                          <div className="mb-6">
                            <Label>What type of outreach activities would you like to help with?</Label>
                            {[
                              "Community Outreach", "Educational Outreach", "Social Media Outreach",
                              "Fundraising Campaigns", "Corporate Partnerships", "Volunteer Recruitment",
                              "Event Promotion", "Advocacy Campaigns", "Other"
                            ].map((activity) => (
                              <div key={activity} className="flex items-center space-x-2">
                                <Checkbox
                                  checked={formData.outreach?.outreachActivities?.includes(activity)}
                                  onCheckedChange={(checked) => {
                                    const updated = formData.outreach?.outreachActivities || [];
                                    handleOutreachChange(
                                      "outreachActivities",
                                      checked ? [...updated, activity] : updated.filter((i) => i !== activity)
                                    );
                                  }}
                                />
                                <Label>{activity}</Label>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      {/* Fundraising */}
                      {formData.volunteerField === "Fundraising" && (
                        <>
                          <div className="mb-6">
                            <Label>Have you been involved in fundraising before?</Label>
                            <RadioGroup
                              value={formData.fundraising?.hasFundraisingExperience ? "Yes" : "No"}
                              onValueChange={(value) => handleFundraisingChange("hasFundraisingExperience", value === "Yes")}
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Yes" id="fundraising-yes" />
                                <Label htmlFor="fundraising-yes">Yes</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="No" id="fundraising-no" />
                                <Label htmlFor="fundraising-no">No</Label>
                              </div>
                            </RadioGroup>
                          </div>

                          <div className="mb-6">
                            <Label>Which types of fundraising have you done?</Label>
                            {[
                              "Event organization", "Corporate sponsorship", "Individual donor outreach",
                              "Crowdfunding", "Grant writing", "Online fundraising", "Charity auctions", "None"
                            ].map((type) => (
                              <div key={type} className="flex items-center space-x-2">
                                <Checkbox
                                  checked={formData.fundraising?.fundraisingTypes?.includes(type)}
                                  onCheckedChange={(checked) => {
                                    const updated = formData.fundraising?.fundraisingTypes || [];
                                    handleFundraisingChange(
                                      "fundraisingTypes",
                                      checked ? [...updated, type] : updated.filter((i) => i !== type)
                                    );
                                  }}
                                />
                                <Label>{type}</Label>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  )}


                  {/* Step 3: Experience & Motivation */}
                  {step === 3 && (
                    <>
                      <h3 className="text-2xl font-bold text-ngo-color6 mb-6">Experience & Motivation</h3>
                      <div className="mb-6">
                        <Label>Relevant Experience *</Label>
                        <Textarea
                          value={formData.relevantExperience}
                          onChange={(e) => handleChange("relevantExperience", e.target.value)}
                          className={errors.relevantExperience ? "border-red-500" : ""}
                        />
                        {errors.relevantExperience && <p className="text-red-500 text-sm">{errors.relevantExperience}</p>}
                      </div>

                      <div className="mb-6">
                        <Label>Why do you want to volunteer with NEIEA? *</Label>
                        <Textarea
                          value={formData.motivation}
                          onChange={(e) => handleChange("motivation", e.target.value)}
                          className={errors.motivation ? "border-red-500" : ""}
                        />
                        {errors.motivation && <p className="text-red-500 text-sm">{errors.motivation}</p>}
                      </div>

                      <div className="mb-6">
                        <Label>Commitment Duration *</Label>
                        <RadioGroup
                          value={formData.commitmentDuration}
                          onValueChange={(value) => handleChange("commitmentDuration", value)}
                          className={errors.commitmentDuration ? "border-red-500" : ""}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="3 months" id="3-months" />
                            <Label htmlFor="3-months">At least 3 months</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="6 months" id="6-months" />
                            <Label htmlFor="6-months">At least 6 months</Label>
                          </div>
                        </RadioGroup>
                        {errors.commitmentDuration && <p className="text-red-500 text-sm">{errors.commitmentDuration}</p>}
                      </div>

                      <div className="mb-6">
                        <Label>Date of Joining *</Label>
                        <Input
                          type="date"
                          value={formData.dateOfJoining}
                          onChange={(e) => handleChange("dateOfJoining", e.target.value)}
                          className={errors.dateOfJoining ? "border-red-500" : ""}
                        />
                        {errors.dateOfJoining && <p className="text-red-500 text-sm">{errors.dateOfJoining}</p>}
                      </div>
                    </>
                  )}

                  <div className="flex justify-between mt-8">
                    {step > 1 && (
                      <Button type="button" onClick={handleBack} variant="outline">
                        Back
                      </Button>
                    )}
                    {step < 3 ? (
                      <Button type="button" onClick={handleNext}>
                        Next
                      </Button>
                    ) : (
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VolunteerForm;
