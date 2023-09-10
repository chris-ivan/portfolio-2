import { useEffectOnce } from "usehooks-ts";
import { NotificationContext } from "../../../context/NotificationContext";
import useInitialView from "../../../hooks/useInitialView";
import usePinchZoom from "../../../hooks/usePinchZoom";
import useShortcut from "../../../hooks/useShortcut";
import { frameSizeType } from "../../../interfaces/frame";
import {
  BASE_SCALE_RATIO,
  SCALE_STEP,
  WHEEL_MAX_SCALE_RATIO,
} from "../../../static/transform";
import { checkTouchDevice } from "../../../utils/device";
import {
  calculateMovement,
  isWheelZooming,
  isShiftKeyScrolling,
} from "./Container.util";
import { useCallback, useEffect, useState, useContext } from "react";
import useTransformListener from "../../../hooks/useTransformListener";

interface IUseContainer {
  contentRef: React.RefObject<HTMLDivElement> | null;
  containerRef: React.RefObject<HTMLDivElement> | null;
  initialSize: frameSizeType<number>;
}

let timeout = 0;

const useContainer = (props: IUseContainer) => {
  const [distance, setDistance] = useState<number>(0);
  const { toastError } = useContext(NotificationContext);
  const [touchPosition, setTouchPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const { contentRef, containerRef, initialSize } = props;
  const transform = useTransformListener();
  const { updateTransform, dispatchZoomChange } = usePinchZoom(
    contentRef,
    initialSize
  );

  const handleMove2D = useCallback(
    (dx: number, dy: number) => {
      if (!contentRef?.current || !containerRef?.current) return;

      const newPosition = calculateMovement(
        containerRef.current,
        contentRef.current,
        { x: dx, y: dy },
        transform
      );
      // @ts-ignore
      updateTransform(newPosition);
    },
    [containerRef, contentRef, transform, updateTransform]
  );

  useInitialView({ containerRef, updateTransform });
  useShortcut({ onZoom: dispatchZoomChange, handleMove2D });

  const onZoom = (event: React.WheelEvent<HTMLDivElement>) => {
    // Scale ratio depends on the deltaY size
    const scaleRatio = Math.abs(event.deltaY / 10);
    // Limit the maximum scale ratio
    const mergedScaleRatio = Math.min(scaleRatio, WHEEL_MAX_SCALE_RATIO);
    // Scale the ratio each time
    let ratio = BASE_SCALE_RATIO + mergedScaleRatio * SCALE_STEP;

    if (event.deltaY > 0) {
      ratio = BASE_SCALE_RATIO / ratio;
    }

    dispatchZoomChange(ratio, event.clientX, event.clientY);
  };

  const onMove = (event: React.WheelEvent<HTMLDivElement>) => {
    const { deltaX, deltaY } = event;
    handleMove2D(deltaX, deltaY);
  };

  const onShiftKeyScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    handleMove2D(event.deltaY, 0);
  };

  const onWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (isWheelZooming(event)) return onZoom(event);
    if (isShiftKeyScrolling(event)) return onShiftKeyScroll(event);
    onMove(event);
  };

  const preventWheel = (event: WheelEvent) => {
    event.preventDefault();
  };

  const onTouchMove = useCallback(
    (event: TouchEvent) => {
      event.preventDefault();

      timeout = setTimeout(() => {
        setDistance(0);
        setTouchPosition({ x: 0, y: 0 });
      }, 1000);

      const { touches } = event;

      if (touches.length === 1) {
        if (!touchPosition.x || !touchPosition.y) {
          setTouchPosition({ x: touches[0].screenX, y: touches[0].screenY });
          return;
        }

        setTouchPosition((prev) => {
          const dx = prev.x - touches[0].screenX;
          const dy = prev.y - touches[0].screenY;
          handleMove2D(dx, dy);

          return { x: touches[0].screenX, y: touches[0].screenY };
        });

        return;
      }

      const newDistance = Math.hypot(
        touches[0].pageX - touches[1].pageX,
        touches[0].pageY - touches[1].pageY
      );

      if (!distance) {
        setDistance(newDistance);
        return;
      }

      setDistance((prev) => {
        const ratio = 1 + (newDistance - prev) / prev;
        const centerX = (touches[0].screenX + touches[1].screenX) / 2;
        const centerY = (touches[0].screenY + touches[1].screenY) / 2;
        console.log(newDistance - prev, newDistance, prev);
        dispatchZoomChange(ratio, centerX, centerY);

        return newDistance;
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [distance, dispatchZoomChange, touchPosition.x, touchPosition.y]
  );

  useEffectOnce(() => {
    const isTouchDevice = checkTouchDevice();
    if (isTouchDevice) {
      setTimeout(() => {
        toastError(
          "This website version is not optimized for touch devices. Please navigate using your mouse/touchpad for the best experience."
        );
      }, 300);
    }
  });

  useEffect(() => {
    const options = { passive: false };
    window.addEventListener("touchmove", onTouchMove, options);

    return () => {
      window.removeEventListener("touchmove", onTouchMove);
      clearTimeout(timeout);
    };
  }, [distance, onTouchMove]);

  useEffect(() => {
    const container = containerRef?.current;
    const options = { passive: false };

    window.addEventListener("wheel", preventWheel, options);
    document.addEventListener("wheel", preventWheel, options);
    container?.addEventListener("wheel", preventWheel, options);

    return () => {
      window.removeEventListener("wheel", preventWheel);
      document.removeEventListener("wheel", preventWheel);
      container?.removeEventListener("wheel", preventWheel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { onWheel };
};

export default useContainer;
