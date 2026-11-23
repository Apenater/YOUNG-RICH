import { Countdown } from "@/components/countdown";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { Accent, ButtonLink, Container, SectionTitle } from "@/components/ui";
import { site, ticketChecklist } from "@/lib/content";

export function Pricing() {
  return (
    <section id="ticket" className="bg-paper px-4 py-20 text-ink sm:px-8 md:py-35">
      <Container className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col gap-8">
          <SectionTitle>
            Asegura tu <Accent>lugar.</Accent>
          </SectionTitle>
          <Reveal as="p" delay={120} className="max-w-[500px] text-lg leading-relaxed text-body">
            Las clases inician el lunes {site.startLabel} a las {site.time}.
          </Reveal>

          <Reveal delay={200} className="flex flex-col gap-4">
            <span className="label-mono text-xs text-subtle">Faltan para la primera clase</span>
            <Countdown target={site.startISO} />
          </Reveal>
        </div>

        {/*
          Tarjeta de precio. En tablet (md) se reparte en dos columnas: precio y botón a la
          izquierda, lista a la derecha. En móvil y en escritorio va en una sola columna.
        */}
        <Reveal
          delay={150}
          className="flex flex-col gap-7 rounded-[32px] bg-ink p-8 text-paper shadow-[0_30px_80px_rgb(11_12_10/0.25)] sm:p-10 md:grid md:grid-cols-2 md:items-center md:gap-x-12 lg:flex lg:flex-col lg:items-stretch"
        >
          <div className="flex flex-wrap items-end gap-4 md:col-start-1 md:row-start-1">
            <span className="font-display text-[clamp(88px,10vw,140px)] leading-[0.82] tracking-[-0.05em] [font-stretch:112%]">
              {site.price}
            </span>
            <span className="pb-2 text-base leading-snug text-muted">
              Acceso completo
              <br />
              al programa
            </span>
          </div>

          <ul className="flex flex-col gap-3.5 border-t border-line pt-6 md:col-start-2 md:row-span-2 md:row-start-1 md:border-t-0 md:border-l md:pt-0 md:pl-12 lg:border-t lg:border-l-0 lg:pt-6 lg:pl-0">
            {ticketChecklist.map((item) => (
              <li key={item} className="flex items-center gap-3 text-base">
                <Icon name="check" strokeWidth={2} className="size-5 flex-none text-accent" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-5 md:col-start-1 md:row-start-2">
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
        </Reveal>
      </Container>
    </section>
  );
}
