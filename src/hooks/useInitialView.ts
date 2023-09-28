import { TransformType } from "../interfaces/container";
import { FRAME_KEY } from "../interfaces/frame";
import { checkMobile } from "../utils/device";
import { useMemo, useRef, useEffect } from "react";
import { navigateToFrame } from "../utils/navigation";

interface IUseInitialView {
  containerRef: React.RefObject<HTMLDivElement> | null;
  updateTransform: (newTransform: Partial<TransformType>) => void;
}

const useInitialView = (props: IUseInitialView) => {
  const { containerRef } = props;
  const isMobile = useMemo(checkMobile, []);
  const isInitialized = useRef<boolean>(false);

  useEffect(() => {
    if (isMobile || !containerRef || isInitialized.current) return;

    navigateToFrame(FRAME_KEY.LANDING);
    isInitialized.current = true;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, containerRef]);
};

export default useInitialView;
