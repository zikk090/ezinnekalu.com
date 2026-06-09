import { navLinks } from "@/lib/nav-links";

export function Footer() {
  return (
    <footer className="bg-background border-t border-[#e8e3db] py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 text-center sm:text-left">
          <div className="text-[#1c1917] font-semibold">Ezinne Kalu</div>

          <div className="flex justify-center gap-6">
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

          <div className="sm:text-right text-[#78716c] text-sm">
            © 2026 · Built with intention
          </div>
        </div>
      </div>
    </footer>
  );
}
