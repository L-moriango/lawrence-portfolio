import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from "../AnimatedText";
import WorkItem from "./WorkItem";

import { MdExpandMore } from "react-icons/md";

// sample data for projects with various categories
const data = [
  {
    href: "",
    category: "design",
    img: "/assets/work/thumb-1.png",
    title: "Lumina UI Kit",
    tool: "Figma, Sketch",
    description: "A sleek and modern UI kit for Figma.",
  },
  {
    href: "",
    category: "design",
    img: "/assets/work/thumb-2.png",
    title: "Masaru-MMF Dashboard",
    tool: "Figma",
    description: "A responsive dashboard template for web applications.",
  },
  {
    href: "",
    category: "frontend",
    img: "/assets/work/wuc-2.png",
    title: "Vijana Vision Web Platform",
    tool: "Next.js, React, Tailwind CSS",
    description: "A community-driven platform for youth empowerment."
  },
  {
    href: "",
    category: "frontend",
    img: "/assets/work/wuc-1.png",
    title: "Musa-Tims interior design Portfolio",
    tool: "Next.js, React, Tailwind CSS, Framer Motion",
    description: "A portfolio showcasing interior design projects.",
  },
  {
    href: "",
    category: "frontend",
    img: "/assets/work/wuc-2.png",
    title: "Construction website",
    tool: "Next.js, React, Tailwind CSS, Framer Motion, Sanity CMS",
    description: "A website showcasing construction projects.",
  },
  {
    href: "",
    category: "frontend",
    img: "/assets/work/wuc-cs.jpg",
    title: "Smart Link Tech Landing Page",
    tool: "Next.js, React, Tailwind CSS, Framer Motion",
    description: "A website landing page for Smart Link 360 Technologies."
  },
  {
    href: "",
    category: "fullstack",
    img: "/assets/work/wuc-1.png",
    title: "Apollo Travel Platform",
    tool: "Next.js, React, Node.js, MongoDB, Tailwind CSS, Framer Motion, Sanity CMS",
    description: "A fullstack travel booking platform with real-time data."
  },
  {
    href: "",
    category: "fullstack",
    img: "/assets/work/wuc-2.png",
    title: "Masaru-MMF Dashboard",
    tool: "Laravel Framework, Livewire, Alpine.js, Vue.js",
    description: "A responsive dashboard template for web applications.",
  },
  {
    href: "",
    category: "fullstack",
    img: "/assets/work/wuc-1.png",
    title: "HR Management System",
    tool: "Laravel Framework, Livewire, Alpine.js, Vue.js",
    description: "A comprehensive HR management system built using Laravel 12 framework.",
  },
  {
    href: "",
    category: "fullstack",
    img: "/assets/work/wuc-1.png",
    title: "Ollando Motors & Car Rental",
    tool: "Next.js, React, Node.js, MongoDB, Tailwind CSS, Framer Motion, Sanity CMS",
    description: "A responsive dashboard template for web applications.",
  },
  {
    href: "",
    category: "fullstack",
    img: "/assets/work/wuc-2.png",
    title: "Horizon E-commerce",
    tool: "Next.js, React, Node.js, MongoDB, Tailwind CSS",
    description: "An E-commerce platform with a focus on user experience."
  },
  {
    href: "",
    category: "Networking",
    img: "/assets/work/net-ip.jpeg",
    title: "F&L Network Systems",
    tool: "Cisco, Juniper, Network Security, MikroTik, Routing, Packet Tracer",
    description: "A comprehensive networking solution design for businesses."
  },
  {
    href: "",
    category: "Networking",
    img: "/assets/work/net-ip.jpeg",
    title: "Mellow Network Solutions",
    tool: "Cisco, Juniper, Network Security, MikroTik, Routing, Packet Tracer",
    description: "Innovative networking solutions for modern enterprises."
  },
  {
    href: "",
    category: "Networking",
    img: "/assets/work/net-ip.jpeg",
    title: "Nicom Networking Solutions",
    tool: "Cisco, Juniper, Network Security, MikroTik, Routing, Packet Tracer",
    description: "Innovative networking solutions for modern enterprises."
  },
  {
    href: "",
    category: "Cybersecurity",
    img: "/assets/work/SOC-p.png",
    title: "SMB Exploitation - Pentesting",
    tool: "Kali Linux, Metasploit, Nmap, Wireshark",
    description: "A penetration testing project focused on SMB exploitation."
  },
  {
    href: "",
    category: "Cybersecurity",
    img: "/assets/work/web-exploit.webp",
    title: "Web Application Penetration Testing",
    tool: "Python, Kali Linux, Burp Suite, OWASP, Selenium",
    description: "A penetration testing project for web applications."
  },
  {
    href: "",
    category: "Cybersecurity",
    img: "/assets/work/mal-a-2.gif",
    title: "Malware Analysis",
    tool: "virtualbox, sandbox,Cuckoo",
    description: "A project focused on ethical hacking and malware analysis."
  },
];

const Work = () => {
  // extract unique categories
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );

  // create tab data with "all" + categories
  const tabData = [
    { category: "all" },
    ...uniqueCategories.map((category) => ({ category })),
  ];

  // load more state (per session)
  const [visibleItems, setVisibleItems] = useState(3);

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 3);
  };

  return (
    <section className="pt-14" id="work">
      <div className="container mx-auto">
        <Tabs defaultValue="all" className="w-full flex flex-col">
          <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[30px]">
            <AnimatedText
              text="My Latest Work"
              textStyles="h1 text-5xl mb-[30px] xl:mb-0"
            />
            {/* Tab Triggers */}
            <TabsList className="max-w-max h-full mb-[30px] flex-wrap flex-col md:flex-row gap-4 md:gap-0">
              {tabData.map((item, index) => (
                <TabsTrigger
                  value={item.category}
                  key={index}
                  className="capitalize w-[120px]"
                >
                  {item.category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Tab Content */}
          {tabData.map((tab, index) => {
            const filtered =
              tab.category === "all"
                ? data
                : data.filter((item) => item.category === tab.category);

            return (
              <TabsContent value={tab.category} key={index} className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
                  <AnimatePresence>
                    {filtered.slice(0, visibleItems).map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                      >
                        <WorkItem {...item} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Load More */}
                {visibleItems < filtered.length && (
                  <div className="flex justify-center mt-12 py-2">
                    <button
                      onClick={loadMoreItems}
                      className="btn btn-accent flex items-center gap-2 py-0"
                    >
                      Load More
                      <MdExpandMore className="size-6" />
                    </button>
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default Work;
