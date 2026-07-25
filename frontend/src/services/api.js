import axios from "axios";

/**
 * Central Axios instance for LeadDesk Mini.
 *
 * This file only sets up the API layer so the frontend is ready to be
 * wired up to a real backend later. No requests are made from here yet —
 * every screen currently works off local React state.
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Placeholder endpoints for future backend integration.
// Keep these as thin wrappers — no fetching/mutation logic is implemented yet.
export const leadsApi = {
  list: () => api.get("/leads"),
  create: (payload) => api.post("/leads", payload),
  updateStatus: (id, status) => api.patch(`/leads/${id}`, { status }),
  remove: (id) => api.delete(`/leads/${id}`),
};

export const authApi = {
  login: (credentials) => api.post("/auth/login", credentials),
  logout: () => api.post("/auth/logout"),
};

export default api;
