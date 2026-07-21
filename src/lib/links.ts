// Central registry of official Trust Wallet URLs.
// All navigation, footer, CTA, and download links across the app import from here
// so that URLs are managed in exactly one place.

export const TW = "https://trustwallet.com";

export const LINKS = {
  // Home
  home: `${TW}/`,

  // Downloads
  download: `${TW}/download`,
  downloadIOS:
    "https://apps.apple.com/app/apple-store/id1288339409?pt=118286467&ct=trustwallet.com&mt=8",
  downloadAndroid:
    "https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp&referrer=utm_source%3Dtrustwallet.com",
  downloadAPK: `${TW}/download/android-apk`,
  downloadExtension: `${TW}/browser-extension`,

  // Markets
  prices: `${TW}/prices`,
  converter: `${TW}/converter`,

  // Wallet products
  mobileApp: `${TW}/download`,
  browserExtension: `${TW}/browser-extension`,

  // Features
  swaps: `${TW}/swaps`,
  staking: `${TW}/staking`,
  nfts: `${TW}/nfts`,
  security: `${TW}/security`,
  buyCrypto: `${TW}/buy-crypto`,
  swift: `${TW}/swift`,
  rwas: `${TW}/rwa`,
  perps: `${TW}/perps`,
  prediction: `${TW}/prediction-markets`,

  // Build
  developerDocs: "https://developer.trustwallet.com/developer",
  walletCore: "https://github.com/trustwallet/wallet-core",
  submitDapp:
    "https://developer.trustwallet.com/developer/listing-new-dapps",
  getAssetsListed:
    "https://developer.trustwallet.com/developer/listing-new-assets",
  agentKit: `${TW}/agent-kit`,

  // Support
  supportFaq: "https://support.trustwallet.com/",
  supportContact: "https://support.trustwallet.com/en/support/tickets/new",

  // About
  about: `${TW}/about`,
  careers: `${TW}/careers`,
  pressKit: `${TW}/press`,
  blog: `${TW}/blog`,
  glossary: `${TW}/glossary`,
  compareWallets: `${TW}/compare`,
  terms: `${TW}/terms-of-service`,
  privacy: `${TW}/privacy-policy`,
  cookieNotice: `${TW}/cookie-notice`,
  cookiePreferences: `${TW}/cookie-notice`,

  // Per-asset wallet pages
  walletBitcoin: `${TW}/bitcoin-wallet`,
  walletUSDT: `${TW}/usdt-wallet`,
  walletTron: `${TW}/tron-wallet`,
  walletXRP: `${TW}/xrp-wallet`,
  walletTON: `${TW}/ton-wallet`,
  walletLitecoin: `${TW}/litecoin-wallet`,
  walletBEP20: `${TW}/bep20-wallet`,

  // Socials
  twitter: "https://twitter.com/TrustWallet",
  facebook: "https://www.facebook.com/trustwalletapp",
  instagram: "https://www.instagram.com/trustwallet/",
  github: "https://github.com/trustwallet",
  telegram: "https://t.me/trust_announcements",
  linkedin: "https://www.linkedin.com/company/trustwallet",
  youtube: "https://www.youtube.com/@TrustWalletOfficial",
  discord: "https://discord.gg/trustwallet",
} as const;

export const ext = {
  target: "_blank" as const,
  rel: "noopener noreferrer" as const,
};
