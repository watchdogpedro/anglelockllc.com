import AnimatedCounter from "@/components/AnimatedCounter";
import SectionReveal from "@/components/SectionReveal";
import {
  Rocket,
  Shield,
  Zap,
  Target,
  Factory,
  Cpu,
  Satellite,
  Syringe,
  Sun,
  Radio,
  Server,
  Building2,
  Droplets,
  Wrench,
  ArrowRight,
  Quote,
  ExternalLink,
} from "lucide-react";

const industries = [
  { icon: Satellite, name: "Space & Aerospace", desc: "Satellite assembly, engine stands, flight fixtures" },
  { icon: Shield, name: "Military & Defense", desc: "Tactical platforms, weapons systems, field-deployable structures" },
  { icon: Cpu, name: "Semiconductor", desc: "Fab equipment, wafer handling, Class 1 cleanrooms" },
  { icon: Server, name: "AI & Data Centers", desc: "Server racks, cooling infrastructure, cable management" },
  { icon: Syringe, name: "Life Sciences & Medical", desc: "Cleanroom frames, bioprocessing, lab equipment" },
  { icon: Factory, name: "Robotics & Automation", desc: "Robot cells, cobot mounts, AGV frames, guarding" },
  { icon: Sun, name: "Solar & Energy", desc: "Panel mounting, inverter frames, grid infrastructure" },
  { icon: Droplets, name: "Oil & Gas", desc: "Platform structures, equipment frames, harsh environments" },
  { icon: Building2, name: "Commercial Construction", desc: "Modular structures, facades, interior framing" },
  { icon: Radio, name: "Communications", desc: "Tower structures, antenna mounts, equipment enclosures" },
  { icon: Wrench, name: "Industrial Manufacturing", desc: "Machine bases, workstations, material handling" },
  { icon: Rocket, name: "Next-Gen Construction", desc: "Replacing welded steel and outdated T-slot everywhere" },
];

