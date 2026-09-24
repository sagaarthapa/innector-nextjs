"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

const arrowIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
    <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
  </svg>
);

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [fields, setFields] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
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
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <div className="mxd-block contact">
      <div className="mxd-form-container">
        {/* Reply Messages Start */}
        <div className={`form__reply centered text-center${status === "success" ? " is-visible" : ""}`}>
          <i className="ph-fill ph-smiley-wink reply__icon"></i>
          <p className="reply__title">Done!</p>
          <span className="reply__text">Thanks for your message. We&apos;ll get back as soon as possible.</span>
        </div>
        {/* Reply Messages End */}

        {/* Contact Form Start */}
        <form
          className={`form contact-form${status === "success" ? " is-hidden" : ""}`}
          id="innector-contact-form"
          onSubmit={handleSubmit}
        >
          <div className="container-fluid p-0">
            <div className="row gx-0">
              <div className="col-12 col-md-6 mxd-grid-item loading-item">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name*"
                  required
                  value={fields.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 col-md-6 mxd-grid-item loading-item">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name*"
                  required
                  value={fields.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 col-md-6 mxd-grid-item loading-item">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                  value={fields.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 col-md-6 mxd-grid-item loading-item">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={fields.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 mxd-grid-item loading-item">
                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  value={fields.company}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 mxd-grid-item loading-item">
                <textarea
                  name="message"
                  placeholder="A few words about your project*"
                  required
                  value={fields.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="col-12 mxd-grid-item loading-item">
                <button
                  className="btn btn-default-icon btn-default-accent slide-right"
                  type="submit"
                  disabled={status === "sending"}
                >
                  <span className="btn-caption mxd-scramble">
                    {status === "sending" ? "Sending..." : "Submit"}
                  </span>
                  <i className="btn-icon">{arrowIcon}</i>
                </button>
                {status === "error" && (
                  <p style={{ marginTop: "16px", color: "#e2543a" }}>{errorMessage}</p>
                )}
              </div>
            </div>
          </div>
        </form>
        {/* Contact Form End */}
      </div>
    </div>
  );
}
