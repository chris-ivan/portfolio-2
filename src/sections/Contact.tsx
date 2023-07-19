import Frame from "../components/template/Frame";
import { FRAME_KEY } from "../interfaces/frame";
import { FRAMES } from "../static/frames";

const Contact = () => {
  return (
    <Frame id={FRAME_KEY.CONTACT} {...FRAMES.CONTACT}>
      <h1 className="bg-red-500">Contact</h1>
    </Frame>
  );
};

export default Contact;
