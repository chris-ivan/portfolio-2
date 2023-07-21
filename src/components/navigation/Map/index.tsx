import useResize from "../../../hooks/useResize";
import { FRAMES, INITIAL_APP_SIZE } from "../../../static/frames";
import MapFrame from "./MapFrame";
import { useMemo } from "react";
import useMap from "./useMap";
import { useNavigationStore } from "../../../store/navigationStore";

const SCALE = 0.015;

const Map = () => {
  const containerSize = useResize({ initialSize: INITIAL_APP_SIZE });
  const viewPosition = useMap({ scale: SCALE });
  const { isNavigating } = useNavigationStore();
  const { width, height } = containerSize;

  const children = useMemo(
    () =>
      Object.keys(FRAMES).map((id) => (
        <MapFrame targetId={id || ""} scale={SCALE} key={id} />
      )),
    []
  );

  return (
    <div
      style={{
        width: width * SCALE,
        height: height * SCALE,
        opacity: isNavigating ? 1 : 0,
      }}
      className="fixed bottom-6 left-6 border border-solid border-grey pointer-events-none transition-opacity"
    >
      {children}
      <div
        style={{
          ...viewPosition,
        }}
        className="absolute border-solid border-blue border-2"
      />
    </div>
  );
};

export default Map;
