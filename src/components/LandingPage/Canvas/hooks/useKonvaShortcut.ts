import { Stage } from "konva/lib/Stage";
import useCopyPaste from "./keyboardShortcut/useCopyPaste";
import useDeleteNode from "./keyboardShortcut/useDeleteNode";
import useUndoRedo from "./keyboardShortcut/useUndoRedo";
import useDeselect from "./keyboardShortcut/useDeselect";
import { useEffect } from "react";
import { useNavigationStore } from "../../../../store/navigationStore";
import { FRAME_KEY } from "../../../../interfaces/frame";
import useGlobalDeselect from "./useGlobalDeselect";

interface IUseKeyboardShortcut {
  stageRef: React.RefObject<Stage>;
}

const isCanvasInView = () => {
  const { frameVisibility } = useNavigationStore.getState();
  return frameVisibility[FRAME_KEY.LANDING];
};

const useKonvaShortcut = (props: IUseKeyboardShortcut) => {
  const konvaDeleteShortcut = useDeleteNode();
  const konvaHistoryShortcut = useUndoRedo();
  const konvaClipboardShortcut = useCopyPaste(props);
  const konvaDeselectShortcut = useDeselect();
  const globalDeselect = useGlobalDeselect();

  const onKeyDown = (e: KeyboardEvent) => {
    if (!isCanvasInView()) return;

    konvaDeleteShortcut.onKeyDown(e);
    konvaHistoryShortcut.onKeyDown(e);
    konvaClipboardShortcut.onKeyDown(e);
    konvaDeselectShortcut.onKeyDown(e);
  };

  const onMouseDown = (e: MouseEvent) => {
    globalDeselect.onMouseDown(e);
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onMouseDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onMouseDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [konvaClipboardShortcut.onKeyDown]);
};

export default useKonvaShortcut;
