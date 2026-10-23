import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Counters from "@/components/Counters";
import BakeryIntro from "@/components/BakeryIntro";
import About from "@/components/About";
import TopProducts from "@/components/TopProducts";
import Expertise from "@/components/Expertise";
import WhyChooseUs from "@/components/WhyChooseUs";
import Heritage from "@/components/Heritage";
import WhoUses from "@/components/WhoUses";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Clients from "@/components/Clients";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Floaters from "@/components/Floaters";
import homeSchema from "@/lib/home-schema.json";

const title = "Best Bakery Machine Manufacturer in Delhi | J. S. Engineering";
const description =
  "Trusted bakery machine manufacturer in Delhi since 1948. J. S. Engineering makes high-speed bread, toast and cake slicers. Get a free quote today.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["bakery machine manufacturer", "bakery machine manufacturer in Delhi"],
  alternates: { canonical: "/" },
  openGraph: { title, description, type: "website", url: "/", siteName: "Js Sohal" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
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
      <WhoUses />
      <Testimonials />
      <BakeryIntro />
      <FAQ />
      <Clients />
      <CTA />
      <ContactForm />
      <Footer />
      <Floaters />
    </>
  );
}
