import usePointerNode from "./usePointerNode";
// @ts-ignore
import PointerArrow from "../../../assets/icons/NavigationArrow";
import { COLOR } from "../../../interfaces/theme";
import { useNavigationStore } from "../../../store/navigationStore";
import { useMemo } from "react";
import { FRAME_KEY } from "../../../interfaces/frame";
import useTheme from "../../../hooks/useTheme";

interface IPointerNode {
  targetId: FRAME_KEY;
  label: string;
}

const PointerNode = (props: IPointerNode) => {
  const { targetId, label } = props;
  const { isNavigating, recommendedFrame, frameVisibility } =
    useNavigationStore();
  const pointerNode = usePointerNode({ targetId, label });
  const { position, angle, pointerPosition } = pointerNode;
  const { theme } = useTheme();

  const isActive = useMemo(() => {
    return targetId === recommendedFrame[0];
  }, [recommendedFrame, targetId]);

  const { x, y } = pointerPosition;
  const isVisible = useMemo(() => {
    return !frameVisibility[targetId] && isNavigating;
  }, [frameVisibility, isNavigating, targetId]);

  return (
    <div
      className="absolute flex items-center justify-center cursor-pointer"
      style={{
        ...position,
        transition:
          "top 0.05s ease-in-out, left 0.05s ease-in-out, right 0.05s ease-in-out, bottom 0.05s ease-in-out, opacity 0.3s ease-in-out",
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <div
        className={`border-2 border-solid p-2 transition-colors`}
        style={{
          borderColor: isActive ? COLOR.ORANGE : theme.colorBorderSecondary,
          backgroundColor: isActive ? COLOR.ORANGE : theme.colorBgBase,
          color: isActive ? COLOR.WHITE : theme.colorTextSecondary,
        }}
      >
        {label}
      </div>
      <div
        className="absolute flex items-center justify-center"
        style={{
          transition: "transform 0.05s ease-in-out",
          transform: `translate(${x}px, ${y}px)`,
        }}
      >
        <PointerArrow
          borderColor={isActive ? COLOR.ORANGE : theme.colorBorderSecondary}
          fillColor={isActive ? COLOR.ORANGE : theme.colorBgBase}
          style={{
            transition: "transform 0.05s ease-in-out",
            transform: `rotate(${angle}deg)`,
          }}
        />
      </div>
    </div>
  );
};

export default PointerNode;
