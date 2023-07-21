import { useMemo } from "react";
import { FRAME_KEY } from "../../../interfaces/frame";
import { FRAMES } from "../../../static/frames";
import PointerNode from "./PointerNode";
import { Transition } from "@headlessui/react";
import { useNavigationStore } from "../../../store/navigationStore";

const Pointer = () => {
  const { isNavigating, showNavigation } = useNavigationStore();

  const pointers = useMemo(
    () =>
      Object.keys(FRAME_KEY).map((key) => (
        <PointerNode
          key={key}
          targetId={key as FRAME_KEY}
          label={FRAMES[key as FRAME_KEY].title || ""}
        />
      )),
    []
  );
  return (
    <Transition
      show={isNavigating && showNavigation}
      enter="transition-opacity duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none">
        {pointers}
      </div>
    </Transition>
  );
};

export default Pointer;
