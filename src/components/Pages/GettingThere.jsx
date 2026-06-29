import { Eyebrow, SectionTitle } from "../Ui/Ui";
import { VENUE } from "../Pages/Wedding";

export default function GettingThere() {
  const q = encodeURIComponent(VENUE);
  const rides = [
    { name: "Open Map", url: `https://www.google.com/maps/search/?api=1&query=${q}`, color: "bg-[var(--ink)] text-white" },
    { name: "Uber", url: `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=${q}`, color: "bg-black text-white" },
    { name: "Bolt", url: `https://bolt.eu/?destination=${q}`, color: "bg-[#34D186] text-white" },
    { name: "inDrive", url: "https://indrive.com/", color: "bg-[#C1F11D] text-black" },
  ];
  return (
    <section 
      id="getting-there"
      className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <Eyebrow>Find us</Eyebrow>
        <SectionTitle>Getting There</SectionTitle>
      </div>
      <div className="rounded-2xl overflow-hidden border border-[var(--gold)]/30 shadow-[var(--shadow-luxe)] aspect-[16/9]">
        <iframe title="Map" src={`https://www.google.com/maps?q=${q}&output=embed`} className="w-full h-full" loading="lazy" />
      </div>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {rides.map((r) => (
          <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer"
            className={`${r.color} text-center py-4 text-[11px] tracking-[0.3em] uppercase rounded-xl hover:opacity-90`}>
            {r.name}
          </a>
        ))}
      </div>
    </section>
  );
}
