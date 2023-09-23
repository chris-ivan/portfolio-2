import { Stage } from "konva/lib/Stage";
import useCopyPaste from "./keyboardShortcut/useCopyPaste";
import useDeleteNode from "./keyboardShortcut/useDeleteNode";
import useUndoRedo from "./keyboardShortcut/useUndoRedo";
import useDeselect from "./keyboardShortcut/useDeselect";
import { useEffect } from "react";
import useGlobalDeselect from "./useGlobalDeselect";
import useGlobalStore from "../../../../hooks/useGlobalStore";
import { useFrameContext } from "../../../../hooks/useFrameContext";

interface IUseKeyboardShortcut {
  stageRef: React.RefObject<Stage>;
}

const useKonvaShortcut = (props: IUseKeyboardShortcut) => {
  const { frames } = useFrameContext();

  const konvaDeleteShortcut = useDeleteNode();
  const konvaHistoryShortcut = useUndoRedo();
  const konvaClipboardShortcut = useCopyPaste(props);
  const konvaDeselectShortcut = useDeselect();
  const globalDeselect = useGlobalDeselect();
  const { isAdventure } = useGlobalStore();

  const onKeyDown = (e: KeyboardEvent) => {
    const isVisible = frames.LANDING?.isVisible;
    if (isAdventure && !isVisible) return;

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
