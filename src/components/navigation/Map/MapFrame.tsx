import { useState, useEffect, useCallback, useMemo } from "react";
import { FRAME_KEY, IFrameBbox } from "../../../interfaces/frame";
import { useNavigationStore } from "../../../store/navigationStore";
import { FRAMES } from "../../../static/frames";
import { viewportToPx } from "../../../utils/viewport";
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

  const targetDefaultData = useMemo(
    () => ({
      top: viewportToPx((FRAMES[targetId].position?.top || "0vh") as string),
      left: viewportToPx((FRAMES[targetId].position?.left || "0vw") as string),
      width: viewportToPx(FRAMES[targetId].size?.width as string),
    }),
    [targetId]
  );

  const calculateSize = useCallback(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const clientRect = target.getBoundingClientRect();
    const position = {
      left: targetDefaultData.left * scale,
      top: targetDefaultData.top * scale,
    };

    const globalScale = clientRect.width / targetDefaultData.width;

    const size = {
      width: (clientRect.width * scale) / globalScale,
      height: (Math.max(clientRect.height) * scale) / globalScale,
    };

    setBbox({ position, size });
    // eslint-disable-next-line
  }, [targetId, scale, targetDefaultData]);

  useEffect(() => {
    calculateSize();
  }, [calculateSize]);

  useEffect(() => {
    const unsub = useNavigationStore.subscribe(
      (store) => store.frameVisibility[targetId],
      calculateSize
    );
    return () => unsub();
  }, [targetId, calculateSize]);

  return (
    <div
      style={{
        top: bbox.position?.top,
        left: bbox.position?.left,
        width: bbox.size?.width,
        height: bbox.size?.height,
      }}
      className="map-frame absolute bg-light-grey dark:bg-dark-grey border border-solid border-grey"
    />
  );
};

export default MapFrame;
