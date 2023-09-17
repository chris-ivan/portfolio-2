import { createContext, useMemo } from "react";
import { useLocalStorage } from "usehooks-ts";
import { NavigationMode } from "../interfaces/global";
import { IS_MOBILE } from "../utils/device";

export const NAVIGATION_LOCAL_KEY = "NAVIGATION_MODE";

export interface IGlobalContext {
  navigationMode: NavigationMode;
  setNavigationMode: React.Dispatch<React.SetStateAction<NavigationMode>>;
  isAdventure: boolean;
}

export const GlobalContext = createContext<IGlobalContext>({
  navigationMode: NavigationMode.ADVENTURE,
  setNavigationMode: () => undefined,
  isAdventure: false,
});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [navigationMode, setNavigationMode] = useLocalStorage(
    NAVIGATION_LOCAL_KEY,
    NavigationMode.ADVENTURE
  );

  const isAdventure = useMemo(
    () => navigationMode === NavigationMode.ADVENTURE && !IS_MOBILE,
    [navigationMode]
  );

  return (
    <GlobalContext.Provider
      value={{ navigationMode, setNavigationMode, isAdventure }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
