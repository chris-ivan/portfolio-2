import { lazy } from "react";
import useTheme from "../../hooks/useTheme";
import RenderWhenInView from "../template/RenderWhenInView";
import FadeIn from "../template/FadeIn";

const ContactForm = lazy(() => import("./ContactForm"));

const ContactSection = () => {
  const { theme } = useTheme();

  return (
    <div style={{ color: theme.colorText }} className="px-[72px] py-[60px]">
      <FadeIn>
        <h2 className="mb-8">
          Currently <span style={{ color: theme.colorPrimary }}>available</span>{" "}
          for love, freelance jobs and full-time permanent opportunities.
          Preferably WFH, but I’d love to fly to your country if needed. 🦅
        </h2>
      </FadeIn>
      <RenderWhenInView>
        <FadeIn>
          <ContactForm />
        </FadeIn>
      </RenderWhenInView>
      <p className="mt-20" style={{ color: theme.colorTextTertiary }}>
        Created with effort and dedication, because love would never feed me.
      </p>
    </div>
  );
};

export default ContactSection;
