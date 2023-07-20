import usePointerNode from "./usePointerNode";
// @ts-ignore
import { ReactComponent as PointerArrow } from "../../../assets/icons/navigation-arrow.svg";

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
  const { position, angle } = usePointerNode({ targetId });

  const isActive = false;
  const tailwindClass = concat(
    [getTailwindBorderColor, getTailwindBgColor, getTailwindColor],
    isActive
  );

  return (
    <div
      className="absolute"
      style={{
        ...position,
        transition:
          "top 0.05s ease-in-out, left 0.05s  ease-in-out, width 0.05s  ease-in-out, height 0.05s  ease-in-out",
      }}
    >
      <div className={`${tailwindClass} border-2 border-solid p-2`}>
        {label}
      </div>
      <PointerArrow
        className="absolute top-0 left-2"
        style={{
          transition: "transform 0.05s ease-in-out",
          transform: `rotate(${angle}deg)`,
        }}
      />
    </div>
  );
};

export default PointerNode;
