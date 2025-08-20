import Image from "next/image";

const Card = ({
  type,
  logoUrl,
  position,
  duration,
  description,
  description2,
  company,
  institution,
  qualification,
  name,
  icon,
  title,
}) => {
  return (
    <div className="w-full h-[400px] sm:p- md:p-4 overflow-hidden flex items-center justify-center sticky top-1 mb-3">
      <div className="w-[1170px] h-[400px] m-3 border border-accent/80 bg-[#f4ffff] rounded-[8px] p-2">
        <div className="flex flex-col h-full">
          <div className="h-[80px] xl:h-[68px] bg-white flex flex-col xl:flex-row justify-center xl:justify-between items-center px-2 md:px-[84px] rounded-tl-[8px] rounded-tr-[8px] mb-2">
            <div className="flex gap-2">
              <Image
                src="/assets/journey/shape.svg"
                width={16}
                height={16}
                alt=""
                sizes=""
              />

              <h3
                className={`flex-item text-lg font-semibold text-primary justify-center xl:justify-between items-center md:justify-center
                  ${type === "education" ? "text-center w-full" : ""}
                `}
              >
                {type === "experience"
                  ? position
                  : type === "education"
                    ? qualification
                    : type === "skill"
                      ? title
                      : duration}
              </h3>
            </div>
            <p className="text-base">
              {type !== "experience" && type !== "education" ? null : duration}
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center xl:justify-start md:py-8 md:px-16">
            <div className="flex flex-col xl:flex-row items-center xl:items-start gap-4 text-center xl:text-left xl:gap-10 px-4 xl:px-0 w-full">
              {type === "skill" ? (
                // render icon for skills
                <div className="w-max xl:w-[300px] h-full relative flex items-center justify-center">
                  <div className="text-5xl text-primary/90">{icon}</div>
                </div>
              ) : (
                // render the logo for experience and education
                <div className=" relative w-[300px] h-[38px] xl:h-[44px] flex items-center justify-center">
                  <Image src={logoUrl} fill alt="" className="object-contain" />
                </div>
              )}

              <div className="xl:border-l xl:border-secondary/10 xl:pl-12 w-full flex flex-col items-center xl:items-start text-center xl:text-left">
                <h3 className="xl:flex h3 mb-2 xl:mb-4 text-lg text-center xl:text-left w-full">
                  {type === "experience"
                    ? company
                    : type === "education"
                      ? institution
                      : type === "skill"
                        ? name
                        : null}
                </h3>
                <p className="text-base max-w-[780px] flex justify-center text-center xl:justify-start xl:text-left w-full mb-2">
                  {description}
                </p>
                <p className="text-base max-w-[780px] xl:flex items-center mt-1 mb-2 xl:mt-0 text-center xl:text-left w-full">
                  {description2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
