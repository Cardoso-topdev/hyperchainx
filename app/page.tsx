import MainLayout from "./components/layouts/MainLayout";
import AsFeatureOnSection from "./components/sections/AsFeatureOnSection";
import CoreFeaturesSection from "./components/sections/CoreFeaturesSection";
import GamingPlatformSection from "./components/sections/GamingPlatformSection";
import LandingHeroSection from "./components/sections/LandingHeroSection";
import MultiChainSection from "./components/sections/MultiChainSection";
import NFTMarketPlaceSection from "./components/sections/NFTMarketPlaceSection";

export default function Home() {
  return (
    <MainLayout>
      <LandingHeroSection />
      <NFTMarketPlaceSection />
      <GamingPlatformSection />
      <MultiChainSection />
      <CoreFeaturesSection />
      <AsFeatureOnSection />
    </MainLayout>
  )
}
