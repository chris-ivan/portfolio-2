import useResize from "../../../hooks/useResize";
import { FRAMES, INITIAL_APP_SIZE } from "../../../static/frames";
import MapFrame from "./MapFrame";
import { useMemo } from "react";
import useMap from "./useMap";

const SCALE = 0.015;

const Map = () => {
  const containerSize = useResize({ initialSize: INITIAL_APP_SIZE });
  const viewPosition = useMap({ scale: SCALE });
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
      }}
      className="fixed bottom-6 left-6 border border-solid border-grey"
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
