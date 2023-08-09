import { useKonvaStore } from "../../../../../store/konvaStore";
import { useEffect } from "react";

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
  useEffect(() => {
    window.addEventListener("keydown", onUndoRedoListener);

    return () => {
      window.removeEventListener("keydown", onUndoRedoListener);
    };
  });
};

export default useUndoRedo;
