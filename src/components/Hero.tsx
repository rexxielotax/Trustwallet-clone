import { Star, Smartphone, Monitor } from "lucide-react";
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
          <h1 className="text-2xl md:text-4xl font-bold tracking-normal text-foreground">
  True crypto ownership.
  <br />
  Powerful Web3
  <br />
  experiences
</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg">
            Unlock the power of your cryptocurrency assets and explore the world of Web3 with Trust Wallet.
          </p>
<div className="mt-8 flex flex-wrap gap-3">
  <motion.a
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.96 }}
    href={LINKS.download}
    {...ext}
    className="inline-flex items-center gap-2 rounded-full border border-brand text-brand px-6 py-3 text-sm font-semibold bg-white"
  >
    <Smartphone className="h-5 w-5" />
    Download Mobile App
  </motion.a>
  <motion.a
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.96 }}
    href={LINKS.downloadExtension}
    {...ext}
    className="inline-flex items-center gap-2 rounded-full border border-brand text-brand px-6 py-3 text-sm font-semibold bg-white"
  >
    <Monitor className="h-5 w-5" />
    Download Extension
  </motion.a>
</div>
        </motion.div>

       <div className="relative aspect-square grid place-items-center overflow-hidden">
  <img
    src={heroImg}
    alt="Isometric 3D crypto wallet"
    className="relative z-10 w-full h-full object-contain"
  />
</div>
      </div>
    </section>
  );
}
