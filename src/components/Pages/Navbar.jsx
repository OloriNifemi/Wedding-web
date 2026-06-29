import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-black/5 border-b border-stone-200/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

        <a href="#top" className="text-2xl text-[var(--gold-deep)] font-script">
          M &amp; D
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-7 text-[11px] tracking-[0.3em] uppercase">
          {["Story", "Details", "Gallery", "Registry", "RSVP"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-white transition-all duration-500 ease-out hover:text-[var(--gold)] hover:tracking-[0.35em]"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden text-[var(--gold-deep)] text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Mobile menu */}
        <div
className={`absolute top-full left-0 w-full
bg-black/65
backdrop-blur-3xl
backdrop-saturate-150
border-t border-white/10
shadow-2xl
flex flex-col items-center gap-6 py-8 md:hidden
transition-all duration-500 ease-out
${
  open
    ? "opacity-100 translate-y-0"
    : "opacity-0 -translate-y-3 pointer-events-none"
}`}
        >
          {["Story", "Details", "Gallery", "Registry", "RSVP"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="relative text-[11px] tracking-[0.3em] uppercase text-[var(--ink)] transition-all duration-300 ease-out hover:text-[var(--gold-deep)] hover:-translate-y-0.5 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[var(--gold-deep)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
