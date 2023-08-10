import { useMemo } from "react";
import { useKonvaStore } from "../../../store/konvaStore";
import { KonvaEnum } from "../../../interfaces/konva";

const useAlignment = () => {
  const { selectedNodeIds, currentState, modifyNodes } = useKonvaStore();

  const selectedNodes = useMemo(() => {
    return currentState.filter((node) => selectedNodeIds.includes(node.id));
  }, [selectedNodeIds, currentState]);

  const handleAlign = (align: "left" | "center" | "right") => {
    modifyNodes(selectedNodeIds, (config) => ({ ...config, align }));
  };

  const handleAlignLeft = () => handleAlign("left");
  const handleAlignCenter = () => handleAlign("center");
  const handleAlignRight = () => handleAlign("right");

  const showAlignment = useMemo(() => {
    if (!selectedNodes.length) return false;
    return selectedNodes.every((node) => node.type === KonvaEnum.TEXT);
  }, [selectedNodes]);

  const isAlignLeft = useMemo(() => {
    return selectedNodes.every((node) => node.config.align === "left");
  }, [selectedNodes]);

  const isAlignCenter = useMemo(() => {
    return selectedNodes.every((node) => node.config.align === "center");
  }, [selectedNodes]);

  const isAlignRight = useMemo(() => {
    return selectedNodes.every((node) => node.config.align === "right");
  }, [selectedNodes]);

  return {
    handleAlignLeft,
    handleAlignCenter,
    handleAlignRight,
    showAlignment,
    isAlignLeft,
    isAlignCenter,
    isAlignRight,
  };
};

export default useAlignment;
