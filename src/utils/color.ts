import { ColorResult } from "react-color";
import rgbHex from "rgb-hex";

export const getColorHex = (color: ColorResult) => {
  const { r, g, b, a } = color.rgb;
  const hex = `#${rgbHex(r, g, b, a)}`;
  return hex;
};
