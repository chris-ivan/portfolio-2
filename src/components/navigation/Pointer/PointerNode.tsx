import usePointerNode from "./usePointerNode";
// @ts-ignore
import PointerArrow from "../../../assets/icons/NavigationArrow";
import { COLOR } from "../../../static/colors";
import { useZoomStore } from "../../../store/zoomStore";

interface IPointerNode {
  targetId: string;
  label: string;
}

const getTailwindBorderColor = (isActive: boolean) => {
  return isActive ? "border-orange" : "border-blue";
};

const getTailwindBgColor = (isActive: boolean) => {
  return isActive ? "bg-orange" : "bg-white";
};

const getTailwindColor = (isActive: boolean) => {
  return isActive ? "text-white" : "text-blue";
};

const concat = (
  fnArr: ((isActive: boolean) => string)[],
  isActive: boolean
) => {
  return fnArr.map((fn) => fn(isActive)).join(" ");
};

const PointerNode = (props: IPointerNode) => {
  const { targetId, label } = props;
  const { isNavigating } = useZoomStore();
  const pointerNode = usePointerNode({ targetId, label });
  const { position, angle, pointerPosition } = pointerNode;

  const isActive = false;
  const tailwindClass = concat(
    [getTailwindBorderColor, getTailwindBgColor, getTailwindColor],
    isActive
  );

  const { x, y } = pointerPosition;

  return (
    <div
      className="absolute flex items-center justify-center cursor-pointer"
      style={{
        ...position,
        transition:
          "top 0.05s ease-in-out, left 0.05s ease-in-out, right 0.05s ease-in-out, bottom 0.05s ease-in-out, opacity 0.3s ease-in-out",
        opacity: isNavigating ? 1 : 0,
        pointerEvents: isNavigating ? "auto" : "none",
      }}
    >
      <div
        className={`${tailwindClass} border-2 border-solid p-2 transition-colors`}
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
          borderColor={isActive ? COLOR.ORANGE : COLOR.BLUE}
          fillColor={isActive ? COLOR.ORANGE : COLOR.WHITE}
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
