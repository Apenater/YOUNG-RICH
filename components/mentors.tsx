import Image from "next/image";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { Accent, Container, SectionTitle } from "@/components/ui";
import { mentors, type Mentor } from "@/lib/content";

export function Mentors() {
  return (
    <section id="mentores" className="bg-paper px-4 py-20 text-ink sm:px-8 md:py-35">
      <Container className="flex flex-col gap-14">
        <div className="grid items-end gap-12 lg:grid-cols-[1.4fr_1fr]">
          <SectionTitle>
            Dos jóvenes <Accent>salvadoreños.</Accent> Una visión.
          </SectionTitle>
          <Reveal as="p" delay={150} className="text-lg leading-relaxed text-body">
            Creamos Young &amp; Rich para compartir nuestros conocimientos, experiencias y
            herramientas en el mundo de las finanzas, las inversiones y los negocios.
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {mentors.map((mentor, i) => (
            <MentorCard key={mentor.name} mentor={mentor} delay={i * 130} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function MentorCard({ mentor, delay }: { mentor: Mentor; delay: number }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="flex flex-col overflow-hidden rounded-[28px] border border-paper-line bg-paper-2"
    >
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
        <ul className="mt-2 flex flex-wrap gap-2.5">
          {mentor.socials.map((social) => (
            <li key={social.href}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-paper-line px-4 text-sm font-semibold text-ink transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-paper"
              >
                <Icon name="music" strokeWidth={1.8} className="size-4" />
                {social.network} · {social.handle}
                <Icon name="arrowUpRight" strokeWidth={2} className="size-3.5" />
                <span className="sr-only">(se abre en una pestaña nueva)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
