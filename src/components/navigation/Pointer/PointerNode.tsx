import usePointerNode from "./usePointerNode";
// @ts-ignore
import PointerArrow from "../../../assets/icons/NavigationArrow";
import { COLOR } from "../../../interfaces/theme";
import { useNavigationStore } from "../../../store/navigationStore";
import { useMemo } from "react";
import { FRAME_KEY } from "../../../interfaces/frame";
import useTheme from "../../../hooks/useTheme";
import { navigateToFrame } from "../../../utils/navigation";

interface IPointerNode {
  targetId: FRAME_KEY;
  label: string;
}

const PointerNode = (props: IPointerNode) => {
  const { targetId, label } = props;
  const { recommendedFrame, frameVisibility } = useNavigationStore();
  const pointerNode = usePointerNode({ targetId, label });
  const { position, angle, pointerPosition } = pointerNode;
  const { theme } = useTheme();

  const isActive = useMemo(() => {
    return targetId === recommendedFrame[0];
  }, [recommendedFrame, targetId]);

  const isVisible = useMemo(() => {
    if (!position.x || !position.y) return false;
    return !frameVisibility[targetId];
  }, [frameVisibility, targetId, position]);

  return (
    <div
      className="absolute flex items-center justify-center cursor-pointer"
      onClick={() => navigateToFrame(targetId)}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.2s ease-in-out, opacity 0.3s ease-in-out",
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <div
        className="border border-solid px-2 py-1 transition-colors text-xs"
        style={{
          borderColor: isActive ? COLOR.ORANGE : theme.colorBorderSecondary,
          backgroundColor: isActive ? COLOR.ORANGE : theme.colorBgBase,
          color: isActive ? COLOR.WHITE : theme.colorTextSecondary,
        }}
      >
        <span className="select-none">{label}</span>
      </div>
      <div
        className="absolute flex items-center justify-center"
        style={{
          transition: "transform 0.05s ease-in-out",
          transform: `translate(${pointerPosition.x}px, ${pointerPosition.y}px)`,
        }}
      >
        <PointerArrow
          borderColor={isActive ? COLOR.ORANGE : theme.colorBorderSecondary}
          fillColor={isActive ? COLOR.ORANGE : theme.colorBgBase}
          style={{
            transition: "transform 0.05s ease-in-out",
            transform: `rotate(${angle}deg) scale(0.75)`,
          }}
        />
      </div>
    </div>
  );
};

export default PointerNode;
