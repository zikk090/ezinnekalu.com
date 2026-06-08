import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { WhoIAm } from "@/components/who-i-am";
import { WhatIDo } from "@/components/what-i-do";
import { VCF } from "@/components/vcf";
import { Timeline } from "@/components/timeline";
import { Projects } from "@/components/projects";
import { Writing } from "@/components/writing";
import { Speaking } from "@/components/speaking";
import { Beyond } from "@/components/beyond";
import { Newsletter } from "@/components/newsletter";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <WhoIAm />
      <WhatIDo />
      <VCF />
      <Timeline />
      <Projects />
      <Writing />
      <Speaking />
      <Beyond />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  );
}
