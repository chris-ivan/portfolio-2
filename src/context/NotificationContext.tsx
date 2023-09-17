import { useContext, createContext, useMemo, useCallback } from "react";
import { ThemeContext } from "./ThemeContext";
import toastLib from "react-hot-toast";
import { COLOR } from "../interfaces/theme";

type Message = JSX.Element | string;

export interface INotificationContext {
  toast: (message: Message) => void;
  toastSuccess: (message: Message) => void;
  toastError: (message: Message) => void;
}

export const NotificationContext = createContext<INotificationContext>({
  toast: () => undefined,
  toastSuccess: () => undefined,
  toastError: () => undefined,
});

const darkBaseStyle = {
  background: COLOR.DARKER_GREY,
  color: COLOR.LIGHT_GREY,
};

const lightBaseStyle = {
  background: "#fcfcfc",
  color: COLOR.DARKER_GREY,
};

export const NotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isDarkMode } = useContext(ThemeContext);

  const style = useMemo(() => {
    const baseStyle = {
      borderRadius: 0,
    };

    Object.assign(baseStyle, isDarkMode ? darkBaseStyle : lightBaseStyle);

    return baseStyle;
  }, [isDarkMode]);

  const toastSuccess = useCallback(
    (message: Message) => {
      toastLib.success(message, { style });
    },
    [style]
  );

  const toastError = useCallback(
    (message: Message) => {
      toastLib.error(message, { style });
    },
    [style]
  );

  const toast = useCallback(
    (message: Message) => {
      toastLib(message, { style });
    },
    [style]
  );

  return (
    <NotificationContext.Provider value={{ toast, toastSuccess, toastError }}>
      {children}
    </NotificationContext.Provider>
  );
};
