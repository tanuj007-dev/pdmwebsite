import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesHero from "../sections/ServicesHero";
import ServicesGrid from "../sections/ServicesGrid";
import Process from "../sections/Process";
import { motion } from "framer-motion";
import CTA from "../sections/CTA";
import WhyChoose from "../sections/WhyChoose";
import Stats from "../sections/Stats";


const Services = () => {
  return (
    <>
      <Navbar />
      <ServicesHero />  
     

      <ServicesGrid />
        <WhyChoose />
        <Stats />
        <Process />
        <CTA />
         

      <Footer />
    </>
  );
};

export default Services;