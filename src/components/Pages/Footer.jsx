import { BRIDE, GROOM, HASHTAG, WEDDING_DATE  } from "../Pages/Wedding";

export default function Footer() {
    const formattedDate = WEDDING_DATE.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    });


  return (
    <footer className="bg-[var(--ink)] border-t border-[var(--gold)]/20 py-12 text-center">
      <p className="text-4xl text-[var(--gold)] font-script">{GROOM} &amp; {BRIDE}</p>
      <p className="mt-3 text-white/60 tracking-[0.4em] uppercase text-[10px]">{formattedDate} · {HASHTAG}</p>
      <p className="mt-6 text-white/30 text-xs">A luxury wedding template</p>
    </footer>
  );
}
