import { useRef, useCallback, FC } from "react";
import { ColorResult } from "react-color";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import ColorPickerUI from "../../../UI/ColorPicker";

interface IColorPickerUI {
  fillColor: string;
  onChange: (
    color: ColorResult,
    e: React.ChangeEvent<HTMLInputElement>
  ) => null | undefined;
  setOpenColorPicker: (value: React.SetStateAction<boolean>) => void;
}

const ColorPickerModal: FC<IColorPickerUI> = (props) => {
  const { fillColor, onChange, setOpenColorPicker } = props;
  const ref = useRef<HTMLDivElement>(null);

  const onClickOutside = useCallback(() => {
    setOpenColorPicker(false);
  }, [setOpenColorPicker]);

  useOnClickOutside({ ref, onClickOutside });

  console.log("HERE");

  return (
    <div ref={ref} className="absolute top-[150%] right-0">
      <ColorPickerUI color={fillColor} onChange={onChange} />
    </div>
  );
};

export default ColorPickerModal;
