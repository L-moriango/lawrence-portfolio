import Image from "next/image";
import { motion } from "framer-motion";
import { FiMapPin, FiPhoneCall, FiMail } from "react-icons/fi";

//components
import AnimatedText from "./AnimatedText";

const About = () => {
  return (
    <section className=" relative pt-12 pb-12" id="about">
      <div className=" container mx-auto h-full">
        <div className="h-full flex items-center justify-center">
          {/* image + shapes*/}
          <div className="hidden xl:flex flex-1 pl-8">
            <div className="relative w-full max-w-[380px]">
              {/* <Image*/}
              <div className="w-[160px] h-[160] bg-accent absolute -left-5 -top-5 -z-10"></div>
              {/* image */}
              <div className="rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#e5f8f6] min-h-[480] flex items-end justify-center ">
                <Image
                  src="/assets/about/me-img.png"
                  width={350}
                  height={478}
                  quality={100}
                  priority
                  alt="about image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover h-auto w-auto"
                />
              </div>
              {/* relating shape */}
              <div className="absolute top-2/4 -right-[65] flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  <Image
                    src="/assets/about/shape-1.svg"
                    width={160}
                    height={160}
                    alt=""
                    sizes=""
                  />
                </motion.div>
                <div className="absolute text-center text-white font-bold top-1/2 -translate-y-1/2">
                  <div className="text-5xl font-bold leading-none">4+</div>
                  <div>
                    Years of <br />
                    Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* text */}
          <div className="flex flex-col items-center justify-center w-full xl:w-[50%] mx-auto xl:mx-0 gap-6 text-center">
            <div className="w-full">
              <AnimatedText
                text="Hi, I'm Lawrence."
                textStyles="text-4xl font-bold text-primary mb-2"
              />
              <p className="text-primary/90 text-lg py-1">
                Network Support Engineer | Software Developer | Cybersec Associate
              </p>
            </div>
            <p className="max-w-[768px] w-full mx-auto mb-6 text-justify">
              I design and develop scalable, secure and user-friendly websites and applications using modern technologies
              and best practices.
              <br />
              <br />
              Alongside software development, I provide networking solutions, IT consultation and user support — Specializing in network design
              and management while applying cybersecurity tools and principles to deliver reliable and secure IT services.
              <br />
              <br />
              Explore my work to see how I combine creativity with technical
              expertise to deliver exceptional and impactful digital experiences and robust IT solutions.
            </p>
            {/* info items */}
            <div className="flex flex-col lg:flex-row gap-12 xl:gap-6 max-w-max mx-auto xl:mx-0 items-center ">
              {/* item 1 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary text-center flex flex-col items-center gap-2"><FiMapPin className=" size-5 text-accent"/>Location</div>
                <p className="text-center">Mombasa, Kenya</p>
              </div>
              {/* item 2 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary text-center flex flex-col items-center gap-2"><FiPhoneCall className="size-5 text-accent"/>Phone</div>
                <p className="text-center">+254 711-668-974</p>
              </div>
              {/* item 3 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary text-center flex flex-col items-center gap-2"><FiMail className="size-5 text-accent"/>Email</div>
                <p className="text-center">lawrencemoriango27@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
