import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold tracking-wider text-white">
              ANGLELOCK
            </h3>
            <p className="mt-2 text-xs tracking-[0.2em] text-silver-dim uppercase">
              The strength of a simple IDEA
            </p>
            <p className="mt-4 text-sm leading-relaxed text-silver-dim">
              100+ patents. 14x stiffer. 10x stronger.
              <br />
              Zero maintenance. Forever.
            </p>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Ecosystem
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://anglelock.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-silver-dim transition-colors hover:text-accent"
              >
                AngleLock Components
              </a>
              <a
                href="https://controlleddynamicsinc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-silver-dim transition-colors hover:text-accent"
              >
                Controlled Dynamics
              </a>
              <a
                href="https://www.youtube.com/@AngleLock"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-silver-dim transition-colors hover:text-accent"
              >
                YouTube Channel
              </a>
            </div>
          </div>

          {/* Site */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Explore
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="#technology"
                className="text-sm text-silver-dim transition-colors hover:text-accent"
              >
                Technology
              </Link>
              <Link
                href="#opportunity"
                className="text-sm text-silver-dim transition-colors hover:text-accent"
              >
                Market Opportunity
              </Link>
              <Link
                href="#proof"
                className="text-sm text-silver-dim transition-colors hover:text-accent"
              >
                Proof Points
              </Link>
              <Link
                href="/videos"
                className="text-sm text-silver-dim transition-colors hover:text-accent"
              >
                Videos
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-silver-dim">
              <p>1058 Overland Court</p>
              <p>Grafton, WI 53024</p>
              <a
                href="tel:2624218840"
                className="transition-colors hover:text-accent"
              >
                (262) 421-8840
              </a>
              <a
                href="mailto:info@anglelock.com"
                className="transition-colors hover:text-accent"
              >
                info@anglelock.com
              </a>
            </div>
          </div>
        </div>

        <div className="section-divider mt-12 mb-8" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-silver-dim">
            &copy; {new Date().getFullYear()} AngleLock LLC / Controlled
            Dynamics Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-silver-dim transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-silver-dim transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
