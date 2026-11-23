import { EdenBadge } from "@/components/eden-badge";
import { EdenCredit } from "@/components/eden-credit";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { Includes } from "@/components/includes";
import { Manifesto } from "@/components/manifesto";
import { Mentors } from "@/components/mentors";
import { Partners } from "@/components/partners";
import { Pricing } from "@/components/pricing";
import { Program } from "@/components/program";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Ticker } from "@/components/ticker";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Ticker />
        <Manifesto />
        <Program />
        <Mentors />
        <Includes />
        <Partners />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <EdenCredit />
      <EdenBadge />
    </>
  );
}
