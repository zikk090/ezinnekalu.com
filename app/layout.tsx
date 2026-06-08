import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Ezinne Kalu — Application Security Engineer, Researcher, Builder",
  description:
    "I help organizations find security weaknesses before attackers do, build products that solve real problems, and teach people how modern security actually works.",
  openGraph: {
    title: "Ezinne Kalu",
    description: "Application Security Engineer, Researcher, Builder, and Speaker.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
