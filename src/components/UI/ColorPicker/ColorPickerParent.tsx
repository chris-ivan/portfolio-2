import { InjectedColorProps } from "react-color";
import ColorButton from "./ColorButton";
import { BASIC_COLORS } from "./ColorPicker.static";
import {
  Saturation,
  Hue,
  Alpha,
  Checkboard,
} from "react-color/lib/components/common";
import ColorSlider from "./ColorSlider";
import { ColorPointer, HorizontalColorPointer } from "./ColorPointer";

const ColorPickerParent = (props: InjectedColorProps) => {
  return (
    <div className="flex flex-col h-[300px] w-[200px] p-3 shadow-md bg-white gap-3">
      <div className="relative w-full bg-red-500 flex-1">
        <ColorSlider
          props={props}
          element={Saturation}
          pointer={ColorPointer}
        />
      </div>
      <div className="flex gap-2">
        <div className="flex-1 flex flex-col gap-2">
          <div className="relative flex items-center w-full flex-1">
            <ColorSlider
              props={props}
              element={Hue}
              pointer={HorizontalColorPointer}
            />
          </div>
          <div className="relative flex items-center w-full flex-1">
            <ColorSlider
              props={props}
              element={Alpha}
              pointer={HorizontalColorPointer}
            />
          </div>
        </div>
        <div className="w-7 h-7 relative">
          <Checkboard />
          <div
            className="w-full h-full absolute top-0 left-0"
            style={{ background: props.hex }}
          />
        </div>
      </div>
      <div className="flex gap-2">
        <span className="text-dark-grey">HEX</span>
        <div className="bg-red-500 w-full h-full" />
      </div>
      <div className="flex gap-[6px] h-6">
        {BASIC_COLORS.map((color) => (
          <ColorButton key={color} color={color} />
        ))}
      </div>
    </div>
  );
};

export default ColorPickerParent;
