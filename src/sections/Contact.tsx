import Frame from "../components/template/Frame";
import { FRAMES } from "../static/frames";

const Contact = () => {
  return (
    <Frame {...FRAMES.CONTACT}>
      <h1 className="bg-red-500">Contact</h1>
    </Frame>
  );
};

export default Contact;
