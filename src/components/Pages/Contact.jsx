import { Eyebrow, SectionTitle } from "../../components/Ui/Ui";
import { BRIDE, GROOM } from "../../components/Pages/Wedding";

export default function Contact() {
  const items = [
    { role: "The Bride", name: BRIDE, contact: "+234 800 000 0001", email: "debby@example.com" },
    { role: "The Groom", name: GROOM, contact: "+234 800 000 0002", email: "muyiwa@example.com" },
    { role: "Planner", name: "Aurora Events", contact: "+234 800 000 0003", email: "hello@aurora.co" },
  ];
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-10 bg-[var(--ink)] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <Eyebrow>Get in touch</Eyebrow>
        <SectionTitle dark>Contact</SectionTitle>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {items.map((c) => (
            <div key={c.role} className="rounded-2xl border border-[var(--gold)]/30 bg-white/5 backdrop-blur p-8">
              <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-3">{c.role}</p>
              <p className="text-2xl font-light font-display mb-4">{c.name}</p>
              <a href={`tel:${c.contact}`} className="block text-sm text-white/80 hover:text-[var(--gold)]">{c.contact}</a>
              <a href={`mailto:${c.email}`} className="block text-sm text-white/80 hover:text-[var(--gold)] mt-1">{c.email}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
