import { Eyebrow, SectionTitle } from "../Ui/Ui";
import { VENUE } from "../../components/Pages/Wedding";

export default function Details() {
  return (
    <section
      id="details"
      className="py-24 md:py-32 px-6 md:px-10 bg-[var(--ink)] text-white"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <Eyebrow>Save the Date</Eyebrow>
          <SectionTitle dark>Reception Details</SectionTitle>
        </div>

        {/* Reception Card */}
        <div className="max-w-xl mx-auto">
          <div className="rounded-3xl border border-[var(--gold)]/30 bg-white/5 backdrop-blur-xl p-10 text-center">

            <div className="text-[var(--gold)] text-5xl mb-5">
              ✦
            </div>

            <p className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-3">
              Reception
            </p>

            <p className="font-display text-5xl font-light">
              5:00 PM
            </p>

            <p className="mt-4 text-white/70 leading-relaxed">
              Join us for an evening of celebration, fine dining,
              music, dancing, and unforgettable memories.
            </p>

          </div>
        </div>

        {/* Information */}
        <div className="mt-20 grid gap-10 md:grid-cols-3 text-center">

          <div>
            <p className="mb-2 text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">
              Date
            </p>

            <p className="font-display text-2xl font-light">
              Saturday, 14 Feb 2026
            </p>
          </div>

          <div>
            <p className="mb-2 text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">
              Dress Code
            </p>

            <p className="font-display text-2xl font-light">
              Black Tie · Gold Accents
            </p>
          </div>

          <div>
            <p className="mb-2 text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">
              Venue
            </p>

            <p className="font-display text-2xl font-light">
              {VENUE}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}