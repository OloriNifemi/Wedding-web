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
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--gold)]/15 bg-[#fcfaf7] shadow-sm hover:shadow-[var(--shadow-luxe)]"
    >
      {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-white">
            <div className="flex h-full w-full items-center justify-center">
                <img
                src={gift.image}
                alt={gift.name}
                loading="lazy"
                className={`max-h-[85%] max-w-[85%] object-contain transition-transform duration-500 group-hover:scale-105 ${
                    taken ? "grayscale opacity-60" : ""
                }`}
                />

                {taken && (
                <div className="absolute top-4 right-4 rounded-full bg-[var(--gold)] px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-white shadow">
                    Gifted ❤️
                </div>
                )}
            </div>
        </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">

        {/* Product Name */}
        <h3 className="min-h-[46px] text-center font-display text-[20px] font-light leading-snug text-[var(--ink)]">
          {gift.name}
        </h3>

        {/* Divider */}
        <div className="mx-auto my-2 h-px w-10 bg-[var(--gold)]/30" />

        {/* Description */}
        <p className="min-h-[48px] text-center text-sm leading-6 text-gray-500">
          {gift.description}
        </p>

        {/* Price */}
        <p className="mt-2 text-center text-[15px] font-medium text-[var(--gold-deep)]">
          {gift.price}
        </p>

        {/* Buttons */}
        <div className="mt-auto space-y-2 pt-4">
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