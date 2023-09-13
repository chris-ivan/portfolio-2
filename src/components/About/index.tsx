import { lazy, useMemo } from "react";
import useTheme from "../../hooks/useTheme";
import RenderWhenInView from "../template/RenderWhenInView";
import FadeIn from "../template/FadeIn";

const Editor = lazy(() => import("./Editor"));

const AboutSection = () => {
  const { theme, isDarkMode } = useTheme();

  const EditorComponent = useMemo(() => <Editor />, []);

  return (
    <div className="py-[80px] px-[72px]">
      <FadeIn>
        <h2 style={{ color: theme.colorText }}>
          Hello, world!{" "}
          <span style={{ color: theme.colorPrimary }}>I'm Ivan.</span>
        </h2>
      </FadeIn>
      <FadeIn>
        <h3 className="mt-8" style={{ color: theme.colorTextSecondary }}>
          I’m not a fan of writing long paragraphs ¯\_(ツ)_/¯, but let me share
          you a brief TL;DR of my life.
        </h3>
      </FadeIn>
      <div className="py-8 pb-4 ">
        <RenderWhenInView>
          <FadeIn>{EditorComponent}</FadeIn>
        </RenderWhenInView>
      </div>
      {!isDarkMode && (
        <p style={{ color: theme.colorTextTertiary }} className="text-xs">
          Yes, the light mode text editor hurts my eyes as well :”D
        </p>
      )}
    </div>
  );
};

export default AboutSection;
