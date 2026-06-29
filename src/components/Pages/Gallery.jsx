import { useState } from "react"; 
import { Eyebrow, SectionTitle } from "../Ui/Ui";

const IMAGES = [
  {
    src: "../src/assets/MuyiwaEtDebbyImg1.jpeg",
    position: "center 25%",
    tall: true,
  },
  {
    src: "../src/assets/MuyiwaEtDebbyImg13.jpeg",
    position: "center top",
    tall: false,
  },
  {
    src: "../src/assets/MuyiwaEtDebbyImg3.jpeg",
    position: "center center",
    tall: true,
  },
  {
    src: "../src/assets/MuyiwaEtDebbyImg15.jpeg",
    position: "center 35%",
    tall: true,
  },
  {
    src: "../src/assets/MuyiwaEtDebbyImg8.jpeg",
    position: "center center",
    tall: true,
  },
  {
    src: "../src/assets/MuyiwaEtDebbyImg12.jpeg",
    position: "center bottom",
    tall: true,
  },
  {
    src: "../src/assets/MuyiwaEtDebbyImg4.jpeg",
    position: "top center ",
    tall: false,
  },
  {
    src: "../src/assets/MuyiwaEtDebbyImg9.jpeg",
    position: "center center",
    tall: false,
  },
  {
    src: "../src/assets/MuyiwaEtDebbyImg2.jpeg",
    position: "center 20%",
    tall: true,
  },
  {
    src: "../src/assets/MuyiwaEtDebbyImg11.jpeg",
    position: "center top",
    tall: false,
  },
  {
    src: "../src/assets/MuyiwaEtDebbyImg7.jpeg",
    position: "center center",
    tall: true,
  },
  {
    src: "../src/assets/MuyiwaEtDebbyImg10.jpeg",
    position: "top center",
    tall: false,
  },
  {
    src: "../src/assets/MuyiwaEtDebbyImg16.jpeg",
    position: "center 25%",
    tall: false,
  },
];

export default function Gallery() {
  const [open, setOpen] = useState(null);
  return (
    <section id="gallery" className="py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-16"><Eyebrow>Moments</Eyebrow><SectionTitle>Through Our Lens</SectionTitle></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[220px] md:auto-rows-[280px]">
        {IMAGES.map((image, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            className={`group relative overflow-hidden rounded-xl ${
              image.tall ? "row-span-2" : ""
            }`}
          >
            <img
              src={image.src}
              alt={`Wedding ${i + 1}`}
              style={{ objectPosition: image.position }}
              className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500" />

            <div className="absolute inset-0 ring-1 ring-inset ring-[var(--gold)]/0 group-hover:ring-[var(--gold)]/60 transition duration-500" />
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
        </button>          
        <button className="absolute left-4 text-white text-4xl" onClick={(e) => { e.stopPropagation(); setOpen((open + IMAGES.length - 1) % IMAGES.length); }}>‹</button>
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
