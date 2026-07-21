import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function GradientFeatureCard({
  bgClass,
  eyebrow,
  title,
  subtitle,
  cardTitle,
  ctaLabel,
  ctaHref = "#",
  ctaVariant = "outline",
  illustrationSrc,
  illustrationLabel,
}: {
  bgClass: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  cardTitle: string;
  ctaLabel: string;
  ctaHref?: string;
  ctaVariant?: "outline" | "primary";
  illustrationSrc?: string;
  illustrationLabel: string;
  children?: ReactNode;
}) {
  return (
    <section className={`${bgClass} py-20 px-4 md:px-8`}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          {eyebrow && <div className="text-sm font-semibold opacity-70">{eyebrow}</div>}
          <h2 className="mt-2 text-4xl md:text-6xl font-extrabold">{title}</h2>
          <p className="mt-4 text-lg opacity-80">{subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          whileHover={{ y: -6 }}
          className="mt-12 bg-white rounded-[32px] p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center shadow-sm"
        >
          <div>
            <h3 className="text-2xl md:text-4xl font-extrabold">{cardTitle}</h3>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={ctaHref}
              className={`mt-6 inline-flex ${ctaVariant === "primary" ? "btn-primary" : "btn-outline"}`}
            >
              {ctaLabel}
            </motion.a>
          </div>
          <motion.div
            className="aspect-[4/3] rounded-2xl bg-neutral-card grid place-items-center overflow-hidden"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            {illustrationSrc ? (
              <img src={illustrationSrc} alt={illustrationLabel} loading="lazy" className="w-full h-full object-contain p-4" />
            ) : (
              <span className="text-muted-foreground text-sm">[ {illustrationLabel} ]</span>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
