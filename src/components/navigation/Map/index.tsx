import { FRAMES } from "../../../static/frames";
import MapFrame from "./MapFrame";
import { useMemo } from "react";
import useMap from "./useMap";
import { useNavigationStore } from "../../../store/navigationStore";
import { Transition } from "@headlessui/react";
import Draggable from "react-draggable";
import { FRAME_KEY } from "../../../interfaces/frame";

const SCALE = 0.015;

const Map = () => {
  const { appSize } = useNavigationStore();
  const mapProps = useMap({ scale: SCALE });
  const {
    mapPosition,
    mapDimension,
    onDragStart,
    onDrag,
    onDragStop,
    isDragging,
  } = mapProps;
  const { isNavigating, showMiniMap } = useNavigationStore();
  const { width, height } = appSize;

  const children = useMemo(
    () =>
      Object.keys(FRAMES).map((id) => (
        <MapFrame targetId={(id || "") as FRAME_KEY} scale={SCALE} key={id} />
      )),
    []
  );

  const isMapVisible = useMemo(
    () => isNavigating && showMiniMap,
    [isNavigating, showMiniMap]
  );

  return (
    <div
      style={{
        width: width * SCALE,
        height: height * SCALE,
        opacity: isMapVisible ? 1 : 0,
      }}
      className="fixed bottom-6 left-6 border border-solid border-grey pointer-events-none transition-opacity"
    >
      {children}
      <Transition show={isMapVisible}>
        <div className="pointer-events-none absolute top-0 left-0 right-0 bottom-0">
          <Draggable
            bounds="parent"
            position={mapPosition}
            onStart={onDragStart}
            onDrag={onDrag}
            onStop={onDragStop}
          >
            <div
              style={{
                ...mapDimension,
                cursor: isDragging ? "grabbing" : "grab",
              }}
              className="absolute border-solid pointer-events-auto border-blue border-2"
            />
          </Draggable>
        </div>
      </Transition>
    </div>
  );
};

export default Map;
