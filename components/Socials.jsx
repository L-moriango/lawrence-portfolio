import Link from "next/link";
import { FaXTwitter, FaLinkedin, FaGithub, FaDiscord} from "react-icons/fa6";

const socials = [
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/lawrence-moriango",
  },
  {
    icon: <FaGithub />,
    path: "https://github.com/L-moriango",
  },
  {
    icon: <FaDiscord />,
    path: "https://discord.com/users/1172280803397472290",
  },
  {
    icon: <FaXTwitter />,
    path: "/",
  }
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            href={item.path}
            key={index}
            className={`${iconStyles} transition-transform duration-200 hover:scale-125 hover:text-accent/100`}
            target="_blank"
            //rel="noopener noreferrer"
          >
            <span>{item.icon}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
