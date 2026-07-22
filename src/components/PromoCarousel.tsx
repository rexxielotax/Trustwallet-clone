import { useEffect, useState } from "react";
import promo1 from "@/assets/promo-1.png";
import promo2 from "@/assets/promo-2.png";

const SLIDES = [promo1, promo2];

export function PromoCarousel() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8">
      <div className="relative overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {SLIDES.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Promo slide ${idx + 1}`}
              className="w-full shrink-0 h-auto"
            />
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === i ? "w-6 bg-brand" : "w-2 bg-white/60"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}