import { useRef } from "react";
import useContainer from "./useContainer";
import useResize from "../../../hooks/useResize";
import { INITIAL_APP_SIZE } from "../../../static/frames";

interface IContainer {
  children: React.ReactNode;
}

const Container = ({ children }: IContainer) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const initialSize = useResize({ initialSize: INITIAL_APP_SIZE });

  const { transform, onWheel } = useContainer({
    contentRef,
    containerRef,
    initialSize,
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
