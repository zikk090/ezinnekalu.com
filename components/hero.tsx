"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const stats = [
  { value: "3+", label: "Years in Security" },
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
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-300 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div>
            <p className="text-[#b45309] text-sm font-medium tracking-widest uppercase mb-6 font-sans">
              Application Security Engineer
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-[#1c1917]">
              <span className="block">I Break Things.</span>
              <span className="block">Build Things.</span>
              <span className="block">Teach Security.</span>
            </h1>
            <p className="text-[#78716c] mt-6 text-lg leading-relaxed max-w-lg font-sans">
              I&apos;m Ezinne Kalu{" "}
              <span className="text-[#1c1917] text-sm italic">(Ayy-zee-nayy)</span>{" "}
              — Application Security Engineer, Researcher, Builder, and Speaker.
            </p>
            <p className="text-[#78716c] mt-3 text-base leading-relaxed max-w-lg font-sans">
              I help organizations find security weaknesses before attackers do, build products that solve real problems, and teach people how modern security actually works.
            </p>
            <div className="mt-8 flex gap-3 flex-wrap">
              <a href="#projects" className="bg-[#1c1917] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#2c2927] transition-colors font-sans">
                View My Work
              </a>
              <a href="#newsletter" className="border border-[#e8e3db] text-[#78716c] hover:border-[#b45309] hover:text-[#b45309] px-6 py-3 rounded-lg text-sm font-medium transition-colors font-sans">
                Subscribe to My Notes
              </a>
            </div>
            <div className="mt-12 pt-8 border-t border-[#e8e3db] grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-[#1c1917] font-serif">{stat.value}</div>
                  <div className="text-xs text-[#78716c] mt-1 font-sans">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:block">
            <div className="relative w-full max-w-sm mx-auto lg:max-w-none aspect-[3/4] rounded-2xl overflow-hidden bg-[#e8e3db]">
              <Image
                src="/ezinne.jpg"
                alt="Ezinne Kalu"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
