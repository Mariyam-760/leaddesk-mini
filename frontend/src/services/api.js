import axios from "axios";

const api = axios.create({
  baseURL: "https://leaddesk-mini-backend-sh7s.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Authentication APIs
export const authApi = {
  login: (credentials) => api.post("/auth/login", credentials),
};

// Lead APIs
export const leadsApi = {
  // Get all leads
  list: () => api.get("/leads"),

  // Create a new lead
  create: (payload) => api.post("/leads", payload),

  // Update lead status
  updateStatus: (id, status) =>
    api.patch(`/leads/${id}/status`, { status }),

  // Delete a lead
  delete: (id) => api.delete(`/leads/${id}`),
};

export default api;