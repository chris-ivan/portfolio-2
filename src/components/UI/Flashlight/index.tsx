import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { NavigationMode, useGlobalStore } from "../../../store/globalStore";
import useTheme from "../../../hooks/useTheme";

interface IFlashlight {
  children: ReactNode;
}

const Flashlight: FC<IFlashlight> = (props) => {
  const { children } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const { navigationMode } = useGlobalStore();
  const { isDarkMode } = useTheme();
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const onMouseMove = (e: MouseEvent) => {
    const container = containerRef?.current;
    if (!container) return;

    const containerPosition = container.getBoundingClientRect();
    const x = e.clientX - containerPosition.left;
    const y = e.clientY - containerPosition.top;

    setPosition({ x, y });
  };

  useEffect(() => {
    if (navigationMode === NavigationMode.ADVENTURE || !isDarkMode) return;

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [isDarkMode, navigationMode]);

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      <div
        className="absolute w-[100px] h-[100px] bg-blue blur-[150px] mix-blend-screen"
        style={{ top: position.y, left: position.x }}
      />
      {children}
    </div>
  );
};

export default Flashlight;
