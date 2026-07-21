import { motion } from "framer-motion";
import { Star, Apple, Play } from "lucide-react";

export function RatingsBlock() {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-8 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold max-w-3xl mx-auto">
          Trust Wallet is one of the highest-rated self-custody crypto wallets
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Millions of people trust Trust Wallet with their crypto. Based on 2.7M+ reviews across app stores.
        </p>
        <p className="mt-1 text-xs text-muted-foreground">Rating as of July 2026</p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        className="mt-10 grid md:grid-cols-2 gap-4"
      >
        {[
          { icon: Apple, name: "App Store", rating: "4.7/5", reviews: "197.1K Reviews" },
          { icon: Play, name: "Google Play", rating: "4.6/5", reviews: "2.5M Reviews" },
        ].map((s) => (
          <motion.div
            key={s.name}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ y: -6, boxShadow: "0 20px 40px -20px rgba(0,0,0,0.2)" }}
            className="bg-neutral-card rounded-3xl p-8 flex items-center gap-6"
          >
            <s.icon className="h-12 w-12 shrink-0" />
            <div className="text-left flex-1">
              <div className="text-sm text-muted-foreground">{s.name}</div>
              <div className="text-3xl font-extrabold mt-1">{s.rating}</div>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand text-brand" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{s.reviews}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        href="#download"
        className="mt-10 inline-flex btn-primary"
      >
        Join Trust Wallet
      </motion.a>
    </section>
  );
}
