import { useRef } from "react";
import {
  frameSizeType,
  viewportDimensionType,
} from "../../../interfaces/frame";
import useContainer from "./useContainer";
import useResize from "../../../hooks/useResize";

interface IContainer {
  children: React.ReactNode;
}

const initialSize: frameSizeType<viewportDimensionType> = {
  width: "800vw",
  height: "800vh",
};

const Container = ({ children }: IContainer) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const normalizedInitialSize = useResize({ initialSize });

  const { transform, onWheel } = useContainer({
    contentRef,
    containerRef,
    initialSize: normalizedInitialSize,
  });
  const { x, y, scale } = transform;

  return (
    <div ref={containerRef} className="relative w-[100vw] h-[100vh]">
      <div
        ref={contentRef}
        className="absolute select-none align-middle"
        style={{
          width: initialSize.width,
          height: initialSize.height,
          transform: `translate3d(${x}px, ${y}px, 0) scale3d(${scale}, ${scale}, 1)`,
        }}
        onWheel={onWheel}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
