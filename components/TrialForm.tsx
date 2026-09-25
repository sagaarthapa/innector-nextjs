"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

const arrowIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
    <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
  </svg>
);

const countries = [
  "USA",
  "Canada",
  "United Kingdom",
  "Australia",
  "New Zealand",
  "Singapore",
  "Dubai (UAE)",
  "Qatar",
  "Saudi Arabia",
  "Bahrain",
  "Kuwait",
  "Oman",
  "Germany",
  "France",
  "Netherlands",
  "Switzerland",
  "India",
  "Malaysia",
  "Hong Kong",
  "South Africa",
  "Ireland",
  "Other",
];

type FormState = {
  fullName: string;
  businessEmail: string;
  companyName: string;
  country: string;
  phone: string;
  challenge: string;
  consent: boolean;
};

const initialState: FormState = {
  fullName: "",
  businessEmail: "",
  companyName: "",
  country: "",
  phone: "",
  challenge: "",
  consent: false,
};

type Status = "idle" | "sending" | "success" | "error";

export default function TrialForm() {
  const [fields, setFields] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFields((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFields((prev) => ({ ...prev, [name]: value }));
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <div className="mxd-block contact">
      <div className="mxd-form-container">
        {/* Reply Messages Start */}
        <div className={`form__reply centered text-center${status === "success" ? " is-visible" : ""}`}>
          <i className="ph-fill ph-smiley-wink reply__icon"></i>
          <p className="reply__title">Spot secured!</p>
          <span className="reply__text">
            Thanks for signing up. Our team will reach out to schedule your onboarding call.
          </span>
        </div>
        {/* Reply Messages End */}

        {/* Trial Form Start */}
        <form
          className={`form contact-form${status === "success" ? " is-hidden" : ""}`}
          id="innector-trial-form"
          onSubmit={handleSubmit}
        >
          <div className="container-fluid p-0">
            <div className="row gx-0">
              <div className="col-12 col-md-6 mxd-grid-item loading-item">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name*"
                  required
                  value={fields.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 col-md-6 mxd-grid-item loading-item">
                <input
                  type="email"
                  name="businessEmail"
                  placeholder="Business email*"
                  required
                  value={fields.businessEmail}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 col-md-6 mxd-grid-item loading-item">
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company name*"
                  required
                  value={fields.companyName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 col-md-6 mxd-grid-item loading-item">
                <select name="country" required value={fields.country} onChange={handleChange} className="trial-select">
                  <option value="">Select your country*</option>
                  {countries.map((c) => (
                    <option value={c} key={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-12 col-md-6 mxd-grid-item loading-item">
                <input type="tel" name="phone" placeholder="Phone (optional)" value={fields.phone} onChange={handleChange} />
              </div>
              <div className="col-12 mxd-grid-item loading-item">
                <textarea
                  name="challenge"
                  placeholder="Brief description of your primary IT challenge (optional)"
                  value={fields.challenge}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="col-12 mxd-grid-item loading-item">
                <label className="trial-consent">
                  <input type="checkbox" name="consent" required checked={fields.consent} onChange={handleChange} />
                  <span>
                    I agree to Innector&apos;s <a href="/privacy-policy">Privacy Policy</a> and consent to be contacted
                    regarding my trial request.*
                  </span>
                </label>
              </div>
              <div className="col-12 mxd-grid-item loading-item">
                <button
                  className="btn btn-default-icon btn-default-accent slide-right"
                  type="submit"
                  disabled={status === "sending"}
                >
                  <span className="btn-caption mxd-scramble">
                    {status === "sending" ? "Submitting..." : "Start My Free 15-Day Trial"}
                  </span>
                  <i className="btn-icon">{arrowIcon}</i>
                </button>
                {status === "error" && <p style={{ marginTop: "16px", color: "#e2543a" }}>{errorMessage}</p>}
              </div>
            </div>
          </div>
        </form>
        {/* Trial Form End */}
      </div>
      <style>{`
        .trial-select {
          position: relative;
          display: block;
          width: 100%;
          border: none;
          outline: none;
          margin: 0;
          padding: 1.2rem 0.2rem;
          background-color: transparent;
          border-bottom: 1px solid var(--st-medium);
          font: normal 400 1.8rem var(--_font-accent);
          height: 5.8rem;
          line-height: 5.8rem;
          color: var(--t-bright);
          cursor: pointer;
        }
        .trial-select:focus {
          border-bottom: 1px solid var(--st-bright);
        }
        .trial-select option {
          color: #000;
        }
        .trial-consent {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          cursor: pointer;
          padding: 1.2rem 0.2rem;
        }
        .trial-consent input[type="checkbox"] {
          width: 1.8rem;
          height: 1.8rem;
          flex: none;
          margin-top: 0.3rem;
          accent-color: var(--st-bright);
        }
        .trial-consent span {
          font-size: 1.5rem;
          line-height: 1.5;
          color: var(--t-medium);
        }
        .trial-consent a {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
