import AnimateText from "../../components/template/AnimateText";
import FadeIn from "../../components/template/FadeIn";
import RenderWhenInView from "../../components/template/RenderWhenInView";
import useTheme from "../../hooks/useTheme";
import { useMemo, lazy } from "react";

const Editor = lazy(() => import("../../components/About/Editor"));

const About = () => {
  const { theme, isDarkMode } = useTheme();

  const EditorComponent = useMemo(() => <Editor />, []);

  return (
    <div className="my-8">
      <h2>
        <AnimateText>About me.</AnimateText>
      </h2>
      <p className="pt-2 pb-4" style={{ color: theme.colorTextSecondary }}>
        I’m not a fan of writing long paragraphs ¯\_(ツ)_/¯, so let me share you
        my go-to “tell me about yourself” template :D
      </p>
      <RenderWhenInView>
        <FadeIn>{EditorComponent}</FadeIn>
      </RenderWhenInView>
      {!isDarkMode && (
        <p style={{ color: theme.colorTextTertiary }} className="mt-2 text-xs">
          Yes, the light mode text editor hurts my eyes as well :”D
          <br />
          You can always switch to dark mode by clicking the moon icon on the
          bottom right corner.
        </p>
      )}
    </div>
  );
};

export default About;
