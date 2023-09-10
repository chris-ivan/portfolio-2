import { useState, useEffect, useCallback } from "react";
import { FRAME_KEY, IFrameBbox } from "../../../interfaces/frame";
import { useNavigationStore } from "../../../store/navigationStore";
interface IMapFrame {
  targetId: FRAME_KEY;
  scale: number;
}

const initialBbox: IFrameBbox = {
  position: {},
  size: {},
};

const MapFrame = (props: IMapFrame) => {
  const { targetId, scale } = props;
  const [bbox, setBbox] = useState<IFrameBbox>(initialBbox);

  const calculateSize = useCallback(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const clientRect = target.getBoundingClientRect();
    const position = {
      left: clientRect.left * scale,
      top: clientRect.top * scale,
    };

    const size = {
      width: clientRect.width * scale,
      height: clientRect.height * scale,
    };

    setBbox({ position, size });
  }, [scale, targetId]);

  useEffect(() => {
    calculateSize();
  }, [calculateSize]);

  const updateSize = useCallback(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const clientRect = target.getBoundingClientRect();
    const globalScale = useNavigationStore.getState().transform.scale;

    const size = {
      width: (clientRect.width * scale) / globalScale,
      height: (clientRect.height * scale) / globalScale,
    };

    setBbox((prev) => ({ ...prev, size }));
  }, [scale, targetId]);

  useEffect(() => {
    const unsub = useNavigationStore.subscribe(
      (store) => store.frameVisibility[targetId],
      updateSize
    );
    return () => unsub();
  }, [targetId, updateSize]);

  return (
    <div
      style={{
        top: bbox.position?.top,
        left: bbox.position?.left,
        width: bbox.size?.width,
        height: bbox.size?.height,
      }}
      className="map-frame absolute bg-light-grey border border-solid border-grey"
    />
  );
};

export default MapFrame;
