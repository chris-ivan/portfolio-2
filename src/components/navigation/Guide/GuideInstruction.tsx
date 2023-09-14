import { FC, ReactNode } from "react";
import useTheme from "../../../hooks/useTheme";

interface IGuideInstruction {
  label: string;
  codes: ReactNode[];
}

const GuideInstruction: FC<IGuideInstruction> = (props) => {
  const { label, codes } = props;
  const { theme } = useTheme();

  return (
    <div
      style={{ color: theme.colorText }}
      className="flex w-[25%] justify-between items-center text-xs"
    >
      <span>{label}</span>
      <div className="flex gap-1">
        {codes.map((code, index) => (
          <div
            style={{
              backgroundColor: theme.colorBgBase,
              borderColor: theme.colorBorder,
            }}
            key={index}
            className="flex text-xs items-center justify-center py-1 px-2 border border-solid"
          >
            {code}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuideInstruction;
