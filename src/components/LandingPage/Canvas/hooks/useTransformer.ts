import { useEffect } from "react";
import { useKonvaStore } from "../../../../store/konvaStore";
import { Transformer as TransformerType } from "konva/lib/shapes/Transformer";
import { Layer as LayerType } from "konva/lib/Layer";
import { KonvaEnum } from "../../../../interfaces/konva";

interface IUseTransformer {
  trRef: React.RefObject<TransformerType>;
  layerRef: React.RefObject<LayerType>;
}

const isSelectingElement = (type: KonvaEnum) => {
  return useKonvaStore
    .getState()
    .getSelectedNodes()
    .some((node) => node.type === type);
};

const useTransformer = (props: IUseTransformer) => {
  const { trRef, layerRef } = props;
  const { selectedNodeIds } = useKonvaStore();

  useEffect(() => {
    if (!layerRef?.current || !trRef?.current) return;

    const layer = layerRef.current;
    const nodes = selectedNodeIds.map((id) => layer.findOne("#" + id));
    trRef.current.nodes(nodes);
    trRef.current.getLayer()?.batchDraw();
  }, [selectedNodeIds, layerRef, trRef]);

  const enabledAnchors = isSelectingElement(KonvaEnum.TEXT)
    ? ["middle-left", "middle-right"]
    : isSelectingElement(KonvaEnum.POLYGON)
    ? ["top-left", "top-right", "bottom-left", "bottom-right"]
    : undefined;

  const allowResize =
    !isSelectingElement(KonvaEnum.LINE) || selectedNodeIds.length === 1;

  return { enabledAnchors, allowResize };
};

export default useTransformer;
