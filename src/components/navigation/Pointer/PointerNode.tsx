import usePointerNode from "./usePointerNode";

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
  const { position } = usePointerNode({ targetId });

  const isActive = false;
  const tailwindClass = concat(
    [getTailwindBorderColor, getTailwindBgColor, getTailwindColor],
    isActive
  );

  return (
    <div
      style={{
        ...position,
        transition:
          "top 0.05s ease-in-out, left 0.05s  ease-in-out, width 0.05s  ease-in-out, height 0.05s  ease-in-out",
      }}
      className={`${tailwindClass} absolute border-2 border-solid p-2`}
    >
      {label}
    </div>
  );
};

export default PointerNode;
