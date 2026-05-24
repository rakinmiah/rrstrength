import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";
import { contact } from "@/content/navigation";

export const metadata: Metadata = {
  title: "Privacy Policy — RR Strength",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="May 2026">
      <p>
        This policy explains how RR Strength (&ldquo;we&rdquo;, &ldquo;I&rdquo;)
        collects and uses your personal information when you use this website
        and enquire about coaching. We are the data controller for the
        information you provide.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Contact details</strong> — your name, email and mobile number.
        </li>
        <li>
          <strong>Coaching intake information</strong> — goals, training
          history, scheduling preferences, and lifestyle details you choose to
          share.
        </li>
        <li>
          <strong>Health information (special category data)</strong> — details
          such as injuries, medical conditions and medications, which you
          provide so we can coach you safely.
        </li>
      </ul>

      <h2>Why we use it and our legal basis</h2>
      <p>
        We use your contact and intake details to respond to your enquiry,
        arrange your free session, and provide coaching. Our legal basis is the
        performance of a contract and our legitimate interest in responding to
        enquiries. For health information, our legal basis is your{" "}
        <strong>explicit consent</strong>, given via the consent checkbox on the
        intake form. You can withdraw consent at any time by contacting us.
      </p>

      <h2>How it is handled</h2>
      <p>
        Form submissions are delivered by email to a single controlled inbox
        using our email provider, Resend, over an encrypted connection. We do
        not use website analytics or tracking cookies, and we do not sell or
        share your information with third parties for marketing.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiry and coaching information only as long as needed to
        provide our services and meet legal obligations, after which it is
        deleted.
      </p>

      <h2>Your rights</h2>
      <p>
        Under UK GDPR you have the right to access, correct, delete, or restrict
        the use of your information, and to withdraw consent. To exercise any of
        these, contact{" "}
        <a href={contact.emailHref}>{contact.email}</a>. You also have the right
        to complain to the Information Commissioner&apos;s Office (ico.org.uk).
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy: <a href={contact.emailHref}>{contact.email}</a>{" "}
        or {contact.phone}.
      </p>
    </LegalShell>
  );
}
