import { useState } from "react";
import { motion } from "framer-motion";
import { LINKS, ext } from "@/lib/links";
import walletVideo from "@/assets/wallet-demo.mp4";
export function WalletShowcase() {
  const [tab, setTab] = useState<"mobile" | "extension">("mobile");
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8 py-20">
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-neutral-card rounded-[32px] p-8 md:p-12 flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">Your one-stop, Web3 wallet</h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Buy, sell, and swap crypto, earn rewards, manage NFTs, and discover DApps, all in one place.
          </p>
          <div className="mt-6 inline-flex rounded-full bg-white p-1 self-start">
            {(["mobile", "extension"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition ${
                  tab === t ? "bg-brand text-white" : "text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href={tab === "mobile" ? LINKS.download : LINKS.downloadExtension}
            {...ext}
            className="mt-6 btn-primary self-start"
          >
            Download {tab === "mobile" ? "Mobile App" : "Extension"}
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[280px] h-[560px] rounded-[48px] bg-phone p-3 shadow-2xl"
          >
            <div className="absolute top-2 left-1/2 -translate-x-1/2 h-6 w-24 rounded-b-2xl bg-phone z-10" />
            <div className="h-full w-full rounded-[36px] overflow-hidden bg-black">
              <video
  src={walletVideo}
  autoPlay
  loop
  muted
  playsInline
  className="h-full w-full object-cover"
/>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
