import { Eyebrow, SectionTitle } from "../Ui/Ui";
import Img1 from "../../assets/MuyiwaEtDebbyImg13.jpeg";
import Img2 from "../../assets/MuyiwaEtDebbyImg6.jpeg";
import Img3 from "../../assets/MuyiwaEtDebbyImg10.jpeg";
import Img4 from "../../assets/MuyiwaEtDebbyImg11.jpeg";
import { motion } from "framer-motion";

const STORY = [
  { date: "May 2021", title: "Where it began", text: "A friend's birthday in Lekki. One quiet hello that neither of us expected to last.", img: Img1 },
  { date: "Dec 2022", title: "The first trip", text: "Cape Town. Sunsets, mountains, and the realisation — this is it.", img: Img2 },
  { date: "Aug 2024", title: "Home", text: "We signed for our first apartment. We've been building it ever since.", img: Img3 },
  { date: "Jun 2025", title: "The proposal", text: "Under a string of warm lights, on the rooftop where we had our first date.", img: Img4 },
];

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

const slideLeft = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const slideRight = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

export default function Story() {
  return (
  <section
  id="story"
  className="overflow-x-hidden py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto"
>
      <motion.div
        className="text-center mb-16 md:mb-24"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Eyebrow>Our Journey</Eyebrow>
        <SectionTitle>Our Love Story</SectionTitle>
      </motion.div>
      <div className="relative">
<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--gold)]/50 to-transparent" />  <div className="space-y-16 md:space-y-24">
          {STORY.map((s, i) => {
            const left = i % 2 === 0;
            return (
                <motion.div
                  key={i}
                  className="relative grid md:grid-cols-2 gap-8 items-center"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ staggerChildren: 0.2 }}
                >               
                <motion.div
                  variants={fadeUp}
                  className={`flex flex-col items-center text-center md:block ${
                    left
                      ? "md:pr-16 md:text-right"
                      : "md:order-2 md:pl-16"
                  }`}
                >              
                <p className="text-xs tracking-[0.35em] uppercase text-[var(--gold-deep)] mb-3">{s.date}</p>
                  <h3 className="text-3xl md:text-4xl font-light mb-4 font-display">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.text}</p>
                </motion.div>
                <motion.div
                  variants={left ? slideRight : slideLeft}
                  className={`flex justify-center md:block ${
                    left ? "md:order-2 md:pl-16" : "md:pr-16"
                  }`}
                >
<div className="w-full max-w-sm md:max-w-none aspect-[4/5] overflow-hidden rounded-2xl shadow-[var(--shadow-luxe)]">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-[1800ms] ease-out hover:scale-105"
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
