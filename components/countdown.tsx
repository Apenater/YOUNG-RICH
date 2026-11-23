"use client";

import { Fragment, useSyncExternalStore } from "react";

function subscribe(onTick: () => void) {
  const id = setInterval(onTick, 1000);
  return () => clearInterval(id);
}

// Segundos enteros: el valor no cambia entre lecturas dentro del mismo segundo.
const getNow = () => Math.floor(Date.now() / 1000);
// En el servidor no hay "ahora": se muestran guiones hasta hidratar.
const getServerNow = () => null;

const pad = (n: number) => String(n).padStart(2, "0");

export function Countdown({ target }: { target: string }) {
  const now = useSyncExternalStore(subscribe, getNow, getServerNow);
  const targetSec = Math.floor(new Date(target).getTime() / 1000);

  let units = [
    { label: "Días", value: "--" },
    { label: "Horas", value: "--" },
    { label: "Min", value: "--" },
    { label: "Seg", value: "--" },
  ];

  if (now !== null) {
    let diff = Math.max(0, targetSec - now);
    const d = Math.floor(diff / 86400);
    diff -= d * 86400;
    const h = Math.floor(diff / 3600);
    diff -= h * 3600;
    const m = Math.floor(diff / 60);
    const s = diff - m * 60;
    units = [
      { label: "Días", value: pad(d) },
      { label: "Horas", value: pad(h) },
      { label: "Min", value: pad(m) },
      { label: "Seg", value: pad(s) },
    ];
  }

  // Un solo panel con dos puntos entre cifras, como un reloj. Las cifras y los dos
  // puntos comparten tamaño para quedar alineados.
  return (
    <div
      role="timer"
      aria-label="Tiempo para la primera clase"
      className="grid w-full max-w-[560px] grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-start rounded-3xl bg-ink px-4 py-6 sm:px-8 sm:py-8"
    >
      {units.map((unit, i) => (
        <Fragment key={unit.label}>
          {i > 0 && (
            <span
              aria-hidden="true"
              className="font-display px-1 text-[clamp(32px,5.2vw,60px)] leading-none text-accent/40 sm:px-2"
            >
              :
            </span>
          )}
          <div className="flex flex-col items-center gap-2.5">
            <span className="font-display text-[clamp(32px,5.2vw,60px)] leading-none tracking-[-0.03em] text-accent tabular-nums [font-stretch:112%]">
              {unit.value}
            </span>
            <span className="label-mono text-[11px] text-muted">{unit.label}</span>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
