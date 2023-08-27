import { useMemo } from "react";
import useTheme from "../../hooks/useTheme";
import Editor from "./Editor";

const AboutSection = () => {
  const { theme, isDarkMode } = useTheme();

  const EditorComponent = useMemo(() => <Editor />, []);

  return (
    <div className="py-[80px] px-[72px]">
      <h2 style={{ color: theme.colorText }}>
        Hello, world!{" "}
        <span style={{ color: theme.colorPrimary }}>I'm Ivan.</span>
      </h2>
      <h3 className="mt-8" style={{ color: theme.colorTextSecondary }}>
        I’m not a fan of writing long paragraphs ¯\_(ツ)_/¯, but let me share
        you a brief TL;DR of my life.
      </h3>
      {EditorComponent}
      {!isDarkMode && (
        <p
          style={{ color: theme.colorTextTertiary }}
          className="text-base mt-4"
        >
          Yes, the light mode text editor hurts my eyes as well :”D
        </p>
      )}
    </div>
  );
};

export default AboutSection;