export default function Home() {
  return (
    <main>
      {/* ========== HERO ========== */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        >
          <source src="/videos/wireframe_hero_loop_smooth.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for better text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/60" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <SectionReveal>
            <p className="mb-6 text-sm tracking-[0.4em] text-accent uppercase">
              Patented Technology &middot; 100+ Global Patents
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <h1 className="text-7xl font-black leading-none tracking-tight text-white md:text-9xl lg:text-[12rem] xl:text-[14rem]">
              BREAK
              <span className="text-gradient">THROUGH</span>
            </h1>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-3xl text-2xl font-bold leading-tight text-silver md:text-3xl lg:text-4xl">
              We didn&apos;t improve T-slot aluminum.{" "}
              <span className="font-black text-white">We replaced it.</span>
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-lg font-bold leading-relaxed text-white md:text-xl lg:text-2xl">
              AngleLock is the world&apos;s first mechanically-locking structural
              aluminum framing system &mdash; stronger than steel connections, lighter
              than everything, and zero maintenance for life.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#technology"
                className="rounded-full bg-accent px-8 py-4 text-sm font-semibold tracking-wider text-white uppercase transition-all hover:bg-accent-bright hover:shadow-lg hover:shadow-accent/25"
              >
                See the Technology
              </a>
              <a
                href="#contact"
                className="rounded-full border border-border px-8 py-4 text-sm font-semibold tracking-wider text-silver uppercase transition-all hover:border-silver-dim hover:text-white"
              >
                Investor Inquiry
              </a>
            </div>
          </SectionReveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-silver-dim/30 p-1">
            <div className="h-2 w-1 animate-bounce rounded-full bg-silver-dim" />
          </div>
        </div>
      </section>

      {/* ========== STATS BAR ========== */}
      <section className="border-y border-border bg-surface py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          <AnimatedCounter end={100} suffix="+" label="Global Patents" />
          <AnimatedCounter end={14} suffix="x" label="Stiffer than T-Slot" />
          <AnimatedCounter end={10} suffix="x" label="Stronger Joints" />
          <AnimatedCounter end={0} prefix="$" suffix="" label="Lifetime Maintenance" />
        </div>
      </section>

      {/* ========== TECHNOLOGY ========== */}
      <section id="technology" className="py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionReveal>
            <p className="text-sm tracking-[0.4em] text-accent uppercase">
              The Technology
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              Five Planes of
              <br />
              <span className="text-gradient">Mechanical Lock</span>
            </h2>
          </SectionReveal>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <SectionReveal>
              <div className="space-y-8">
                <div className="rounded-2xl border border-border bg-surface p-8">
                  <h3 className="flex items-center gap-3 text-lg font-semibold text-white">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
                      <X className="h-5 w-5 text-red-400" />
                    </div>
                    T-Slot: Friction-Based (1970s)
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-silver-dim">
                    <li>&bull; Relies on friction alone &mdash; loosens under vibration</li>
                    <li>&bull; Pinned connections allow rotation</li>
                    <li>&bull; Requires constant retightening ($600+/year)</li>
                    <li>&bull; Barely evolved in 50 years</li>
                  </ul>
                </div>

                <div className="glow-blue rounded-2xl border border-accent/20 bg-surface p-8">
                  <h3 className="flex items-center gap-3 text-lg font-semibold text-white">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                      <Zap className="h-5 w-5 text-accent" />
                    </div>
                    AngleLock: Mechanically Locked
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-silver">
                    <li>&bull; 5 angled contact planes create a mechanical lock</li>
                    <li>&bull; Fixed connections resist translation AND rotation</li>
                    <li>&bull; Self-tightens under vibration &mdash; bolts spring back</li>
                    <li>&bull; Zero maintenance. Zero loosening. Ever.</li>
                  </ul>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="space-y-6">
                <ComparisonRow
                  label="Stiffness (40x40mm)"
                  old="0.024 in&sup4;"
                  new_="0.343 in&sup4;"
                  improvement="14x"
                />
                <ComparisonRow
                  label="10-Year Total Cost"
                  old="$5,650"
                  new_="$477"
                  improvement="92% less"
                />
                <ComparisonRow
                  label="Assembly Speed"
                  old="4-5 hours"
                  new_="1-2 hours"
                  improvement="2x faster"
                />
                <ComparisonRow
                  label="Annual Maintenance"
                  old="$600+/year"
                  new_="$0/year"
                  improvement="Zero"
                />
                <ComparisonRow
                  label="Brackets Required"
                  old="100% (baseline)"
                  new_="50-75%"
                  improvement="Fewer parts"
                />

                <div className="mt-8 rounded-xl border border-border bg-surface-light p-6">
                  <p className="text-sm italic leading-relaxed text-silver-dim">
                    &ldquo;If someone gift-wrapped you a free T-slot system,
                    it&apos;d still cost more over its lifetime than a
                    full-priced AngleLock assembly.&rdquo;
                  </p>
                </div>

                <a
                  href="https://anglelock.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent-bright"
                >
                  View detailed specs & testing data
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ========== OPPORTUNITY ========== */}
      <section id="opportunity" className="py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionReveal>
            <p className="text-sm tracking-[0.4em] text-accent uppercase">
              The Opportunity
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              A $47 Billion
              <br />
              <span className="text-gradient">Revolution</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver-dim">
              Everywhere T-slot, Unistrut, and welded steel are used today,
              AngleLock replaces them with fewer parts, faster assembly, and
              permanent strength. The addressable market spans every industry
              that builds.
            </p>
          </SectionReveal>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((industry, i) => (
              <SectionReveal key={industry.name} delay={i * 0.05}>
                <div className="group rounded-xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:bg-surface-light">
                  <industry.icon className="h-8 w-8 text-accent transition-transform group-hover:scale-110" />
                  <h3 className="mt-4 text-sm font-semibold text-white">
                    {industry.name}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-silver-dim">
                    {industry.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal>
            <div className="mt-16 rounded-2xl border border-border bg-surface p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <div className="text-3xl font-bold text-accent">10.5%</div>
                  <p className="mt-1 text-sm text-silver-dim">
                    Industrial robotics CAGR through 2030
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">$52.7B</div>
                  <p className="mt-1 text-sm text-silver-dim">
                    CHIPS Act semiconductor investment
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">23%</div>
                  <p className="mt-1 text-sm text-silver-dim">
                    Industry share of greenhouse gas emissions &mdash; aluminum is recyclable
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ========== THE INVENTOR ========== */}
      <section id="inventor" className="py-32 px-6">
        <div className="mx-auto max-w-4xl">
          <SectionReveal>
            <p className="text-sm tracking-[0.4em] text-accent uppercase">
              The Inventor
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              Frank Oetlinger
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="mt-12 rounded-2xl border border-border bg-surface p-8 md:p-12">
              <div className="space-y-6 text-base leading-relaxed text-silver">
                <p>
                  In 1995, Frank Oetlinger was running{" "}
                  <span className="text-white">Blanking Systems</span>, serving
                  high-speed presses processing folded carton blanks at four
                  sheets per second. The problem: production lines suffered
                  constant shutdowns because structural components{" "}
                  <span className="text-white">
                    kept vibrating loose
                  </span>
                  .
                </p>
                <p>
                  Every framing system on the market relied on{" "}
                  <span className="text-white">friction</span> to hold joints
                  together. Frank realized that was fundamentally wrong. Friction
                  fails. Always.
                </p>
                <p>
                  So he invented something different: a joint that uses{" "}
                  <span className="text-accent">
                    angled contact planes to create a mechanical lock
                  </span>{" "}
                  &mdash; one that actually tightens under vibration instead of
                  loosening. The bolt stretches like a spring and snaps the
                  connection back into place.
                </p>
                <p>
                  Three decades and{" "}
                  <span className="text-white">150 personal patents</span>{" "}
                  later, that insight has become AngleLock: a complete
                  structural aluminum system protected by{" "}
                  <span className="text-white">
                    100+ patents across 10+ countries
                  </span>
                  , validated by Boeing, Disney, Rockwell Automation, and
                  Snap-on.
                </p>
              </div>

              {/* Timeline */}
              <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                {[
                  { year: "1995", event: "Vibration problem identified" },
                  { year: "2010", event: "AngleLock concept prototyped" },
                  { year: "2017", event: "Controlled Dynamics founded" },
                  { year: "2024", event: "Arrow-1 AI gantry launched" },
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

      {/* ========== PROOF ========== */}
      <section id="proof" className="py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionReveal>
            <p className="text-sm tracking-[0.4em] text-accent uppercase">
              The Proof
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              Don&apos;t Take Our
              <br />
              <span className="text-gradient">Word For It</span>
            </h2>
          </SectionReveal>

          {/* Testimonial */}
          <SectionReveal delay={0.1}>
            <div className="mt-16 rounded-2xl border border-accent/20 bg-surface p-8 glow-blue md:p-12">
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

          {/* Case studies grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <SectionReveal>
              <CaseStudyCard
                title="Satellite Assembly Platform"
                metric="<5 micron"
                metricLabel="deflection under 2,000 lbs"
                detail="12'x20' platform, reconfigured 8 times in 3 years, zero maintenance"
                industry="Aerospace"
              />
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <CaseStudyCard
                title="Wafer Inspection System"
                metric="0.3 micron"
                metricLabel="vibration (70% below spec)"
                detail="Installed in 36 hours, 24/7 operation for 2+ years, zero adjustments"
                industry="Semiconductor"
              />
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <CaseStudyCard
                title="Automotive Cobot Cell"
                metric="45 min"
                metricLabel="reconfiguration (was 8 hours)"
                detail="Calibration maintained through 50+ reconfigurations, 12 product families"
                industry="Robotics"
              />
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <CaseStudyCard
                title="CNC Mill Base"
                metric="8,000 lbs"
                metricLabel="with zero deflection"
                detail="40% reduction in part rejections, relocated 4 times in 2 years"
                industry="Manufacturing"
              />
            </SectionReveal>
          </div>

          {/* Client logos */}
          <SectionReveal>
            <div className="mt-16 text-center">
              <p className="text-sm tracking-wider text-silver-dim uppercase">
                Trusted by industry leaders
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-12 text-2xl font-bold tracking-wider text-silver-dim/40">
                <span>DISNEY</span>
                <span>BOEING</span>
                <span>SNAP-ON</span>
                <span>ROCKWELL</span>
                <span>MILWAUKEE</span>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://controlleddynamicsinc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent-bright"
              >
                View detailed case studies at Controlled Dynamics
                <ExternalLink className="h-4 w-4" />
              </a>
              <span className="hidden text-silver-dim sm:inline">&middot;</span>
              <a
                href="https://anglelock.com/testingdata"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent-bright"
              >
                View testing data & specifications
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ========== ECOSYSTEM ========== */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-5xl">
          <SectionReveal>
            <p className="text-sm tracking-[0.4em] text-accent uppercase text-center">
              The Ecosystem
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-white text-center md:text-5xl">
              Three Pillars
            </h2>
          </SectionReveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <SectionReveal>
              <a
                href="https://anglelock.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border bg-surface p-8 transition-all hover:border-accent/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  AngleLock
                </h3>
                <p className="mt-1 text-xs tracking-wider text-accent uppercase">
                  anglelock.com
                </p>
                <p className="mt-4 text-sm leading-relaxed text-silver-dim">
                  The patented components: profiles, brackets, hardware, and
                  motion systems. Full product catalog, testing data, and
                  technical specifications.
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm text-accent transition-colors group-hover:text-accent-bright">
                  Explore components <ArrowRight className="h-4 w-4" />
                </div>
              </a>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <a
                href="https://controlleddynamicsinc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border bg-surface p-8 transition-all hover:border-accent/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Factory className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  Controlled Dynamics
                </h3>
                <p className="mt-1 text-xs tracking-wider text-accent uppercase">
                  controlleddynamicsinc.com
                </p>
                <p className="mt-4 text-sm leading-relaxed text-silver-dim">
                  Custom-engineered automation solutions built on AngleLock.
                  Machine bases, enclosures, cleanroom systems, and turnkey
                  integration.
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm text-accent transition-colors group-hover:text-accent-bright">
                  View solutions <ArrowRight className="h-4 w-4" />
                </div>
              </a>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="rounded-2xl border border-border bg-surface p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Rocket className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  Arrow-1
                </h3>
                <p className="mt-1 text-xs tracking-wider text-accent uppercase">
                  Industry 4.0 Gantry
                </p>
                <p className="mt-4 text-sm leading-relaxed text-silver-dim">
                  World&apos;s first 7th Axis Linear Shaft Motor Gantry. Zero
                  maintenance, Edge-to-Cloud AI analytics, works underwater.
                  Built on AngleLock framing.
                </p>
                <p className="mt-4 text-xs text-silver-dim">
                  Launched at Automate 2024, Chicago
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ========== CONTACT / CTA ========== */}
      <section id="contact" className="py-32 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <SectionReveal>
            <p className="text-sm tracking-[0.4em] text-accent uppercase">
              Get In Touch
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              Ready to Learn More?
            </h2>
            <p className="mt-6 text-lg text-silver-dim">
              Whether you&apos;re an investor, strategic partner, or enterprise
              buyer, we&apos;d love to show you what AngleLock can do.
            </p>
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

              <div className="section-divider my-8" />

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="mailto:info@anglelock.com?subject=Investor%20Inquiry%20-%20AngleLock%20LLC"
                  className="rounded-full bg-accent px-8 py-4 text-sm font-semibold tracking-wider text-white uppercase transition-all hover:bg-accent-bright hover:shadow-lg hover:shadow-accent/25"
                >
                  Investor Inquiry
                </a>
                <a
                  href="mailto:sales@anglelock.com?subject=Partnership%20Inquiry"
                  className="rounded-full border border-border px-8 py-4 text-sm font-semibold tracking-wider text-silver uppercase transition-all hover:border-silver-dim hover:text-white"
                >
                  Partnership Inquiry
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}

/* ========== SUB-COMPONENTS ========== */

function X({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function ComparisonRow({
  label,
  old,
  new_,
  improvement,
}: {
  label: string;
  old: string;
  new_: string;
  improvement: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <div className="text-xs tracking-wider text-silver-dim uppercase">
        {label}
      </div>
      <div className="mt-3 flex items-end justify-between">
        <div>
          <span className="text-sm text-silver-dim line-through">{old}</span>
          <span className="mx-3 text-silver-dim">&rarr;</span>
          <span
            className="text-lg font-bold text-white"
            dangerouslySetInnerHTML={{ __html: new_ }}
          />
        </div>
        <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
          {improvement}
        </span>
      </div>
    </div>
  );
}

function CaseStudyCard({
  title,
  metric,
  metricLabel,
  detail,
  industry,
}: {
  title: string;
  metric: string;
  metricLabel: string;
  detail: string;
  industry: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-8 transition-all hover:border-accent/20">
      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
        {industry}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <div className="mt-4">
        <span className="text-3xl font-bold text-accent">{metric}</span>
        <span className="ml-2 text-sm text-silver-dim">{metricLabel}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-silver-dim">{detail}</p>
    </div>
  );
}
