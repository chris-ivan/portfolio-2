import { Checkboard } from "react-color/lib/components/common";
import ColorPickerUI from "../../UI/ColorPicker";
import useToolbarColorPicker from "./useToolbarColorPicker";
import { useRef, useCallback } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import useTheme from "../../../hooks/useTheme";

export interface IFillColorPicker {
  type: "fill" | "stroke";
  label: string;
}

const ColorPicker = (props: IFillColorPicker) => {
  const { type, label } = props;
  const ref = useRef<HTMLDivElement>(null);

  const {
    selectedNodes,
    setOpenColorPicker,
    fillColor,
    onChange,
    openColorPicker,
  } = useToolbarColorPicker(props);
  const { theme } = useTheme();

  const onClickOutside = useCallback(() => {
    setOpenColorPicker(false);
  }, [setOpenColorPicker]);

  useOnClickOutside({ ref, onClickOutside });

  if (!selectedNodes.length) return null;

  if (selectedNodes.some((node) => !node.config[type])) return null;

  return (
    <div className="relative">
      <div
        className="relative h-5 w-5 border-2 border-solid border-black cursor-pointer mx-1 rounded-lg overflow-hidden"
        onClick={() => setOpenColorPicker((prev) => !prev)}
        title={label}
        aria-label={label}
        style={{
          borderColor: type === "stroke" ? fillColor : theme.colorTextSecondary,
        }}
      >
        {type === "fill" && <Checkboard />}
        <div
          className="w-full h-full absolute"
          style={{
            backgroundColor: type === "fill" ? fillColor : "transparent",
          }}
        />
      </div>
      {openColorPicker && (
        <div ref={ref} className="absolute top-[150%] right-0">
          <ColorPickerUI color={fillColor} onChange={onChange} />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
