import { FC, ReactNode, useEffect, useRef, useState } from "react";
import useTheme from "../../../hooks/useTheme";
import useGlobalStore from "../../../hooks/useGlobalStore";

interface IFlashlight {
  children: ReactNode;
  color: string;
}

const Flashlight: FC<IFlashlight> = (props) => {
  const { children, color } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const { isAdventure } = useGlobalStore();
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

  const handleMouseMove = (e: MouseEvent) => {
    requestAnimationFrame(() => onMouseMove(e));
  };

  useEffect(() => {
    if (isAdventure || !isDarkMode) return;

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("wheel", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("wheel", handleMouseMove);
    };
    // eslint-disable-next-line
  }, [isDarkMode, isAdventure]);

  return (
    <div
      className="relative overflow-clip pointer-events-none touch-none"
      ref={containerRef}
    >
      <div
        className="absolute translate-x-[-50px] translate-y-[-50px] w-[100px] h-[100px] rounded-full blur-[100px] transition-all duration-75"
        style={{ top: position.y, left: position.x, backgroundColor: color }}
      />
      <div className="pointer-events-auto touch-auto">{children}</div>
    </div>
  );
};

export default Flashlight;
