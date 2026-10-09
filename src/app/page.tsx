import { HomeHeader } from "@/components/site/HomeHeader";
import { CountdownBar } from "@/components/site/CountdownBar";
import { HomeHero } from "@/components/site/HomeHero";
import { Manifesto } from "@/components/site/Manifesto";
import {
  HomeChallenge,
  HomePaths,
  HomeGuides,
  HomeSocial,
} from "@/components/site/HomeSections";
import { HomeFooter } from "@/components/site/HomeFooter";

export default function Home() {
  return (
    <>
      <CountdownBar />
      <HomeHeader />
      <main>
        <HomeHero />
        <Manifesto />
        <HomeChallenge />
        <HomePaths />
        <HomeGuides />
        <HomeSocial />
      </main>
      <HomeFooter />
    </>
  );
}
