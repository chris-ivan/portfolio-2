import { Stage } from "konva/lib/Stage";
import useCopyPaste from "./keyboardShortcut/useCopyPaste";
import useDeleteNode from "./keyboardShortcut/useDeleteNode";
import useUndoRedo from "./keyboardShortcut/useUndoRedo";
import useDeselect from "./keyboardShortcut/useDeselect";

interface IUseKeyboardShortcut {
  stageRef: React.RefObject<Stage>;
}

const useKeyboardShortcut = (props: IUseKeyboardShortcut) => {
  useDeleteNode();
  useUndoRedo();
  useCopyPaste(props);
  useDeselect();
};

export default useKeyboardShortcut;
