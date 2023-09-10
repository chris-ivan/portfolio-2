import { FC, lazy } from "react";
import useToolbarColorPicker from "./useToolbarColorPicker";
import useTheme from "../../../../hooks/useTheme";
import Checkboard from "./Checkboard";
import { Suspense } from "react";

const ColorPickerModal = lazy(() => import("./ColorPickerModal"));

export interface IColorPickerContainer {
  type: "fill" | "stroke";
  label: string;
}

const ColorPickerContainer: FC<IColorPickerContainer> = (props) => {
  const { type, label } = props;
  const { theme } = useTheme();

  const { setOpenColorPicker, fillColor, onChange, openColorPicker } =
    useToolbarColorPicker(props);

  return (
    <div className="relative">
      <div
        className="relative h-5 w-5 border-2 border-solid border-black cursor-pointer mx-2 overflow-hidden"
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
        <Suspense>
          <ColorPickerModal
            fillColor={fillColor}
            onChange={onChange}
            setOpenColorPicker={setOpenColorPicker}
          />
        </Suspense>
      )}
    </div>
  );
};

export default ColorPickerContainer;
