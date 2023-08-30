import { TransformType } from "../interfaces/container";
import { FRAME_KEY } from "../interfaces/frame";
import { checkMobile } from "../utils/device";
import { useMemo, useRef, useEffect } from "react";

interface IUseInitialView {
  containerRef: React.RefObject<HTMLDivElement> | null;
  updateTransform: (newTransform: Partial<TransformType>) => void;
}

const useInitialView = (props: IUseInitialView) => {
  const { containerRef, updateTransform } = props;
  const isMobile = useMemo(checkMobile, []);
  const isInitialized = useRef<boolean>(false);

  useEffect(() => {
    if (isMobile || !containerRef) return;

    const targetId = FRAME_KEY.LANDING;
    const target = document.getElementById(targetId || "");
    if (!target) return;

    updateTransform({ x: -target.offsetLeft, y: -target.offsetTop });
    isInitialized.current = true;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, containerRef]);
};

export default useInitialView;
