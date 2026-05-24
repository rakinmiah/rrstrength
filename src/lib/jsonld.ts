import { faqs } from "@/content/faqs";
import { steps } from "@/content/steps";
import { tiers } from "@/content/pricing";
import { contact } from "@/content/navigation";

const SITE = "https://rrstrength.co.uk";

export function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "HealthClub"],
        "@id": `${SITE}/#business`,
        name: "RR Strength",
        description:
          "One-to-one, online and hybrid strength & powerlifting coaching from a nationally-competed, BSc-qualified coach.",
        url: SITE,
        telephone: "+447565220897",
        email: contact.email,
        areaServed: ["Burgess Hill", "Mid Sussex", "United Kingdom", "Online"],
        sameAs: [contact.instagram],
        priceRange: "££",
        founder: { "@id": `${SITE}/#coach` },
        makesOffer: tiers.map((t) => ({
          "@type": "Offer",
          name: `${t.name} coaching`,
          price: t.price.replace("£", ""),
          priceCurrency: "GBP",
          description: t.blurb,
        })),
      },
      {
        "@type": "Person",
        "@id": `${SITE}/#coach`,
        name: "Rashed Rahman",
        jobTitle: "Strength & Powerlifting Coach",
        worksFor: { "@id": `${SITE}/#business` },
        hasCredential: [
          "Level 3 Personal Trainer",
          "1st-Class BSc Sport & Exercise Science",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "HowTo",
        "@id": `${SITE}/#how`,
        name: "How coaching with RR Strength works",
        step: steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.title,
          text: s.body,
        })),
      },
    ],
  };
}
