import { motion } from "framer-motion";
import developerImg from "@/assets/dev-helmet.png";
import { LINKS, ext } from "@/lib/links";

export function CTABanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-7xl px-4 md:px-8 mt-16"
    >
      <div className="rounded-[32px] bg-gradient-hero p-6 md:p-10 grid md:grid-cols-5 gap-8 items-center text-white overflow-hidden relative">
<div className="md:col-span-2">
  <div className="text-sm font-semibold opacity-80">BUILDING ON TRUST</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">
            Building on Trust
          </h2>
          <p className="mt-4 text-white/85 max-w-md">
            We enable developers to build dApps and wallets natively on the most trusted Web3 platform, reaching millions of users worldwide.
          </p>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href={LINKS.developerDocs}
            {...ext}
            className="mt-8 btn-white inline-flex"
          >
            Check out our Developer Docs
          </motion.a>
        </div>
       <div className="md:col-span-3 aspect-[4/3] rounded-2xl overflow-hidden">
  <img src={developerImg} alt="Developer building on Trust" loading="lazy" className="w-full h-full object-cover" />
</div>
      </div>
    </motion.section>
  );
}
