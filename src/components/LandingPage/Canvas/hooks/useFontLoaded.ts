import FontFaceObserver from "fontfaceobserver";
import { useEffect } from "react";
import { useKonvaStore } from "../../../../store/konvaStore";
import { KonvaEnum } from "../../../../interfaces/konva";

const fontList = ["Noto Sans", "Grifter"];

const loadFont = async () => {
  try {
    const observers: Promise<void>[] = [];

    fontList.forEach((font) => {
      const obs = new FontFaceObserver(font).load().catch(console.error);
      observers.push(obs);
    });

    await Promise.all(observers);

    const { currentState, modifyNodes } = useKonvaStore.getState();

    const textNodeIds = currentState
      .filter((node) => node.type === KonvaEnum.TEXT)
      .map((node) => node.id);

    modifyNodes(textNodeIds, (prev) => ({ ...prev }), false);
  } catch {
    console.log("error");
  }
};

const useFontLoaded = () => {
  useEffect(() => {
    void loadFont();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useFontLoaded;
