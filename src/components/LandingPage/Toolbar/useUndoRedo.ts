import { useKonvaStore } from "../../../store/konvaStore";

const useUndoRedo = () => {
  const { undo, redo, history, historyIndex } = useKonvaStore();

  const handleUndo = undo;
  const handleRedo = redo;
  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < history.length - 1;

  return { handleUndo, handleRedo, canUndo, canRedo };
};

export default useUndoRedo;
