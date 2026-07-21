import { useState } from "react";
import { X, ChevronDown, Moon, Globe, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { MENU } from "@/lib/menu-data";
import { LINKS, ext } from "@/lib/links";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
          className="fixed inset-0 z-50 bg-neutral-card flex flex-col md:hidden"
        >
          <div className="flex items-center justify-between px-4 h-16 border-b border-border/60">
            <span className="text-lg font-extrabold">Menu</span>
            <button onClick={onClose} className="h-10 w-10 grid place-items-center rounded-full hover:bg-white" aria-label="Close">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-2 pb-40">
            {MENU.map((m) => {
              const isOpen = expanded === m.key;
              return (
                <div key={m.key} className="border-b border-border/60">
                  <button
                    className="flex w-full items-center justify-between py-4 text-left text-lg font-semibold"
                    onClick={() => setExpanded(isOpen ? null : m.key)}
                  >
                    {m.label}
                    <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 space-y-2">
                          {m.items.map((it, i) => (
                            <motion.a
                              key={it.title}
                              href={it.href}
                              {...ext}
                              onClick={onClose}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.03 }}
                              className="flex items-start gap-3 rounded-2xl bg-white p-3"
                            >
                              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-shield text-white">
                                <Sparkles className="h-4 w-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center gap-2 text-sm font-semibold">
                                  {it.title}
                                  {it.badge && (
                                    <span className="rounded-full bg-brand px-1.5 py-0.5 text-[10px] font-bold text-white">
                                      {it.badge}
                                    </span>
                                  )}
                                </div>
                                {it.desc && <div className="text-xs text-muted-foreground mt-0.5">{it.desc}</div>}
                              </div>
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-border p-4 space-y-3">
            <div className="flex items-center gap-2">
              <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-border py-3 text-sm font-medium">
                <Moon className="h-4 w-4" /> Dark
              </button>
              <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-border py-3 text-sm font-medium">
                <Globe className="h-4 w-4" /> Language
              </button>
            </div>
            <a href={LINKS.download} {...ext} className="btn-primary w-full">Download Trust Wallet</a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
