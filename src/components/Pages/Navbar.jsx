import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
  setTimeout(() => {
    setOpen(false);
  }, 250);
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-black/5 border-b border-stone-200/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

        <a href="#top" className="text-2xl text-[var(--gold-deep)] font-script">
          A &amp; O
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

        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 bg-black/50 backdrop-blur-md md:hidden transition-all duration-700 ease-out ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }`}
        />

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-72 bg-black/90 backdrop-blur-3xl border-l border-white/10 shadow-2xl flex flex-col justify-center items-center gap-10 md:hidden transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {["Story", "Details", "Gallery", "Registry", "RSVP"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={handleNavClick}
              className="relative text-sm tracking-[0.35em] uppercase text-white transition-all duration-500 hover:text-[var(--gold)] hover:tracking-[0.45em] after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-[var(--gold)] after:transition-all after:duration-500 hover:after:w-full"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
