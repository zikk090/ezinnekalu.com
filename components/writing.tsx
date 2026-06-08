"use client";
import { useInView } from "@/hooks/use-in-view";

const topics = [
  "The Vulnerability Conditions Framework",
  "API Security",
  "Threat Modeling",
  "OAuth & Authentication",
  "Bug Bounty Methodology",
  "DevSecOps",
  "Secure Development",
  "Startup Building",
  "Career Growth in Security",
  "Tools & Automation",
];

export function Writing() {
  const { ref, inView } = useInView();

  return (
    <section id="writing" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-300 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4">
            Writing
          </p>
          <h2 className="text-4xl font-bold">Research, Notes &amp; Lessons</h2>

          <div className="text-neutral-400 text-lg max-w-2xl mt-4 leading-relaxed">
            <p>
              I write about security engineering, security research, startup
              building, and systems thinking.
            </p>
            <p className="mt-4 text-neutral-500">Topics I cover:</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {topics.map((topic) => (
              <span
                key={topic}
                className="border border-white/10 text-neutral-300 px-4 py-2 rounded-full text-sm hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default"
              >
                {topic}
              </span>
            ))}
          </div>

          <a
            href="/writing"
            className="mt-10 inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Read Articles →
          </a>
        </div>
      </div>
    </section>
  );
}
