import axios from "axios";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://snapstay-backend.onrender.com"
    : "http://localhost:5000";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

// Call this function when the app initializes
export const initializeAuth = () => {
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }
};
