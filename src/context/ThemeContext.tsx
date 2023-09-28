import { createContext, useMemo, useEffect } from "react";
import { ITheme, ThemeType } from "../interfaces/theme";
import { useDarkMode } from "usehooks-ts";
import { DARK_THEME, LIGHT_THEME } from "../static/colors";
import { useZustandThemeStore } from "../store/themeStore";
import { useKonvaStore } from "../store/konvaStore";
import useGlobalStore from "../hooks/useGlobalStore";
import { AnalyticsEvent } from "../interfaces/analytics";

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
  const { isDarkMode, enable, disable } = useDarkMode(true);
  const { setTheme: setKonvaTheme } = useKonvaStore();
  const { setIsDarkMode } = useZustandThemeStore();
  const { trackEvent } = useGlobalStore();

  const theme = useMemo(() => {
    return isDarkMode ? DARK_THEME : LIGHT_THEME;
  }, [isDarkMode]);

  const setTheme = (theme: ThemeType) => {
    trackEvent(AnalyticsEvent.GLOBAL, `change theme to ${theme}`);
    theme === "dark" ? enable() : disable();
  };

  useEffect(() => {
    const body = document.querySelector("body");
    const html = document.querySelector("html");

    if (!body || !html) return;

    body.style.backgroundColor = theme.colorBgSecondary;
    html.style.backgroundColor = theme.colorBgSecondary;
    setIsDarkMode(isDarkMode);
    setKonvaTheme(isDarkMode ? "dark" : "light");

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-color-mode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-color-mode", "light");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode]);

  useEffect(() => {
    trackEvent(AnalyticsEvent.GLOBAL, "theme context initialization", {
      isDarkMode,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
