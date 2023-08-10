import { useKonvaStore } from "../../../../../store/konvaStore";

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
  const onKeyDown = (e: KeyboardEvent) => {
    onDeleteListener(e);
  };

  return { onKeyDown };
};

export default useDeleteNode;
