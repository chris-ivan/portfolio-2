import useResize from "../../../hooks/useResize";
import { FRAMES, INITIAL_APP_SIZE } from "../../../static/frames";
import MapFrame from "./MapFrame";
import { useMemo } from "react";
import useMap from "./useMap";
import { useNavigationStore } from "../../../store/navigationStore";
import { Transition } from "@headlessui/react";

const SCALE = 0.015;

const Map = () => {
  const containerSize = useResize({ initialSize: INITIAL_APP_SIZE });
  const viewPosition = useMap({ scale: SCALE });
  const { isNavigating, showMiniMap } = useNavigationStore();
  const { width, height } = containerSize;

  const children = useMemo(
    () =>
      Object.keys(FRAMES).map((id) => (
        <MapFrame targetId={id || ""} scale={SCALE} key={id} />
      )),
    []
  );

  return (
    <Transition
      show={isNavigating && showMiniMap}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        style={{
          width: width * SCALE,
          height: height * SCALE,
        }}
        className="fixed bottom-6 left-6 border border-solid border-grey pointer-events-none"
      >
        {children}
        <div
          style={{
            ...viewPosition,
          }}
          className="absolute border-solid border-blue border-2"
        />
      </div>
    </Transition>
  );
};

export default Map;
