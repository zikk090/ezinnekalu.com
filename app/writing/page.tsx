import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Writing — Ezinne Kalu",
  description:
    "Notes, research, and lessons from security engineering, security research, and product building — coming soon.",
};

export default function WritingPage() {
  return (
    <main>
      <Nav />
      <section className="min-h-screen flex items-center pt-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4 font-sans">
            Writing
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1c1917]">
            Coming Soon
          </h1>
          <p className="text-[#78716c] text-lg leading-relaxed mt-6">
            I&apos;m putting together notes, research, and lessons from
            security engineering, security research, and product building.
            Check back soon — or subscribe to get them as soon as they&apos;re
            live.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/#newsletter"
              className="inline-flex items-center justify-center gap-2 bg-[#1c1917] text-white hover:bg-[#2c2927] px-6 py-3 rounded-lg text-sm font-medium transition-colors font-sans"
            >
              Subscribe to Notes From The Field
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 border border-[#e8e3db] text-[#78716c] hover:border-accent hover:text-accent px-6 py-3 rounded-lg text-sm font-medium transition-colors font-sans"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
