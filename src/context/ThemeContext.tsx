import { createContext, useMemo, useEffect } from "react";
import { ITheme, ThemeType } from "../interfaces/theme";
import { useDarkMode } from "usehooks-ts";
import { DARK_THEME, LIGHT_THEME } from "../static/colors";

export interface IThemeContext {
  theme: ITheme;
  setTheme: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: LIGHT_THEME,
  setTheme: () => undefined,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode, enable, disable } = useDarkMode();

  const theme = useMemo(() => {
    return isDarkMode ? DARK_THEME : LIGHT_THEME;
  }, [isDarkMode]);

  const setTheme = (theme: ThemeType) => {
    theme === "dark" ? enable() : disable();
  };

  useEffect(() => {
    const body = document.querySelector("body");
    const html = document.querySelector("html");

    if (!body || !html) return;

    body.style.backgroundColor = theme.colorBgSecondary;
    html.style.backgroundColor = theme.colorBgSecondary;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
