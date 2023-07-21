import { useCallback, useState } from "react";
import {
  FRAME_KEY,
  frameCoordinateType,
  framePositionType,
} from "../../../interfaces/frame";
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
  const [position, setPosition] = useState<Partial<framePositionType>>({});
  const [pointerPosition, setPointerPosition] =
    useState<frameCoordinateType>(defaultCoordinate);
  const [angle, setAngle] = useState<number>(0);
  const viewportSize = useViewport();
  const { isNavigating } = useNavigationStore();
  const { targetId, label } = props;

  const calculatePosition = useCallback(() => {
    const calcProps = { targetId, viewportSize };
    const pointerNodePosition = calculatePointerNodePosition(calcProps);
    const { position, angle } = pointerNodePosition;

    const arrowProps = { angle, label };
    const pointerArrowPosition = calculatePointerNodeArrowPosition(arrowProps);

    setAngle(angle);
    setPosition(position);
    setPointerPosition(pointerArrowPosition);
  }, [targetId, viewportSize, label]);

  useInterval(calculatePosition, isNavigating ? 100 : null);

  return { position, angle, pointerPosition };
};

export default usePointerNode;
