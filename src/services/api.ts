// axiosInstance.js
import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
//   baseURL: "https://api.example.com", // Replace with your API base URL
  timeout: 5000, // Set a timeout for requests
});

// Interceptors for handling token and refresh token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Refresh token logic
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = Cookies.get("refresh_token");

        const response = await axios.post("/refresh-token-endpoint", {
          refresh_token: refreshToken,
        });

        const newAccessToken = response.data.access_token;
        Cookies.set("accessToken", newAccessToken);
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Handle refresh token error or redirect to login
        console.error("Refresh token error:", refreshError);
        // Redirect to login or show a login modal
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
