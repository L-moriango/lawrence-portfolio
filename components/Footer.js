import Logo from "./Logo";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="py-10 bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <Logo light={true} />
          <Socials
            containerStyles="flex gap-2"
            iconStyles="py-8 text-[20px] w-[32] h-[32] text-white/70 flex items-center justify-center, rounded-full"
          />
          <div className="text-white/70 font-light">
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
