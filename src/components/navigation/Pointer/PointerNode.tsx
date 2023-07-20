import usePointerNode from "./usePointerNode";
// @ts-ignore
import PointerArrow from "../../../assets/icons/NavigationArrow";
import { COLOR } from "../../../static/colors";

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
      className="absolute flex items-center justify-center"
      style={{
        ...position,
        transition:
          "top 0.05s ease-in-out, left 0.05s  ease-in-out, width 0.05s  ease-in-out, height 0.05s  ease-in-out",
      }}
    >
      <div className={`${tailwindClass} border-2 border-solid p-2`}>
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
            color: "red",
          }}
        />
      </div>
    </div>
  );
};

export default PointerNode;
