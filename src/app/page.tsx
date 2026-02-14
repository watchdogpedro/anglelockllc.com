import AnimatedCounter from "@/components/AnimatedCounter";
import SectionReveal from "@/components/SectionReveal";
import IndustryCarousel from "@/components/IndustryCarousel";
import LeadCapture from "@/components/LeadCapture";
import {
  Shield,
  Zap,
  Target,
  Factory,
  Building2,
  ArrowRight,
  Quote,
  ExternalLink,
  CheckCircle2,
  TrendingUp,
  Award,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* ========== HERO - SPLIT LAYOUT WITH IMAGE ========== */}
      <section className="relative min-h-screen overflow-hidden pt-20">
        {/* Subtle technical grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: Text Content */}
            <div>
              <SectionReveal>
                <p className="mb-6 text-sm tracking-[0.4em] text-accent uppercase">
                  Patented Technology • 150+ Global Patents
                </p>
              </SectionReveal>

              <SectionReveal delay={0.1}>
                <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
                  THE FIRST
                  <br />
                  MECHANICAL-LOCK
                  <br />
                  <span className="text-gradient">ALUMINUM FRAMING</span>
                </h1>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <p className="mt-6 text-lg leading-relaxed text-silver md:text-xl">
                  Replacing 48 years of friction-based technology with patented
                  precision engineering that&apos;s{" "}
                  <span className="font-bold text-white">7x stronger</span> and
                  requires{" "}
                  <span className="font-bold text-white">zero maintenance</span>
                  .
                </p>
              </SectionReveal>

              {/* Key Metrics */}
              <SectionReveal delay={0.3}>
                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="rounded-lg border border-border bg-surface/50 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-accent">150+</div>
                    <p className="mt-1 text-xs text-silver-dim">Patents</p>
                  </div>
                  <div className="rounded-lg border border-border bg-surface/50 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-accent">7x</div>
                    <p className="mt-1 text-xs text-silver-dim">Stronger</p>
                  </div>
                  <div className="rounded-lg border border-border bg-surface/50 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-accent">$3M</div>
                    <p className="mt-1 text-xs text-silver-dim">Revenue</p>
                  </div>
                  <div className="rounded-lg border border-border bg-surface/50 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-accent">50%</div>
                    <p className="mt-1 text-xs text-silver-dim">Growth</p>
                  </div>
                </div>
              </SectionReveal>

              {/* Validated By */}
              <SectionReveal delay={0.4}>
                <p className="mt-6 text-xs text-silver-dim uppercase tracking-wider">
                  Validated by industry leaders
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm font-bold tracking-wider text-silver-dim/40">
                  <span>DISNEY</span>
                  <span>•</span>
                  <span>TSMC</span>
                  <span>•</span>
                  <span>LAM RESEARCH</span>
                  <span>•</span>
                  <span>BOSTON DYNAMICS</span>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.5}>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#investment"
                    className="rounded-full bg-accent px-8 py-4 text-center text-sm font-semibold tracking-wider text-white uppercase transition-all hover:bg-accent-bright hover:shadow-lg hover:shadow-accent/25"
                  >
                    Investment Materials
                  </a>
                  <a
                    href="#proof"
                    className="rounded-full border border-border px-8 py-4 text-center text-sm font-semibold tracking-wider text-silver uppercase transition-all hover:border-silver-dim hover:text-white"
                  >
                    View Proof
                  </a>
                </div>
              </SectionReveal>
            </div>

            {/* Right: Hero Image */}
            <SectionReveal delay={0.2}>
              <div className="relative">
                <img
                  src="/images/hero-anglelock-robot.png"
                  alt="AngleLock precision engineering - robotic automation with aluminum framing system"
                  className="w-full"
                />
              </div>
            </SectionReveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-silver-dim/30 p-1">
            <div className="h-2 w-1 animate-bounce rounded-full bg-silver-dim" />
          </div>
        </div>
      </section>

      {/* ========== THE OPPORTUNITY ========== */}
      <section className="border-y border-border bg-surface py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionReveal>
            <p className="text-sm tracking-[0.4em] text-accent uppercase">
              The Opportunity
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              $47 Billion Market
              <br />
              <span className="text-gradient">Stuck in 1976</span>
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-silver-dim">
              The entire aluminum framing industry relies on friction-based
              connections invented nearly 50 years ago. We&apos;re replacing T-slot
              everywhere with mechanically locking technology.
            </p>
          </SectionReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <SectionReveal>
              <div className="rounded-2xl border border-border bg-surface-light p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
                  <Shield className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  The Problem
                </h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-silver-dim">
                  <li>&bull; T-slot relies on friction alone</li>
                  <li>&bull; Vibration causes loosening</li>
                  <li>&bull; $600+/year maintenance</li>
                  <li>&bull; No innovation since 1976</li>
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="glow-blue rounded-2xl border border-accent/20 bg-surface-light p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  The Solution
                </h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-silver">
                  <li>&bull; 5-plane mechanical lock</li>
                  <li>&bull; Self-tightens under load</li>
                  <li>&bull; Zero maintenance forever</li>
                  <li>&bull; 150+ patents protect it</li>
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="rounded-2xl border border-border bg-surface-light p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  The Result
                </h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-silver-dim">
                  <li>&bull; 7x stronger than T-slot</li>
                  <li>&bull; 92% lower lifetime cost</li>
                  <li>&bull; 2x faster assembly</li>
                  <li>&bull; Growing 50% annually</li>
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ========== EXTREME TESTING ========== */}
      <section id="proof" className="py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionReveal>
            <p className="text-sm tracking-[0.4em] text-accent uppercase">
              Extreme Testing
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              We Don&apos;t Just Claim
              <br />
              <span className="text-gradient">Superior Strength</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver-dim">
              We prove it.
            </p>
          </SectionReveal>

          {/* Tank Test - Featured */}
          <SectionReveal delay={0.1}>
            <div className="mt-16 overflow-hidden rounded-2xl border border-accent/20 bg-surface glow-blue">
              <div className="relative aspect-video w-full">
                <img
                  src="/images/tank-test.png"
                  alt="52-ton M60 Patton tank on AngleLock aluminum structure"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white md:text-3xl">
                    52-Ton Tank Load Test
                  </h3>
                  <p className="mt-2 text-lg text-silver">
                    M60 Patton battle tank driven onto AngleLock aluminum extrusion
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="rounded-full bg-accent/10 px-4 py-2">
                      <span className="text-sm font-semibold text-accent">
                        Result: Zero Deformation
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Industry Applications Carousel */}
          <SectionReveal delay={0.2}>
            <div className="mt-16">
              <h3 className="text-center text-xl font-semibold text-white">
                From Defense to Every Industry
              </h3>
              <p className="mt-2 text-center text-sm text-silver-dim">
                The same strength engineering powers precision applications across 12 industries
              </p>
              <IndustryCarousel />
            </div>
          </SectionReveal>

          {/* Additional Testing Data */}
          <SectionReveal delay={0.3}>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-border bg-surface p-6">
                <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
                  Torsion Testing
                </h4>
                <div className="mt-3 text-3xl font-bold text-accent">7x</div>
                <p className="mt-1 text-sm text-silver-dim">
                  Stronger than T-slot
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-6">
                <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
                  Vibration Testing
                </h4>
                <div className="mt-3 text-3xl font-bold text-accent">Self-tightens</div>
                <p className="mt-1 text-sm text-silver-dim">
                  Competitors loosen
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-6">
                <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
                  Load Testing
                </h4>
                <div className="mt-3 text-3xl font-bold text-accent">8,000 lbs</div>
                <p className="mt-1 text-sm text-silver-dim">
                  Without deflection
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-6">
                <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
                  Fatigue Testing
                </h4>
                <div className="mt-3 text-3xl font-bold text-accent">10 years</div>
                <p className="mt-1 text-sm text-silver-dim">
                  Zero maintenance
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ========== CUSTOMER VALIDATION ========== */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionReveal>
            <p className="text-sm tracking-[0.4em] text-accent uppercase">
              Customer Validation
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              Proven in Production
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver-dim">
              Major enterprises trust AngleLock for mission-critical applications
            </p>
          </SectionReveal>

          {/* Customer Logos */}
          <SectionReveal delay={0.1}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-12 text-xl font-bold tracking-wider text-silver-dim/40 md:text-2xl">
              <span>DISNEY</span>
              <span>&middot;</span>
              <span>TSMC</span>
              <span>&middot;</span>
              <span>LAM RESEARCH</span>
              <span>&middot;</span>
              <span>BOSTON DYNAMICS</span>
              <span>&middot;</span>
              <span>MILWAUKEE TOOL</span>
              <span>&middot;</span>
              <span>SNAP-ON</span>
            </div>
          </SectionReveal>

          {/* Key Customer Highlight */}
          <SectionReveal delay={0.2}>
            <div className="mt-12 rounded-2xl border border-border bg-surface p-8 md:p-12">
              <div className="text-2xl font-bold text-accent">$2M</div>
              <p className="mt-2 text-sm text-silver-dim">
                Annual revenue from Disney Studios alone
              </p>
            </div>
          </SectionReveal>

          {/* Testimonial */}
          <SectionReveal delay={0.3}>
            <div className="mt-8 rounded-2xl border border-accent/20 bg-surface p-8 glow-blue md:p-12">
              <Quote className="h-10 w-10 text-accent/30" />
              <blockquote className="mt-4 text-xl leading-relaxed text-white md:text-2xl">
                &ldquo;AngleLock is without question the strongest, most stable,
                and most versatile framing system in the business.&rdquo;
              </blockquote>
              <p className="mt-6 text-sm text-silver-dim">
                <span className="font-semibold text-silver">
                  Greg Gernert
                </span>{" "}
                &mdash; VP & GM, Rockwell Automation
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ========== COMPETITIVE MOAT ========== */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionReveal>
            <p className="text-sm tracking-[0.4em] text-accent uppercase">
              Competitive Advantage
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              Protected Moat
            </h2>
          </SectionReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <SectionReveal>
              <div className="rounded-2xl border border-border bg-surface p-8">
                <Award className="h-10 w-10 text-accent" />
                <h3 className="mt-6 text-2xl font-bold text-white">150+</h3>
                <p className="mt-2 text-sm font-semibold text-silver">
                  Global Patents
                </p>
                <ul className="mt-4 space-y-2 text-sm text-silver-dim">
                  <li>&bull; US, Europe, Korea coverage</li>
                  <li>&bull; Core lock mechanism</li>
                  <li>&bull; Application variations</li>
                  <li>&bull; Manufacturing methods</li>
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-surface p-8">
                <Factory className="h-10 w-10 text-accent" />
                <h3 className="mt-6 text-2xl font-bold text-white">10 Years</h3>
                <p className="mt-2 text-sm font-semibold text-silver">
                  Proven Operations
                </p>
                <ul className="mt-4 space-y-2 text-sm text-silver-dim">
                  <li>&bull; $10M in debt-free equipment</li>
                  <li>&bull; 30 employees</li>
                  <li>&bull; Vertically integrated</li>
                  <li>&bull; Production capacity ready</li>
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="rounded-2xl border border-border bg-surface p-8">
                <Target className="h-10 w-10 text-accent" />
                <h3 className="mt-6 text-2xl font-bold text-white">Strategic</h3>
                <p className="mt-2 text-sm font-semibold text-silver">
                  Acquisition Interest
                </p>
                <ul className="mt-4 space-y-2 text-sm text-silver-dim">
                  <li>&bull; 8020 ($800M) attempted buy</li>
                  <li>&bull; Validates technology threat</li>
                  <li>&bull; Clear exit pathways</li>
                  <li>&bull; Target: $50M valuation</li>
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ========== MARKET TIMING ========== */}
      <section className="border-y border-border bg-surface py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionReveal>
            <p className="text-sm tracking-[0.4em] text-accent uppercase">
              Market Timing
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              Convergence of
              <br />
              <span className="text-gradient">Growth Drivers</span>
            </h2>
          </SectionReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <SectionReveal>
              <div className="rounded-xl border border-border bg-surface-light p-6">
                <div className="text-3xl font-bold text-accent">$52.7B</div>
                <p className="mt-2 text-sm font-semibold text-white">
                  CHIPS Act Investment
                </p>
                <p className="mt-1 text-xs text-silver-dim">
                  Semiconductor fabs require precision framing for cleanrooms
                  and equipment
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="rounded-xl border border-border bg-surface-light p-6">
                <div className="text-3xl font-bold text-accent">10.5%</div>
                <p className="mt-2 text-sm font-semibold text-white">
                  Robotics CAGR
                </p>
                <p className="mt-1 text-xs text-silver-dim">
                  Industrial automation buildout through 2030 drives demand for
                  robot cells
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="rounded-xl border border-border bg-surface-light p-6">
                <div className="text-3xl font-bold text-accent">Reshoring</div>
                <p className="mt-2 text-sm font-semibold text-white">
                  US/Europe Manufacturing
                </p>
                <p className="mt-1 text-xs text-silver-dim">
                  New facility construction requires structural framing systems
                </p>
              </div>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.3}>
            <div className="mt-12 rounded-2xl border border-border bg-surface p-8">
              <h3 className="text-lg font-semibold text-white">
                12 Target Industries
              </h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Aerospace & Defense",
                  "Semiconductor Manufacturing",
                  "Medical & Life Sciences",
                  "Industrial Robotics",
                  "Commercial Construction",
                  "AI & Data Centers",
                  "Solar & Energy",
                  "Oil & Gas",
                  "Communications",
                  "Automotive",
                  "Entertainment Production",
                  "General Manufacturing",
                ].map((industry) => (
                  <div
                    key={industry}
                    className="flex items-center gap-2 text-sm text-silver-dim"
                  >
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== THE INVESTMENT ========== */}
      <section id="investment" className="py-32 px-6">
        <div className="mx-auto max-w-4xl">
          <SectionReveal>
            <p className="text-center text-sm tracking-[0.4em] text-accent uppercase">
              The Investment
            </p>
            <h2 className="mt-4 text-center text-4xl font-bold leading-tight text-white md:text-5xl">
              Growth Capital Round
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="mt-16 rounded-2xl border border-accent/20 bg-surface p-8 glow-blue md:p-12">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                    Raising
                  </h3>
                  <div className="mt-2 text-4xl font-bold text-accent">
                    $10 Million
                  </div>
                  <p className="mt-2 text-sm text-silver-dim">
                    Growth capital (10 years operational, not startup)
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                    Current Traction
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-silver-dim">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      $3M annual revenue
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      50% year-over-year growth
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      Major customer contracts
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      Path to $50M valuation
                    </li>
                  </ul>
                </div>
              </div>

              <div className="section-divider my-8" />

              <div>
                <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                  Use of Funds
                </h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-border bg-background p-4">
                    <h4 className="text-sm font-semibold text-white">
                      Facility Expansion
                    </h4>
                    <p className="mt-1 text-xs text-silver-dim">
                      Increase production capacity for growing demand
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-background p-4">
                    <h4 className="text-sm font-semibold text-white">
                      Equipment
                    </h4>
                    <p className="mt-1 text-xs text-silver-dim">
                      3 CNC machining centers for vertically integrated
                      production
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-background p-4">
                    <h4 className="text-sm font-semibold text-white">
                      Marketing
                    </h4>
                    <p className="mt-1 text-xs text-silver-dim">
                      Replicate Vention&apos;s $125M marketing playbook
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-background p-4">
                    <h4 className="text-sm font-semibold text-white">
                      Headcount
                    </h4>
                    <p className="mt-1 text-xs text-silver-dim">
                      Sales, engineering, and operations team expansion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Download Materials */}
          <SectionReveal delay={0.2}>
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:info@anglelock.com?subject=Investment%20Materials%20Request"
                className="w-full rounded-full bg-accent px-8 py-4 text-center text-sm font-semibold tracking-wider text-white uppercase transition-all hover:bg-accent-bright hover:shadow-lg hover:shadow-accent/25 sm:w-auto"
              >
                Request Investor Deck
              </a>
              <a
                href="mailto:info@anglelock.com?subject=Confidential%20Investment%20Inquiry"
                className="w-full rounded-full border border-border px-8 py-4 text-center text-sm font-semibold tracking-wider text-silver uppercase transition-all hover:border-silver-dim hover:text-white sm:w-auto"
              >
                Schedule Call
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ========== TEAM ========== */}
      <section className="border-y border-border bg-surface py-32 px-6">
        <div className="mx-auto max-w-4xl">
          <SectionReveal>
            <p className="text-sm tracking-[0.4em] text-accent uppercase">
              Leadership
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              The Inventor
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="mt-12 rounded-2xl border border-border bg-surface-light p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white">
                Frank Oetlinger
              </h3>
              <p className="mt-1 text-sm text-accent">
                Founder & CEO
              </p>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-silver">
                <p>
                  In 1995, Frank was running <span className="text-white">Blanking Systems</span>,
                  serving high-speed presses when he identified a critical
                  problem: structural components kept{" "}
                  <span className="text-white">vibrating loose</span>.
                </p>
                <p>
                  Every framing system relied on friction. Frank realized that
                  was fundamentally wrong. Friction fails. Always.
                </p>
                <p>
                  So he invented a joint that uses{" "}
                  <span className="text-accent">
                    angled contact planes to create a mechanical lock
                  </span>{" "}
                  — one that tightens under vibration instead of loosening.
                </p>
                <p>
                  Three decades and{" "}
                  <span className="text-white">150 personal patents</span>{" "}
                  later, that insight has become AngleLock.
                </p>
              </div>

              {/* Timeline */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                {[
                  { year: "1995", event: "Vibration problem identified" },
                  { year: "2010", event: "AngleLock concept prototyped" },
                  { year: "2017", event: "Controlled Dynamics founded" },
                  { year: "2024", event: "Arrow-1 gantry launched" },
                ].map((item) => (
                  <div
                    key={item.year}
                    className="rounded-lg border border-border bg-background p-4"
                  >
                    <div className="text-xl font-bold text-accent">
                      {item.year}
                    </div>
                    <p className="mt-1 text-xs text-silver-dim">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ========== LEAD CAPTURE - MARKET REPORT ========== */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionReveal>
            <p className="text-center text-sm tracking-[0.4em] text-accent uppercase">
              Investment Materials
            </p>
            <h2 className="mt-4 text-center text-4xl font-bold leading-tight text-white md:text-5xl">
              Download Market
              <br />
              <span className="text-gradient">Opportunity Report</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-silver-dim">
              Get comprehensive analysis of the $47B market opportunity,
              competitive landscape, and financial projections.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="mt-12">
              <LeadCapture />
            </div>
          </SectionReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ========== CONTACT ========== */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <SectionReveal>
            <p className="text-sm tracking-[0.4em] text-accent uppercase">
              Investment Inquiries
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              Ready to Learn More?
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="mt-12 rounded-2xl border border-border bg-surface p-8 md:p-12">
              <div className="grid gap-8 text-left md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                    Headquarters
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-silver-dim">
                    1058 Overland Court
                    <br />
                    Grafton, WI 53024
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                    Direct Contact
                  </h3>
                  <div className="mt-3 space-y-2">
                    <a
                      href="tel:2624218840"
                      className="block text-sm text-silver-dim transition-colors hover:text-accent"
                    >
                      (262) 421-8840
                    </a>
                    <a
                      href="mailto:info@anglelock.com"
                      className="block text-sm text-silver-dim transition-colors hover:text-accent"
                    >
                      info@anglelock.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
