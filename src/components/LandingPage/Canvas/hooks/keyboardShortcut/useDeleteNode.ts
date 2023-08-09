import { useKonvaStore } from "../../../../../store/konvaStore";
import { useEffect } from "react";

const DELETE_KEYS = ["Delete", "Backspace"];

const onDelete = () => {
  const { selectedNodeIds, deleteNodes } = useKonvaStore.getState();
  if (!selectedNodeIds.length) return;
  deleteNodes(selectedNodeIds);
};

const onDeleteListener = (e: KeyboardEvent) => {
  const { isEditingText } = useKonvaStore.getState();
  if (isEditingText) return;
  if (DELETE_KEYS.includes(e.key)) onDelete();
};

const useDeleteNode = () => {
  useEffect(() => {
    window.addEventListener("keydown", onDeleteListener);

    return () => {
      window.removeEventListener("keydown", onDeleteListener);
    };
  });
};

export default useDeleteNode;
