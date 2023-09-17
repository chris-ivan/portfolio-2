import ReactGA from "react-ga4";
import { AnalyticsEvent } from "../interfaces/analytics";

export const trackEvent = (
  category: AnalyticsEvent,
  action: string,
  data?: object
) => {
  ReactGA.event(
    {
      category,
      action,
    },
    data
  );
};
