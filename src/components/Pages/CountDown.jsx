import { useEffect, useState } from "react";
import { WEDDING_DATE } from "../../components/Pages/Wedding";

export default function Countdown() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

console.log("Countdown rendered");
console.log("Wedding Date:", WEDDING_DATE);
console.log("Now:", now);
console.log("Difference:", WEDDING_DATE.getTime() - now);
const diff = WEDDING_DATE.getTime() - now;

console.log("Diff:", diff);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  const items = [
    { desktop: "Days", mobile: "Days", v: d },
    { desktop: "Hours", mobile: "Hrs", v: h },
    { desktop: "Minutes", mobile: "Min", v: m },
    { desktop: "Seconds", mobile: "Sec", v: s },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 w-full max-w-2xl">
      {items.map((it) => (
        <div
          key={it.desktop}
          className="w-full rounded-xl border border-[var(--gold)]/40 bg-white/5 backdrop-blur-xl px-3 py-4 sm:py-6 text-center"
        >
          <div className="text-3xl sm:text-5xl font-light text-[var(--gold)] font-display">
            {String(it.v).padStart(2, "0")}
          </div>

        <div className="mt-1 text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.3em] uppercase text-white/70">
          <span className="sm:hidden">{it.mobile}</span>
          <span className="hidden sm:inline">{it.desktop}</span>
        </div>
        </div>
      ))}
    </div>
  );
}