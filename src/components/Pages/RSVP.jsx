import { useState } from "react";
import { Eyebrow, SectionTitle } from "../Ui/Ui";
import Image from "../../assets/MuyiwaEtDebbyImg8.jpeg";

export default function RSVP() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    guests: "",
    message: "",
  });
  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const submit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) return;

    const text = `
💍 *Wedding RSVP*

👤 Name: ${form.name}

👥 Guests: ${form.guests}

💌 Message:
${form.message || "No message"}
`;

    const url = `https://wa.me/2349116971778?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    setSent(true);
  };
  const field =
    "w-full bg-transparent text-[var(--ink)] placeholder:text-gray-800  border-b border-[var(--gold)]/50 focus:border-[var(--gold)] py-3 outline-none";
  return (
    <section
      id="rsvp"
      className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden bg-center lg:bg-[center_35%] bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${Image})`,
      }}
    >
      <div className="max-w-3xl mx-auto md:mt-16">
        <div className="text-center md:-mt-20 lg:mt-0 lg:mb-12">
          <Eyebrow>Kindly Reply</Eyebrow>
          <SectionTitle>RSVP</SectionTitle>
        </div>
        {sent ? (
          <div className="rounded-2xl border border-[var(--gold)]/40 bg-white p-12 text-center shadow-[var(--shadow-luxe)]">
            <div className="mx-auto w-16 h-16 rounded-full border border-[var(--gold)] grid place-items-center mb-6 text-[var(--gold-deep)] text-2xl">
              ✓
            </div>
            <h3 className="text-3xl font-light font-display mb-3">
              Thank you, {form.name.split(" ")[0]}.
            </h3>
            <p className="text-gray-600">
              Thank you for your RSVP. Your details have been prepared for
              WhatsApp.
            </p>
          </div>
        ) : (
          <form
            onSubmit={submit}
          className="rounded-2xl border border-[var(--gold)]/40 bg-white/20 backdrop-blur-sm p-12 shadow-[var(--shadow-luxe)] space-y-6 "
          >
            <div className="space-y-6">
              <input
                className={field}
                placeholder="Full Name,"
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
              />

              <input
                className={field}
                type="number"
                min={1}
                max={10}
                placeholder="Number of Guests"
                value={form.guests}
                onChange={(e) => update("guests", e.target.value)}
              />
            </div>
            <textarea
              className={field + " resize-none"}
              placeholder="A personal message"
              rows={3}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-10 py-4 text-xs tracking-[0.35em] uppercase rounded-md border border-[var(--gold)] text-[var(--ink)] hover:bg-[var(--gold)] hover:text-white transition-colors duration-300"
              >
                Confirm Attendance
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
