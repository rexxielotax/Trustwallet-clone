import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { FaApple } from "react-icons/fa";
function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} fill="none">
      <path d="M99 20c-8 6-13 16-13 28v416c0 12 5 22 13 28l231-236L99 20z" fill="#00D4FF"/>
      <path d="M330 256l-231-236c-6 4-10 10-13 17l211 219 33-0z" fill="#00F076"/>
      <path d="M330 256l33 0-211 219c3 7 7 13 13 17l231-236z" fill="#FF3A44"/>
      <path d="M330 256L99 20c3-2 6-4 10-5 8-3 17-2 25 3l253 145c14 8 21 22 21 37s-7 29-21 37l-253 145c-8 5-17 6-25 3-4-1-7-3-10-5l231-236z" fill="#FFCF00"/>
    </svg>
  );
}
export function RatingsBlock() {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-8 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
       <h2 className="text-2xl md:text-4xl font-extrabold text-center max-w-2xl mx-auto">
  Trust Wallet is one of the highest-rated self-custody crypto wallets
</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Rated 4.7 on the App Store and 4.6 on Google Play, across 2.7M verified reviews — trusted by millions of users on iOS and Android.
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
  { icon: FaApple, name: "App Store", rating: "4.7/5", reviews: "197.1K Reviews" },
  { icon: GooglePlayIcon, name: "Google Play", rating: "4.6/5", reviews: "2.5M Reviews" },
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
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
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
