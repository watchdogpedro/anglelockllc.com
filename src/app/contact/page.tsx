"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    website: "",
    email: "",
    notes: "",
    honeypot: "", // Hidden field for bot detection
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isHuman, setIsHuman] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Bot detection: honeypot field should be empty
    if (formData.honeypot !== "") {
      setError("Spam detected. Submission blocked.");
      setIsSubmitting(false);
      return;
    }

    // Human verification checkbox
    if (!isHuman) {
      setError("Please confirm you're not a robot.");
      setIsSubmitting(false);
      return;
    }

    // Validate email format
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    try {
      // TODO: Replace with your actual contact form endpoint
      // For now, using console.log as placeholder
      console.log("Contact form submission:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSuccess(true);
      setFormData({
        name: "",
        company: "",
        phone: "",
        website: "",
        email: "",
        notes: "",
        honeypot: "",
      });
      setIsHuman(false);

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-6">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Contact AngleLock
            </h1>
            <p className="mt-4 text-lg text-silver">
              Get in touch to discuss investment opportunities, partnerships, or
              technical inquiries.
            </p>
          </div>

          {/* Success Message */}
          {isSuccess && (
            <div className="mb-8 rounded-2xl border border-accent/20 bg-accent/10 p-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent" />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="mt-1 text-sm text-silver">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Contact Form */}
          <div className="rounded-2xl border border-border bg-surface p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name (Required) */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-silver"
                >
                  Full Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-white placeholder-silver-dim focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="John Smith"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-silver"
                >
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-white placeholder-silver-dim focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="Acme Ventures"
                />
              </div>

              {/* Email (Required) */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-silver"
                >
                  Email Address <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-white placeholder-silver-dim focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="john@company.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-silver"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-white placeholder-silver-dim focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Website */}
              <div>
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-silver"
                >
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-white placeholder-silver-dim focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="https://www.company.com"
                />
              </div>

              {/* Notes */}
              <div>
                <label
                  htmlFor="notes"
                  className="block text-sm font-medium text-silver"
                >
                  Message / Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-white placeholder-silver-dim focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              {/* Honeypot (hidden field for bot detection) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Human Verification Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="human"
                  checked={isHuman}
                  onChange={(e) => setIsHuman(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-border bg-background text-accent focus:ring-1 focus:ring-accent"
                />
                <label htmlFor="human" className="text-sm text-silver">
                  I&apos;m not a robot
                </label>
              </div>

              {/* Error Message */}
              {error && (
                <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-red-400" />
                    <p className="text-sm text-red-400">{error}</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-accent-bright hover:shadow-lg hover:shadow-accent/25 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-surface p-6 text-center">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-silver-dim">
                Email
              </h3>
              <a
                href="mailto:info@anglelock.com"
                className="mt-2 block text-lg font-medium text-accent hover:text-accent-bright"
              >
                info@anglelock.com
              </a>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6 text-center">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-silver-dim">
                Phone
              </h3>
              <a
                href="tel:+12624218840"
                className="mt-2 block text-lg font-medium text-accent hover:text-accent-bright"
              >
                (262) 421-8840
              </a>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6 text-center">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-silver-dim">
                Location
              </h3>
              <p className="mt-2 text-lg font-medium text-silver">
                Grafton, WI
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
