"use client";
import { Link as ScrollLink } from "react-scroll";

const links = [
    {
        name: "home",
    },
    {
        name: "about",
    },
    {
        name: "journey",
    },
    {
        name: "work",
    },
    {
        name: "contact",
    },
];

const Nav = ({ containerStyles, listStyles, linkStyles, spy }) => {
    return (
        <nav className={containerStyles}>
            <ul className={listStyles}>
                {links.map((link, index) => {
                    return (
                        <ScrollLink
                            spy={spy}
                            key={index}
                            activeClass="!text-accent"
                            to={link.name}
                            smooth={true}
                            className={`${linkStyles} relative group transition-all duration-300 text-lg tracking-[2px] uppercase`}
                        >
                            <span className="group-hover:scale-110 inline-block transition-transform duration-300">
                                {link.name}
                            </span>
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
                        </ScrollLink>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Nav;
