"use client";
import { useInView } from "@/hooks/use-in-view";

export function VCF() {
  const { ref, inView } = useInView();

  return (
    <section id="vcf" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={ref}
          className={`relative border-l-4 border-accent pl-8 bg-gradient-to-r from-amber-50 to-transparent rounded-r-2xl p-8 sm:p-12 transition-all duration-300 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3 font-sans">
            Signature Methodology
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1c1917] mb-6">
            The Vulnerability Conditions Framework
          </h2>

          <div className="space-y-4 text-[#78716c] text-lg leading-relaxed">
            <p>
              Most people think about web vulnerabilities as isolated bugs. I
              think about them as conditions.
            </p>
            <p>
              Every exploitable vulnerability requires a specific set of
              preconditions to exist — missing authentication, unsafe
              deserialization, unchecked input, broken trust boundaries. When
              you learn to identify conditions rather than hunt for bug
              patterns, your coverage improves dramatically.
            </p>
            <p>
              This framework is my signature methodology for application
              security assessments, threat modeling, and security research.
            </p>
          </div>

          <a
            href="#"
            className="text-accent hover:text-[#92400e] font-medium mt-6 inline-block font-sans"
          >
            Read my framework →
          </a>
        </div>
      </div>
    </section>
  );
}
