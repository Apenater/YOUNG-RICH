import { Icon } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { Accent, Container, SectionTitle } from "@/components/ui";
import { benefits, includes } from "@/lib/content";

export function Includes() {
  const [featured, ...rest] = includes;

  return (
    <section id="incluye" className="px-4 py-20 sm:px-8 md:py-35">
      <Container className="flex flex-col gap-14">
        <SectionTitle>
          Todo lo que <Accent className="text-accent">recibes.</Accent>
        </SectionTitle>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal as="li" className="sm:col-span-2">
            <article className="card-lift flex h-full min-h-[280px] flex-col justify-between gap-8 rounded-3xl bg-accent p-8 text-ink">
              <Icon name={featured.icon} strokeWidth={1.4} className="size-11" />
              <div className="flex flex-col gap-3">
                <h3 className="font-display text-[clamp(30px,3vw,44px)] leading-[0.95] tracking-[-0.03em]">
                  {featured.title}
                </h3>
                <p className="max-w-[480px] text-[17px] leading-[1.55] text-on-accent">{featured.text}</p>
              </div>
            </article>
          </Reveal>

          {rest.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i + 1) * 90}>
              <article className="card-lift flex h-full min-h-[260px] flex-col justify-between gap-8 rounded-3xl border border-line bg-ink-2 p-8">
                <Icon name={item.icon} strokeWidth={1.4} className="size-9 text-accent" />
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-2xl leading-[1.15] font-bold tracking-[-0.02em]">{item.title}</h3>
                  <p className="text-base leading-[1.55] text-muted">{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal as="li" className="col-span-full">
            <article className="flex flex-col gap-7 rounded-3xl border border-line bg-ink-2 p-8">
              <div className="flex items-center gap-4">
                <Icon name="tag" strokeWidth={1.4} className="size-9 text-accent" />
                <h3 className="text-2xl leading-[1.15] font-bold tracking-[-0.02em]">
                  Beneficios exclusivos para alumnos
                </h3>
              </div>
              <ul className="grid gap-px overflow-hidden rounded-2xl bg-line md:grid-cols-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex flex-col gap-2 bg-ink-3 p-6">
                    <span className="label-mono text-[11px] text-accent">Descuento</span>
                    <span className="text-lg font-semibold">{benefit}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </ul>
      </Container>
    </section>
  );
}
