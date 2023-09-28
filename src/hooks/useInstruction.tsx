import { useEffectOnce } from "usehooks-ts";
import useGlobalStore from "./useGlobalStore";
import { IS_MOBILE } from "../utils/device";
import { useContext, useRef } from "react";
import { NotificationContext } from "../context/NotificationContext";
import Code from "../components/UI/Code";

const guideContent = (
  <span>
    Feeling adventurous today? try the <Code>Adventure Mode</Code> at the bottom
    right settings menu.
  </span>
);

const useInstruction = () => {
  const { isAdventure } = useGlobalStore();
  const { toast } = useContext(NotificationContext);
  const isLoaded = useRef<boolean>(false);

  const showGuide = () => {
    toast(guideContent);
  };

  useEffectOnce(() => {
    if (IS_MOBILE || isAdventure || isLoaded.current) return;
    isLoaded.current = true;
    setTimeout(showGuide, 5000);
  });
};

export default useInstruction;
