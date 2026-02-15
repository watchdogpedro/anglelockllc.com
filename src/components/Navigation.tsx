"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#technology", label: "Technology" },
  { href: "#opportunity", label: "Opportunity" },
  { href: "/about", label: "About" },
  { href: "#proof", label: "Proof" },
  { href: "/videos", label: "Videos" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-wider text-white">
              ANGLELOCK
            </span>
            <span className="text-[10px] tracking-[0.3em] text-silver-dim uppercase">
              Structural Aluminum Systems
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-silver-dim transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-all hover:bg-accent-bright"
          >
            Investor Inquiry
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-silver-dim transition-colors hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Investor Inquiry
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
