import MainLayout from "./components/layouts/MainLayout";
import AsFeatureOnSection from "./components/sections/AsFeatureOnSection";
import CoreFeaturesSection from "./components/sections/CoreFeaturesSection";
import DigitalArtMuseumSection from "./components/sections/DigitalArtMuseumSection";
import GamingPlatformSection from "./components/sections/GamingPlatformSection";
import HyperTronsNFTsSection from "./components/sections/HyperTronsNFTsSection";
import JugiTandonNFTsSection from "./components/sections/JugiTandonNFTsSection";
import LandingHeroSection from "./components/sections/LandingHeroSection";
import MultiChainSection from "./components/sections/MultiChainSection";
import NFTMarketPlaceSection from "./components/sections/NFTMarketPlaceSection";
import TokenMetricsSection from "./components/sections/TokenMetricsSection";
import TokenomicsSection from "./components/sections/TokenomicsSection";

export default function Home() {
  return (
    <MainLayout>
      <LandingHeroSection />
      <NFTMarketPlaceSection />
      <GamingPlatformSection />
      <MultiChainSection />
      <CoreFeaturesSection />
      <AsFeatureOnSection />
      <HyperTronsNFTsSection />
      <DigitalArtMuseumSection />
      <JugiTandonNFTsSection />
      <TokenomicsSection />
      <TokenMetricsSection />
    </MainLayout>
  )
}
