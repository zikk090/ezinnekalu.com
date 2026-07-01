import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aurora — Privacy Policy",
  description: "Privacy policy for Aurora, the AI alarm and morning-briefing app.",
};

export default function AuroraPrivacyPage() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-[#e8e3db] py-6">
        <div className="max-w-2xl mx-auto px-6">
          <a href="https://ezinnekalu.com" className="text-[#78716c] hover:text-[#1c1917] text-sm transition-colors font-sans">
            ← ezinnekalu.com
          </a>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-6 py-16">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4 font-sans">
          Aurora
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1c1917]">
          Privacy Policy
        </h1>
        <p className="text-[#78716c] text-sm mt-3 font-sans">Last updated: July 1, 2026</p>

        <div className="mt-10 space-y-8 text-[#44403c] leading-relaxed font-sans">
          <p>
            Aurora is a personal alarm and morning-briefing app built by Ezinne Kalu. This
            policy explains what data Aurora accesses, why, and where it goes.
          </p>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1c1917] mb-3">
              What Aurora accesses
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Calendar events</strong> (read-only) — to show today&apos;s schedule
                and include it in your morning briefing.
              </li>
              <li>
                <strong>Reminders</strong> (read and write) — to show your reminders, mark
                them complete, and create new reminders when you ask Aurora to schedule
                something.
              </li>
              <li>
                <strong>Your tasks</strong> — created inside Aurora, stored only on your
                device.
              </li>
              <li>
                <strong>Location</strong> (only while using the app) — used solely to fetch
                today&apos;s weather for your briefing from Open-Meteo (a free weather
                service, no account). Requested only when you first generate a briefing, not
                at launch. Your coordinates are sent to Open-Meteo to get a forecast and are
                not stored by Aurora or shared with anyone else.
              </li>
              <li>
                <strong>App settings</strong> (scheduling preference, display name, a couple
                of feature toggles) — stored locally on your device only.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1c1917] mb-3">
              What leaves your device
            </h2>
            <p>
              When you tap &quot;Generate Briefing&quot; or use a feature that asks
              Aurora&apos;s AI to do something (like breaking a task into steps, or
              detecting a time in something you typed), the relevant text — your calendar
              events, reminders, and tasks for that day — is sent to{" "}
              <strong>Anthropic</strong> (the company behind Claude, the AI model Aurora
              uses) to generate your briefing or process that specific request. This only
              happens when you actively trigger it — Aurora does not send your data
              anywhere in the background.
            </p>
            <p className="mt-4">
              Anthropic processes this text to generate a response and does not use it to
              train their models (per Anthropic&apos;s API terms). Aurora does not sell,
              share, or use your data for advertising, and does not use any analytics or
              tracking SDKs.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1c1917] mb-3">
              Where your data is stored
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Tasks, activity history, and settings are stored{" "}
                <strong>only on your device</strong>, using Apple&apos;s on-device data
                storage (SwiftData) — nothing is synced to a server Aurora controls,
                because Aurora doesn&apos;t have one.
              </li>
              <li>
                A cached copy of your most recent generated briefing is stored locally so
                it&apos;s available instantly without regenerating.
              </li>
              <li>
                Calendar and Reminders data stays managed by Apple&apos;s
                Calendar/Reminders apps — Aurora only reads/writes through Apple&apos;s
                standard EventKit permission system, the same as any app you&apos;ve
                granted Calendar/Reminders access to.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1c1917] mb-3">
              Your choices
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                You can revoke Calendar/Reminders access at any time in iOS Settings →
                Privacy &amp; Security.
              </li>
              <li>
                You can delete Aurora at any time, which removes all locally-stored data
                (tasks, cached briefings, settings).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1c1917] mb-3">
              Contact
            </h2>
            <p>
              Questions about this policy:{" "}
              <a href="mailto:contact@ezinnekalu.com" className="text-accent hover:underline">
                contact@ezinnekalu.com
              </a>
            </p>
          </section>
        </div>
      </article>

      <footer className="border-t border-[#e8e3db] py-8">
        <div className="max-w-2xl mx-auto px-6 text-center text-[#78716c] text-sm font-sans">
          © 2026 Ezinne Kalu
        </div>
      </footer>
    </main>
  );
}
