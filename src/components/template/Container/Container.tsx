import { useRef } from "react";
import {
  frameSizeType,
  viewportDimensionType,
} from "../../../interfaces/frame";
import useContainer from "./useContainer";

interface IContainer {
  children: React.ReactNode;
}

const initialSize: frameSizeType<viewportDimensionType> = {
  width: "700vw",
  height: "600vh",
};

const Container = ({ children }: IContainer) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { transform } = useContainer({
    contentRef,
    containerRef,
    initialSize: {
      width: 10000,
      height: 8000,
    },
  });
  const { x, y, scale } = transform;

  return (
    <div ref={containerRef} className="relative w-[100vw] h-[100vh]">
      <div
        ref={contentRef}
        className="absolute bg-dark-grey"
        style={{
          width: initialSize.width,
          height: initialSize.height,
          transform: `translate3d(${x}px, ${y}px, 0) scale3d(${scale}, ${scale}, 1)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
