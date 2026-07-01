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
        y: -6,
        scale: 1.015,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--gold)]/15 bg-[#fcfaf7] shadow-sm transition-shadow duration-500 hover:shadow-[var(--shadow-luxe)]"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-white">
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={gift.image}
            alt={gift.name}
            loading="lazy"
            className={`max-h-[85%] max-w-[85%] object-contain transition-transform duration-700 ease-out group-hover:scale-105 ${
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
            className="
                w-full
                rounded-xl
                bg-black
                py-3
                text-[11px]
                uppercase
                tracking-[0.35em]
                text-white
                transition-all
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:-translate-y-1
                hover:bg-[var(--gold-deep)]
                hover:shadow-[0_12px_30px_rgba(184,149,95,0.28)]
                active:translate-y-0
                active:scale-[0.98]
            "
            >
            Gift This
            </button>

            <button
            onClick={() => onMarkPurchased(gift)}
            disabled={taken}
            className="
                w-full
                rounded-xl
                border
                border-[var(--gold)]
                bg-transparent
                py-3
                text-[11px]
                uppercase
                tracking-[0.35em]
                text-[var(--gold-deep)]
                transition-all
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:-translate-y-1
                hover:bg-[var(--gold)]
                hover:text-white
                hover:shadow-[0_12px_30px_rgba(184,149,95,0.18)]
                active:translate-y-0
                active:scale-[0.98]
                disabled:cursor-not-allowed
                disabled:opacity-40
                disabled:hover:bg-transparent
                disabled:hover:text-[var(--gold-deep)]
                disabled:hover:translate-y-0
                disabled:hover:shadow-none
            "
            >
            {taken ? "Gift Confirmed" : "I've Purchased This"}
            </button>

        </div>

      </div>
    </motion.div>
  );
}