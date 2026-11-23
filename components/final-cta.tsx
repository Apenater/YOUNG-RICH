import { Reveal } from "@/components/motion";
import { Accent, ButtonLink } from "@/components/ui";
import { site } from "@/lib/content";

export function FinalCta() {
  return (
    <section className="bg-accent px-4 py-20 text-ink sm:px-8 md:py-30">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center gap-8 text-center">
        <Reveal as="p" className="label-mono text-xs">
          Inicio {site.startLabel}
        </Reveal>
        <Reveal variant="blur" delay={80}>
          <h2 className="font-display text-[clamp(44px,7vw,108px)] leading-[0.9] tracking-[-0.035em]">
            ¿Listo para ser <Accent>young &amp; rich?</Accent>
          </h2>
        </Reveal>
        <Reveal as="p" delay={200} className="max-w-[560px] text-[19px] leading-[1.55] text-on-accent">
          Seis clases para aprender a invertir, emprender y pensar con la mentalidad correcta.
        </Reveal>
        <Reveal delay={320}>
          <ButtonLink href="#ticket" variant="ink" size="lg" arrow>
            Reservar mi cupo
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
