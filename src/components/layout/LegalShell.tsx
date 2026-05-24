import Link from "next/link";
import Image from "next/image";
import { SiteFooter } from "@/components/layout/SiteFooter";

export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto flex h-18 max-w-[1240px] items-center px-5 sm:px-8 lg:px-10">
          <Link href="/" aria-label="RR Strength — home" className="inline-flex">
            <Image
              src="/brand/rr-logo-white.png"
              alt="RR Strength"
              width={5427}
              height={961}
              className="h-7 w-auto"
            />
          </Link>
        </div>
      </header>
      <main id="main" className="mx-auto max-w-[760px] px-5 py-16 sm:px-8">
        <h1 className="font-display text-h2 font-bold uppercase text-fg">
          {title}
        </h1>
        <p className="mt-2 text-sm text-muted">Last updated: {updated}</p>
        <div className="legal-prose mt-8">{children}</div>
        <p className="mt-12 rounded-md border border-line bg-surface p-4 text-sm text-muted">
          This document is a working draft and requires review by a qualified
          adviser before launch.
        </p>
        <p className="mt-6">
          <Link href="/" className="text-link underline-offset-4 hover:underline">
            ← Back to home
          </Link>
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
