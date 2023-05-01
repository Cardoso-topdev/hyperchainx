import MainLayout from "./components/layouts/MainLayout";
import LandingHeroSection from "./components/sections/LandingHeroSection";
import NFTMarketPlaceSection from "./components/sections/NFTMarketPlaceSection";

export default function Home() {
  return (
    <MainLayout>
      <LandingHeroSection />
      <NFTMarketPlaceSection />
    </MainLayout>
  )
}
