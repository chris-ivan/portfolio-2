import { lazy } from "react";
// @ts-ignore
import { ReactComponent as GithubIcon } from "../../../assets/icons/Logo/Github.svg";
// @ts-ignore
import { ReactComponent as LinkedInIcon } from "../../../assets/icons/Logo/LinkedIn.svg";
// @ts-ignore
import { ReactComponent as WhatsAppIcon } from "../../../assets/icons/Logo/WhatsApp.svg";

import useTheme from "../../../hooks/useTheme";
import AdventureOnly from "../../template/AdventureOnly";
import SocialLink from "./SocialLink";
import useGlobalStore from "../../../hooks/useGlobalStore";
import { NavigationMode } from "../../../interfaces/global";
import { IS_MOBILE } from "../../../utils/device";

const GuideButton = lazy(() => import("./GuideButton"));
const Settings = lazy(() => import("./Settings"));
const ThemeToggler = lazy(() => import("./ThemeToggler"));

const NavigationConfig = () => {
  const { theme } = useTheme();
  const { navigationMode } = useGlobalStore();
  const isAdventure = navigationMode === NavigationMode.ADVENTURE;
  const position = isAdventure ? "fixed" : "absolute";

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 w-screen h-screen pointer-events-none touch-none z-[60]">
      <div
        className={`relative ${
          isAdventure ? "" : "w-full h-full max-w-[1600px] mx-auto"
        }`}
      >
        <div
          className="fixed top-0 h-[60px] flex items-center left-[5vw] md:left-6 z-[200] touch-auto pointer-events-auto pt-6 pb-5 font-grifter md:"
          style={{
            color: theme.colorText,
            position,
            userSelect: isAdventure ? "none" : undefined,
          }}
        >
          Christopher Ivan Gunardi
        </div>
        <div
          style={{ position }}
          className="fixed right-4 bottom-4 md:right-6 flex items-center gap-1/2 md:gap-2 z-[200] touch-auto pointer-events-auto"
        >
          <SocialLink
            label="LinkedIn"
            icon={LinkedInIcon as () => JSX.Element}
            link="https://www.linkedin.com/in/christopher-ivan-gunardi/"
          />
          <SocialLink
            label="GitHub"
            icon={GithubIcon as () => JSX.Element}
            link="https://github.com/chris-ivan"
          />
          <SocialLink
            label="WhatsApp"
            icon={WhatsAppIcon as () => JSX.Element}
            link="https://wa.me/6287784795500/"
          />
          <AdventureOnly>
            <GuideButton />
          </AdventureOnly>
          {IS_MOBILE ? <ThemeToggler /> : <Settings />}
        </div>
      </div>
    </div>
  );
};

export default NavigationConfig;
