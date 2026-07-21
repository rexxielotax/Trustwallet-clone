import { motion } from "framer-motion";

export function StatsBar() {
  const stats = [
    ["10M+", "Assets"],
    ["600M+", "NFTs"],
    ["100+", "Blockchains"],
  ];
  return (
    <section className="bg-brand text-white py-12">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        className="mx-auto max-w-6xl px-4 md:px-8 grid grid-cols-3 gap-4"
      >
        {stats.map(([k, v]) => (
          <motion.div
            key={v}
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            className="text-center"
          >
            <div className="text-3xl md:text-5xl font-extrabold">{k}</div>
            <div className="text-sm md:text-base opacity-80 mt-1">{v}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
