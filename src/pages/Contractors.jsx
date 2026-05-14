import Navbar from "../components/Navbar";
import ContractorHero from "../sections/ContractorHero";
import Problem from "../sections/Problem";
import Solution from "../sections/Solution";
import Services from "../sections/Services";
import Portfolio from "../sections/Portfolio";
import Pricing from "../sections/Pricing";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";
import Footer from "../components/Footer";

const Contractors = () => {
  return (
    <>
      <Navbar />
      <ContractorHero />
      <Problem />
      <Solution />
      <Services />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
};

export default Contractors;