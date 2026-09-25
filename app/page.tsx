import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Counters from "@/components/Counters";
import About from "@/components/About";
import TopProducts from "@/components/TopProducts";
import Expertise from "@/components/Expertise";
import WhyChooseUs from "@/components/WhyChooseUs";
import Heritage from "@/components/Heritage";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Clients from "@/components/Clients";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Floaters from "@/components/Floaters";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />

      <div id="home">
        <Hero />
        <Counters />
      </div>

      <About />
      <TopProducts />
      <Expertise />
      <WhyChooseUs />
      <Heritage />
      <Testimonials />
      <FAQ />
      <Clients />
      <CTA />
      <Footer />
      <Floaters />
    </>
  );
}
