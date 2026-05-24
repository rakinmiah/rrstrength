import Link from "next/link";
import Image from "next/image";
import { navLinks, contact } from "@/content/navigation";

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export function SiteFooter() {
  const year = new Date().getFullYear(); // auto-derived — fixes old "© Year" defect

  return (
    <footer
      role="contentinfo"
      className="border-t border-line-light bg-bone text-ink-fg"
    >
      <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/brand/rr-logo-white.png"
              alt="RR Strength"
              width={5427}
              height={961}
              className="h-7 w-auto [filter:brightness(0)]"
            />
            <p className="mt-3 max-w-56 text-sm text-ink-muted">
              Strength coaching · Burgess Hill &amp; online
            </p>
          </div>

          {/* Contact */}
          <FooterCol title="Contact">
            <a className="footer-link" href={contact.phoneHref}>
              {contact.phone}
            </a>
            <a className="footer-link break-all" href={contact.emailHref}>
              {contact.email}
            </a>
            <a
              className="footer-link"
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.instagramHandle}
            </a>
          </FooterCol>

          {/* Navigate (root-relative so they work from legal pages too) */}
          <FooterCol title="Navigate">
            {navLinks.map((l) => (
              <Link key={l.href} className="footer-link" href={`/${l.href}`}>
                {l.label}
              </Link>
            ))}
          </FooterCol>

          {/* Legal */}
          <FooterCol title="Legal">
            {legal.map((l) => (
              <Link key={l.href} className="footer-link" href={l.href}>
                {l.label}
              </Link>
            ))}
          </FooterCol>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line-light pt-6 text-sm text-ink-muted sm:flex-row sm:justify-between">
          <p>© {year} RR Strength. All rights reserved.</p>
          <p>{contact.location}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <nav aria-label={title}>
      <p className="font-sans text-eyebrow font-semibold uppercase text-ink-muted">
        {title}
      </p>
      <div className="mt-4 flex flex-col gap-3 text-[15px]">{children}</div>
    </nav>
  );
}

