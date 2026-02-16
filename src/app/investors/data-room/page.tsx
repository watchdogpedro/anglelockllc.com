"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SectionReveal from "@/components/SectionReveal";
import {
  FileText,
  Download,
  Lock,
  TrendingUp,
  Users,
  Shield,
  DollarSign,
  BarChart3,
  FileSpreadsheet,
  Award,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export default function DataRoomPage() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [investorEmail, setInvestorEmail] = useState("");

  useEffect(() => {
    // Check if NDA was accepted
    const cookies = document.cookie.split(";").reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split("=");
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);

    if (cookies.nda_accepted === "true") {
      setIsAuthorized(true);
      setInvestorEmail(cookies.investor_email || "");
    } else {
      // Redirect back to NDA page
      router.push("/investors");
    }
  }, [router]);

  if (!isAuthorized) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <Lock className="mx-auto h-12 w-12 text-silver-dim" />
          <p className="mt-4 text-silver-dim">Verifying access...</p>
        </div>
      </main>
    );
  }

  const documents = [
    {
      category: "Executive Materials",
      icon: FileText,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      items: [
        {
          name: "Investor Deck",
          description: "30-slide presentation with market analysis and strategy",
          filename: "AngleLock_Investor_Deck_2026.pdf",
          size: "12.3 MB",
          status: "Ready",
        },
        {
          name: "Executive Summary",
          description: "One-page investment overview",
          filename: "AngleLock_Executive_Summary_2026.pdf",
          size: "1.8 MB",
          status: "Ready",
        },
        {
          name: "Investment Memo",
          description: "Detailed investment thesis and opportunity",
          filename: "AngleLock_Investment_Memo_2026.pdf",
          size: "3.2 MB",
          status: "Coming Soon",
        },
      ],
    },
    {
      category: "Financial Data",
      icon: TrendingUp,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      items: [
        {
          name: "Financial Model",
          description: "3-5 year projections with detailed assumptions",
          filename: "AngleLock_Financial_Model_2026.xlsx",
          size: "2.1 MB",
          status: "Ready",
        },
        {
          name: "Historical Financials",
          description: "2020-2025 actuals with P&L, balance sheet, cash flow",
          filename: "AngleLock_Historicals_2020-2025.xlsx",
          size: "1.5 MB",
          status: "Ready",
        },
        {
          name: "Unit Economics",
          description: "CAC, LTV, margins by product and customer segment",
          filename: "AngleLock_Unit_Economics_2026.xlsx",
          size: "890 KB",
          status: "Ready",
        },
        {
          name: "Use of Funds",
          description: "Detailed breakdown of $10M deployment plan",
          filename: "AngleLock_Use_of_Funds_2026.pdf",
          size: "1.2 MB",
          status: "Ready",
        },
      ],
    },
    {
      category: "Market Analysis",
      icon: BarChart3,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      items: [
        {
          name: "Market Size Analysis",
          description: "TAM/SAM/SOM breakdown with growth projections",
          filename: "AngleLock_Market_Analysis_2026.pdf",
          size: "4.5 MB",
          status: "Ready",
        },
        {
          name: "Competitive Landscape",
          description: "Analysis vs 8020, Bosch, Item, Vention",
          filename: "AngleLock_Competitive_Analysis_2026.pdf",
          size: "3.8 MB",
          status: "Ready",
        },
        {
          name: "Industry Trends Report",
          description: "CHIPS Act, reshoring, automation drivers",
          filename: "AngleLock_Industry_Trends_2026.pdf",
          size: "2.9 MB",
          status: "Coming Soon",
        },
      ],
    },
    {
      category: "Customers & Traction",
      icon: Users,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      items: [
        {
          name: "Customer List",
          description: "Top 20 customers with revenue breakdown",
          filename: "AngleLock_Customer_List_2026.pdf",
          size: "980 KB",
          status: "Ready",
        },
        {
          name: "Case Studies",
          description: "Disney, TSMC, Boston Dynamics implementations",
          filename: "AngleLock_Case_Studies_2026.pdf",
          size: "5.2 MB",
          status: "Ready",
        },
        {
          name: "Customer Contracts (Redacted)",
          description: "Sample contracts with major customers",
          filename: "AngleLock_Sample_Contracts_Redacted.pdf",
          size: "3.1 MB",
          status: "Available on Request",
        },
        {
          name: "Sales Pipeline",
          description: "Current opportunities and win rates",
          filename: "AngleLock_Sales_Pipeline_2026.xlsx",
          size: "1.4 MB",
          status: "Ready",
        },
      ],
    },
    {
      category: "Intellectual Property",
      icon: Shield,
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
      items: [
        {
          name: "Patent Portfolio",
          description: "Complete list of 150+ patents with status",
          filename: "AngleLock_Patent_Portfolio_2026.pdf",
          size: "2.7 MB",
          status: "Ready",
        },
        {
          name: "Core Patents Summary",
          description: "Key patents protecting lock mechanism",
          filename: "AngleLock_Core_Patents_2026.pdf",
          size: "1.9 MB",
          status: "Ready",
        },
        {
          name: "Freedom to Operate",
          description: "Third-party IP analysis and clearance",
          filename: "AngleLock_FTO_Analysis_2026.pdf",
          size: "2.2 MB",
          status: "Available on Request",
        },
      ],
    },
    {
      category: "Company & Governance",
      icon: Award,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      items: [
        {
          name: "Capitalization Table",
          description: "Current ownership structure and equity breakdown",
          filename: "AngleLock_Cap_Table_2026.xlsx",
          size: "650 KB",
          status: "Available on Request",
        },
        {
          name: "Team Bios",
          description: "Leadership team and key employees",
          filename: "AngleLock_Team_Bios_2026.pdf",
          size: "1.3 MB",
          status: "Ready",
        },
        {
          name: "Board Materials",
          description: "Recent board deck and meeting minutes",
          filename: "AngleLock_Board_Deck_Q4_2025.pdf",
          size: "4.1 MB",
          status: "Available on Request",
        },
        {
          name: "Legal Documents",
          description: "Certificate of incorporation, bylaws",
          filename: "AngleLock_Legal_Documents.pdf",
          size: "2.8 MB",
          status: "Available on Request",
        },
      ],
    },
  ];

  const handleDownload = (filename: string, status: string) => {
    if (status === "Coming Soon" || status === "Available on Request") {
      alert(
        `This document is ${status.toLowerCase()}. Please contact info@anglelock.com for access.`
      );
      return;
    }

    // Track download
    fetch("/api/track-download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: investorEmail,
        document: filename,
        timestamp: new Date().toISOString(),
      }),
    });

    // Trigger download
    window.location.href = `/documents/investors/${filename}`;
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="border-b border-border bg-surface py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionReveal>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white md:text-4xl">
                  Investor Data Room
                </h1>
                <p className="mt-2 text-sm text-silver-dim">
                  Confidential materials for qualified investors
                </p>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="text-sm font-semibold text-accent">
                    NDA Accepted
                  </span>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionReveal>
            <div className="rounded-2xl border border-accent/20 bg-surface p-8 glow-blue">
              <h2 className="text-xl font-bold text-white">
                Welcome to the AngleLock Investor Data Room
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-silver">
                You now have access to comprehensive materials including
                financial projections, customer data, intellectual property
                documentation, and detailed market analysis. All materials are
                confidential and subject to the NDA you accepted.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-silver-dim">
                <span className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Click any document to download
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Some documents available on request
                </span>
                <span>•</span>
                <span>Questions? Email info@anglelock.com</span>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="pb-20 px-6">
        <div className="mx-auto max-w-6xl space-y-12">
          {documents.map((category, categoryIndex) => (
            <SectionReveal key={category.category} delay={categoryIndex * 0.1}>
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${category.bgColor}`}
                  >
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    {category.category}
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={item.name}
                      className="rounded-xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:bg-surface-light"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-white">
                            {item.name}
                          </h3>
                          <p className="mt-1 text-xs text-silver-dim">
                            {item.description}
                          </p>
                          <div className="mt-3 flex items-center gap-3 text-xs text-silver-dim">
                            <span>{item.size}</span>
                            <span>•</span>
                            <span
                              className={
                                item.status === "Ready"
                                  ? "text-green-400"
                                  : item.status === "Coming Soon"
                                  ? "text-yellow-400"
                                  : "text-orange-400"
                              }
                            >
                              {item.status}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            handleDownload(item.filename, item.status)
                          }
                          disabled={item.status === "Coming Soon"}
                          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg transition-all ${
                            item.status === "Ready"
                              ? "bg-accent/10 text-accent hover:bg-accent hover:text-white"
                              : "bg-surface-light text-silver-dim cursor-not-allowed opacity-50"
                          }`}
                        >
                          <Download className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Contact Footer */}
      <section className="border-t border-border bg-surface py-12 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <SectionReveal>
            <h2 className="text-2xl font-bold text-white">
              Ready to Discuss Further?
            </h2>
            <p className="mt-3 text-sm text-silver-dim">
              Schedule a call with our team to discuss the investment
              opportunity
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:info@anglelock.com?subject=Data%20Room%20Follow-Up"
                className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-bright"
              >
                Schedule a Call
              </a>
              <a
                href="mailto:info@anglelock.com?subject=Data%20Room%20Question"
                className="rounded-full border border-border px-8 py-3 text-sm font-semibold text-silver transition-all hover:border-silver-dim hover:text-white"
              >
                Ask a Question
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
