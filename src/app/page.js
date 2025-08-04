import HomeComponent from "@/components/home";
import Nav from "@/components/nav";
import AccordionUsage from "@/components/hardskills";
import AboutSection from "@/components/aboutMe";
import AlternateReverseTimeline from "@/components/education";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import CarouselProjetos from "@/components/portifolio";

export default function Home() {
  return (
    <>
      {/* Círculo de fundo */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-b from-[#fa39ad] to-[#fe6c4c] blur-[100px] -z-10" />

      <Nav />

      <div className="relative w-full font-sans min-h-screen pt-16">
        <HomeComponent />
        <AboutSection />
        <AccordionUsage />
        <AlternateReverseTimeline />
        <CarouselProjetos />
        <Contact />
      </div>

      <Footer />
    </>
  );
}
