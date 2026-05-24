import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Results } from "@/components/sections/Results";
import { Pricing } from "@/components/sections/Pricing";
import { Events } from "@/components/sections/Events";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <HowItWorks />
        <Results />
        <Pricing />
        <Events />
        <Faq />
        <FinalCta />
        <ContactForm />
      </main>
      <SiteFooter />
    </>
  );
}
