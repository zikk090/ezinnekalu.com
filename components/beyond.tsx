"use client";
import { useInView } from "@/hooks/use-in-view";

const items = [
  { icon: "♟", label: "Chess" },
  { icon: "📚", label: "Reading" },
  { icon: "🏋🏾", label: "Fitness" },
  { icon: "✈️", label: "Travel" },
  { icon: "💡", label: "Startups" },
  { icon: "🛠", label: "Building useful things" },
];

export function Beyond() {
  const { ref, inView } = useInView();

  return (
    <section id="beyond" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-300 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4">
            Life
          </p>
          <h2 className="text-4xl font-bold">Beyond Security</h2>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {items.map((item) => (
              <div
                key={item.label}
                className="bg-card rounded-xl p-6 flex items-center gap-3 text-neutral-300"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          <p className="mt-12 text-neutral-500 text-lg italic max-w-2xl">
            Curiosity compounds. The best opportunities usually come from
            following interests long enough to become uncommon expertise.
          </p>
        </div>
      </div>
    </section>
  );
}
