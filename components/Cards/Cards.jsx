"use client";
import Card from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaHtml5,
  FaJs,
  FaReact,
  FaPython,
  FaLaravel,
  FaWordpress,
  FaFigma,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa6";
import {
  SiMysql,
  SiNextdotjs,
  SiTypescript,
  SiVuedotjs,
  SiExpress,
  SiPhp,
  SiSpring,
  SiCss3,
  SiParrotsecurity,
  SiCyberdefenders,
  SiMetasploit,
} from "react-icons/si";
import { TbNetwork } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
//import { DiNodejs } from "react-icons/di";

const journey = [
  // education
  {
    type: "education",
    institution: "Technical University of Mombasa (TUM)",
    logoUrl: "assets/journey/education/logo-1.svg",
    qualification: "Bachelor of Science in Information Technology",
    duration: "2016 - 2024",
    description:
      "Gained knowledge and skills in software development, networking, cybersecurity, and database management. Developed a strong foundation in computer science principles and practices.",
  },
  {
    type: "education",
    institution:
      "United States International University-Africa (Cyber Shujaa Program)",
    logoUrl: "assets/journey/education/institution-1.svg",
    qualification: "Cisco Ethical Hacking (CEH)",
    duration: "Sept 2020",
    description:
      "Gained knowledge and skills in ethical hacking, penetration testing, and vulnerability assessment methodologies. Developed proficiency in using various security tools and techniques to identify and mitigate security risks.",
  },
  {
    type: "education",
    institution: "Cisco Networking Academy",
    logoUrl: "assets/journey/education/cisco-logo-3.svg",
    qualification: "Certified CCNA-(ENSA & SRWE), CCNP-ENCORE ",
    duration: "Jan 2024 - Oct 2024",
    description:
      "Gained practical knowledge in designing, configuring, and managing network systems and infrastructure using Cisco devices-switches, routers, firewalls, and related technologies, along with experience in Mikrotik and Juniper.",
  },
  {
    type: "education",
    institution: "Microsoft via LinkedIn",
    logoUrl: "assets/journey/education/logo-31.svg",
    qualification: "Career Essentials in Cybersecurity ",
    duration: "May 2025",
    description:
      "Built strong foundation in cybersecurity principles, risk management, and security tools, while developing skills in threat and vulnerability management, information security awareness and protecting systems & networks from cyber threats.",
  },
  {
    type: "education",
    institution: "IBM Academy",
    logoUrl: "assets/journey/education/IBM-logo.svg",
    qualification: "IBM Web Development Professional Cert",
    duration: "Jul 2025 - Aug 2025",
    description:
      "Gained experience in front-end and back-end web development technologies, focusing on HTML, CSS, JavaScript, React, Node.js and databases.",
  },
  {
    type: "education",
    institution:
      "Equator Institute of Technology and Professional Studies via TUM",
    logoUrl: "assets/journey/education/institution-2.svg",
    qualification: "Laravel Frameworks for Web Development Cert",
    duration: "April 2022 - Sept 2022",
    description:
      "Learned and implemented Laravel-PHP framework for web development. Gained experience in building web applications and APIs using Laravel.",
  },

  // experience
  {
    type: "experience",
    company: "F&L Networks",
    logoUrl: "assets/journey/experience/FL-logo.svg",
    position: "Network Support Engineer",
    duration: "Jul 2024 - Present",
    description:
      "Install and maintain network systems and infrastructure. Collaborate with various teams to create and maintain robust and scalable network systems.",
    description2:
      "Tech-stack & Tools:- RouterOS | Cisco IOS | Solaris | Fortinet | WinBox| Ubiquiti UISP | Wireshark | NMAP | Zabbix | Dude",
  },
  {
    type: "experience",
    company: "Freelance (Part-time)",
    logoUrl: "assets/journey/experience/logo-1.svg",
    position: "Fullstack Developer",
    duration: "Aug 2024 - Present",
    description:
      "Design, develop, and maintain responsive websites and web applications, ensuring cross-browser compatibility and delivering scalable solutions through team collaboration",
    description2:
      "Tech-stack & Tools :- React | Next | Node | JavaScript | LaravelPHP | Git | Github",
  },
  {
    type: "experience",
    company: "Green World Campaign - Kenya",
    logoUrl: "assets/journey/experience/logo-2.svg",
    position: "Software Developer Trainee",
    duration: "Feb-April, 2024",
    description:
      "Contributed to the A.I.R.S platform by designing and implementing features to enhance user experience and engagement, while providing user training, support, maintenance, and bug fixes.",
    description2:
      "Tech-stack & Tools:- React | Next | Node | Python | JavaScript | Git | Github",
  },
  {
    type: "experience",
    company: "Muthu Nyali Beach Hotel & Spa",
    logoUrl: "assets/journey/experience/MGM-logo.svg",
    position: "ICT System Admin Trainee | Technical Support Assistant",
    duration: "Dec 2022 - May 2023",
    description:
      "Managed server, network and computer systems for optimal performance and efficiency in service delivery. Rendered technical and user support for various software applications and POS systems to staff and guests.",
  },
  {
    type: "experience",
    company: "BillSasa Kenya",
    logoUrl: "assets/journey/experience/Billsasa-logo.svg",
    position: "Co-Founder | ICT Manager | IT Specialist",
    duration: "Feb 2022 - Nov 2022",
    description:
      "Co-founded and managed the ICT department, overseeing all technical operations and support services.",
  },
  {
    type: "experience",
    company: "StoreSoko Trading Solutions",
    logoUrl: "assets/journey/experience/storesoko-logo.svg",
    position: "Co-Founder| ICT Manager ",
    duration: "Nov 2018 - Sept 2020",
    description:
      "Co-founded and managed the ICT department, overseeing all technical operations and support services. Developed and maintained the company website and applications.",
  },
  {
    type: "experience",
    company: "National Housing Corporation (NHC)",
    logoUrl: "assets/journey/experience/NHC-logo-1.svg",
    position: "ICT Technical Support Assistant and Trainee",
    duration: "May 2019 - Nov 2019",
    description:
      "Installed, Configured and maintained corporate computer and network systems. Planned and optimized corporate network and application systems, improving service delivery to clients.",
  },

  // skills
  {
    type: "skill",
    title: "Front-End Development",
    name: "HTML",
    icon: <FaHtml5 />,
    description:
      "Craft structured web content using HTML5 effectively for modern websites, ensuring markup is semantic and accessible.",
  },
  {
    type: "skill",
    title: "Front-End Development",
    name: "CSS",
    icon: <SiCss3 />,
    skill: "CSS",
    description:
      "Styling responsive web pages using CSS3, ensuring an appealing user experience with modern design and layouts.",
  },
  {
    type: "skill",
    title: "Front-End Development",
    name: "TypeScript",
    icon: <SiTypescript />,
    description:
      "Building scalable and maintainable web applications using TypeScript, ensuring type safety and improved developer experience.",
  },
  {
    type: "skill",
    title: "Front-End Development",
    name: "JavaScript",
    icon: <FaJs />,
    description:
      "Developing interactive and dynamic web applications using JavaScript, ensuring user-friendly interfaces and experiences.",
  },
  {
    type: "skill",
    title: "Front-End Development",
    name: "WordPress",
    icon: <FaWordpress />,
    description:
      " Developing dynamic and responsive websites using WordPress, simplifying content management processes for clients while ensuring scalability and performance.",
  },
  {
    type: "skill",
    title: "Front-End Development",
    name: "Vue.js",
    icon: <SiVuedotjs />,
    description:
      "Building scalable and dynamic user interfaces using Vue.js, optimizing component-driven design for seamless experiences and efficiency ensuring high performance and responsiveness.",
  },
  {
    type: "skill",
    title: "Front-End Development",
    name: "React Framework",
    icon: <FaReact />,
    description:
      "Building scalable and dynamic user interfaces using React.js, optimizing component-driven design for seamless experiences and efficiency ensuring high performance and responsiveness.",
  },
  {
    type: "skill",
    title: "Full-Stack Development",
    name: "Next.js",
    icon: <SiNextdotjs />,
    description:
      "Building scalable and dynamic user interfaces using Next.js, optimizing server-side rendering and static site generation for seamless experiences and efficiency ensuring high performance and responsiveness.",
  },
  {
    type: "skill",
    title: "Back-End Development",
    name: "Python",
    icon: <FaPython />,
    description:
      "Building dynamic and responsive web applications using Python, ensuring robust server-side logic and seamless integration with front-end technologies.",
  },
  {
    type: "skill",
    title: "Back-End Development",
    name: "PHP",
    icon: <SiPhp />,
    description:
      "Building dynamic and responsive web applications using PHP, ensuring robust server-side logic and seamless integration with front-end technologies.",
  },
  {
    type: "skill",
    title: "Back-End Development",
    name: "Laravel Framework",
    icon: <FaLaravel />,
    description:
      "Building scalable and dynamic web user interfaces and applications using Laravel framework, optimizing MVC-driven design for seamless experiences and efficiency ensuring robustness and high performance.",
  },
  {
    type: "skill",
    title: "Back-End Development",
    name: "Express.js",
    icon: <SiExpress />,
    description:
      "Building scalable and dynamic web user interfaces and applications using Express.js, a node framework, for optimizing JavaScript-based development for seamless experiences and efficiency ensuring robustness and high performance.",
  },
  {
    type: "skill",
    title: "Back-End Development",
    name: "Node Framework",
    icon: <FaNodeJs />,
    description:
      "Building scalable and dynamic web user interfaces and applications using Node framework, optimizing event-driven architecture for seamless experiences and efficiency ensuring robustness and high performance.",
  },
  {
    type: "skill",
    title: "Back-End Development",
    name: "Spring Boot",
    icon: <SiSpring />,
    description:
      "Building scalable and dynamic web user interfaces and applications using Spring Boot, optimizing Java-based development for seamless experiences and efficiency ensuring robustness and high performance.",
  },
  {
    type: "skill",
    title: "Back-End Development",
    name: "MySQL Database",
    icon: <SiMysql />,
    description:
      "Integration of web applications with MySQL database, optimizing data management and retrieval for seamless experiences and efficiency ensuring robustness and high performance.",
  },
  {
    type: "skill",
    title: "Version Control",
    name: "Git",
    icon: <FaGitAlt />,
    description:
      "Version control and collaboration using Git, facilitating seamless teamwork and code management throughout the development process.",
  },
  {
    type: "skill",
    title: "Design & Prototyping",
    name: "Figma",
    icon: <FaFigma />,
    description:
      "Design and prototyping user interfaces and experiences using Figma, facilitating seamless collaboration and rapid prototyping with design and development teams to meet user needs and project goals.",
  },
  {
    type: "skill",
    title: "Networking & Systems",
    name: "Cisco & Mikrotik Networking",
    icon: <TbNetwork />,
    description:
      "Design, configure, install, and maintain scalable network systems and infrastructure. Utilize network management tools to monitor and optimize performance. Implement and support routers, switches, firewalls, access points, and core services such as DHCP, DNS, VPNs, VLANs, and network security",
  },
  {
    type: "skill",
    title: "Cybersecurity",
    name: "Cybersecurity",
    icon: <MdSecurity />,
    description:
      "Proficient in cybersecurity, including threat mitigation, risk assessment, data protection, and implementing security measures to safeguard information systems and networks. Tools: Metasploit | Burp Suite | Wireshark | Nmap | Snort | OSSEC",
  },
  {
    type: "skill",
    title: "Cybersecurity & Ethical Hacking",
    name: "Pentesting & Ethical Hacking",
    icon: <SiParrotsecurity />,
    description:
      "Conducting penetration testing and ethical hacking to identify vulnerabilities in systems and networks, ensuring robust security measures are in place to protect against cyber threats. Tools: NMAP | Wireshark | Recon-ng | Nikto | Metasploit Framework | Hydra | SQLmap | Aircrack | Burp Suite | Netcat | SET |OSWAP",
  },
  {
    type: "skill",
    title: "Cybersecurity & Ethical Hacking",
    name: "Metasploit Framework",
    icon: <SiMetasploit />,
    description:
      "Conducting penetration testing and ethical hacking using Metasploit Framework to identify vulnerabilities in systems and networks, ensuring robust security measures are in place to protect against cyber threats.",
  },
  {
    type: "skill",
    title: "Cybersecurity & Cyber Defense",
    name: "Threat Intelligence, Malware Analysis and Cyber Defense",
    icon: <SiCyberdefenders />,
    description:
      "Conducting threat intelligence, malware analysis, and implementing cyber defense policies and strategies to protect systems and networks from advanced threats. Tools: Maltego | Shodan |MISP | OpenCTI | Wireshark | Firewalls-pfSense, Fortinet",
  },
];

const Cards = () => {
  return (
    <>
    {/* Tabs for different sections */}
      <Tabs
        defaultValue="education"
        className="w-full flex flex-col items-center"
      >
        <TabsList className="max-w-max mb-[30px] sm:flex-1 flex flex-wrap justify-center gap-4">
          <TabsTrigger value="education">
            Education & Certifications
          </TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">My Skills</TabsTrigger>
        </TabsList>
        {/* Content for each tab */}
        <TabsContent value="experience" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              {journey
                .filter((item) => item.type === "experience")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="education" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              {journey
                .filter((item) => item.type === "education")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="skills" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              {journey
                .filter((item) => item.type === "skill")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Cards;
