import { AnalyticsEvent } from "../../../../../interfaces/analytics";
import { useKonvaStore } from "../../../../../store/konvaStore";
import { trackEvent } from "../../../../../utils/analytics";

const DELETE_KEYS = ["Delete", "Backspace"];

const onDelete = () => {
  const { selectedNodeIds, deleteNodes } = useKonvaStore.getState();
  trackEvent(AnalyticsEvent.KONVA, "delete node", { selectedNodeIds });
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
