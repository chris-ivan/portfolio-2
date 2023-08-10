export enum COLOR {
  BLACK = "#131313",
  DARKER_GREY = "#1E1E1E",
  DARK_GREY = "#767676",
  GREY = "#B0B0B0",
  LIGHT_GREY = "#E7E7E7",
  WHITE = "#FFFFFF",
  DARK_BLUE = "#074C7E",
  BLUE = "#0C8CE9",
  LIGHT_BLUE = "#DEE7F0",
  ORANGE = "#E95C0C",
}

type ThemeColorValue = COLOR;

export type ThemeType = "light" | "dark";

export interface ITheme {
  colorPrimary: ThemeColorValue;
  colorSecondary: ThemeColorValue;
  colorTertiaty: ThemeColorValue;
  colorBgBase: ThemeColorValue;
  colorBgSecondary: ThemeColorValue;
  colorText: ThemeColorValue;
  colorTextSecondary: ThemeColorValue;
  colorTextTertiary: ThemeColorValue;
  colorBorder: ThemeColorValue;
  colorBorderSecondary: ThemeColorValue;
}
