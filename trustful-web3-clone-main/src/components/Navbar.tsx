import { useEffect, useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldLogo } from "./ShieldLogo";
import { MENU } from "@/lib/menu-data";
import { LINKS, ext } from "@/lib/links";
import { MobileMenu } from "./MobileMenu";
import { DesktopMegaMenu } from "./DesktopMegaMenu";

export function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`sticky top-0 z-40 border-b transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur border-border shadow-sm"
            : "bg-background/60 backdrop-blur-sm border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
          <a href={LINKS.home} {...ext} className="flex items-center gap-2">
            <ShieldLogo />
            <span className="text-lg font-extrabold tracking-tight">Trust</span>
          </a>

          <nav
            className="hidden md:flex items-center gap-1 relative"
            onMouseLeave={() => setOpen(null)}
          >
            {MENU.map((m) => (
              <div key={m.key} onMouseEnter={() => setOpen(m.key)} className="relative">
                <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium hover:bg-muted transition-colors">
                  {m.label}
                  <ChevronDown
                    className={`h-4 w-4 opacity-60 transition-transform duration-200 ${
                      open === m.key ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            ))}
            <AnimatePresence>
              {open && (
                <motion.div
                  key={open}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <DesktopMegaMenu openKey={open} onClose={() => setOpen(null)} />
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          <div className="flex items-center gap-2">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={LINKS.download}
              {...ext}
              className="hidden md:inline-flex btn-primary text-sm"
            >
              Download Trust Wallet
            </motion.a>
            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-muted"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
