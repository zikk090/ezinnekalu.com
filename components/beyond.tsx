"use client";
import { useInView } from "@/hooks/use-in-view";

export function Beyond() {
  const { ref, inView } = useInView();

  return (
    <section id="beyond" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-300 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4 font-sans">Life</p>
          <h2 className="font-serif text-4xl font-bold text-[#1c1917]">Beyond Security</h2>

          <p className="text-[#78716c] text-lg leading-relaxed mt-6 max-w-2xl">
            Outside work I play chess competitively, read obsessively across disciplines,
            stay active, travel whenever possible, and spend a lot of time thinking about startups
            and building things that are actually useful.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Chess", "Reading", "Fitness", "Travel", "Startups", "Building"].map((item) => (
              <span key={item} className="border border-[#e8e3db] text-[#78716c] px-4 py-2 rounded-full text-sm font-sans">
                {item}
              </span>
            ))}
          </div>

          <p className="mt-10 text-[#78716c] text-base italic max-w-xl leading-relaxed font-sans">
            &ldquo;Curiosity compounds. The best opportunities usually come from following
            interests long enough to become uncommon expertise.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
