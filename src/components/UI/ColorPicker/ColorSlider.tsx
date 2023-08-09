import { CustomPickerProps, InjectedColorProps } from "react-color";
import { Saturation, Hue, Alpha } from "react-color/lib/components/common";

interface IColorSlider {
  element: React.ComponentType<CustomPickerProps<Saturation | Hue | Alpha>>;
  props: InjectedColorProps;
  pointer: React.ComponentType<InjectedColorProps>;
}

const ColorSlider = (props: IColorSlider) => {
  const { element: Element, pointer, props: elementProps } = props;
  return (
    <Element
      // @ts-ignore
      pointer={pointer}
      // eslint-disable-next-line
      onChange={elementProps.onChange as any}
      {...elementProps}
    />
  );
};

export default ColorSlider;
