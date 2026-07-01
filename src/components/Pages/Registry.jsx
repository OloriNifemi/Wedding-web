import { useState } from "react";
import { motion } from "framer-motion";
import { Eyebrow, SectionTitle } from "../Ui/Ui";
import { GIFTS } from "../Pages/Gifts";
import { readJSON } from "../Pages/Storage";
import GiftCard from "../Pages/GiftCard";
import GiftModal from "../Pages/GiftModal";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Registry() {
  const [bought, setBought] = useState(() => readJSON("purchased", {}));
  const [selectedGift, setSelectedGift] = useState(null);

  const openJumia = (gift) => {
    window.open(gift.url, "_blank", "noopener,noreferrer");
  };

  const closeModal = () => {
    setSelectedGift(null);
    setBought(readJSON("purchased", {}));
  };

  return (
    <section id="registry" className="py-24 md:py-32 px-6 md:px-10 bg-[var(--ivory)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Eyebrow>With gratitude</Eyebrow>
          <SectionTitle>Gift Registry</SectionTitle>
          <p className="mt-4 max-w-xl mx-auto text-gray-600 leading-relaxed">
            Your love and prayers mean the world to us. If you'd like to bless
            our new home, we've put together a few gifts we'd truly appreciate.
          </p>
        </div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {GIFTS.map((gift) => (
    <GiftCard
      key={gift.id}
      gift={gift}
      taken={!!bought[gift.id]}
      onBuy={openJumia}
      onMarkPurchased={setSelectedGift}
    />
  ))}
</div>
      </div>

      {selectedGift && <GiftModal gift={selectedGift} onClose={closeModal} />}
    </section>
  );
}