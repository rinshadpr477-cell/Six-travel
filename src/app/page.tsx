import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SixStandard from "@/components/SixStandard";
import SixExperience from "@/components/SixExperience";
import Philosophy from "@/components/Philosophy";
import GlobalReach from "@/components/GlobalReach";
import Audience from "@/components/Audience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SixStandard />
        <SixExperience />
        <Philosophy />
        <GlobalReach />
        <Audience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}