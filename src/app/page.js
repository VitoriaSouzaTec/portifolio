import HomeComponent from "@/components/home";
import Nav from "@/components/nav";
import AccordionUsage from "@/components/hardskills";
import AboutSection from "@/components/aboutMe";
import AlternateReverseTimeline from "@/components/education";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import CarouselProjetos from "@/components/portifolio";
import ThreeBackground from "@/components/ThreeBackground";
import ServicosSection from "@/components/servicos";

export default function Home() {
  return (
    <>
      <ThreeBackground />

      <Nav />

      <div className="relative w-full font-sans min-h-screen pt-16">
        <HomeComponent />
        <AboutSection />
        <AccordionUsage />
        <AlternateReverseTimeline />
        <CarouselProjetos />
        <Contact />
        <ServicosSection />
      </div>

      <Footer />
    </>
  );
}
