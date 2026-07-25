import { useState, useRef } from "react";
import { CheckCircle2, Send } from "lucide-react";

const budgetOptions = [
  "Under $500",
  "$500–$2,000",
  "$2,000–$5,000",
  "Above $5,000",
];

const initialForm = {
  name: "",
  email: "",
  budget: "",
  message: "",
};

function validate(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Enter your name.";
  } else if (form.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!form.email.trim()) {
    errors.email = "Enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!form.budget) {
    errors.budget = "Select a budget range.";
  }

  if (!form.message.trim()) {
    errors.message = "Tell us a little about what you need.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}

export default function LeadForm() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const timeoutRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    // No API yet — this is where the POST /leads call will go.
    console.log(formData);

    setFormData(initialForm);
    setShowSuccess(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setShowSuccess(false), 4000);
  };

  return (
    <section id="lead-form" className="bg-canvas-sunken py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <span className="eyebrow">Get started</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Tell us about your team
          </h2>
          <p className="mt-3 text-ink-light">
            Share a few details and we'll follow up within one business day.
          </p>
        </div>

        <div className="card relative mt-10 p-6 sm:p-8">
          {showSuccess && (
            <div className="mb-6 flex items-center gap-3 rounded-lg border border-teal/30 bg-teal-soft px-4 py-3 text-sm font-medium text-teal">
              <CheckCircle2 size={18} />
              Thanks — your message was submitted successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="label-text">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jordan Smith"
                className={`input-field ${errors.name ? "input-error" : ""}`}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs font-medium text-rose">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="email" className="label-text">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jordan@company.com"
                className={`input-field ${errors.email ? "input-error" : ""}`}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs font-medium text-rose">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="budget" className="label-text">
                Budget range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className={`input-field ${errors.budget ? "input-error" : ""}`}
                aria-invalid={Boolean(errors.budget)}
                aria-describedby={errors.budget ? "budget-error" : undefined}
              >
                <option value="" disabled>
                  Select a budget range
                </option>
                {budgetOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.budget && (
                <p id="budget-error" className="mt-1.5 text-xs font-medium text-rose">
                  {errors.budget}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="label-text">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="What are you hoping to solve?"
                className={`input-field resize-none ${errors.message ? "input-error" : ""}`}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs font-medium text-rose">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Submit
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
