import { useState } from "react"; 
import { Eyebrow, SectionTitle } from "../Ui/Ui";

const IMAGES = ["/MuyiwaEtDebbyImg1.jpeg","/MuyiwaEtDebbyImg2.jpeg","/MuyiwaEtDebbyImg3.jpeg","/MuyiwaEtDebbyImg4.jpeg","/MuyiwaEtDebbyImg5.jpeg","/MuyiwaEtDebbyImg6.jpeg","/MuyiwaEtDebbyImg7.jpeg","/MuyiwaEtDebbyImg8.jpeg"];

export default function Gallery() {
  const [open, setOpen] = useState(null);
  return (
    <section id="gallery" className="py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-16"><Eyebrow>Moments</Eyebrow><SectionTitle>Through Our Lens</SectionTitle></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {IMAGES.map((src, i) => (
          <button key={i} onClick={() => setOpen(i)}
            className={`group relative overflow-hidden rounded-lg ${i % 5 === 0 ? "row-span-2 aspect-[3/5]" : "aspect-square"}`}>
            <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 ring-1 ring-inset ring-[var(--gold)]/0 group-hover:ring-[var(--gold)]/60 transition" />
          </button>
        ))}
      </div>
      {open !== null && (
        <div className="fixed inset-0 z-[90] bg-black/90 flex items-center justify-center p-4" onClick={() => setOpen(null)}>
        <button
        className="absolute top-6 right-6 text-white text-3xl"
        onClick={(e) => {
            e.stopPropagation();
            setOpen(null);
        }}
        >
        ×
        </button>          <button className="absolute left-4 text-white text-4xl" onClick={(e) => { e.stopPropagation(); setOpen((open + IMAGES.length - 1) % IMAGES.length); }}>‹</button>
          <img
            src={IMAGES[open]}
            alt="Gallery image"
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
            />
          <button className="absolute right-4 text-white text-4xl" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % IMAGES.length); }}>›</button>
        </div>
      )}
    </section>
  );
}
