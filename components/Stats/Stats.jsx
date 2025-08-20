import StatsItem from "./StatsItem";

const statsData = [
  {
    endCountNum: 4,
    endCountText: " +",
    text: "Years of Experience",
  },
  {
    endCountNum: 20,
    endCountText: " +",
    text: "Web and Apps built",
  },
  {
    endCountNum: 90,
    endCountText: " %",
    text: "Clients Satisfied",
  },
];

const Stats = () => {
  return (
    <section className="flex justify-center xl:justify-normal mx-auto xl:mx-0 xl:w-[380px] gap-4 xl:gap-0">
      {statsData.map((item, index) => {
        return (
          <StatsItem
            endCountNum={item.endCountNum}
            endCountText={item.endCountText}
            text={item.text}
            key={index}
          />
        );
      })}
    </section>
  );
};

export default Stats;
