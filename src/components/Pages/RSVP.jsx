import { useState } from "react";
import { Eyebrow, SectionTitle } from "../Ui/Ui";

export default function RSVP() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", guests: "1", meal: "", message: "" });
  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    let list;

    try {
    list = JSON.parse(localStorage.getItem("rsvps") || "[]");
    } catch {
    list = [];
    }
    
    list.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem("rsvps", JSON.stringify(list));
    setSent(true);
  };
  const field = "w-full bg-transparent border-b border-[var(--gold)]/40 focus:border-[var(--gold)] py-3 outline-none";
  return (
    <section id="rsvp" className="py-24 md:py-32 px-6 md:px-10 bg-[var(--ivory)]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12"><Eyebrow>Kindly Reply</Eyebrow><SectionTitle>RSVP</SectionTitle></div>
        {sent ? (
          <div className="rounded-2xl border border-[var(--gold)]/40 bg-white p-12 text-center shadow-[var(--shadow-luxe)]">
            <div className="mx-auto w-16 h-16 rounded-full border border-[var(--gold)] grid place-items-center mb-6 text-[var(--gold-deep)] text-2xl">✓</div>
            <h3 className="text-3xl font-light font-display mb-3">Thank you, {form.name.split(" ")[0]}.</h3>
            <p className="text-gray-600">Your RSVP has been received. See you on 14 February 2026.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="rounded-2xl border border-[var(--gold)]/30 bg-white p-12 shadow-[var(--shadow-luxe)] space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input className={field} placeholder="Full Name *" required value={form.name} onChange={(e) => update("name", e.target.value)} />
              <input className={field} placeholder="Email *" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} />
              <input className={field} placeholder="Phone (optional)" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
              <input className={field} placeholder="Guests" type="number" min={1} max={6} value={form.guests} onChange={(e) => update("guests", e.target.value)} />
              <select className={field} value={form.meal} onChange={(e) => update("meal", e.target.value)}>
                <option value="">Meal Preference</option><option>Chicken</option><option>Fish</option><option>Beef</option><option>Vegetarian</option><option>Vegan</option>
              </select>
            </div>
            <textarea className={field + " resize-none"} placeholder="A personal message" rows={3} value={form.message} onChange={(e) => update("message", e.target.value)} />
            <button type="submit" className="px-10 py-4 text-xs tracking-[0.35em] uppercase border border-[var(--gold)] text-[var(--ink)] hover:bg-[var(--gold)] hover:text-white">
              Confirm Attendance
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
