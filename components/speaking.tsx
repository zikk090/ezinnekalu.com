"use client";
import { useInView } from "@/hooks/use-in-view";

const previousTalks = [
  "Postman for API Security",
  "Data Privacy in Modern Applications",
  "Introduction to Bug Bounty Hunting",
];

const availableTopics = [
  "API Security",
  "Threat Modeling",
  "DevSecOps",
  "Bug Bounty Hunting",
  "The Vulnerability Conditions Framework",
  "Security for Developers",
];

export function Speaking() {
  const { ref, inView } = useInView();

  return (
    <section id="speaking" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-300 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4">
            Speaking
          </p>
          <h2 className="text-4xl font-bold">Speaking</h2>

          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl mt-4">
            I deliver talks on application security, API security, vulnerability
            discovery, and practical security engineering. My goal is to make
            complex security concepts understandable and actionable — especially
            for engineers who didn&apos;t come up through a traditional security
            path.
          </p>

          <p className="text-white font-semibold mt-10 mb-4">
            Previous talks include:
          </p>
          <ul className="text-neutral-400 space-y-2 list-none">
            {previousTalks.map((talk) => (
              <li key={talk}>
                <span className="text-blue-400">→</span> {talk}
              </li>
            ))}
          </ul>

          <p className="text-white font-semibold mt-8 mb-4">
            Topics available:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {availableTopics.map((topic) => (
              <div
                key={topic}
                className="bg-surface border border-white/5 px-4 py-3 rounded-lg text-neutral-400 text-sm"
              >
                {topic}
              </div>
            ))}
          </div>

          <a
            href="mailto:ekalu.fk@gmail.com"
            className="mt-10 bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
          >
            Invite Me To Speak
          </a>
        </div>
      </div>
    </section>
  );
}
