import FinalCTA from "./components/FinalCTA";
import Hero from "./components/Hero";

import Process from "./components/Process";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";


export default function Home() {
  return (
    <>
      
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FinalCTA />
      
    </>
  );
}