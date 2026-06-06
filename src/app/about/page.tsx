// src/app/about/page.tsx
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const timeline = [
    {
      year: "2010",
      event: "Identified vibration issues affecting 3D printer technology",
    },
    {
      year: "2011",
      event: "Conducted extensive research into vibration dynamics",
    },
    {
      year: "2012",
      event: "Developed the AngleLock mechanical locking concept",
    },
    {
      year: "2013",
      event: "Built and tested initial working prototypes",
    },
    {
      year: "2015",
      event:
        "Achieved 50x improvement over industry-standard friction-based fasteners",
    },
    {
      year: "2017",
      event: "Officially established Controlled Dynamics Inc.",
    },
    {
      year: "2019",
      event: "Secured core patents for AngleLock technology",
    },
    {
      year: "2020",
      event: "Partnered with Nippon Pulse America for manufacturing",
    },
    {
      year: "2022",
      event: "Expanded into aerospace, defense, and precision manufacturing",
    },
    {
      year: "2025",
      event: "Delivering solutions at high-volume scale",
    },
  ];

  const coreValues = [
    {
      title: "Excellence",
      description: "Delivering uncompromising quality in structural solutions",
    },
    {
      title: "Partnership",
      description:
        "Building collaborative relationships based on trust and transparency",
    },
    {
      title: "Innovation",
      description: "Continuously advancing structural engineering technology",
    },
    {
      title: "Precision",
      description: "Creating engineered solutions meeting exact specifications",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-surface pt-32 pb-20">
          <div className="container mx-auto max-w-5xl px-6">
            <SectionReveal>
              <div className="text-center">
                <h1 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">
                  About AngleLock
                </h1>
                <p className="mt-6 text-xl text-silver md:text-2xl">
                  Engineering Tomorrow&apos;s Foundations Today
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="border-b border-border bg-background py-20">
          <div className="container mx-auto max-w-4xl px-6">
            <SectionReveal>
              <div className="rounded-2xl border border-border bg-surface p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  Our Mission
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-silver">
                  AngleLock is redefining industries through structural
                  innovation. With a proven track record in Blanking Systems, we
                  now focus on AngleLock—a structural system so advanced it
                  eliminates every limitation of conventional technology.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-silver">
                  Developed by Controlled Dynamics Inc., AngleLock represents
                  15 years of engineering excellence, pushing the boundaries of
                  what&apos;s possible in structural aluminum systems.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Core Values */}
        <section className="border-b border-border bg-surface py-20">
          <div className="container mx-auto max-w-6xl px-6">
            <SectionReveal>
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  Core Values
                </h2>
                <p className="mt-4 text-lg text-silver">
                  Four principles guide everything we do
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {coreValues.map((value, index) => (
                  <SectionReveal key={value.title} delay={index * 0.1}>
                    <div className="rounded-xl border border-border bg-background p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10">
                          <CheckCircle2 className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {value.title}
                          </h3>
                          <p className="mt-2 text-base text-silver">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="border-b border-border bg-background py-20">
          <div className="container mx-auto max-w-5xl px-6">
            <SectionReveal>
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  Our Journey
                </h2>
                <p className="mt-4 text-lg text-silver">
                  15 years of innovation and engineering excellence
                </p>
              </div>

              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2" />

                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <SectionReveal key={item.year} delay={index * 0.05}>
                      <div className="relative flex items-center gap-8 md:gap-16">
                        {/* Timeline dot */}
                        <div className="absolute left-8 flex h-4 w-4 items-center justify-center md:left-1/2 md:-ml-2">
                          <div className="h-4 w-4 rounded-full border-4 border-accent bg-background" />
                        </div>

                        {/* Content - alternating sides on desktop */}
                        <div
                          className={`ml-20 md:ml-0 ${
                            index % 2 === 0
                              ? "md:mr-auto md:w-5/12 md:pr-16 md:text-right"
                              : "md:ml-auto md:w-5/12 md:pl-16"
                          }`}
                        >
                          <div className="rounded-xl border border-border bg-surface p-6">
                            <div className="text-2xl font-bold text-accent">
                              {item.year}
                            </div>
                            <p className="mt-2 text-base text-silver">
                              {item.event}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SectionReveal>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-surface py-20">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <SectionReveal>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Join Our Mission
              </h2>
              <p className="mt-4 text-lg text-silver">
                Interested in being part of the structural revolution?
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-accent-bright hover:shadow-lg hover:shadow-accent/25"
                >
                  Contact Us
                </a>
                <a
                  href="mailto:info@anglelock.com"
                  className="rounded-full border border-border bg-background px-8 py-4 text-sm font-semibold uppercase tracking-wider text-silver transition-all hover:border-accent hover:text-white"
                >
                  info@anglelock.com
                </a>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* ========== PATENTS ========== */}
        <section id="patents" className="border-t border-border py-20">
          <div className="container mx-auto max-w-7xl px-6">
            <SectionReveal>
              <p className="mb-4 text-sm tracking-[0.4em] text-accent uppercase">
                Intellectual Property
              </p>
              <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
                150+ PATENTS WORLDWIDE
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-silver-dim">
                AngleLock&apos;s patented mechanical locking system is protected across 12+ countries,
                covering both utility innovations and design elements of our modular framing system.
              </p>
            </SectionReveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { region: "United States", count: "50+ patents" },
                { region: "Germany", count: "10 patents" },
                { region: "Japan", count: "10 patents" },
                { region: "China", count: "8 patents" },
                { region: "United Kingdom", count: "9 patents" },
                { region: "Australia", count: "6 patents" },
                { region: "Canada", count: "5 patents" },
                { region: "France, Spain, Italy, Korea, Austria, Switzerland, Hong Kong", count: "Additional registrations" },
              ].map((p) => (
                <SectionReveal key={p.region}>
                  <div className="rounded-xl border border-border bg-surface p-4">
                    <p className="text-sm font-bold text-white">{p.region}</p>
                    <p className="mt-1 text-sm text-accent">{p.count}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal>
              <p className="mt-8 text-sm text-silver-dim">
                PCT (Patent Cooperation Treaty): 8 international applications. Contact us for IP licensing inquiries.
              </p>
            </SectionReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
