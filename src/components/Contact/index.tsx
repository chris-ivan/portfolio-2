import { lazy } from "react";
import useTheme from "../../hooks/useTheme";
import RenderWhenInView from "../template/RenderWhenInView";
import FadeIn from "../template/FadeIn";
import AnimateText from "../template/AnimateText";

const ContactForm = lazy(() => import("./ContactForm"));

const text1 = `Currently `;
const text2 = `available `;
const text3 = `for love, freelance jobs and full-time permanent opportunities. Preferably WFH, but I’d love to fly to your country if needed. 🦅`;

const ContactSection = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{ color: theme.colorText }}
      className="md:px-[72px] md:py-[60px]"
    >
      <FadeIn>
        <h2 className="mb-8">
          <AnimateText>{text1}</AnimateText>
          <span style={{ color: theme.colorPrimary }}>
            <AnimateText charDelay={text1.length}>{text2}</AnimateText>
          </span>
          <AnimateText charDelay={text1.length + text2.length}>
            {text3}
          </AnimateText>
        </h2>
      </FadeIn>
      <RenderWhenInView>
        <FadeIn>
          <ContactForm />
        </FadeIn>
      </RenderWhenInView>
      <p
        className="mt-4 mb-8 max-w-[30ch] md:max-w-none md:mt-20 md:mb-0"
        style={{ color: theme.colorTextTertiary }}
      >
        Created with effort and dedication, because love would never feed me.
      </p>
    </div>
  );
};

export default ContactSection;
