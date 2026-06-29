import Countdown from "../Pages/CountDown";
import { BRIDE, GROOM, HASHTAG } from "../Pages/Wedding";
import HeroImg from "../../assets/MuyiwaEtDebbyImg15.jpeg"

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <img
        src={HeroImg}
        alt="Wedding-Hero-Image"
        className="absolute inset-0 w-full h-full object-cover"/>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
        <p className="text-[var(--gold)] text-xl md:text-2xl mb-4 font-script">
          We're getting married
        </p>

        <div className="flex items-center gap-4 md:gap-8 mb-6">
          <span className="h-px w-16 md:w-32 bg-[var(--gold)]/70" />
          <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-[var(--gold)]">
            Save the date
          </span>
          <span className="h-px w-16 md:w-32 bg-[var(--gold)]/70" />
        </div>

        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] font-display">
          {BRIDE}
          <span className="block text-[var(--gold)] italic text-4xl md:text-6xl lg:text-7xl my-2 font-script">
            &amp;
          </span>
          {GROOM}
        </h1>

        <p className="mt-8 text-white/80 tracking-[0.4em] uppercase text-xs md:text-sm">
          12 · 09 · 2026 · Lagos, Nigeria
        </p>

        <div className="mt-12 w-full flex justify-center cursor-pointer">
          <Countdown />
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#rsvp"
            className="px-10 py-4 text-xs tracking-[0.35em] uppercase rounded-md
            text-[var(--ink)] bg-[var(--gold)]
            transition-all duration-500 ease-out
            hover:bg-[var(--gold-deep)] hover:text-white
            hover:-translate-y-0.5 hover:shadow-xl"
          > 

            RSVP Now
          </a>

          <a
            href="#story"
            className="px-10 py-4 text-xs tracking-[0.35em] uppercase rounded-md
            text-white border border-white/40
            transition-all duration-500 ease-out
            hover:border-[var(--gold)] hover:text-[var(--gold)] hover:bg-white/5
            hover:-translate-y-0.5 hover:shadow-xl"
          >

            Our Story
          </a>
        </div>

        <p className="mt-10 text-[var(--gold)]/80 tracking-[0.4em] uppercase text-[10px]">
          {HASHTAG}
        </p>
      </div>
    </section>
  );
}