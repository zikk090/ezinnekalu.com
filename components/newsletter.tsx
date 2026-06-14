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

          <div className="mt-10 max-w-md mx-auto">
            <iframe
              src="https://subscribe-forms.beehiiv.com/v3/forms/05d8b51e-59ce-41a5-9b46-07ef02367f6e"
              className="w-full"
              style={{ height: 320, border: "none" }}
              title="Subscribe to Notes From The Field"
              scrolling="no"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
