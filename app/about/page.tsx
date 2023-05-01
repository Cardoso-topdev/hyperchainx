import MainLayout from '../components/layouts/MainLayout';
import { HeroSection } from '../components/about/Hero';
import { TeamSection } from '../components/about/Team';
import members from '../data/about.json';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <TeamSection members={members as any} />
    </MainLayout>
  );
}
