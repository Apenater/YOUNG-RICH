"use client";

import { useSyncExternalStore } from "react";

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

  return (
    <div role="timer" aria-label="Tiempo para la primera clase" className="grid max-w-[520px] grid-cols-4 gap-2.5">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center gap-1.5 rounded-2xl bg-ink px-3 py-4.5">
          <span className="font-display text-[clamp(28px,3.4vw,46px)] leading-none tracking-[-0.03em] text-accent tabular-nums [font-stretch:112%]">
            {unit.value}
          </span>
          <span className="label-mono text-[11px] text-muted">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}
