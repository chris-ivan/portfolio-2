import { Text } from "react-konva";
import useText from "./useText";
import { IKonvaText, KonvaToolbarEnum } from "../../../interfaces/konva";
import { useKonvaStore } from "../../../store/konvaStore";

interface ITextComponent {
  onDoubleClick: () => void;
  textData: IKonvaText;
  useTextProps: ReturnType<typeof useText>;
}

const TextComponent = (props: ITextComponent) => {
  const { onDoubleClick, textData, useTextProps } = props;
  const { config: shapeProps } = textData;
  const { currentToolbar } = useKonvaStore.getState();

  const text = useTextProps;
  const {
    onSelect,
    shapeRef,
    onDragStart,
    onDragEnd,
    onTransform,
    onTransformStart,
  } = text;

  return (
    <Text
      id={textData.id}
      onClick={onSelect}
      onTap={onSelect}
      ref={shapeRef}
      {...shapeProps}
      draggable={currentToolbar === KonvaToolbarEnum.SELECT}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onTransform={onTransform}
      onTransformStart={onTransformStart}
      onDblClick={onDoubleClick}
    />
  );
};

export default TextComponent;
