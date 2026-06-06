// src/components/Navigation.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavChild {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  highlight?: boolean;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  {
    label: "Products",
    children: [
      { label: "Profiles", href: "/products/profiles" },
      { label: "Components", href: "/products/components" },
      { label: "Hardware", href: "/products/hardware" },
      { label: "Accessories", href: "/products/accessories" },
      { label: "Doors & Floors", href: "/products/doors-and-floors" },
      { label: "Motion", href: "/products/motion" },
    ],
  },
  {
    label: "Custom Designs",
    children: [
      { label: "Carts", href: "/custom-designs#carts" },
      { label: "Cabinets & Enclosures", href: "/custom-designs#cabinets-enclosures" },
      { label: "Machine Bases", href: "/custom-designs#machine-bases" },
      { label: "Workstations", href: "/custom-designs#workstations" },
      { label: "Studio Applications", href: "/custom-designs#studio-applications" },
      { label: "Design Services", href: "/custom-designs#design-services" },
      { label: "Assembly Assistance", href: "/custom-designs#assembly" },
    ],
  },
  {
    label: "About",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Patents", href: "/about#patents" },
      { label: "Industries Served", href: "/industries" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Videos", href: "/videos" },
      { label: "Literature", href: "/resources/literature" },
      { label: "Testing Data", href: "/testing" },
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "Investors", href: "/investors", highlight: true },
];

function DropdownItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (!item.children) {
    return (
      <Link
        href={item.href!}
        className={
          item.highlight
            ? "text-sm font-semibold text-accent transition-colors hover:text-accent-bright"
            : "text-sm text-silver-dim transition-colors hover:text-white"
        }
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm text-silver-dim transition-colors hover:text-white"
      >
        {item.label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-2 min-w-[200px] rounded-lg border border-border bg-surface py-2 shadow-xl">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-silver-dim transition-colors hover:bg-surface-light hover:text-white"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/anglelock-logo.png"
            alt="AngleLock"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <DropdownItem key={item.label} item={item} />
          ))}
          <Link
            href="/contact"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-bright"
          >
            Get a Quote
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
          <div className="flex flex-col gap-2">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === item.label ? null : item.label
                      )
                    }
                    className="flex w-full items-center justify-between py-2 text-lg text-silver-dim"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="ml-4 flex flex-col gap-1 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="py-1.5 text-sm text-silver-dim hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2 text-lg ${item.highlight ? "font-semibold text-accent" : "text-silver-dim hover:text-white"}`}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
