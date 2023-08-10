import AlignCenterIcon from "../../../assets/icons/Toolbar/AlignCenterIcon";
import AlignLeftIcon from "../../../assets/icons/Toolbar/AlignLeftIcon";
import AlignRightIcon from "../../../assets/icons/Toolbar/AlignRightIcon";
import CursorIcon from "../../../assets/icons/Toolbar/CursorIcon";
import DownloadIcon from "../../../assets/icons/Toolbar/DownloadIcon";
import EllipseIcon from "../../../assets/icons/Toolbar/EllipseIcon";
import Heading1Icon from "../../../assets/icons/Toolbar/Heading1Icon";
import Heading2Icon from "../../../assets/icons/Toolbar/Heading2Icon";
import Heading3Icon from "../../../assets/icons/Toolbar/Heading3Icon";
import PencilIcon from "../../../assets/icons/Toolbar/PencilIcon";
import RectangleIcon from "../../../assets/icons/Toolbar/RectangleIcon";
import TextIcon from "../../../assets/icons/Toolbar/TextIcon";
import TriangleIcon from "../../../assets/icons/Toolbar/TriangleIcon";
import { KonvaToolbarEnum } from "../../../interfaces/konva";
import { useKonvaStore } from "../../../store/konvaStore";
import ToolbarButton from "./ToolbarButton";
import ColorPicker from "./ToolbarColorPicker";
import useAlignment from "./useAlignment";
import useCreateShape from "./useCreateShape";
import useCreateText from "./useCreateText";
import useToolbarState from "./useToolbarState";
// import useUndoRedo from "./useUndoRedo";

const Toolbar = () => {
  // const { handleUndo, handleRedo, canUndo, canRedo } = useUndoRedo();
  const { createRectangle, createEllipse, createPolygon } = useCreateShape();
  const { createH1, createH2, createH3, createText } = useCreateText();
  const { handlePencil, handleMove } = useToolbarState();
  const { currentToolbar } = useKonvaStore();
  const {
    handleAlignLeft,
    handleAlignCenter,
    handleAlignRight,
    showAlignment,
    isAlignLeft,
    isAlignCenter,
    isAlignRight,
  } = useAlignment();

  return (
    <div className="relative z-10 flex h-[60px] w-full border-b border-solid border-light-grey dark:border-dark-grey pt-8 pb-6 px-8 items-center justify-between">
      <div />
      <div className="flex items-center justify-between">
        <ToolbarButton
          isActive={currentToolbar === KonvaToolbarEnum.SELECT}
          label="Move"
          Icon={CursorIcon}
          onClick={handleMove}
        />
        <ToolbarButton
          isActive={currentToolbar === KonvaToolbarEnum.PENCIL}
          label="Free drawing"
          Icon={PencilIcon}
          onClick={handlePencil}
        />
        <ToolbarButton
          isActive={false}
          label="Heading 1"
          Icon={Heading1Icon}
          onClick={createH1}
        />
        <ToolbarButton
          isActive={false}
          label="Heading 2"
          Icon={Heading2Icon}
          onClick={createH2}
        />
        <ToolbarButton
          isActive={false}
          label="Heading 3"
          Icon={Heading3Icon}
          onClick={createH3}
        />
        <ToolbarButton
          isActive={false}
          label="Normal Text"
          Icon={TextIcon}
          onClick={createText}
        />
        <ToolbarButton
          isActive={false}
          label="Rectangle"
          Icon={RectangleIcon}
          onClick={createRectangle}
        />
        <ToolbarButton
          isActive={false}
          label="Ellipse"
          Icon={EllipseIcon}
          onClick={createEllipse}
        />
        <ToolbarButton
          isActive={false}
          label="Triangle"
          Icon={TriangleIcon}
          onClick={createPolygon}
        />
        <ColorPicker type="fill" label="Fill color" />
        <ColorPicker type="stroke" label="Outline color" />
        <ToolbarButton
          isActive={isAlignLeft}
          visible={showAlignment}
          label="Align left"
          Icon={AlignLeftIcon}
          onClick={handleAlignLeft}
        />
        <ToolbarButton
          isActive={isAlignCenter}
          visible={showAlignment}
          label="Align center"
          Icon={AlignCenterIcon}
          onClick={handleAlignCenter}
        />
        <ToolbarButton
          isActive={isAlignRight}
          visible={showAlignment}
          label="Align right"
          Icon={AlignRightIcon}
          onClick={handleAlignRight}
        />
      </div>
      <div>
        <ToolbarButton
          isActive={false}
          label="Download as image"
          Icon={DownloadIcon}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};
export default Toolbar;
