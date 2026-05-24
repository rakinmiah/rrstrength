import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";
import { contact } from "@/content/navigation";

export const metadata: Metadata = {
  title: "Terms — RR Strength",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms" updated="May 2026">
      <p>
        These terms cover the use of this website and coaching services provided
        by RR Strength. By enquiring or training with us, you agree to them.
      </p>

      <h2>Coaching &amp; the free session</h2>
      <p>
        Your first session is offered free of charge. Coaching is tailored to
        you and delivered in-person at PureGym Burgess Hill, online, or as a
        hybrid of both. Programmes are personal to you and not for resale or
        redistribution.
      </p>

      <h2>Cancellations</h2>
      <p>
        Cancellations should be made at least 24 hours before a scheduled
        session. Sessions cancelled with less than 24 hours&apos; notice may be
        charged in full.
      </p>

      <h2>Sessions &amp; late arrivals</h2>
      <p>
        Each session is 1 to 1.25 hours in length. Sessions will not be extended
        to make up for lateness or interruptions caused by the client, unless
        time allows.
      </p>

      <h2>Payments &amp; the money-back guarantee</h2>
      <p>
        Fees are as shown on the pricing section of this site. Where a
        money-back guarantee is offered, its specific terms will be confirmed
        with you in writing before you commit.
      </p>

      <h2>Health &amp; safety</h2>
      <p>
        You confirm that the health information you provide is accurate and that
        you have sought medical advice where appropriate. Training carries
        inherent risks; you take part voluntarily.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={contact.emailHref}>{contact.email}</a>{" "}
        or {contact.phone}.
      </p>
    </LegalShell>
  );
}
