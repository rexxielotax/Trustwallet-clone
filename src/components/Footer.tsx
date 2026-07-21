import { Facebook, Github, Instagram, Twitter, Send, Linkedin, Youtube, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { ShieldLogo } from "./ShieldLogo";
import { LINKS, ext } from "@/lib/links";

const SOCIALS: Array<{ Icon: typeof Facebook; href: string; label: string }> = [
  { Icon: Facebook, href: LINKS.facebook, label: "Facebook" },
  { Icon: Github, href: LINKS.github, label: "GitHub" },
  { Icon: Instagram, href: LINKS.instagram, label: "Instagram" },
  { Icon: Twitter, href: LINKS.twitter, label: "Twitter" },
  { Icon: MessageCircle, href: LINKS.discord, label: "Discord" },
  { Icon: Send, href: LINKS.telegram, label: "Telegram" },
  { Icon: Linkedin, href: LINKS.linkedin, label: "LinkedIn" },
  { Icon: Youtube, href: LINKS.youtube, label: "YouTube" },
];

type FooterLink = { label: string; href: string };
type FooterCol = { title: string; items: Array<FooterLink | { h: string }> };

const COLS: FooterCol[] = [
  {
    title: "Wallet",
    items: [
      { label: "Mobile App", href: LINKS.mobileApp },
      { label: "Browser Extension", href: LINKS.browserExtension },
    ],
  },
  {
    title: "Features",
    items: [
      { label: "Buy Crypto", href: LINKS.buyCrypto },
      { label: "Swaps", href: LINKS.swaps },
      { label: "Staking", href: LINKS.staking },
      { label: "NFTs", href: LINKS.nfts },
      { label: "SWIFT: Smart Contract Wallet", href: LINKS.swift },
      { label: "RWAs (NEW)", href: LINKS.rwas },
      { label: "Perps (NEW)", href: LINKS.perps },
      { label: "Prediction (NEW)", href: LINKS.prediction },
    ],
  },
  {
    title: "Markets",
    items: [
      { label: "Prices (NEW)", href: LINKS.prices },
      { label: "Converter", href: LINKS.converter },
      { h: "Wallets" },
      { label: "Bitcoin Wallet", href: LINKS.walletBitcoin },
      { label: "USDT Wallet", href: LINKS.walletUSDT },
      { label: "TRON Wallet", href: LINKS.walletTron },
      { label: "XRP Wallet", href: LINKS.walletXRP },
      { label: "TON Wallet", href: LINKS.walletTON },
      { label: "Litecoin Wallet", href: LINKS.walletLitecoin },
      { label: "BEP20 Wallet", href: LINKS.walletBEP20 },
    ],
  },
  {
    title: "Build",
    items: [
      { label: "Developer Docs", href: LINKS.developerDocs },
      { label: "Wallet Core", href: LINKS.walletCore },
      { label: "Submit dApp", href: LINKS.submitDapp },
      { label: "Get assets listed", href: LINKS.getAssetsListed },
      { label: "Agent Kit (NEW)", href: LINKS.agentKit },
    ],
  },
  {
    title: "About",
    items: [
      { label: "About Us", href: LINKS.about },
      { label: "Careers", href: LINKS.careers },
      { label: "Press Kit", href: LINKS.pressKit },
      { label: "Security", href: LINKS.security },
      { label: "Blog", href: LINKS.blog },
      { label: "Glossary", href: LINKS.glossary },
      { label: "Compare Wallets", href: LINKS.compareWallets },
      { label: "Support", href: LINKS.supportFaq },
      { label: "Terms of Service", href: LINKS.terms },
      { label: "Privacy Notice", href: LINKS.privacy },
      { label: "Cookie Preferences", href: LINKS.cookiePreferences },
      { label: "Cookie Notice", href: LINKS.cookieNotice },
    ],
  },
];

const DOWNLOADS: FooterLink[] = [
  { label: "Download for iOS", href: LINKS.downloadIOS },
  { label: "Download Extension", href: LINKS.downloadExtension },
  { label: "Download APK", href: LINKS.downloadAPK },
  { label: "Download for Android", href: LINKS.downloadAndroid },
];

export function Footer() {
  return (
    <footer id="download" className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-16">
        <div className="text-center">
          <div className="text-sm font-semibold">Stay Connected:</div>
          <div className="mt-4 flex justify-center gap-2 flex-wrap">
            {SOCIALS.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={href}
                {...ext}
                aria-label={label}
                className="h-11 w-11 grid place-items-center rounded-xl bg-foreground text-background hover:opacity-80"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-8">
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="font-extrabold mb-4">{col.title}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {col.items.map((it, i) =>
                  "h" in it ? (
                    <li key={i} className="pt-3 font-extrabold text-foreground">{it.h}</li>
                  ) : (
                    <li key={i}>
                      <a href={it.href} {...ext} className="hover:text-foreground transition-colors">{it.label}</a>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex gap-3 justify-center flex-wrap">
          <div className="h-14 w-14 rounded-xl border border-border grid place-items-center text-[10px] text-center text-muted-foreground">ISO<br/>27701</div>
          <div className="h-14 w-14 rounded-xl border border-border grid place-items-center text-[10px] text-center text-muted-foreground">ISO<br/>27001</div>
        </div>

        <div className="mt-14 text-center">
          <h3 className="text-3xl md:text-5xl font-extrabold">Download Trust Wallet</h3>
          <p className="mt-3 text-muted-foreground">The most trusted & secure crypto wallet.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {DOWNLOADS.map((d) => (
              <motion.a
                key={d.label}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={d.href}
                {...ext}
                className="btn-outline"
              >
                {d.label}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center gap-3">
          <ShieldLogo size={64} />
          <div className="text-4xl md:text-6xl font-extrabold text-brand tracking-tight">TRUST</div>
        </div>
      </div>
    </footer>
  );
}
