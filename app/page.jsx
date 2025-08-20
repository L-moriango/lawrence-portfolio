"use client";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Work from "@/components/Work/Work";
import Contact from "@/components/Contact";
import FixedMenu from "@/components/FixedMenu";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

const Home = () => {
  //implement locomotive scroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);

  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="bg-secondary/10 text-primary">
        <FixedMenu />
        <Services />
        <About />
        <Journey />
        <Work />
        {/* <Testimonial /> */}
        <Contact />
        <Footer />
        {/* temporary div */}
      </div>
    </div>
  );
};

export default Home;
