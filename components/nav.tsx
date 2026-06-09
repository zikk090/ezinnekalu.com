"use client";
import { useState } from "react";
import { navLinks } from "@/lib/nav-links";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto py-4 px-6 flex items-center justify-between">
        <a href="#" className="text-[#1c1917] font-semibold text-lg font-sans">
          Ezinne Kalu
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#78716c] hover:text-[#1c1917] text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#newsletter"
            className="hidden sm:inline-block border border-[#e8e3db] text-[#78716c] hover:border-accent hover:text-accent px-4 py-1.5 rounded-full text-sm transition-colors"
          >
            Subscribe
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className="block w-5 h-px bg-[#1c1917]" />
            <span className="block w-5 h-px bg-[#1c1917]" />
            <span className="block w-5 h-px bg-[#1c1917]" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[#78716c] hover:text-[#1c1917] text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#newsletter"
            onClick={() => setOpen(false)}
            className="text-accent text-sm"
          >
            Subscribe
          </a>
        </div>
      )}
    </nav>
  );
}
