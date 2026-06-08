"use client";
import { useEffect, useState } from "react";

const stats = [
  { value: "5+", label: "Years in Security" },
  { value: "GWEB", label: "GIAC Certified" },
  { value: "100+", label: "Security Assessments" },
  { value: "3", label: "Talks Delivered" },
];

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div
          className={`max-w-4xl transition-all duration-300 ease-out ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="block">I Break Things.</span>
            <span className="block">Build Things. Teach Security.</span>
          </h1>

          <div className="text-lg sm:text-xl text-neutral-400 mt-6 max-w-2xl leading-relaxed space-y-4">
            <p>
              I&apos;m Ezinne Kalu — Application Security Engineer, Researcher,
              Builder, and Speaker.
            </p>
            <p>
              I help organizations find security weaknesses before attackers do,
              build products that solve real problems, and teach people how
              modern security actually works.
            </p>
          </div>

          <div className="mt-10 flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View My Work
            </a>
            <a
              href="#newsletter"
              className="border border-white/20 text-white/70 hover:border-blue-500 hover:text-blue-400 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Subscribe to My Notes
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-500 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
