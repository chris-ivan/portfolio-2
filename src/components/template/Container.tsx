import usePinchZoom from "../../hooks/usePinchZoom";
import { useRef, useEffect } from "react";
import { frameSizeType, viewportDimensionType } from "../../interfaces/frame";
import useResize from "../../hooks/useResize";

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

  const initialContentSize = useResize({ initialSize });
  const pinchZoomProps = { containerRef, initialContentSize };
  const calculatedSize = usePinchZoom(pinchZoomProps);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.transform = calculatedSize.transform;
    }
  }, [calculatedSize.transform]);

  return (
    <div ref={containerRef} className="relative w-[100vw] h-[100vh]">
      <div
        style={{
          width: calculatedSize.width,
          height: calculatedSize.height,
        }}
      >
        <div
          ref={contentRef}
          className="absolute bg-dark-grey"
          style={{
            width: "700vw",
            height: "600vh",
            // transformOrigin: calculatedSize.transformOrigin,
            transformOrigin: "top left",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
