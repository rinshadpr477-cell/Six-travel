import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Kerala from "@/components/Kerala";
import GlobalReach from "@/components/GlobalReach";
import Enterprise from "@/components/Enterprise";
import Curation from "@/components/Curation";
import SixStandard from "@/components/SixStandard";
import Selective from "@/components/Selective";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Portfolio />
        <Kerala />
        <GlobalReach />
        <Enterprise />
        <Curation />
        <SixStandard />
        <Selective />
        <Contact />
      </main>
      <Footer />
    </>
  );
}