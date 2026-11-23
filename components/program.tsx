import { Icon, type IconName } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { Accent, Container, SectionTitle } from "@/components/ui";
import { classes, site } from "@/lib/content";

const schedule: { label: string; value: string; icon: IconName }[] = [
  { label: "Inicio", value: site.startLabel, icon: "calendar" },
  { label: "Días", value: site.days, icon: "repeat" },
  { label: "Hora", value: site.time, icon: "clock" },
  { label: "Formato", value: "En vivo + grabaciones", icon: "live" },
];

export function Program() {
  return (
    <section id="programa" className="px-4 py-20 sm:px-8 md:py-35">
      <Container className="flex flex-col gap-14">
        <div className="grid items-end gap-12 lg:grid-cols-[1.4fr_1fr]">
          <SectionTitle>
            Seis clases para empezar <Accent className="text-accent">desde 0.</Accent>
          </SectionTitle>
          <Reveal as="p" delay={150} className="text-lg leading-relaxed text-muted-2">
            Aprenderás todo sobre el mundo de las inversiones en acciones, criptomonedas, trading,
            cómo crear un negocio desde 0 y cómo tener la mentalidad correcta de inversión.
          </Reveal>
        </div>

        <Reveal
          as="dl"
          className="grid gap-px overflow-hidden rounded-[20px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
        >
          {schedule.map((item) => (
            <div key={item.label} className="flex items-center gap-4 bg-ink px-6 py-5.5">
              <Icon name={item.icon} strokeWidth={1.6} className="size-6 flex-none text-accent" />
              <div className="flex flex-col gap-1">
                <dt className="label-mono text-[11px] text-muted">{item.label}</dt>
                <dd className="text-[17px] font-semibold">{item.value}</dd>
              </div>
            </div>
          ))}
        </Reveal>

        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((item, i) => (
            <Reveal as="li" key={item.n} delay={(i % 3) * 90}>
              <article className="card-lift flex h-full min-h-[300px] flex-col gap-6 rounded-[22px] border border-line bg-ink-2 p-7">
                <div className="label-mono flex items-center justify-between gap-3 text-xs">
                  <span className="text-accent">Clase {item.n}</span>
                  <time
                    dateTime={item.dateTime}
                    className="rounded-full border border-line px-2.5 py-1.5 text-muted"
                  >
                    {item.date}
                  </time>
                </div>
                <Icon name={item.icon} strokeWidth={1.4} className="size-10 text-accent" />
                <h3 className="mt-auto text-[26px] leading-[1.12] font-bold tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="label-mono text-[11px] text-muted">{item.tag}</p>
              </article>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
