"use client";
import { useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import { SiMinutemailer } from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

// components
import RotatingShape from "./RotatingShape";
import Header from "./Header";
import Stats from "./Stats/Stats";

const Hero = () => {
  // Add useEffect to handle any client-side only operations
  useEffect(() => {
    // Any client-side initialization can go here
  }, []);

  // Handler for CV download/view button click
  const handleClick = async () => {
    try {
      // Get the current website's origin for security validation
      const origin = window.location.origin;

      // Fetch the CV file from our API endpoint
      // Include origin in headers for server-side validation
      const response = await fetch("/api/download-cv", {
        headers: {
          "X-Requested-From": origin,
        },
      });

      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Failed to fetch CV");
      }

      // Convert the response to a blob (binary data)
      const blob = await response.blob();
      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Open PDF in new tab for viewing
      window.open(url, "_blank");

      {
        /* //Create a temporary anchor element for download
      const link = document.createElement("a");
      link.href = url;
      link.download = "Lawrence_Moriango_CV.pdf"; // Set desired filename

      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);*/
      }

      // Clean up the blob URL after a delay to prevent memory leaks
      // Delay ensures the PDF has time to load in the new tab
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
      }, 1000);
    } catch (error) {
      // Handle any errors that occur during the process
      console.error("Error with CV:", error);
      alert("Failed to open CV. Please try again.");
    }
  };

  return (
    <section
      className="h-[800px] relative bg-accent/10 xl:bg-white"
      id="home"
      suppressHydrationWarning
    >
      <Header />
      <div className="container mx-auto h-full">
        <div
          className="relative z-20 h-full w-full xl:max-w-[768px] flex flex-col
              items-center xl:items-start justify-center xl:text-left pt-8 px-4 "
        >
          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mb-6 block xl:hidden"
          >
            <Image
              src="/assets/hero/me-profile.jpeg"
              width={130}
              height={130}
              alt="Lawrence Moriango"
              className="mt-16 rounded-full border-2 border-accent object-cover shadow-lg"
              priority
            />
          </motion.div>
          {/* PROFILE  */}

          <h1 className="h1 mb-2 max-w-[320px] xl:max-w-none text-center xl:text-left">
            <span className="text-accent">I Build And </span>Design <br />
            <span className="text-accent">robust... </span>scalable <br />
            <TypeAnimation
              preRenderFirstString={true}
              sequence={["Websites,", 200, "Apps", 200, "and Networks.", 200]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={false}
              className="ml-2 xl:ml-4"
            />
          </h1>
          <p className="sm:lead mx-w-[476px] mt-2 mb-4 text-center xl:text-left">
            Delivering powerful, custom websites and
            <span className="md:flex items-center justify-center">
              applications that blend aesthetics with performance.
            </span>
          </p>
          <div className="items-center justify-center flex flex-col lg:flex-row lg:gap-8 mb-8">
            <button
              onClick={handleClick}
              className="btn btn-accent mb-6 lg:mb-0 flex items-center gap-3"
            >
              <FiDownload className="size-5" />
              Download CV
            </button>

            <ScrollLink to="contact" smooth>
              <button className="btn btn-accent -mb-2 lg:mb-0 flex items-center gap-3">
                <SiMinutemailer className="size-5" />
                Contact Me
              </button>
            </ScrollLink>
          </div>
          {/* stats */}
          <Stats />
        </div>
        {/* image */}
        <div className="hidden xl:flex w-[55vw] h-[800px] absolute top-0 right-0 bg-accent">
          <div className="absolute w-[558px] h-[642px] bottom-0 z-40 left-[6.5vw]">
            <Image
              src="/assets/hero/dev.png"
              fill
              quality={100}
              priority
              as="image"
              className="object-contain"
              alt="Developer"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 558px"
            />
          </div>
          {/* arrow shape */}
          <div
            className="hidden xl:flex absolute top-40 left-[4vw]"
            data-scroll
            data-scroll-speed="0.05"
          >
            <Image
              src="/assets/hero/arrow.svg"
              width={160}
              height={160}
              alt=""
              className="object-cover h-auto w-auto"
            />
          </div>
          {/* shape 1 */}
          <div
            className="absolute top-[600px] left-[3vw]"
            data-scroll
            data-scroll-speed="0.2"
          >
            <RotatingShape
              content={
                <Image
                  src="assets/hero/shape-1.svg"
                  width={38}
                  height={38}
                  alt=""
                  className="object-cover h-auto w-auto"
                />
              }
              direction="left"
              duration={6}
            />
          </div>
          {/* shape 2 */}
          <div
            className="absolute top-[240px] xl:left-[35vw]"
            data-scroll
            data-scroll-speed="0.1"
          >
            <RotatingShape
              content={
                <Image
                  src="assets/hero/shape-2.svg"
                  width={34}
                  height={34}
                  alt=""
                  className="object-cover h-auto w-auto"
                />
              }
              direction="right"
              duration={5}
            />
          </div>
          {/* shape 3 */}
          <div
            className="absolute top-[480px] xl:left-[40vw]"
            data-scroll
            data-scroll-speed="0.08"
          >
            <RotatingShape
              content={
                <Image
                  src="assets/hero/shape-3.svg"
                  width={36}
                  height={36}
                  alt=""
                  className="object-cover h-auto w-auto"
                />
              }
              direction="left"
              duration={7}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
