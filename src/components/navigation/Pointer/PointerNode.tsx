// @ts-ignore
import PointerArrow from "../../../assets/icons/NavigationArrow";
import { COLOR } from "../../../interfaces/theme";
import { FRAME_KEY } from "../../../interfaces/frame";
import useTheme from "../../../hooks/useTheme";
import { navigateToFrame } from "../../../utils/navigation";
import { trackEvent } from "../../../utils/analytics";
import { AnalyticsEvent } from "../../../interfaces/analytics";
import { IPosition } from "./usePointerPosition";

interface IPointerNode {
  position: IPosition;
  angle: number;
  pointerPosition: IPosition;
  label: string;
  isActive: boolean;
  targetId: FRAME_KEY;
}

const PointerNode = (props: IPointerNode) => {
  const { position, angle, pointerPosition, label, isActive, targetId } = props;
  const { theme } = useTheme();

  return (
    <div
      className="absolute flex items-center justify-center cursor-pointer"
      onClick={() => {
        trackEvent(AnalyticsEvent.NAVIGATION, `click ${targetId} pointer node`);
        navigateToFrame(targetId);
      }}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.2s ease-in-out, opacity 0.3s ease-in-out",
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
