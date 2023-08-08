import { useCallback, useState, useMemo } from "react";
import { FRAME_KEY, frameCoordinateType } from "../../../interfaces/frame";
import useViewport from "../../../hooks/useViewport";
import {
  calculatePointerNodeArrowPosition,
  calculatePointerNodePosition,
} from "./Pointer.helper";
import { useNavigationStore } from "../../../store/navigationStore";
import { useInterval } from "usehooks-ts";

interface IUsePointerNode {
  targetId: FRAME_KEY;
  label: string;
}

const defaultCoordinate: frameCoordinateType = { x: 0, y: 0 };

const usePointerNode = (props: IUsePointerNode) => {
  const { targetId, label } = props;
  const viewportSize = useViewport();
  const { isNavigating } = useNavigationStore();
  const calcProps = useMemo(
    () => ({ label, targetId, viewportSize }),
    [label, targetId, viewportSize]
  );

  const [position, setPosition] = useState<frameCoordinateType>(
    calculatePointerNodePosition(calcProps).position
  );
  const [pointerPosition, setPointerPosition] =
    useState<frameCoordinateType>(defaultCoordinate);
  const [angle, setAngle] = useState<number>(0);

  const calculatePosition = useCallback(() => {
    const pointerNodePosition = calculatePointerNodePosition(calcProps);
    const { position, angle } = pointerNodePosition;

    const arrowProps = { angle, label };
    const pointerArrowPosition = calculatePointerNodeArrowPosition(arrowProps);

    setAngle(angle);
    setPosition(position);
    setPointerPosition(pointerArrowPosition);
  }, [label, calcProps]);

  useInterval(calculatePosition, isNavigating ? 100 : null);

  return { position, angle, pointerPosition };
};

export default usePointerNode;
