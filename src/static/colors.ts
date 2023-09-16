import { COLOR, ITheme } from "../interfaces/theme";
import { IS_MOBILE } from "../utils/device";

export const LIGHT_THEME: ITheme = {
  colorPrimary: COLOR.BLUE,
  colorSecondary: COLOR.ORANGE,
  colorTertiaty: COLOR.LIGHT_BLUE,
  colorBgBase: COLOR.WHITE,
  colorBgSecondary: COLOR.DARK_GREY,
  colorText: COLOR.BLACK,
  colorTextSecondary: COLOR.DARK_GREY,
  colorTextTertiary: COLOR.GREY,
  colorBorder: COLOR.LIGHT_GREY,
  colorBorderSecondary: COLOR.BLUE,
};

export const DARK_THEME: ITheme = {
  colorPrimary: COLOR.BLUE,
  colorSecondary: COLOR.ORANGE,
  colorTertiaty: COLOR.LIGHT_BLUE,
  colorBgBase: IS_MOBILE ? COLOR.BLACK : COLOR.DARKER_GREY,
  colorBgSecondary: IS_MOBILE ? COLOR.DARKER_GREY : COLOR.BLACK,
  colorText: COLOR.LIGHT_GREY,
  colorTextSecondary: COLOR.GREY,
  colorTextTertiary: COLOR.DARK_GREY,
  colorBorder: COLOR.DARK_GREY,
  colorBorderSecondary: COLOR.DARK_BLUE,
};
