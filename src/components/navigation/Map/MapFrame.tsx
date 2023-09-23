import { useState, useEffect, useCallback, useMemo } from "react";
import { FRAME_KEY, IFrameBbox } from "../../../interfaces/frame";
import { FRAMES } from "../../../static/frames";
import { viewportToPx } from "../../../utils/viewport";
import { useFrameContext } from "../../../hooks/useFrameContext";
interface IMapFrame {
  targetId: FRAME_KEY;
  scale: number;
}

const initialBbox: IFrameBbox = {
  position: {},
  size: {},
};

interface IMapFrameElement {
  bbox: IFrameBbox;
}

const MapFrameElement = (props: IMapFrameElement) => {
  const { bbox } = props;

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

const MapFrame = (props: IMapFrame) => {
  const { targetId, scale } = props;
  const [bbox, setBbox] = useState<IFrameBbox>(initialBbox);
  const { frames } = useFrameContext();
  const frame = useMemo(
    () => frames?.[targetId],
    // eslint-disable-next-line
    [targetId, frames?.[targetId]]
  );

  const targetDefaultData = useMemo(() => {
    return {
      top: viewportToPx((FRAMES[targetId].position?.top || "0vh") as string),
      left: viewportToPx((FRAMES[targetId].position?.left || "0vw") as string),
      width: viewportToPx(FRAMES[targetId].size?.width as string),
    };
  }, [targetId]);

  const calculateSize = useCallback(() => {
    if (!frame) return;

    const position = {
      left: targetDefaultData.left * scale,
      top: targetDefaultData.top * scale,
    };

    const globalScale = frame.width / targetDefaultData.width;

    const size = {
      width: (frame.width * scale) / globalScale,
      height: (Math.max(frame.height) * scale) / globalScale,
    };

    setBbox({ position, size });
    // eslint-disable-next-line
  }, [frame, targetDefaultData]);

  useEffect(() => {
    calculateSize();
  }, [calculateSize]);

  const memoizedChild = useMemo(() => <MapFrameElement bbox={bbox} />, [bbox]);

  return memoizedChild;
};

export default MapFrame;
