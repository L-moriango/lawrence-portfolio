import AnimatedText from "./AnimatedText";
import Cards from "./Cards/Cards";

const Journey = () => {
    return (
        <section id="journey">
        <div>
            <AnimatedText text="My Professional Journey"
                textStyles="h1 text-5xl mb-[30px] text-center"
            />
            <Cards />
        </div>
        </section>
    );
};

export default Journey;
