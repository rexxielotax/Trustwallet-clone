import { LINKS } from "./links";

export type MenuItem = { title: string; desc?: string; badge?: string; href: string };
export type MenuSection = { key: string; label: string; items: MenuItem[] };

export const MENU: MenuSection[] = [
  {
    key: "markets",
    label: "Markets",
    items: [
      { title: "Prices", badge: "NEW", desc: "Live crypto prices & market data", href: LINKS.prices },
      { title: "Converter", badge: "NEW", desc: "Convert crypto to any currency instantly", href: LINKS.converter },
    ],
  },
  {
    key: "wallet",
    label: "Wallet",
    items: [
      { title: "Mobile App", desc: "The world of Web3 in your pocket", href: LINKS.mobileApp },
      { title: "Browser Extension", desc: "An optimized Web3 experience for desktop", href: LINKS.browserExtension },
    ],
  },
  {
    key: "features",
    label: "Features",
    items: [
      { title: "Swaps", desc: "Swap securely and seamlessly", href: LINKS.swaps },
      { title: "Staking", desc: "Earn crypto rewards while securing networks", href: LINKS.staking },
      { title: "NFTs", desc: "Explore the world of NFTs", href: LINKS.nfts },
      { title: "Security", desc: "Learn how we keep your assets & Web3 journey safe", href: LINKS.security },
      { title: "Buy Crypto", desc: "Buy crypto in under five minutes", href: LINKS.buyCrypto },
      { title: "SWIFT: Smart Contract Wallet", desc: "Explore Web3 easily with account abstraction features", href: LINKS.swift },
      { title: "RWAs", badge: "NEW", desc: "Tokenized real-world assets, on-chain in self-custody", href: LINKS.rwas },
      { title: "Perps", badge: "NEW", desc: "Trade perpetual futures with up to 200x leverage", href: LINKS.perps },
      { title: "Prediction Markets", badge: "NEW", desc: "Trade Polymarket, Predict.fun, and Hyperliquid in self-custody", href: LINKS.prediction },
    ],
  },
  {
    key: "build",
    label: "Build",
    items: [
      { title: "Developer Docs", desc: "Get guides for building powerful Web3 applications", href: LINKS.developerDocs },
      { title: "Wallet Core", desc: "Open-source, mobile-focused crypto wallet library", href: LINKS.walletCore },
      { title: "Submit dApp", desc: "Get your dApp in front of millions", href: LINKS.submitDapp },
      { title: "Get assets listed", desc: "Elevate your asset's exposure", href: LINKS.getAssetsListed },
      { title: "Agent Kit", badge: "NEW", desc: "Build on agent skills for wallet operations", href: LINKS.agentKit },
    ],
  },
  {
    key: "support",
    label: "Support",
    items: [
      { title: "FAQ", desc: "Get answers to your most pressing questions", href: LINKS.supportFaq },
      { title: "Contact Us", desc: "Reach out for personalized support", href: LINKS.supportContact },
    ],
  },
  {
    key: "about",
    label: "About",
    items: [
      { title: "About Us", href: LINKS.about },
      { title: "Careers", href: LINKS.careers },
      { title: "Press Kit", href: LINKS.pressKit },
      { title: "Blog", href: LINKS.blog },
      { title: "Glossary", badge: "NEW", href: LINKS.glossary },
      { title: "Compare Wallets", badge: "NEW", href: LINKS.compareWallets },
      { title: "Terms of Service", href: LINKS.terms },
      { title: "Privacy Policy", href: LINKS.privacy },
    ],
  },
];
