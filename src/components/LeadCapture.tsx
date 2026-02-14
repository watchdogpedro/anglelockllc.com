"use client";

import { useState } from "react";
import { Download, CheckCircle2, ArrowRight, FileText } from "lucide-react";

export default function LeadCapture() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // TODO: Replace with actual email service (Mailchimp, ConvertKit, etc.)
      // For now, we'll simulate submission and trigger download

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Log to console (replace with actual API call)
      console.log("Lead captured:", { name, email, company });

      // Trigger PDF download
      const link = document.createElement("a");
      link.href = "/documents/Market_Opportunity_Report_2025.pdf";
      link.download = "AngleLock_Market_Opportunity_Report_2025.pdf";
      link.click();

      setIsSuccess(true);
      setEmail("");
      setName("");
      setCompany("");

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-2xl border border-accent/20 bg-surface p-8 text-center glow-blue md:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
          <CheckCircle2 className="h-8 w-8 text-accent" />
        </div>
        <h3 className="mt-6 text-2xl font-bold text-white">
          Download Started!
        </h3>
        <p className="mt-2 text-silver-dim">
          The Market Opportunity Report is downloading now. Check your downloads
          folder.
        </p>
        <p className="mt-4 text-sm text-silver-dim">
          We&apos;ll be in touch shortly to discuss the investment opportunity.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-8 md:p-12">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left: Report Preview */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
              <FileText className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Market Opportunity Report
              </h3>
              <p className="text-sm text-silver-dim">2025 Edition</p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <p className="text-base leading-relaxed text-silver">
              Comprehensive analysis of the $47B aluminum framing market and
              AngleLock&apos;s disruptive positioning.
            </p>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                What&apos;s Inside:
              </h4>
              <ul className="space-y-2 text-sm text-silver-dim">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  Market size & growth projections (12 industries)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  Competitive landscape analysis (8020, Vention, others)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  Technology comparison & moat analysis
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  Customer validation case studies
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  Financial projections & use of funds
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  Strategic exit opportunities
                </li>
              </ul>
            </div>

            <div className="mt-6 rounded-lg border border-border bg-background p-4">
              <p className="text-xs text-silver-dim">
                <span className="font-semibold text-silver">
                  For serious investors only.
                </span>{" "}
                This confidential report contains detailed financial information
                and strategic analysis.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Email Capture Form */}
        <div className="flex flex-col justify-center">
          <h4 className="text-lg font-semibold text-white">
            Download Full Report
          </h4>
          <p className="mt-2 text-sm text-silver-dim">
            Enter your details to receive the complete market analysis and
            investment opportunity overview.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-silver"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-white placeholder-silver-dim focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-silver"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-white placeholder-silver-dim focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-silver"
              >
                Company / Fund Name
              </label>
              <input
                type="text"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-white placeholder-silver-dim focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Acme Ventures (optional)"
              />
            </div>

            {error && (
              <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3">
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold tracking-wider text-white uppercase transition-all hover:bg-accent-bright hover:shadow-lg hover:shadow-accent/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Processing...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  Download Report
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>

            <p className="text-center text-xs text-silver-dim">
              By downloading, you agree to receive investment-related
              communications from AngleLock.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
