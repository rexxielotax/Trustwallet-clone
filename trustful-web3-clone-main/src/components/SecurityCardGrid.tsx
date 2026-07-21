import { Lock, EyeOff, Bell } from "lucide-react";
import { motion } from "framer-motion";
import securityImg from "@/assets/security.png";
import privacyImg from "@/assets/privacy.png";
import alertsImg from "@/assets/alerts.png";

const CARDS = [
  { icon: Lock, img: securityImg, title: "Added security with encryption", desc: "Advanced encryption keeps your assets and data safe." },
  { icon: EyeOff, img: privacyImg, title: "Zero personal tracking", desc: "We don't collect or sell your personal information." },
  { icon: Bell, img: alertsImg, title: "Proactive alerts for risky transactions", desc: "Get warned before signing dangerous transactions." },
];

export function SecurityCardGrid() {
  return (
    <section className="bg-gradient-mint py-20 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid md:grid-cols-3 gap-6"
        >
          {CARDS.map((c) => (
            <motion.div
              key={c.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -8, boxShadow: "0 24px 48px -24px rgba(0,0,0,0.2)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white rounded-3xl p-8"
            >
              <div className="aspect-video rounded-2xl bg-neutral-card grid place-items-center mb-6 overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" className="w-3/4 h-3/4 object-contain" />
              </div>
              <h3 className="text-xl font-extrabold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-10 text-center">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="/security"
            className="btn-outline inline-flex"
          >
            Learn more about privacy & security
          </motion.a>
        </div>
      </div>
    </section>
  );
}
