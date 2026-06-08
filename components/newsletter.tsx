"use client";
import { useInView } from "@/hooks/use-in-view";

export function Newsletter() {
  const { ref, inView } = useInView();

  return (
    <section id="newsletter" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center max-w-xl mx-auto transition-all duration-300 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4">
            Newsletter
          </p>
          <h2 className="text-4xl font-bold">Notes From The Field</h2>

          <div className="text-neutral-400 mt-4 leading-relaxed space-y-2">
            <p>
              Every few weeks I share lessons from security engineering,
              security research, product building, and personal growth.
            </p>
            <p>
              No fluff. Just practical insights and things I&apos;ve learned the
              hard way.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-white/5 border border-white/10 text-white placeholder:text-neutral-500 px-4 py-3 rounded-lg flex-1 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>

          <p className="mt-4 text-neutral-600 text-sm">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
