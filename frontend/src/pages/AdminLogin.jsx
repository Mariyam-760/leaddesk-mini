import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Zap, Lock, Mail, ArrowLeft } from "lucide-react";
import { authApi } from "../services/api";

const initialForm = { email: "", password: "" };

function validate(form) {
  const errors = {};
  if (!form.email.trim()) {
    errors.email = "Enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.password) {
    errors.password = "Enter your password.";
  } else if (form.password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }
  return errors;
}

export default function AdminLogin() {
  const [credentials, setCredentials] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validate(credentials);
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) return;

  try {
    const response = await authApi.login(credentials);

    const token = response.data.data.token;

    localStorage.setItem("token", token);

    navigate("/admin");
  } catch (error) {
    alert(
      error.response?.data?.message || "Login failed"
    );
  }
};

  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas-sunken px-6 py-12">
      <div className="w-full max-w-md">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink-light hover:text-ink"
        >
          <ArrowLeft size={15} />
          Back to site
        </Link>

        <div className="card p-8">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-white">
              <Zap size={16} strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-semibold">LeadDesk Mini</span>
          </div>

          <h1 className="mt-6 text-2xl font-semibold tracking-tight">Admin login</h1>
          <p className="mt-1.5 text-sm text-ink-light">
            Sign in to view and manage your leads.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5">
            <div>
              <label htmlFor="email" className="label-text">
                Email
              </label>
              <div className="relative">
                <Mail size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-faint" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={credentials.email}
                  onChange={handleChange}
                  placeholder="admin@leaddesk.com"
                  className={`input-field pl-10 ${errors.email ? "input-error" : ""}`}
                  aria-invalid={Boolean(errors.email)}
                />
              </div>
              {errors.email && (
                <p className="mt-1.5 text-xs font-medium text-rose">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="label-text">
                Password
              </label>
              <div className="relative">
                <Lock size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-faint" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={credentials.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`input-field pl-10 ${errors.password ? "input-error" : ""}`}
                  aria-invalid={Boolean(errors.password)}
                />
              </div>
              {errors.password && (
                <p className="mt-1.5 text-xs font-medium text-rose">{errors.password}</p>
              )}
            </div>

            <button type="submit" className="btn-primary w-full">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
