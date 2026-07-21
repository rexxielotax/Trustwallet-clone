import { MENU } from "@/lib/menu-data";
import { ext } from "@/lib/links";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function DesktopMegaMenu({
  openKey,
  onClose,
}: {
  openKey: string | null;
  onClose: () => void;
}) {
  const section = MENU.find((m) => m.key === openKey);
  if (!section) return null;
  const gridCols =
    section.items.length > 6 ? "grid-cols-3" : section.items.length > 3 ? "grid-cols-2" : "grid-cols-1";

  return (
    <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3 z-50 w-[720px]">
      <div className="rounded-3xl border border-border bg-card shadow-xl p-6">
        <div className={`grid ${gridCols} gap-3`}>
          {section.items.map((it, i) => (
            <motion.a
              key={it.title}
              href={it.href}
              {...ext}
              onClick={onClose}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03, duration: 0.2 }}
              className="group flex items-start gap-3 rounded-2xl p-3 hover:bg-muted transition"
            >
              <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-shield text-white">
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
      </div>
    </div>
  );
}
