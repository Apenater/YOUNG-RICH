import { Spark } from "@/components/icons";
import { topics } from "@/lib/content";

/** Cinta animada con los temas del programa. La lista se repite para que el bucle no tenga cortes. */
export function Ticker() {
  const items = [...topics, ...topics, ...topics, ...topics];

  return (
    <div className="overflow-hidden bg-accent py-5 text-ink">
      <p className="sr-only">Temas del programa: {topics.join(", ")}.</p>
      <div
        aria-hidden="true"
        className="flex w-max motion-safe:animate-marquee hover:[animation-play-state:paused]"
      >
        {items.map((topic, i) => (
          <span
            key={i}
            className="font-display inline-flex items-center gap-8 whitespace-nowrap pr-8 text-[28px] leading-none tracking-[-0.02em]"
          >
            {topic}
            <Spark className="size-[18px]" />
          </span>
        ))}
      </div>
    </div>
  );
}
