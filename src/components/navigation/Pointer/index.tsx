import { FRAME_KEY } from "../../../interfaces/frame";
import PointerNode from "./PointerNode";
import { Transition } from "@headlessui/react";
import { useNavigationStore } from "../../../store/navigationStore";
import usePointerPosition from "./usePointerPosition";
import { FRAMES } from "../../../static/frames";

const Pointer = () => {
  const { isNavigating, showNavigation } = useNavigationStore();
  const pointerPositions = usePointerPosition();

  const pointers = Object.entries(pointerPositions).map(([key, value]) => (
    <PointerNode
      {...value}
      label={FRAMES[key as FRAME_KEY]?.title || key}
      key={key}
      targetId={key as FRAME_KEY}
    />
  ));

  return (
    <Transition
      show={isNavigating && showNavigation}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none flex items-center justify-center">
        {pointers}
      </div>
    </Transition>
  );
};

export default Pointer;
