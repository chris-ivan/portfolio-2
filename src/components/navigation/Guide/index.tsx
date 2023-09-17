import useTheme from "../../../hooks/useTheme";
import { GUIDES } from "./Guide.static";
import GuideInstruction from "./GuideInstruction";
// @ts-ignore
import { ReactComponent as CloseIcon } from "../../../assets/icons/UI/close-icon.svg";
import { useNavigationStore } from "../../../store/navigationStore";
import { Transition } from "@headlessui/react";
import useGlobalStore from "../../../hooks/useGlobalStore";
import { NavigationMode } from "../../../interfaces/global";
import { trackEvent } from "../../../utils/analytics";
import { AnalyticsEvent } from "../../../interfaces/analytics";

const Guide = () => {
  const { theme } = useTheme();
  const { setNavigationMode } = useGlobalStore();
  const { showGuide, setShowGuide } = useNavigationStore();

  return (
    <Transition
      appear
      show={showGuide}
      enter="transition ease-linear duration-150 opacity transform"
      enterFrom="opacity-0 translate-y-20"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-linear duration-150 opacity transform"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-20"
      className="fixed left-0 right-0 bottom-0 w-full h-full z-[200]"
    >
      <div
        style={{
          backgroundColor: theme.colorBgSecondary,
          borderTop: `1px solid ${theme.colorBorder}`,
        }}
        className="fixed bottom-0 left-0 right-0 w-full py-3"
      >
        <div className="max-w-[1000px] w-full mx-auto">
          <div className="flex items-center justify-between">
            <p
              className="text-center text-xs"
              style={{
                color: theme.colorTextSecondary,
              }}
            >
              Navigation Guide
            </p>
            <div
              onClick={() => {
                setShowGuide(false);
                trackEvent(AnalyticsEvent.NAVIGATION, "close guide");
              }}
              className="cursor-pointer scale-50 hover:text-black text-dark-grey dark:hover:text-white dark:text-grey"
            >
              <CloseIcon />
            </div>
          </div>
          <div
            style={{
              borderColor: theme.colorBorder,
            }}
            className="w-full border-b border-solid mt-1 mb-3"
          />
          <div className="flex flex-col flex-wrap content-start h-[135px] gap-x-[12.5%] gap-y-3">
            {GUIDES.map((guide, idx) => (
              <GuideInstruction key={idx} {...guide} />
            ))}
          </div>
          <div
            style={{
              borderColor: theme.colorBorder,
            }}
            className="w-full border-b border-solid"
          />
          <p
            className="text-center mt-2 text-xs"
            style={{
              color: theme.colorTextSecondary,
            }}
          >
            Find this layout confusing?{" "}
            <span
              onClick={() => {
                setNavigationMode(NavigationMode.NORMAL);
                trackEvent(
                  AnalyticsEvent.NAVIGATION,
                  "change navigation mode from guide panel"
                );
              }}
              className="underline cursor-pointer hover:text-black dark:hover:text-white transition-colors"
            >
              Use the normal layout
            </span>
          </p>
        </div>
      </div>
    </Transition>
  );
};

export default Guide;
