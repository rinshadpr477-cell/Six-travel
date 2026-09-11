import Hero from "@/components/Hero";
import DifferentWay from "@/components/DifferentWay";
import Excellence from "@/components/Excellence";
import Destinations from "@/components/Destinations";
import KeralaBanner from "@/components/KeralaBanner";
import Kerala from "@/components/Kerala";
import Portfolio from "@/components/Portfolio";
import GlobalReach from "@/components/GlobalReach";
import Enterprise from "@/components/Enterprise";
import Curation from "@/components/Curation";
import SixStandard from "@/components/SixStandard";
import WhoWeServe from "@/components/WhoWeServe";
import BeyondItinerary from "@/components/BeyondItinerary";
import Selective from "@/components/Selective";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <DifferentWay />
        <Excellence />
        <Destinations />
        <KeralaBanner />
        <Kerala />
        <Portfolio />
        <GlobalReach />
        <Enterprise />
        <Curation />
        <SixStandard />
        <WhoWeServe />
        <BeyondItinerary />
        <Selective />
        <Contact />
      </main>
      <Footer />
    </>
  );
}