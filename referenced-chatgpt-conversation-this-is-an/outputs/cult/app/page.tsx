import { HomePackages, HomeWork, HomeWorlds } from '@/components/cult/home-index';
import { Hero } from '@/components/cult/hero';
import {
  Problem,
  FinalCTA,
  Footer,
} from '@/components/cult/sections';
export default function Home() {
  return (
    <>
      <main id="main" className="home-page">
        <Hero />
        <HomeWork />
        <Problem />
        <HomePackages />
        <HomeWorlds />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
