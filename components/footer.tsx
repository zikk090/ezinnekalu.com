import { navLinks } from "@/lib/nav-links";

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 text-center sm:text-left">
          <div className="text-white font-semibold">Ezinne Kalu</div>

          <div className="flex justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-neutral-500 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="sm:text-right text-neutral-500 text-sm">
            © 2026 · Built with intention
          </div>
        </div>
      </div>
    </footer>
  );
}
