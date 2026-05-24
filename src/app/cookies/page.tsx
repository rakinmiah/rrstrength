import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";
import { contact } from "@/content/navigation";

export const metadata: Metadata = {
  title: "Cookie Policy — RR Strength",
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <LegalShell title="Cookie Policy" updated="May 2026">
      <p>
        This site is built to be light on cookies. We do not use analytics,
        advertising, or tracking cookies, and there is no third-party tracking
        embedded in the page.
      </p>

      <h2>What we use</h2>
      <p>
        Only strictly necessary technology required for the site to function and
        to deliver your form submission securely. Because we set no non-essential
        cookies, there is no cookie consent banner to accept.
      </p>

      <h2>Third parties</h2>
      <p>
        Form submissions are sent via our email provider, Resend. Links to
        Instagram open that platform in a new tab; once there, that
        platform&apos;s own cookie and privacy policies apply.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about cookies: <a href={contact.emailHref}>{contact.email}</a>.
      </p>
    </LegalShell>
  );
}
