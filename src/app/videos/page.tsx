import SectionReveal from "@/components/SectionReveal";
import { Play } from "lucide-react";

// YouTube video data from @AngleLock channel
const videos = [
  {
    id: "U2TxI7mL_Uc",
    title: "AngleLock Technology Overview",
    description: "Discover how AngleLock's patented 5-plane mechanical lock revolutionizes structural aluminum framing.",
  },
  {
    id: "vd_YqTbLYlc",
    title: "AngleLock System Demonstration",
    description: "See the AngleLock system in action with real-world assembly and performance examples.",
  },
  {
    id: "e7SCxG8Kn4k",
    title: "Strength & Stiffness Testing",
    description: "Watch rigorous testing that proves 14x stiffness and 10x strength vs traditional T-slot systems.",
  },
  {
    id: "XC9lc3I06sM",
    title: "Assembly Guide & Best Practices",
    description: "Professional tips and techniques for assembling AngleLock structures with precision.",
  },
  {
    id: "8tKS1pYyuBU",
    title: "Industrial Applications",
    description: "Real-world applications across aerospace, robotics, semiconductor, and manufacturing industries.",
  },
  {
    id: "xnIh8EnWrZY",
    title: "AngleLock vs T-Slot Comparison",
    description: "Side-by-side comparison showing why AngleLock outperforms traditional framing systems.",
  },
  {
    id: "VKzNnZ9x91s",
    title: "Customer Success Stories",
    description: "Hear from industry leaders using AngleLock for mission-critical applications.",
  },
  {
    id: "bVsa7KVHFjE",
    title: "Technical Deep Dive",
    description: "Detailed exploration of the mechanical locking technology and engineering principles.",
  },
  {
    id: "xk0k2WJvEdo",
    title: "Product Showcase",
    description: "Complete overview of AngleLock profiles, components, hardware, and motion systems.",
  },
];

export const metadata = {
  title: "Videos | AngleLock LLC - Breakthrough Aluminum Technology",
  description:
    "Watch AngleLock in action. Technology demonstrations, case studies, testing data, and customer testimonials showcasing the world's strongest structural aluminum system.",
};

export default function VideosPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <SectionReveal>
          <div className="text-center">
            <p className="text-sm tracking-[0.4em] text-accent uppercase">
              Video Library
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              See AngleLock
              <br />
              <span className="text-gradient">In Action</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-silver-dim">
              Watch demonstrations, case studies, and testimonials showcasing
              the technology that&apos;s replacing T-slot and steel across
              every industry.
            </p>
          </div>
        </SectionReveal>

        {/* Featured Video */}
        <SectionReveal delay={0.1}>
          <div className="mt-16">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface glow-blue">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${videos[0].id}`}
                  title={videos[0].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="border-t border-border bg-surface-light p-6">
                <h2 className="text-xl font-semibold text-white">
                  {videos[0].title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-silver-dim">
                  {videos[0].description}
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Video Grid */}
        <div className="mt-20">
          <SectionReveal>
            <h2 className="mb-8 text-2xl font-bold text-white">
              All Videos
            </h2>
          </SectionReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videos.slice(1).map((video, i) => (
              <SectionReveal key={video.id} delay={i * 0.05}>
                <div className="group overflow-hidden rounded-xl border border-border bg-surface transition-all hover:border-accent/30">
                  <div className="relative aspect-video w-full overflow-hidden bg-background">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    {/* Optional: Thumbnail overlay with play button */}
                    {/* <img
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-background/40 transition-all group-hover:bg-background/20">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/90 transition-all group-hover:scale-110 group-hover:bg-accent">
                        <Play className="h-8 w-8 text-white" fill="white" />
                      </div>
                    </div> */}
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-white group-hover:text-accent transition-colors">
                      {video.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-silver-dim">
                      {video.description}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <SectionReveal>
          <div className="mt-20 rounded-2xl border border-border bg-surface p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Want to See More?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-silver-dim">
              Subscribe to our YouTube channel for the latest demos, case
              studies, and technical deep-dives into AngleLock technology.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://www.youtube.com/@AngleLock"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold tracking-wider text-white uppercase transition-all hover:bg-accent-bright hover:shadow-lg hover:shadow-accent/25"
              >
                <Play className="h-4 w-4" fill="white" />
                Subscribe on YouTube
              </a>
              <a
                href="#contact"
                className="rounded-full border border-border px-8 py-4 text-sm font-semibold tracking-wider text-silver uppercase transition-all hover:border-silver-dim hover:text-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        </SectionReveal>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <a
            href="/"
            className="text-sm text-accent transition-colors hover:text-accent-bright"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
