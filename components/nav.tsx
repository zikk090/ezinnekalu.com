"use client";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/nav-links";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto py-4 px-6 flex items-center justify-between">
        <a href="#" className="text-white font-semibold text-lg">
          Ezinne Kalu
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-neutral-400 hover:text-white text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#newsletter"
            className="hidden sm:inline-block border border-white/20 text-white/70 hover:border-blue-500 hover:text-blue-400 px-4 py-1.5 rounded-full text-sm transition-colors"
          >
            Subscribe
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className="block w-5 h-px bg-white" />
            <span className="block w-5 h-px bg-white" />
            <span className="block w-5 h-px bg-white" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur border-b border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-neutral-400 hover:text-white text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#newsletter"
            onClick={() => setOpen(false)}
            className="text-blue-400 text-sm"
          >
            Subscribe
          </a>
        </div>
      )}
    </nav>
  );
}
