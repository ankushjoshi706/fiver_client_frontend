// frontend/src/utils/newRequest.js
import axios from "axios";

const newRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // set in .env for dev/prod separately
  withCredentials: true, // send cookies with requests
});

newRequest.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // optional if you want header auth too
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default newRequest;
