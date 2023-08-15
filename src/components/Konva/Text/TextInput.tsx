import { IKonvaText } from "../../../interfaces/konva";
import { Html } from "react-konva-utils";
import { ChangeEvent, useState, useEffect } from "react";
import { Text } from "konva/lib/shapes/Text";
import { useKonvaStore } from "../../../store/konvaStore";

const htmlDivProps = { style: { opacity: 1 } };

interface ITextInput {
  nodeRef: React.RefObject<Text>;
  onBlur: (text: string) => void;
  textData: IKonvaText;
}

const TextInput = (props: ITextInput) => {
  const { onBlur, textData, nodeRef } = props;
  const { modifyNodes } = useKonvaStore();
  const { text, x, y, width, fontSize, fill, fontFamily, align, lineHeight } =
    textData.config;

  const textNode = nodeRef.current;

  const [inputHeight, setInputHeight] = useState<number>(
    textNode?.height() || 0
  );
  const inputPosition = {
    x: x || 0,
    y: y || 0,
    rotation: textNode?.rotation() || 0,
  };

  const [initialValue, setInitialValue] = useState<string>(text || "");
  const [value, setValue] = useState<string>(text || "");

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    requestAnimationFrame(() => {
      modifyNodes(
        [textData.id],
        {
          ...textData.config,
          text: e.target.value,
        },
        false
      );
    });
  };

  useEffect(() => {
    // wait for the text to get updated after setValue
    requestAnimationFrame(() => {
      setInputHeight(textNode?.height() || 0);
    });
  }, [setInputHeight, textNode, value]);

  const inputWidth = width || 10;

  const onSubmit = () => {
    onBlur(value);
    setInitialValue(value);
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (!e.shiftKey && e.key === "Enter") {
      e.preventDefault();
      onSubmit();
      return;
    }

    if (e.key === "Escape") {
      e.preventDefault();
      setValue(initialValue);
      onBlur(initialValue);
      return;
    }
  };

  return (
    <Html groupProps={inputPosition} divProps={htmlDivProps}>
      <form onSubmit={onSubmit} style={{ position: "relative" }}>
        <textarea
          onFocus={(e) => e.currentTarget.select()}
          onKeyDown={onKeyDown}
          style={{
            width: `${inputWidth + 2}px`,
            height: `${inputHeight}px`,
            border: "1px solid lightblue",
            padding: "0px",
            margin: "0px",
            marginLeft: "-1px",
            background: "none",
            outline: "none",
            resize: "none",
            color: fill || "black",
            fontSize: fontSize || 12,
            fontFamily: fontFamily || "Arial",
            textAlign: (align as CanvasTextAlign) || "left",
            wordBreak: "break-word",
            wordWrap: "break-word",
            overflow: "hidden",
            lineHeight,
            position: "absolute",
            top: "0px",
          }}
          autoFocus
          onBlur={onSubmit}
          value={value}
          onChange={onChange}
        />
      </form>
    </Html>
  );
};

export default TextInput;
