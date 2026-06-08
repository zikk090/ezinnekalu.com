"use client";
import { useInView } from "@/hooks/use-in-view";

const cards = [
  {
    title: "Security Engineering",
    items: [
      "Application Security",
      "Penetration Testing",
      "Threat Modeling",
      "Secure Code Review",
      "DevSecOps Pipelines",
      "Cloud-Native Security",
    ],
  },
  {
    title: "Security Research",
    items: [
      "Bug Bounty Hunting",
      "API Security Research",
      "Vulnerability Discovery",
      "The Vulnerability Conditions Framework",
      "Security Writing",
    ],
  },
  {
    title: "Building Products",
    items: [
      "Developer Tools",
      "Authentication Systems",
      "Security Platforms",
      "Automation Workflows",
      "Open Source Tools",
    ],
  },
  {
    title: "Teaching & Community",
    items: [
      "Conference Speaking",
      "Mentoring",
      "Technical Writing",
      "Security Education",
      "CyberSafe Foundation",
    ],
  },
];

export function WhatIDo() {
  const { ref, inView } = useInView();

  return (
    <section id="what-i-do" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-300 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4">
            What I Do
          </p>
          <h2 className="text-4xl font-bold">What I Spend My Time On</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-card border border-white/5 rounded-xl p-8 hover:border-blue-500/30 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {card.title}
                </h3>
                <ul className="space-y-2">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="text-neutral-400 text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
