import { KonvaEventObject } from "konva/lib/Node";
import { IKonvaText } from "../../../interfaces/konva";
import useKonvaShape from "../useKonvaShape";
import { TextConfig, Text as TextType } from "konva/lib/shapes/Text";
import { useCallback } from "react";
import { handleMultipleSelectionTransformStart } from "../../../utils/konva";

const useText = (props: IKonvaText) => {
  const shapeProps = useKonvaShape<TextType, TextConfig>(props);
  const { shapeRef, onChange } = shapeProps;

  const getTransformProps = useCallback(() => {
    const node = shapeRef.current;
    if (!node) return {};

    const scaleX = node.scaleX();

    node.scaleX(1);

    const newConfig: TextConfig = {
      ...props.config,
      width: node.width() * scaleX,
      scaleX: 1,
      scaleY: 1,
      rotation: node.rotation(),
      x: node.x(),
      y: node.y(),
    };

    return newConfig;
  }, [shapeRef, props.config]);

  const onTransform = (_e: KonvaEventObject<Event>) => {
    const node = shapeRef.current;
    if (!node) return;

    onChange(getTransformProps(), false);
  };

  const onTransformStart = (_e: KonvaEventObject<Event>) => {
    onChange(getTransformProps(), handleMultipleSelectionTransformStart());
  };

  return { ...shapeProps, onTransform, onTransformStart };
};

export default useText;
