import { useCallback, useEffect, useState } from "react";
import { framePositionType } from "../../../interfaces/frame";
import useViewport from "../../../hooks/useViewport";

interface IUsePointerNode {
  targetId: string;
}

const PADDING = 20;

const usePointerNode = (props: IUsePointerNode) => {
  const [position, setPosition] = useState<Partial<framePositionType>>({});
  const [angle, setAngle] = useState<number>(0);
  const { width: viewportWidth, height: viewportHeight } = useViewport();
  const { targetId } = props;

  const calculatePosition = useCallback(() => {
    const position: Partial<framePositionType> = {};

    const target = document.getElementById(targetId);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect();
    const targetCenterX = targetPosition.left + targetPosition.width / 2;
    const targetCenterY = targetPosition.top + targetPosition.height / 2;

    const viewportCenterX = viewportWidth / 2;
    const viewportCenterY = viewportHeight / 2;

    const angleRad = Math.atan2(targetCenterY, targetCenterX);
    const angleDeg = (angleRad * 180) / Math.PI;

    const allowedWidth = viewportCenterX - PADDING;
    const allowedHeight = viewportCenterY - PADDING;

    const scale = Math.min(
      allowedWidth / Math.abs(targetCenterX),
      allowedHeight / Math.abs(targetCenterY)
    );
    const vectorWidth = Math.abs(targetCenterX) * scale;
    const vectorHeight = Math.abs(targetCenterY) * scale;

    const isLeft = targetCenterX < 0;
    const isTop = targetCenterY < 0;

    const positionKeyX = isLeft ? "left" : "right";
    const positionKeyY = isTop ? "top" : "bottom";

    position[positionKeyX] = viewportCenterX - vectorWidth;
    position[positionKeyY] = viewportCenterY - vectorHeight;

    setAngle(angleDeg);
    setPosition(position);
  }, [targetId, viewportHeight, viewportWidth]);

  useEffect(() => {
    const interval = setInterval(calculatePosition, 50);
    return () => clearInterval(interval);
  }, [calculatePosition]);

  return { position, angle };
};

export default usePointerNode;
