import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axiosInstance from "@/lib/axiosInstance";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

// Define the Zod schema for form validation
const donationFormSchema = z.object({
  amount: z.number().min(1, { message: "Amount is required" }),
  frequency: z.string().optional(),
});

type DonationFormValues = z.infer<typeof donationFormSchema>;

const NewDonation = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [donorDetails, setDonorDetails] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<DonationFormValues>({
    resolver: zodResolver(donationFormSchema),
  });

  // Fetch donor details when the component mounts
  useEffect(() => {
    const fetchDonorDetails = async () => {
      try {
        const response = await axiosInstance.get("/donor/auth/me");
        const donorData = response.data.data;

        setDonorDetails(donorData);

        // Set default values for frequency and donorType if available
        if (donorData.donations && donorData.donations.length > 0) {
          const lastDonation =
            donorData.donations[donorData.donations.length - 1];
          setValue("frequency", lastDonation.frequency || "once");
        }
      } catch (error) {
        console.error("Error fetching donor details:", error);
        toast.error("Failed to fetch donor details.");
      }
    };

    fetchDonorDetails();
  }, [setValue]);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const initiateRazorpayPayment = async (orderData) => {
    try {
      setPaymentLoading(true);

      const isLoaded = await loadRazorpayScript();
      if (!isLoaded) {
        throw new Error("Razorpay SDK failed to load");
      }

      const options = {
        key: "rzp_test_HcrOflmaNTnjgB", // Replace with your test key
        amount: orderData.amount * 100, // Razorpay expects amount in paise
        currency: "INR",
        name: "NEIEA Donation",
        description: "Donation",
        order_id: orderData.razorpayOrderId,
        handler: async (response) => {
          try {
            // Verify payment on your server
            const verificationResponse = await axiosInstance.post(
              "/donor/donate/verify",
              {
                razorpayOrderId: orderData.razorpayOrderId,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpaySignature: response.razorpay_signature,
                donationData: orderData,
              }
            );

            if (verificationResponse.data.success) {
              toast.success("Payment successful! Thank you for your donation.");
              reset();
            } else {
              toast.error(
                "Payment verification failed. Please contact support."
              );
            }
          } catch (error) {
            toast.error("Payment verification failed. Please contact support.");
          } finally {
            setPaymentLoading(false);
          }
        },
        prefill: {
          name: `${donorDetails?.firstName || ""} ${donorDetails?.lastName || ""}`,
          email: donorDetails?.email || "",
          contact: donorDetails?.phone || "",
        },
        theme: {
          color: "#4f46e5", // Your brand color
        },
      };

      // @ts-ignore
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Failed to initiate payment. Please try again.");
      setPaymentLoading(false);
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      if (!donorDetails) {
        toast.error("Donor details not available. Please try again.");
        return;
      }

      // Create Razorpay order
      const orderResponse = await axiosInstance.post("/donor/donate/create", {
        amount: data.amount,
        currency: "INR",
        receipt: `donation_${Date.now()}`,
      });

      if (orderResponse.data.success) {
        await initiateRazorpayPayment({
          ...donorDetails,
          amount: data.amount,
          frequency: data.frequency || donorDetails.frequency || "once",
          donorType: donorDetails.donorType || "Regular",
          razorpayOrderId: orderResponse.data.orderId,
        });
      } else {
        toast.error("Failed to create payment order. Please try again.");
      }
    } catch (error) {
      console.error("Donation error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl">Make a New Donation</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label htmlFor="amount">Amount (INR) *</Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter donation amount"
              {...register("amount", { valueAsNumber: true })}
            />
            {errors.amount && (
              <p className="mt-1 text-sm text-red-600">
                {errors.amount.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-ngo-true-joy hover:bg-ngo-true-joy/90 text-white font-bold py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            disabled={isSubmitting || paymentLoading}
          >
            {isSubmitting || paymentLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {paymentLoading ? "Redirecting to Payment..." : "Processing..."}
              </>
            ) : (
              "Proceed to Payment"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default NewDonation;
