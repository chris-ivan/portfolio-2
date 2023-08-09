import { TextConfig } from "konva/lib/shapes/Text";
import { useKonvaStore } from "../../../store/konvaStore";
import { IGenerateShapeProps, generateText } from "../../../utils/konva";
import {
  DEFAULT_H1,
  DEFAULT_H2,
  DEFAULT_H3,
  DEFAULT_TEXT,
} from "../../../static/konva";

const createTextProps: IGenerateShapeProps = {
  x: 400,
  y: 400,
};

const getConfig = (config: TextConfig) => {
  return {
    ...config,
    ...createTextProps,
  };
};

const createTextNode = (baseText: TextConfig) => {
  const textConfig = getConfig(baseText);
  const textNode = generateText(textConfig);
  useKonvaStore.getState().addNodes([textNode], true);
};

const useCreateText = () => {
  const createH1 = () => createTextNode(DEFAULT_H1);
  const createH2 = () => createTextNode(DEFAULT_H2);
  const createH3 = () => createTextNode(DEFAULT_H3);
  const createText = () => createTextNode(DEFAULT_TEXT);

  return { createH1, createH2, createH3, createText };
};

export default useCreateText;
