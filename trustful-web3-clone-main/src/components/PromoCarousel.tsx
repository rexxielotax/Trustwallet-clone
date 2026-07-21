import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SLIDES = [
  { title: "PERPS + OUTCOMES", sub: "are now LIVE" },
  { title: "HYPERLIQUID", sub: "is now LIVE on Perps" },
  { title: "RWAs", sub: "Tokenized real-world assets" },
];

export function PromoCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-lavender p-8 md:p-12 flex flex-col items-center text-center overflow-hidden"
      >
        <div className="text-2xl md:text-4xl font-extrabold min-h-[3rem] md:min-h-[3.5rem] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              {SLIDES[i].title}{" "}
              <span className="text-brand">{SLIDES[i].sub}</span>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex gap-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-6 bg-brand" : "w-2 bg-foreground/20"}`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
