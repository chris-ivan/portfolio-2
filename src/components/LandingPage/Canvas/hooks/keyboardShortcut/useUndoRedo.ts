import { AnalyticsEvent } from "../../../../../interfaces/analytics";
import { useKonvaStore } from "../../../../../store/konvaStore";
import { trackEvent } from "../../../../../utils/analytics";

const isUndo = (e: KeyboardEvent) => e.key === "z" && e.ctrlKey;
const isRedo = (e: KeyboardEvent) => e.key === "y" && e.ctrlKey;

const onUndo = () => {
  useKonvaStore.getState().undo();
  trackEvent(AnalyticsEvent.KONVA, "undo");
};

const onRedo = () => {
  useKonvaStore.getState().redo();
  trackEvent(AnalyticsEvent.KONVA, "redo");
};

const onUndoRedoListener = (e: KeyboardEvent) => {
  if (isUndo(e)) onUndo();
  if (isRedo(e)) onRedo();
};

const useUndoRedo = () => {
  const onKeyDown = (e: KeyboardEvent) => {
    onUndoRedoListener(e);
  };

  return { onKeyDown };
};

export default useUndoRedo;
