import { FRAME_KEY } from "../../../interfaces/frame";
import { FRAMES } from "../../../static/frames";
import PointerNode from "./PointerNode";

const Pointer = () => {
  const pointers = Object.keys(FRAME_KEY).map((key) => (
    <PointerNode
      key={key}
      targetId={key as FRAME_KEY}
      label={FRAMES[key as FRAME_KEY].title || ""}
    />
  ));
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none">
      {pointers}
    </div>
  );
};

export default Pointer;
