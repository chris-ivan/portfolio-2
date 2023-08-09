import { InjectedColorProps } from "react-color";

export const ColorPointer = (props: InjectedColorProps) => {
  const isDark = props?.hsl?.l && props.hsl.l < 0.5;
  const borderColor = isDark ? "#e2e2e2" : "#222222";

  return (
    <div
      style={{ borderColor }}
      className="w-3 h-3 rounded-md shadow-sm border border-solid translate-x-[-6px] translate-y-[-1px] transition-colors"
    />
  );
};

export const HorizontalColorPointer = () => {
  return (
    <div className="w-2 h-2 rounded-md shadow-sm border border-solid bg-white translate-x-[-6px] translate-y-[1px] transition-colors" />
  );
};
