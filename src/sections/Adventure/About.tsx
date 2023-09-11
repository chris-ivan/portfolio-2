import { lazy } from "react";
import Frame from "../../components/template/Frame";
import { FRAME_KEY } from "../../interfaces/frame";
import { FRAMES } from "../../static/frames";

const AboutSection = lazy(() => import("../../components/About"));

const About = () => {
  return (
    <Frame id={FRAME_KEY.ABOUT} {...FRAMES.ABOUT}>
      <AboutSection />
    </Frame>
  );
};

export default About;
