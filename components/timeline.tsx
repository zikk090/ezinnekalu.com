"use client";
import type { ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";

type Entry = {
  role: string;
  description: ReactNode;
};

const entries: Entry[] = [
  {
    role: "President, CyberGirls Alumni Community",
    description: (
      <>
        Leading the alumni network of Africa&apos;s largest women-in-cybersecurity program.{" "}
        <a href="#" className="text-accent hover:underline">
          CyberGirls Alumni
        </a>
      </>
    ),
  },
  {
    role: "Systems Development Engineer",
    description:
      "Building and supporting critical infrastructure and automation systems at scale.",
  },
  {
    role: "Application Security Engineer",
    description:
      "Security assessments, threat modeling, code reviews, and vulnerability research across modern web applications and APIs.",
  },
  {
    role: "Security Researcher",
    description:
      "Independent vulnerability discovery through bug bounty programs and original research.",
  },
  {
    role: "Software Engineer",
    description:
      "Backend systems, APIs, and automation platforms — before transitioning fully into security.",
  },
  {
    role: "Medical School",
    description:
      "Learned how to think critically, analyze complex systems, and solve difficult problems under pressure. Turns out those skills transfer well to security.",
  },
];

export function Timeline() {
  const { ref, inView } = useInView();

  return (
    <section id="career" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-300 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-[#b45309] text-sm font-medium tracking-widest uppercase mb-4 font-sans">
            Career
          </p>
          <h2 className="font-serif text-4xl font-bold text-[#1c1917]">
            A Few Stops Along The Way
          </h2>

          <div className="mt-12 relative pl-8">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[#e8e3db]" />
            {entries.map((entry) => (
              <div key={entry.role} className="relative mb-12 last:mb-0">
                <span className="absolute -left-[33px] top-1 w-3 h-3 rounded-full bg-accent border-2 border-surface" />
                <h3 className="text-[#1c1917] text-xl font-semibold font-sans">
                  {entry.role}
                </h3>
                <p className="text-[#78716c] mt-2 leading-relaxed max-w-2xl">
                  {entry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
