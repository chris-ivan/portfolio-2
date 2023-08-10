import { useKonvaStore } from "../../../../../store/konvaStore";

const isUndo = (e: KeyboardEvent) => e.key === "z" && e.ctrlKey;
const isRedo = (e: KeyboardEvent) => e.key === "y" && e.ctrlKey;

const onUndo = () => {
  useKonvaStore.getState().undo();
};

const onRedo = () => {
  useKonvaStore.getState().redo();
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
