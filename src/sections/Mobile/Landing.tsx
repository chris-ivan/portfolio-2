import AnimateText from "../../components/template/AnimateText";
import FadeIn from "../../components/template/FadeIn";
import useTheme from "../../hooks/useTheme";
import { lazy } from "react";

import InsaneMathHighlight1Img from "../../assets/images/projects/insane-math-1.webp";
import InsaneMathHighlight1MinImg from "../../assets/images/projects/insane-math-1-min.webp";
import SinduHighlight3Img from "../../assets/images/projects/sindu-3.webp";
import SinduHighlight3MinImg from "../../assets/images/projects/sindu-3-min.webp";
import Image from "../../components/UI/Image";
import PersonalWeb1Video from "../../assets/videos/personal-web-1.webm";
import PersonalWeb2Video from "../../assets/videos/personal-web-2.mp4";

const text1 = "I build";
const text2 = "frontend";
const text3 = "things.";
const text4 = "but I also love pixel-pushing as a side quest";

const ReactPlayer = lazy(() => import("react-player"));

const Landing = () => {
  const { theme } = useTheme();

  return (
    <FadeIn>
      <div className="flex flex-col w-full h-[95vh] pt-[60px] mb-[80px]">
        <div className="flex-1 grid gap-3 grid-cols-3 my-6">
          <div className="w-full col-span-2 bg-light-grey dark:bg-darker-grey h-full overflow-hidden">
            <ReactPlayer
              playing
              url={PersonalWeb1Video}
              loop
              width="100%"
              height="100%"
            />
          </div>
          <div className="w-full bg-light-grey dark:bg-darker-grey h-full overflow-hidden">
            <Image
              src={InsaneMathHighlight1Img}
              tinySrc={InsaneMathHighlight1MinImg}
            />
          </div>
          <div className="w-full bg-light-grey dark:bg-darker-grey h-full overflow-hidden">
            <Image src={SinduHighlight3Img} tinySrc={SinduHighlight3MinImg} />
          </div>
          <div className="w-full col-span-2 bg-light-grey dark:bg-darker-grey h-full overflow-hidden">
            <ReactPlayer
              playing
              url={PersonalWeb2Video}
              loop
              width="100%"
              height="100%"
            />
          </div>
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
