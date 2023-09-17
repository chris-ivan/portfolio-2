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
import { getColorHex } from "../../../utils/color";

const ColorPickerParent = (props: InjectedColorProps) => {
  return (
    <div className="flex flex-col h-[240px] w-[200px] p-3 shadow-lg bg-white dark:bg-darker-grey gap-3 border border-solid border-light-grey dark:border-dark-grey">
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
          <div className="relative flex items-center w-full flex-1 bg-white">
            <ColorSlider
              props={props}
              element={Alpha}
              pointer={HorizontalColorPointer}
            />
          </div>
        </div>
        <div className="w-7 h-7 relative border-solid border border-light-grey dark:border-dark-grey">
          <Checkboard />
          <div
            className="w-full h-full absolute top-0 left-0"
            // @ts-ignore
            style={{ background: getColorHex(props) }}
          />
        </div>
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
