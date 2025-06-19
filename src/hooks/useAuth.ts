import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type DonorUser = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  donorType: string;
  donations: string[];
};

export const useAuth = () => {
  const [user, setUser] = useState<DonorUser | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get("/donor/auth/me");
        setUser(response.data.data);
      } catch (error) {
      
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    const token = localStorage.getItem("token");
    if (token) {
      fetchUser();
    } else {
      setLoading(false);
      navigate("/login");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    setUser(null);
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return { user, loading, logout };
};