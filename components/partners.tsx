import Image from "next/image";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { Accent, Container, SectionTitle } from "@/components/ui";
import { partners, type Partner } from "@/lib/content";

export function Partners() {
  return (
    <section id="partners" className="border-t border-line px-4 py-20 sm:px-8 md:py-30">
      <Container className="flex flex-col gap-14">
        <div className="grid items-end gap-12 lg:grid-cols-[1.4fr_1fr]">
          <SectionTitle>
            Nuestros <Accent className="text-accent">partners.</Accent>
          </SectionTitle>
          <Reveal as="p" delay={150} className="text-lg leading-relaxed text-muted-2">
            Plataformas y equipos con los que trabajamos.
          </Reveal>
        </div>

        <ul className="grid gap-5 md:grid-cols-2">
          {partners.map((partner, i) => (
            <PartnerCard key={partner.name} partner={partner} delay={i * 120} />
          ))}
        </ul>
      </Container>
    </section>
  );
}

function PartnerCard({ partner, delay }: { partner: Partner; delay: number }) {
  return (
    <Reveal as="li" delay={delay}>
      <a
        href={partner.href}
        target="_blank"
        rel={partner.sponsored ? "noopener noreferrer sponsored" : "noopener noreferrer"}
        className="group card-lift flex h-full flex-col overflow-hidden rounded-[28px] border border-line bg-ink-2"
      >
        <div className="relative grid h-48 place-items-center overflow-hidden bg-paper text-ink">
          {partner.logo ? (
            <Image
              src={partner.logo}
              alt=""
              fill
              sizes="(min-width: 768px) 600px, 100vw"
              className="object-contain p-12 transition-transform duration-500 ease-soft group-hover:scale-105"
            />
          ) : (
            <span
              aria-hidden="true"
              className="font-display text-[64px] leading-none tracking-[-0.04em] normal-case"
            >
              {partner.wordmark}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-4 p-7">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-2xl font-bold tracking-[-0.02em]">{partner.name}</h3>
            <span className="label-mono rounded-full border border-line-2 px-3 py-1.5 text-[11px] text-accent">
              {partner.tag}
            </span>
          </div>
          <p className="text-base leading-relaxed text-muted">{partner.description}</p>
          <span className="mt-auto inline-flex items-center gap-2 pt-2 text-[15px] font-semibold">
            {partner.cta}
            <Icon
              name="arrowUpRight"
              strokeWidth={2}
              className="size-4 transition-transform duration-300 ease-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
            <span className="sr-only">(se abre en una pestaña nueva)</span>
          </span>
        </div>
      </a>
    </Reveal>
  );
}
