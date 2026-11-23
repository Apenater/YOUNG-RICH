/**
 * Divide un texto en palabras que entran una tras otra (desenfoque + caída).
 * Es para titulares que aparecen al cargar la página; no necesita JavaScript.
 * `start` desplaza el escalonado cuando el titular se arma con varios <Words>.
 */
export function Words({ text, start = 0, step = 60 }: { text: string; start?: number; step?: number }) {
  const words = text.split(" ");

  return words.map((word, i) => (
    <span key={`${word}-${i}`}>
      <span
        className="inline-block motion-safe:animate-blur-in"
        style={{ animationDelay: `${(start + i) * step}ms` }}
      >
        {word}
      </span>
      {i < words.length - 1 ? " " : null}
    </span>
  ));
}
