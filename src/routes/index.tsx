import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PromoCarousel } from "@/components/PromoCarousel";
import { CTABanner } from "@/components/CTABanner";
import  ChainSupportTable  from "@/components/ChainSupportTable";
import { StatsBar } from "@/components/StatsBar";
import { GradientFeatureCard } from "@/components/GradientFeatureCard";
import { SecurityCardGrid } from "@/components/SecurityCardGrid";
import { WalletShowcase } from "@/components/WalletShowcase";
import { RatingsBlock } from "@/components/RatingsBlock";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Footer } from "@/components/Footer";
import depositImg from "@/assets/deposit.png";
import privacyImg from "@/assets/privacy.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trust Wallet — True crypto ownership. Powerful Web3 experiences" },
      {
        name: "description",
        content:
          "Unlock the power of your cryptocurrency assets and explore the world of Web3 with Trust Wallet. Buy, swap, stake, and manage NFTs in self-custody.",
      },
      { property: "og:title", content: "Trust Wallet — Powerful Web3 experiences" },
      {
        property: "og:description",
        content:
          "Self-custody wallet for millions of assets across 100+ blockchains.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <PromoCarousel />
        <CTABanner />
        <ChainSupportTable />
        <StatsBar />
        <GradientFeatureCard
          bgClass="bg-gradient-peach"
          eyebrow="SIMPLE. SEAMLESS."
          title="Simple. Seamless."
          subtitle="A mobile and desktop experience designed to make crypto feel effortless."
          cardTitle="Deposit crypto easily from exchanges"
          ctaLabel="Get started with deposits"
          ctaHref="/buy-crypto"
          ctaVariant="outline"
          illustrationSrc={depositImg}
          illustrationLabel="Deposits illustration"
        />
        <GradientFeatureCard
          bgClass="bg-gradient-pinklime"
          title="Stay private and secure"
          subtitle="Your keys, your crypto. Trust Wallet is a true self-custody wallet — you're always in control."
          cardTitle="True ownership of your crypto assets"
          ctaLabel="Get Started"
          ctaHref="/security"
          ctaVariant="primary"
          illustrationSrc={privacyImg}
          illustrationLabel="Ownership illustration"
        />
        <SecurityCardGrid />
        <WalletShowcase />
        <RatingsBlock />
        <TestimonialCarousel />
      </main>
      <Footer />
    </div>
  );
}
