"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SectionReveal from "@/components/SectionReveal";
import {
  Lock,
  FileText,
  CheckCircle2,
  AlertCircle,
  Shield,
  Download,
  TrendingUp,
  Users,
  DollarSign,
} from "lucide-react";

export default function InvestorsNDAPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    title: "",
    phone: "",
    investorType: "",
    investmentRange: "",
    ndaAccepted: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.ndaAccepted) {
      setError("You must accept the NDA to proceed.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/nda-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        // Set cookie to remember NDA acceptance
        document.cookie = `nda_accepted=true; path=/; max-age=${
          60 * 60 * 24 * 30
        }`; // 30 days
        document.cookie = `investor_email=${formData.email}; path=/; max-age=${
          60 * 60 * 24 * 30
        }`;

        // Redirect to data room
        router.push("/investors/data-room");
      } else {
        setError("Failed to submit NDA. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="border-b border-border bg-surface py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <SectionReveal>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <Lock className="h-8 w-8 text-accent" />
            </div>
            <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              Investor Data Room
            </h1>
            <p className="mt-4 text-lg text-silver-dim">
              Access detailed financials, projections, and confidential
              materials
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* What's Inside Preview */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionReveal>
            <h2 className="text-center text-2xl font-bold text-white">
              What&apos;s Inside the Data Room
            </h2>
            <p className="mt-2 text-center text-sm text-silver-dim">
              Comprehensive materials for qualified investors
            </p>
          </SectionReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <SectionReveal>
              <div className="rounded-xl border border-border bg-surface p-6">
                <FileText className="h-8 w-8 text-accent" />
                <h3 className="mt-4 text-sm font-semibold text-white">
                  Investor Deck
                </h3>
                <p className="mt-2 text-xs text-silver-dim">
                  30-slide presentation with market analysis and strategy
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="rounded-xl border border-border bg-surface p-6">
                <TrendingUp className="h-8 w-8 text-accent" />
                <h3 className="mt-4 text-sm font-semibold text-white">
                  Financial Model
                </h3>
                <p className="mt-2 text-xs text-silver-dim">
                  3-5 year projections with detailed assumptions
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="rounded-xl border border-border bg-surface p-6">
                <Users className="h-8 w-8 text-accent" />
                <h3 className="mt-4 text-sm font-semibold text-white">
                  Customer Contracts
                </h3>
                <p className="mt-2 text-xs text-silver-dim">
                  Redacted agreements with major customers
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="rounded-xl border border-border bg-surface p-6">
                <Shield className="h-8 w-8 text-accent" />
                <h3 className="mt-4 text-sm font-semibold text-white">
                  IP Portfolio
                </h3>
                <p className="mt-2 text-xs text-silver-dim">
                  Complete patent list and freedom-to-operate analysis
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* NDA Form Section */}
      <section className="border-y border-border bg-background py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <SectionReveal>
            <div className="rounded-2xl border border-border bg-surface p-8 md:p-12">
              <div className="mb-8 flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Non-Disclosure Agreement
                  </h2>
                  <p className="mt-2 text-sm text-silver-dim">
                    Please complete this form and accept the NDA to access
                    confidential investor materials.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold text-white"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-white placeholder-silver-dim focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="John Smith"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-white"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-white placeholder-silver-dim focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Company & Title */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-white"
                    >
                      Company/Firm *
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-white placeholder-silver-dim focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="Acme Capital"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-semibold text-white"
                    >
                      Title *
                    </label>
                    <input
                      type="text"
                      id="title"
                      required
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-white placeholder-silver-dim focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="Managing Partner"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-white"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-white placeholder-silver-dim focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Investor Type & Investment Range */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="investorType"
                      className="block text-sm font-semibold text-white"
                    >
                      Investor Type *
                    </label>
                    <select
                      id="investorType"
                      required
                      value={formData.investorType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          investorType: e.target.value,
                        })
                      }
                      className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-white focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    >
                      <option value="">Select type...</option>
                      <option value="Private Equity">Private Equity</option>
                      <option value="Venture Capital">Venture Capital</option>
                      <option value="Family Office">Family Office</option>
                      <option value="Angel Investor">Angel Investor</option>
                      <option value="Strategic Investor">
                        Strategic Investor
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="investmentRange"
                      className="block text-sm font-semibold text-white"
                    >
                      Investment Range *
                    </label>
                    <select
                      id="investmentRange"
                      required
                      value={formData.investmentRange}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          investmentRange: e.target.value,
                        })
                      }
                      className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-white focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    >
                      <option value="">Select range...</option>
                      <option value="$100K - $500K">$100K - $500K</option>
                      <option value="$500K - $1M">$500K - $1M</option>
                      <option value="$1M - $3M">$1M - $3M</option>
                      <option value="$3M - $5M">$3M - $5M</option>
                      <option value="$5M - $10M">$5M - $10M</option>
                      <option value="$10M+">$10M+</option>
                    </select>
                  </div>
                </div>

                {/* NDA Agreement Text */}
                <div className="rounded-lg border border-border bg-surface-light p-6">
                  <h3 className="text-sm font-semibold text-white">
                    Non-Disclosure Agreement Terms
                  </h3>
                  <div className="mt-4 max-h-64 overflow-y-auto text-xs leading-relaxed text-silver-dim">
                    <p className="mb-4">
                      By accessing the AngleLock LLC Investor Data Room, you
                      agree to the following terms:
                    </p>

                    <p className="mb-2 font-semibold text-silver">
                      1. Confidentiality
                    </p>
                    <p className="mb-4">
                      All information, materials, documents, and data contained
                      in the Data Room (collectively, &quot;Confidential
                      Information&quot;) are proprietary and confidential to
                      AngleLock LLC. You agree to hold all Confidential
                      Information in strict confidence and not to disclose,
                      reproduce, or distribute any Confidential Information to
                      any third party without prior written consent from
                      AngleLock LLC.
                    </p>

                    <p className="mb-2 font-semibold text-silver">
                      2. Permitted Use
                    </p>
                    <p className="mb-4">
                      Confidential Information may only be used for evaluating a
                      potential investment in AngleLock LLC. You may not use
                      Confidential Information for any competitive purpose or in
                      any manner that would be detrimental to AngleLock LLC.
                    </p>

                    <p className="mb-2 font-semibold text-silver">
                      3. No Unauthorized Copies
                    </p>
                    <p className="mb-4">
                      You agree not to make copies of Confidential Information
                      except as reasonably necessary for investment evaluation.
                      All copies remain subject to this NDA.
                    </p>

                    <p className="mb-2 font-semibold text-silver">
                      4. Return of Materials
                    </p>
                    <p className="mb-4">
                      Upon request by AngleLock LLC, or upon your decision not
                      to pursue an investment, you agree to promptly return or
                      destroy all Confidential Information and copies thereof.
                    </p>

                    <p className="mb-2 font-semibold text-silver">
                      5. No Investment Commitment
                    </p>
                    <p className="mb-4">
                      This NDA does not constitute an offer to sell securities
                      or a commitment by either party to enter into any
                      investment or business relationship.
                    </p>

                    <p className="mb-2 font-semibold text-silver">
                      6. Duration
                    </p>
                    <p>
                      This NDA remains in effect for a period of three (3) years
                      from the date of acceptance.
                    </p>
                  </div>
                </div>

                {/* NDA Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="ndaAccepted"
                    checked={formData.ndaAccepted}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        ndaAccepted: e.target.checked,
                      })
                    }
                    className="mt-1 h-5 w-5 rounded border-border bg-background text-accent focus:ring-2 focus:ring-accent/20"
                  />
                  <label htmlFor="ndaAccepted" className="text-sm text-silver">
                    I have read and agree to the Non-Disclosure Agreement terms
                    above. I understand that all information in the Data Room is
                    confidential and proprietary to AngleLock LLC. *
                  </label>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 p-4">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-400" />
                    <p className="text-sm text-red-400">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.ndaAccepted}
                  className="w-full rounded-full bg-accent px-8 py-4 text-sm font-semibold tracking-wider text-white uppercase transition-all hover:bg-accent-bright hover:shadow-lg hover:shadow-accent/25 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <CheckCircle2 className="mr-2 inline-block h-5 w-5" />
                      Accept NDA & Access Data Room
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-silver-dim">
                  Questions?{" "}
                  <a
                    href="mailto:info@anglelock.com"
                    className="text-accent hover:underline"
                  >
                    Contact us
                  </a>
                </p>
              </form>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionReveal>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <Lock className="h-6 w-6 text-accent" />
            </div>
            <p className="mt-4 text-sm text-silver-dim">
              Your information is encrypted and stored securely. We will never
              share your contact information with third parties.
            </p>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
