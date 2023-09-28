import { createContext, useCallback, useEffect, useMemo } from "react";
import { useLocalStorage } from "usehooks-ts";
import { NavigationMode } from "../interfaces/global";
import { IS_MOBILE } from "../utils/device";
import ReactGA from "react-ga4";
import { AnalyticsEvent } from "../interfaces/analytics";

export const NAVIGATION_LOCAL_KEY = "NAVIGATION_MODE";

export interface IGlobalContext {
  navigationMode: NavigationMode;
  setNavigationMode: React.Dispatch<React.SetStateAction<NavigationMode>>;
  isAdventure: boolean;
  trackEvent: (category: AnalyticsEvent, action: string, data?: object) => void;
}

const initialNavigationMode = NavigationMode.NORMAL;

export const GlobalContext = createContext<IGlobalContext>({
  navigationMode: initialNavigationMode,
  setNavigationMode: () => undefined,
  isAdventure: false,
  trackEvent: () => undefined,
});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [navigationMode, setNavigationMode] = useLocalStorage(
    NAVIGATION_LOCAL_KEY,
    initialNavigationMode
  );

  const isAdventure = useMemo(
    () => navigationMode === NavigationMode.ADVENTURE && !IS_MOBILE,
    [navigationMode]
  );

  const trackEvent = useCallback(
    (category: AnalyticsEvent, action: string, data?: object) => {
      ReactGA.event(
        {
          category,
          action,
        },
        data
      );
    },
    []
  );

  useEffect(() => {
    trackEvent(
      AnalyticsEvent.GLOBAL,
      `init - mobile:${IS_MOBILE ? "true" : "false"} - ${navigationMode}`
    );
    // eslint-disable-next-line
  }, []);

  return (
    <GlobalContext.Provider
      value={{ trackEvent, navigationMode, setNavigationMode, isAdventure }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
