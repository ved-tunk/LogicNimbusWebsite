import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Approach from "@/components/Approach";
import Tunk from "@/components/Tunk";
import Industries from "@/components/Industries";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="top">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Process />
        <Tunk />
        <Approach />
        <Industries />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
