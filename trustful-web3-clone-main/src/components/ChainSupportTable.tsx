import { Check, X, Search } from "lucide-react";
import { motion } from "framer-motion";

const ROWS = [
  { chain: "BNB Smart Chain", vals: [true, true, true, true, true] },
  { chain: "Solana", vals: [true, true, true, false, true] },
  { chain: "Sui", vals: [true, false, true, false, true] },
  { chain: "Ethereum", vals: [true, true, true, true, true] },
];
const COLS = ["Buy", "Sell", "Swap", "Earn", "dApps"];

export function ChainSupportTable() {
  return (
    <section className="mt-16">
      <div className="bg-gradient-hero py-20 px-4 md:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl text-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold">One Platform, Millions of Assets</h2>
          <p className="mt-4 text-white/85 max-w-2xl mx-auto">
            Support for millions of assets across 100+ blockchains, all in one self-custody wallet.
          </p>

          <div className="mt-10 mx-auto max-w-2xl flex items-center gap-3 bg-white rounded-full px-5 py-3 text-foreground">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input
              placeholder="Search a chain..."
              className="w-full outline-none bg-transparent text-sm"
            />
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } }}
            className="mt-8 bg-white text-foreground rounded-3xl overflow-hidden text-left"
          >
            <div className="grid grid-cols-6 px-6 py-4 border-b border-border text-xs font-semibold uppercase text-muted-foreground">
              <div>Chain</div>
              {COLS.map((c) => <div key={c} className="text-center">{c}</div>)}
            </div>
            {ROWS.map((r) => (
              <motion.div
                key={r.chain}
                variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                className="grid grid-cols-6 items-center px-6 py-4 border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
              >
                <div className="font-semibold">{r.chain}</div>
                {r.vals.map((v, i) => (
                  <div key={i} className="grid place-items-center">
                    {v ? <Check className="h-5 w-5 text-brand" /> : <X className="h-5 w-5 text-muted-foreground/40" />}
                  </div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
