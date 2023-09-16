import AnimateText from "../../components/template/AnimateText";
import FadeIn from "../../components/template/FadeIn";
import useTheme from "../../hooks/useTheme";

const text1 = "I build";
const text2 = "frontend";
const text3 = "things.";
const text4 = "but I also love pixel-pushing as a side quest";

const Landing = () => {
  const { theme } = useTheme();

  return (
    <FadeIn>
      <div className="flex flex-col w-full h-[95vh] pt-[60px]">
        <div className="flex-1 grid gap-3 grid-cols-3 my-6">
          <img className="w-full col-span-2 bg-grey h-full" />
          <img className="w-full bg-grey h-full" />
          <img className="w-full bg-grey h-full" />
          <img className="w-full col-span-2 bg-grey h-full" />
        </div>
        <h1 className="px-[5vw]">
          <AnimateText interval={40}>{text1}</AnimateText>
        </h1>
        <h1
          className="px-[5vw]"
          style={{ backgroundColor: theme.colorPrimary }}
        >
          <AnimateText charDelay={text1.length / 2} interval={40}>
            {text2}
          </AnimateText>
        </h1>
        <h1 className="px-[5vw]">
          <AnimateText
            charDelay={(text1.length + text2.length) / 2}
            interval={40}
          >
            {text3}
          </AnimateText>
        </h1>
        <h4
          className="px-[5vw] max-w-[28ch] mt-4"
          style={{
            color: theme.colorTextTertiary,
          }}
        >
          <AnimateText charDelay={text1.length + text2.length + text3.length}>
            {text4}
          </AnimateText>
        </h4>
      </div>
    </FadeIn>
  );
};

export default Landing;
