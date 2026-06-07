import { useEffect, useState } from "react";

function getRemaining(target: number) {
  const diff = Math.max(0, target - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s };
}

export function Countdown({ target }: { target: Date }) {
  const t = target.getTime();
  const [time, setTime] = useState(() => getRemaining(t));

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining(t)), 1000);
    return () => clearInterval(id);
  }, [t]);

  const blocks = [
    { v: time.d, l: "Dias" },
    { v: time.h, l: "Horas" },
    { v: time.m, l: "Min" },
    { v: time.s, l: "Seg" },
  ];

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      {blocks.map((b, i) => (
        <div key={b.l} className="flex items-center gap-2 sm:gap-3">
          <div className="flex flex-col items-center justify-center rounded-2xl border border-gold/30 bg-white/10 backdrop-blur-xl shadow-[inset_0_1px_0_oklch(1_0_0/0.15)] px-3 sm:px-5 py-3 sm:py-4 min-w-[64px] sm:min-w-[84px]">
            <span className="font-display text-3xl sm:text-5xl text-white leading-none tabular-nums">
              {String(b.v).padStart(2, "0")}
            </span>
            <span className="mt-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-accent-gold">
              {b.l}
            </span>
          </div>
          {i < blocks.length - 1 && (
            <span className="text-accent-gold/60 font-display text-2xl sm:text-3xl">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
