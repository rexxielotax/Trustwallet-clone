import { motion } from "framer-motion";
import juanImg from "@/assets/juan.png";
import jenImg from "@/assets/jen.png";
import harryImg from "@/assets/harry.png";
import esmartImg from "@/assets/esmart.png";
const PEOPLE = [
  { name: "Juan", quote: "The easiest way to understand DeFi is to get your hands dirty. The Trust Wallet dApp Browser helped me to use protocols with small amounts and learn what works and what doesn't work..", photo: juanImg },
  { name: "Jen", quote: "Secure your private keys like your life depends on it. #DoNotShare 🔑.", photo: jenImg },
  { name: "Harry", quote: "As a newcomer in this field, the introduction of blockchain technology has had a profound and transformative impact on my life. It has opened up an entirely new realm of possibilities that I am eager to explore.", photo: harryImg },
  { name: "Esmart", quote: "I thoroughly enjoy engaging with DeFi and have developed a passion for minting NFTs. However, I always make it a point to conduct my own research and consistently check the Trust Wallet Security Scanner prior to any acquisition. By following these Web3 security practices, I ensure my safety and stay #SAFU. 🛡️", photo: esmartImg },
];

export function TestimonialCarousel() {
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

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {PEOPLE.map((p) => (
            <motion.div
              key={p.name}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl overflow-hidden"
            >
              <div className="aspect-[3/6] overflow-hidden">
                <img
                  src={p.photo}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
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

      <div className="text-center mt-10">
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