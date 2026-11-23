import { Accent, ButtonLink, Container } from "@/components/ui";
import { Words } from "@/components/words";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="bg-grid -mt-20 px-4 pt-34 pb-18 sm:px-8 md:pt-42 md:pb-24">
      <Container className="grid items-center gap-16 lg:grid-cols-[1.5fr_1fr]">
        <div className="flex flex-col gap-8">
          <h1 className="font-display text-[clamp(48px,6.6vw,100px)] leading-[0.9] tracking-[-0.03em]">
            <Words text="La riqueza empieza en tu" />{" "}
            <Accent className="text-accent">
              <Words text="mentalidad." start={5} />
            </Accent>
          </h1>
          <p
            className="max-w-[540px] text-[19px] leading-[1.55] text-muted-2 motion-safe:animate-rise"
            style={{ animationDelay: "450ms" }}
          >
            Un programa de seis sesiones creado por dos jóvenes salvadoreños para compartir lo que
            saben de finanzas, inversiones y negocios. Acciones, cripto, trading y emprendimiento,
            explicados desde 0.
          </p>
          <div
            className="flex flex-wrap gap-3 motion-safe:animate-rise"
            style={{ animationDelay: "570ms" }}
          >
            <ButtonLink href="#ticket" arrow>
              Reservar mi cupo
            </ButtonLink>
            <ButtonLink href="#programa" variant="outline" className="font-semibold">
              Ver las 6 clases
            </ButtonLink>
          </div>
        </div>
        <div className="motion-safe:animate-ticket-in" style={{ animationDelay: "500ms" }}>
          <Ticket />
        </div>
      </Container>
    </section>
  );
}

function Perforation() {
  return (
    <div aria-hidden="true" className="relative -mx-7.5 my-6.5 border-t-2 border-dashed border-ticket-line">
      <span className="absolute -top-4 -left-[15px] size-[30px] rounded-full bg-ink" />
      <span className="absolute -top-4 -right-[15px] size-[30px] rounded-full bg-ink" />
    </div>
  );
}

function Ticket() {
  const facts = [
    { label: "Inicio", value: "04 Ene" },
    { label: "Horario", value: "7:45 PM" },
    { label: "Días", value: "Lun · Jue" },
    { label: "Sesiones", value: "06" },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[460px] rotate-[2.5deg] rounded-3xl bg-paper p-7.5 text-ink shadow-[0_40px_90px_rgb(0_0_0/0.5)] motion-safe:animate-float">
      <div className="label-mono text-xs text-subtle">
        <span>Ticket de acceso</span>
      </div>
      <p className="font-display mt-5 text-[32px] leading-[0.95] tracking-[-0.03em] whitespace-nowrap sm:text-[40px]">
        Young <span className="font-accent">&amp;</span> Rich
      </p>
      <p className="mt-2.5 text-[15px] text-subtle">Finanzas · Inversiones · Negocios</p>

      <Perforation />

      <dl className="grid grid-cols-2 gap-x-4 gap-y-5.5">
        {facts.map((fact) => (
          <div key={fact.label} className="flex flex-col gap-1.5">
            <dt className="label-mono text-[11px] text-subtle">{fact.label}</dt>
            <dd className="font-display text-[24px] leading-none tracking-[-0.02em] whitespace-nowrap [font-stretch:112%] sm:text-[30px]">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>

      <Perforation />

      <div className="flex items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="label-mono text-[11px] text-subtle">Ticket</span>
          <span className="font-display text-[72px] leading-[0.85] tracking-[-0.04em] [font-stretch:112%]">
            {site.price}
          </span>
        </div>
        <div aria-hidden="true" className="bg-barcode h-[52px] w-32" />
      </div>
    </div>
  );
}
