import { Icon } from "@/components/icons";
import { Accent, Container, Eyebrow } from "@/components/ui";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="px-4 py-20 sm:px-8 md:py-35">
      <Container className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col gap-7">
          <Eyebrow>06 / Preguntas</Eyebrow>
          <h2 className="font-display text-[clamp(40px,5vw,72px)] leading-[0.92] tracking-[-0.03em]">
            Antes de <Accent className="text-accent">entrar.</Accent>
          </h2>
          <p className="max-w-[380px] text-[17px] leading-relaxed text-muted">
            Lo que más nos preguntan sobre el programa.
          </p>
        </div>

        {/* <details name="faq"> hace un acordeón exclusivo nativo: abrir una cierra la otra. */}
        <div className="border-t border-line">
          {faqs.map((faq, i) => (
            <details key={faq.q} name="faq" open={i === 0} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6.5">
                <h3 className="text-[21px] font-semibold tracking-[-0.01em]">{faq.q}</h3>
                <span className="grid size-11 flex-none place-items-center rounded-full border border-line-2 transition-transform duration-300 group-open:rotate-45">
                  <Icon name="plus" strokeWidth={1.8} className="size-[18px]" />
                </span>
              </summary>
              <p className="mb-7 max-w-[620px] text-[17px] leading-relaxed text-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
