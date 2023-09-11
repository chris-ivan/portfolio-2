import { useMemo, lazy } from "react";
import Frame from "../../components/template/Frame";
import { FRAME_KEY } from "../../interfaces/frame";
import { FRAMES } from "../../static/frames";

const ContactSection = lazy(() => import("../../components/Contact"));

const Contact = () => {
  const ContactElement = useMemo(() => <ContactSection />, []);
  return (
    <Frame id={FRAME_KEY.CONTACT} {...FRAMES.CONTACT}>
      {ContactElement}
    </Frame>
  );
};

export default Contact;
