import { Star } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-wallet.png";
import { LINKS, ext } from "@/lib/links";


export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8 pt-10 md:pt-20 pb-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            True crypto ownership.
            <br />
            <span className="text-brand">Powerful Web3 experiences</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg">
            Unlock the power of your cryptocurrency assets and explore the world of Web3 with Trust Wallet.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} href={LINKS.download} {...ext} className="btn-primary">
              Download Mobile App
            </motion.a>
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} href={LINKS.downloadExtension} {...ext} className="btn-outline">
              Download Extension
            </motion.a>
          </div>

          <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
            {[
              ["200M", "Trusted by people"],
              ["2017", "Founded in"],
              ["✓", "Independently Audited"],
              ["ISO", "Certified"],
            ].map(([k, v], i) => (
              <motion.div
                key={v}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
              >
                <dt className="text-2xl font-extrabold">{k}</dt>
                <dd className="text-sm text-muted-foreground">{v}</dd>
              </motion.div>
            ))}
          </dl>

          <div className="mt-8 flex items-center gap-2">
            <span className="text-sm font-semibold">Top reviews</span>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-brand text-brand" />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative aspect-square rounded-[32px] bg-gradient-hero grid place-items-center overflow-hidden"
        >
          <motion.img
            src={heroImg}
            alt="Isometric 3D crypto wallet"
            className="relative z-10 w-4/5 h-4/5 object-contain drop-shadow-2xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute -top-8 -left-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
