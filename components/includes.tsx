import { Icon } from "@/components/icons";
import { Accent, Container, Eyebrow, SectionTitle } from "@/components/ui";
import { benefits, includes } from "@/lib/content";

export function Includes() {
  const [featured, ...rest] = includes;

  return (
    <section id="incluye" className="px-4 py-20 sm:px-8 md:py-35">
      <Container className="flex flex-col gap-14">
        <div className="flex flex-col gap-7">
          <Eyebrow>04 / Qué incluye</Eyebrow>
          <SectionTitle>
            Todo lo que <Accent className="text-accent">recibes.</Accent>
          </SectionTitle>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <li className="sm:col-span-2">
            <article className="flex h-full min-h-[280px] flex-col justify-between gap-8 rounded-3xl bg-accent p-8 text-ink transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <Icon name={featured.icon} strokeWidth={1.4} className="size-11" />
                <span className="label-mono text-xs">01</span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-display text-[clamp(30px,3vw,44px)] leading-[0.95] tracking-[-0.03em]">
                  {featured.title}
                </h3>
                <p className="max-w-[480px] text-[17px] leading-[1.55] text-on-accent">{featured.text}</p>
              </div>
            </article>
          </li>

          {rest.map((item, i) => (
            <li key={item.title}>
              <article className="flex h-full min-h-[260px] flex-col justify-between gap-8 rounded-3xl border border-line bg-ink-2 p-8 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <Icon name={item.icon} strokeWidth={1.4} className="size-9 text-accent" />
                  <span className="label-mono text-xs text-muted">{String(i + 2).padStart(2, "0")}</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-2xl leading-[1.15] font-bold tracking-[-0.02em]">{item.title}</h3>
                  <p className="text-base leading-[1.55] text-muted">{item.text}</p>
                </div>
              </article>
            </li>
          ))}

          <li className="col-span-full">
            <article className="flex flex-col gap-7 rounded-3xl border border-line bg-ink-2 p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Icon name="tag" strokeWidth={1.4} className="size-9 text-accent" />
                  <h3 className="text-2xl leading-[1.15] font-bold tracking-[-0.02em]">
                    Beneficios exclusivos para alumnos
                  </h3>
                </div>
                <span className="label-mono text-xs text-muted">
                  {String(includes.length + 1).padStart(2, "0")}
                </span>
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
          </li>
        </ul>
      </Container>
    </section>
  );
}
