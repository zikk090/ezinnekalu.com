"use client";
import { useInView } from "@/hooks/use-in-view";

type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  isInProgress?: boolean;
};

const projects: Project[] = [
  {
    title: "CyberGirls Letters",
    description:
      "Recommendation letter ticketing system for CyberSafe Foundation alumni. Replaces lost email threads with a proper request and assignment workflow.",
    tags: ["Next.js", "TypeScript", "Prisma", "SQLite"],
    href: "https://github.com/zikk090/cybergirls-letters",
  },
  {
    title: "Electricity Global",
    description:
      "An interactive visualization of global electricity generation and distribution by country and energy source.",
    tags: ["HTML", "JavaScript", "D3"],
    href: "https://github.com/zikk090/electricity-globe",
  },
  {
    title: "eztax",
    description: "Tax calculation and reference tool for Nigerian professionals.",
    tags: ["HTML", "JavaScript"],
    href: "#",
  },
  {
    title: "termclean",
    description: "A CLI tool for terminal cleanup and environment hygiene.",
    tags: ["TypeScript", "CLI"],
    href: "https://github.com/zikk090/termclean",
  },
  {
    title: "Authentication Gateway",
    description:
      "Passkeys, SSO, access control, and identity infrastructure for modern applications.",
    tags: [],
    isInProgress: true,
  },
  {
    title: "DailyCatch",
    description:
      "Transforms WhatsApp messages into structured, searchable knowledge automatically.",
    tags: [],
    isInProgress: true,
  },
];

export function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-300 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4">
            Work
          </p>
          <h2 className="text-4xl font-bold">What I&apos;ve Built</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project) => {
              const card = (
                <>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.isInProgress && (
                      <span className="bg-blue-500/10 text-blue-400 text-xs px-2.5 py-1 rounded-full">
                        In Progress
                      </span>
                    )}
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-card text-neutral-500 text-xs px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              );

              const className =
                "bg-surface border border-white/5 rounded-xl p-6 flex flex-col hover:border-white/20 transition-colors group";

              if (project.href) {
                return (
                  <a
                    key={project.title}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {card}
                  </a>
                );
              }

              return (
                <div key={project.title} className={className}>
                  {card}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
