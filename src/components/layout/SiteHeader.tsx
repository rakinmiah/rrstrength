"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  navLinks,
  CTA_LABEL,
  CTA_HREF,
  contact,
} from "@/content/navigation";

function Wordmark() {
  return (
    <Link href="#top" aria-label="RR Strength — home" className="inline-flex">
      <Image
        src="/brand/rr-logo-white.png"
        alt="RR Strength"
        width={5427}
        height={961}
        priority
        className="h-6 w-auto sm:h-7"
      />
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll + close on Escape while the drawer is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
      role="banner"
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-200 ease-[var(--ease-standard)] ${
        scrolled
          ? "h-14 border-b border-line bg-ink/80 backdrop-blur-md"
          : "h-18 bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex h-full max-w-[1240px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Wordmark />

        {/* Desktop nav links — centred */}
        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex"
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative py-2 text-sm text-fg transition-colors hover:text-link"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA — right */}
        <div className="hidden lg:block">
          <Button href={CTA_HREF} size="sm">
            {CTA_LABEL}
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button href={CTA_HREF} size="sm">
            {CTA_LABEL}
          </Button>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="grid size-12 place-items-center rounded-md text-fg"
          >
            <Menu size={24} strokeWidth={1.75} aria-hidden />
          </button>
        </div>
      </div>
      </header>

      {/* Mobile drawer — sibling of <header> so the header's backdrop-blur
          doesn't trap this fixed overlay inside the header box */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[400] flex flex-col bg-ink/97 px-6 pt-6 backdrop-blur-md lg:hidden"
        >
          <div className="flex items-center justify-between">
            <Wordmark />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid size-12 place-items-center rounded-md text-fg"
            >
              <X size={24} strokeWidth={1.75} aria-hidden />
            </button>
          </div>
          <nav
            aria-label="Mobile"
            className="mt-8 flex flex-col gap-1"
          >
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 font-display text-h3 uppercase text-fg"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8">
            <Button
              href={CTA_HREF}
              size="lg"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              {CTA_LABEL}
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted">
            {contact.instagramHandle} · {contact.phone}
          </p>
        </div>
      )}
    </>
  );
}

