import Image from "next/image";

// service data
const services = [
  {
    icon: "assets/services/icon-2.svg",
    title: "Web Development",
    description:
      "Developing websites serving as powerful marketing tools and bring memorable brand experiences.",
  },
  {
    icon: "assets/services/icon-3.svg",
    title: "E-commerce solutions",
    description:
      "Building secure,user-friendly online stores to drive sales and services.",
  },
  {
    icon: "assets/services/icon-7.svg",
    title: "Networking",
    description:
      "Setting up and maintaining networks systems for optimal performance.",
  },
  {
    icon: "assets/services/icon-5.svg",
    title: "Cybersecurity",
    description:
      "Protecting systems, networks, and programs from digital attacks.",
  },
  {
    icon: "assets/services/icon-4.svg",
    title: "Care and Support",
    description:
      "Providing ongoing updates, security, support and maintenance services for performance.",
  },
];

// Services component
const Services = () => {
  return (
    <section className="relative z-40  py-4">
      <div className="flex container mx-auto max-w-[1340px] -mb-10">
        <ul className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8 -top-12 place-items-center md:justify-items-center md:mx-auto lg:place-items-stretch lg:ml-20 -mx-2">
          {services.map((service, index) => {
            return (
              <li
                key={index}
                className="bg-white shadow-custom p-6 max-w-full w-full rounded-lg"
              >
                <Image
                  src={service.icon}
                  width={48}
                  height={48}
                  alt=""
                  className="mb-4"
                />
                <h3 className="text-[20px] text-primary font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;
