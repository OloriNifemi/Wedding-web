import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function GiftCard({
  gift,
  taken,
  onBuy,
  onMarkPurchased,
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -10,
        transition: { duration: 0.25 },
      }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-[var(--gold)]/15 bg-white shadow-sm hover:shadow-[var(--shadow-luxe)] transition-all duration-500"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#fcfaf7]">
        <img
          src={gift.image}
          alt={gift.name}
          loading="lazy"
          className={`w-full h-full object-contain p-8 transition duration-700 group-hover:scale-105 ${
            taken ? "grayscale opacity-60" : ""
          }`}
        />

        {taken && (
          <div className="absolute top-5 right-5 rounded-full bg-[var(--gold)] px-4 py-1 text-[10px] tracking-[0.3em] uppercase text-white shadow">
            Gifted ❤️
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7">

        {/* Title */}
        <h3 className="min-h-[64px] flex items-center justify-center text-center font-display text-[22px] font-light leading-snug text-[var(--ink)]">
          {gift.name}
        </h3>

        {/* Divider */}
        <div className="mx-auto my-5 h-px w-14 bg-[var(--gold)]/30" />

        {/* Description */}
        <p className="min-h-[72px] text-center text-sm leading-7 text-gray-500">
          {gift.description}
        </p>

        {/* Price */}
        <p className="mt-6 text-center text-lg font-medium text-[var(--gold-deep)]">
          {gift.price}
        </p>

        {/* Buttons */}
        <div className="mt-auto space-y-3 pt-8">

          <button
            onClick={() => onBuy(gift)}
            className="w-full rounded-xl border border-[var(--gold)] py-3 text-[11px] uppercase tracking-[0.35em] text-[var(--gold-deep)] transition hover:bg-[var(--gold)] hover:text-white"
          >
            Gift This
          </button>

          <button
            onClick={() => onMarkPurchased(gift)}
            disabled={taken}
            className="w-full rounded-xl bg-[var(--ink)] py-3 text-[11px] uppercase tracking-[0.35em] text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {taken ? "Gift Confirmed" : "I've Purchased This"}
          </button>

        </div>

      </div>
    </motion.div>
  );
}