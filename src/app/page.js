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
