"use client";
import { useInView } from "@/hooks/use-in-view";

export function WhoIAm() {
  const { ref, inView } = useInView();

  return (
    <section id="who-i-am" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-300 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-[#b45309] text-sm font-medium tracking-widest uppercase mb-4 font-sans">
            About
          </p>
          <h2 className="font-serif text-4xl font-bold text-[#1c1917] mb-12">
            Security Is What I Do. Building Is Who I Am.
          </h2>

          <div className="max-w-3xl space-y-6 text-[#78716c] text-lg leading-relaxed">
            <p>I didn&apos;t start in cybersecurity.</p>
            <p>
              I spent years studying medicine before realizing I was more
              fascinated by systems than symptoms. That curiosity led me into
              software engineering, then into security — where I found the
              perfect intersection of problem-solving, creativity, and impact.
            </p>
            <p>
              Today I work across application security, penetration testing,
              API security, threat modeling, DevSecOps, and security research.
              I hold industry certifications including SANS GWEB, CompTIA
              CASP+, and certifications in DevSecOps, threat modeling,
              container security, and cloud-native security. I also work at the
              intersection of AI and security — exploring how large language
              models introduce new attack surfaces and how they can be used to
              accelerate security engineering.
            </p>
            <p>
              I&apos;ve helped organizations identify vulnerabilities before
              they became incidents, built open-source tools, spoken at
              security events, and taught aspiring security professionals
              across Africa and beyond.
            </p>
            <p>
              When I&apos;m not working on security, I&apos;m building products,
              researching startup ideas, playing chess, or exploring ways
              technology can create leverage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
