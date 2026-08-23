import type { Metadata } from "next";
import { Inter, Saira_Condensed } from "next/font/google";
import { buildJsonLd } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const saira = Saira_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-saira",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RR Strength — Strength Coaching in Burgess Hill & Online",
  description:
    "One-to-one and online strength coaching from a nationally competed, BSc-qualified coach. Your first in-person session is free.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title: "RR Strength — Strength Coaching in Burgess Hill & Online",
    description:
      "Get stronger with a nationally competed, BSc-qualified coach. Your first in-person session is free, and coaching is backed by a money-back guarantee.",
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "RR Strength",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${saira.variable}`}>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only rounded-md bg-brick px-4 py-2 font-semibold text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[500]"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
        />
      </body>
    </html>
  );
}
