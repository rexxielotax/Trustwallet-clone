import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import avatarsImg from "@/assets/avatars.png";

const PEOPLE = [
  { name: "Juan", quote: "Trust Wallet made my first steps in crypto genuinely simple." },
  { name: "Jen", quote: "Swapping tokens across chains has never felt this seamless." },
  { name: "Harry", quote: "I love the transparency and how much control I have over my assets." },
  { name: "Esmart", quote: "The security alerts alone have saved me multiple times." },
];

// duplicate for infinite scroll effect
const LOOP = [...PEOPLE, ...PEOPLE, ...PEOPLE];

export function TestimonialCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    let x = 0;
    const speed = 0.4;
    const step = () => {
      x -= speed;
      const cardW = 300; // 280 + 20 gap approx
      const oneSet = cardW * PEOPLE.length;
      if (Math.abs(x) >= oneSet) x = 0;
      el.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="py-20 bg-neutral-card overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Enjoy a Web3 experience powered by community
          </h2>
          <p className="mt-4 text-muted-foreground">
            Millions of people around the world use Trust Wallet every day. Here's what a few of them say.
          </p>
        </motion.div>
      </div>

      <div className="mt-12 overflow-hidden">
        <div ref={trackRef} className="flex gap-5 px-4 md:px-8 pb-4 will-change-transform" style={{ width: "max-content" }}>
          {LOOP.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="w-[280px] shrink-0 bg-white rounded-3xl overflow-hidden"
            >
              <div
                className="aspect-square grid place-items-center overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, oklch(0.7 0.05 260), oklch(0.4 0.1 260))",
                }}
              >
                <img
                  src={avatarsImg}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-left"
                  style={{ objectPosition: `${(i % 4) * 33}% center`, transform: "scale(1.6)" }}
                />
              </div>
              <div className="p-6">
                <div className="font-extrabold">{p.name}</div>
                <p className="mt-2 text-sm text-muted-foreground">"{p.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          href="#"
          className="btn-primary inline-flex"
        >
          Join our community on Telegram
        </motion.a>
      </div>
    </section>
  );
}
