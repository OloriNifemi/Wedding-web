import { Eyebrow, SectionTitle } from "../Ui/Ui";
import { VENUE } from "../../components/Pages/Wedding";

export default function Details() {
  const events = [
    { t: "Ceremony", time: "11:00 AM", desc: "Holy Matrimony", icon: "⛪" },
    { t: "Cocktails", time: "2:00 PM", desc: "Garden Reception", icon: "🥂" },
    { t: "Reception", time: "5:00 PM", desc: "Dinner & Dancing", icon: "✦" },
  ];
  return (
    <section id="details" className="py-24 md:py-32 px-6 md:px-10 bg-[var(--ink)] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Eyebrow>Save the Date</Eyebrow>
          <SectionTitle dark>Event Details</SectionTitle>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {events.map((e) => (
            <div key={e.t} className="rounded-2xl border border-[var(--gold)]/30 bg-white/5 backdrop-blur-xl p-8 text-center">
              <div className="text-[var(--gold)] text-3xl mb-4">{e.icon}</div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-3">{e.t}</p>
              <p className="text-3xl font-light font-display">{e.time}</p>
              <p className="text-sm text-white/70 mt-2">{e.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div><p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-2">Date</p><p className="text-2xl font-light font-display">Saturday, 14 Feb 2026</p></div>
          <div><p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-2">Dress Code</p><p className="text-2xl font-light font-display">Black Tie · Gold accents</p></div>
          <div><p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-2">Venue</p><p className="text-2xl font-light font-display">{VENUE}</p></div>
        </div>
      </div>
    </section>
  );
}
