import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://neiea-backend.vercel.app", // Production URL - main branch
  // baseURL:"https://neiea-backend-git-tauhid-dev-tekiskys-projects.vercel.app", // Development URL - tauhid-dev branch
  // baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      // Ensure headers exist and set the Authorization header
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
