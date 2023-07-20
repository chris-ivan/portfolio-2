import { useCallback, useEffect, useState } from "react";
import {
  frameCoordinateType,
  framePositionType,
} from "../../../interfaces/frame";
import useViewport from "../../../hooks/useViewport";
import {
  calculatePointerNodeArrowPosition,
  calculatePointerNodePosition,
} from "./Pointer.helper";

interface IUsePointerNode {
  targetId: string;
  label: string;
}

const defaultCoordinate: frameCoordinateType = { x: 0, y: 0 };

const usePointerNode = (props: IUsePointerNode) => {
  const [position, setPosition] = useState<Partial<framePositionType>>({});
  const [pointerPosition, setPointerPosition] =
    useState<frameCoordinateType>(defaultCoordinate);
  const [angle, setAngle] = useState<number>(0);
  const viewportSize = useViewport();
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

  useEffect(() => {
    calculatePosition();
    const interval = setInterval(calculatePosition, 100);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { position, angle, pointerPosition };
};

export default usePointerNode;
