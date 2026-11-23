import Image from "next/image";
import { Accent, Container, Eyebrow, SectionTitle } from "@/components/ui";
import { mentors, type Mentor } from "@/lib/content";

export function Mentors() {
  return (
    <section id="mentores" className="bg-paper px-4 py-20 text-ink sm:px-8 md:py-35">
      <Container className="flex flex-col gap-14">
        <div className="grid items-end gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-7">
            <Eyebrow tone="light">03 / Quiénes somos</Eyebrow>
            <SectionTitle>
              Dos jóvenes <Accent>salvadoreños.</Accent> Una visión.
            </SectionTitle>
          </div>
          <p className="text-lg leading-relaxed text-body">
            Creamos Young &amp; Rich para compartir nuestros conocimientos, experiencias y
            herramientas en el mundo de las finanzas, las inversiones y los negocios.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {mentors.map((mentor) => (
            <MentorCard key={mentor.name} mentor={mentor} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[28px] border border-paper-line bg-paper-2">
      <div className="bg-stripes relative grid aspect-[5/4] place-items-center">
        {mentor.photo ? (
          <Image
            src={mentor.photo}
            alt={mentor.name}
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover"
          />
        ) : (
          <span className="label-mono rounded-full border border-dashed border-[#4a4b45] px-4 py-2.5 text-xs text-muted">
            [ {mentor.photoLabel} ]
          </span>
        )}
        <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
          {mentor.chips.map((chip, i) => (
            <span
              key={chip}
              className={`label-mono rounded-full px-3 py-2 text-[11px] text-ink ${i === 0 ? "bg-accent" : "bg-paper"}`}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3.5 p-8">
        <p className="label-mono text-xs text-subtle">{mentor.role}</p>
        <h3 className="font-display text-[40px] leading-[0.95] tracking-[-0.03em]">{mentor.name}</h3>
        {mentor.bio.map((paragraph) => (
          <p key={paragraph} className="text-[17px] leading-relaxed text-body">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
