"use client";
import { useInView } from "@/hooks/use-in-view";

export function Newsletter() {
  const { ref, inView } = useInView();

  return (
    <section id="newsletter" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center max-w-xl mx-auto transition-all duration-300 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4 font-sans">
            Newsletter
          </p>
          <h2 className="font-serif text-4xl font-bold text-[#1c1917]">
            Notes From The Field
          </h2>

          <div className="text-[#78716c] mt-4 leading-relaxed space-y-2">
            <p>
              I try to share lessons from security engineering, security
              research, product building and life hacking.
            </p>
            <p>No fluff. Just things I&apos;ve learned the hard way.</p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-white border border-[#e8e3db] text-[#1c1917] placeholder:text-[#78716c] px-4 py-3 rounded-lg flex-1 focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="button"
              className="bg-[#1c1917] hover:bg-[#2c2927] text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap text-sm font-sans"
            >
              Subscribe
            </button>
          </div>

          <p className="mt-4 text-[#78716c] text-sm">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
