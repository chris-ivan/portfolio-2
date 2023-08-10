import { createContext, useMemo, useEffect } from "react";
import { ITheme, ThemeType } from "../interfaces/theme";
import { useDarkMode } from "usehooks-ts";
import { DARK_THEME, LIGHT_THEME } from "../static/colors";
import { useZustandThemeStore } from "../store/themeStore";

export interface IThemeContext {
  theme: ITheme;
  setTheme: (theme: ThemeType) => void;
  isDarkMode: boolean;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: LIGHT_THEME,
  setTheme: () => undefined,
  isDarkMode: false,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode, enable, disable } = useDarkMode();
  const { setIsDarkMode } = useZustandThemeStore();

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
    setIsDarkMode(isDarkMode);

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
