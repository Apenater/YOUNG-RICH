import { Countdown } from "@/components/countdown";
import { Icon } from "@/components/icons";
import { Accent, ButtonLink, Container, Eyebrow, SectionTitle } from "@/components/ui";
import { site, ticketChecklist } from "@/lib/content";

export function Pricing() {
  return (
    <section id="ticket" className="bg-paper px-4 py-20 text-ink sm:px-8 md:py-35">
      <Container className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col gap-8">
          <Eyebrow tone="light">05 / Tu cupo</Eyebrow>
          <SectionTitle>
            Asegura tu <Accent>lugar.</Accent>
          </SectionTitle>
          <p className="max-w-[500px] text-lg leading-relaxed text-body">
            Solo hay {site.seats} cupos disponibles. Las clases inician el lunes {site.startLabel} a
            las {site.time}.
          </p>

          <div className="flex flex-col gap-3.5">
            <span className="label-mono text-xs text-subtle">Faltan para la primera clase</span>
            <Countdown target={site.startISO} />
          </div>

          <div className="flex max-w-[520px] flex-col gap-3.5">
            <div className="label-mono flex justify-between text-xs text-subtle">
              <span>Cupos de esta edición</span>
              <span className="text-ink">{site.seats}</span>
            </div>
            <div aria-hidden="true" className="grid grid-cols-[repeat(25,minmax(0,1fr))] gap-1.5">
              {Array.from({ length: site.seats }, (_, i) => (
                <span key={i} className="aspect-square rounded-full border-[1.5px] border-ink" />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-7 rounded-[32px] bg-ink p-8 text-paper shadow-[0_30px_80px_rgb(11_12_10/0.25)] sm:p-10">
          <div className="label-mono flex items-center justify-between gap-3 text-xs text-muted">
            <span>Ticket · Young &amp; Rich</span>
            <span className="inline-flex items-center gap-2 text-paper">
              <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
              {site.seats} cupos
            </span>
          </div>
          <div className="flex flex-wrap items-end gap-4">
            <span className="font-display text-[clamp(88px,10vw,140px)] leading-[0.82] tracking-[-0.05em] [font-stretch:112%]">
              {site.price}
            </span>
            <span className="pb-2 text-base leading-snug text-muted">
              Acceso completo
              <br />
              al programa
            </span>
          </div>
          <ul className="flex flex-col gap-3.5 border-t border-line pt-6">
            {ticketChecklist.map((item) => (
              <li key={item} className="flex items-center gap-3 text-base">
                <Icon name="check" strokeWidth={2} className="size-5 flex-none text-accent" />
                {item}
              </li>
            ))}
          </ul>
          <ButtonLink href={site.links.checkout} size="lg" arrow className="w-full">
            Reservar mi cupo
          </ButtonLink>
          <a
            href={site.links.whatsapp}
            className="self-center text-[15px] text-muted-2 underline underline-offset-4 transition-colors hover:text-paper"
          >
            ¿Tienes dudas? Escríbenos por WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
