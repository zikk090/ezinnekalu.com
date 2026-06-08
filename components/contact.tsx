"use client";
import { useInView } from "@/hooks/use-in-view";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/theezinnekalu/" },
  { label: "GitHub", href: "https://github.com/zikk090" },
  { label: "X / Twitter", href: "https://x.com/thezinnekalu" },
  { label: "YesWeHack", href: "https://yeswehack.com/hunters/whizarre" },
  { label: "Email", href: "mailto:ekalu.fk@gmail.com" },
];

export function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-300 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4">
            Contact
          </p>
          <h2 className="text-4xl font-bold">Let&apos;s Connect</h2>

          <p className="text-neutral-400 text-lg mt-4 max-w-xl">
            Whether you&apos;re looking for a security engineer, speaker,
            collaborator, or just want to talk security — I&apos;d love to hear
            from you.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/10 hover:border-blue-500/50 text-neutral-400 hover:text-blue-400 px-5 py-3 rounded-lg transition-colors text-sm font-medium"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
