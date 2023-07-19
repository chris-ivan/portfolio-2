import { useState, useEffect } from "react";
import { IFrameBbox } from "../../../interfaces/frame";
interface IMapFrame {
  targetId: string;
  scale: number;
}

const initialBbox: IFrameBbox = {
  position: {},
  size: {},
};

const MapFrame = (props: IMapFrame) => {
  const { targetId, scale } = props;
  const [bbox, setBbox] = useState<IFrameBbox>(initialBbox);

  useEffect(() => {
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
