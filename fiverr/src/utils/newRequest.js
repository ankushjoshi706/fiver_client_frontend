import axios from "axios";

const newRequest = axios.create({
    baseURL: import.meta.env.VITE_API_URL, 
    withCredentials: true,
})
newRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default newRequest;
