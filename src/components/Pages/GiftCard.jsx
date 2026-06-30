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
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--gold)]/15 bg-white shadow-sm hover:shadow-[var(--shadow-luxe)]"
    >
      {/* Image */}
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-[#fcfaf7]">
        <img
          src={gift.image}
          alt={gift.name}
          loading="lazy"
          className={`max-h-full max-w-full object-contain p-8 transition-transform duration-500 group-hover:scale-105 ${
            taken ? "grayscale opacity-60" : ""
          }`}
        />

        {taken && (
          <div className="absolute top-5 right-5 rounded-full bg-[var(--gold)] px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-white shadow">
            Gifted ❤️
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-7">
        <h3 className="flex min-h-[72px] items-center justify-center text-center font-display text-[22px] font-light leading-snug text-[var(--ink)]">
          {gift.name}
        </h3>

        <div className="mx-auto my-5 h-px w-14 bg-[var(--gold)]/30" />

        <p className="flex min-h-[84px] items-center justify-center text-center text-sm leading-7 text-gray-500">
          {gift.description}
        </p>

        <p className="mt-6 text-center text-lg font-medium text-[var(--gold-deep)]">
          {gift.price}
        </p>

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