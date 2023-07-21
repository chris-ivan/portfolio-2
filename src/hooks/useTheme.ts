import { useContext } from "react";
import { IThemeContext, ThemeContext } from "../context/ThemeContext";

const useTheme = () => {
  const context = useContext<IThemeContext>(ThemeContext);
  return context;
};

export default useTheme;
