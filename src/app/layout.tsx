import type { Metadata } from "next";
import { Inter, Saira_Condensed } from "next/font/google";
import { buildJsonLd } from "@/lib/jsonld";
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
    "One-to-one and online strength coaching from a nationally-competed, BSc-qualified coach. Your first session is free — or your money back.",
  metadataBase: new URL("https://rrstrength.co.uk"),
  openGraph: {
    title: "RR Strength — Strength Coaching in Burgess Hill & Online",
    description:
      "Get stronger with a nationally-competed, BSc-qualified coach. Your first session is free — or your money back.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${saira.variable}`}>
      <body className="min-h-dvh">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
        />
      </body>
    </html>
  );
}
