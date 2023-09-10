import { useRef } from "react";
import useContainer from "./useContainer";
import useTheme from "../../../hooks/useTheme";
import { useNavigationStore } from "../../../store/navigationStore";
import useTransformListener from "../../../hooks/useTransformListener";

interface IContainer {
  children: React.ReactNode;
}

const Container = ({ children }: IContainer) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const transform = useTransformListener();
  const { appSize } = useNavigationStore();
  const { theme } = useTheme();

  const { onWheel } = useContainer({
    contentRef,
    containerRef,
    initialSize: appSize,
  });

  const { x, y, scale } = transform;

  return (
    <div ref={containerRef} className="relative w-[100vw] h-[100vh]">
      <div
        ref={contentRef}
        className="absolute select-none align-middle"
        id="app-container"
        style={{
          width: appSize.width,
          height: appSize.height,
          transform: `translate3d(${x}px, ${y}px, 0) scale3d(${scale}, ${scale}, 1)`,
          backgroundColor: theme.colorBgSecondary,
        }}
        onWheel={onWheel}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
