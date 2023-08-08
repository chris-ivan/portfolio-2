import CursorIcon from "../../../assets/icons/Toolbar/CursorIcon";
import DownloadIcon from "../../../assets/icons/Toolbar/DownloadIcon";
import EllipseIcon from "../../../assets/icons/Toolbar/EllipseIcon";
import Heading1Icon from "../../../assets/icons/Toolbar/Heading1Icon";
import Heading2Icon from "../../../assets/icons/Toolbar/Heading2Icon";
import Heading3Icon from "../../../assets/icons/Toolbar/Heading3Icon";
import PencilIcon from "../../../assets/icons/Toolbar/PencilIcon";
import RectangleIcon from "../../../assets/icons/Toolbar/RectangleIcon";
import TriangleIcon from "../../../assets/icons/Toolbar/TriangleIcon";
import ToolbarButton from "./ToolbarButton";

const Toolbar = () => {
  return (
    <div className="flex h-[60px] w-full border-b border-solid border-light-grey dark:border-dark-grey pt-8 pb-6 px-8 items-center justify-between">
      <div />
      <div>
        <ToolbarButton
          isActive={true}
          label="Move"
          Icon={CursorIcon}
          onClick={() => {}}
        />
        <ToolbarButton
          isActive={false}
          label="Free drawing"
          Icon={PencilIcon}
          onClick={() => {}}
        />
        <ToolbarButton
          isActive={false}
          label="Heading 1"
          Icon={Heading1Icon}
          onClick={() => {}}
        />
        <ToolbarButton
          isActive={false}
          label="Heading 2"
          Icon={Heading2Icon}
          onClick={() => {}}
        />
        <ToolbarButton
          isActive={false}
          label="Heading 3"
          Icon={Heading3Icon}
          onClick={() => {}}
        />
        <ToolbarButton
          isActive={false}
          label="Rectangle"
          Icon={RectangleIcon}
          onClick={() => {}}
        />
        <ToolbarButton
          isActive={false}
          label="Ellipse"
          Icon={EllipseIcon}
          onClick={() => {}}
        />
        <ToolbarButton
          isActive={false}
          label="Triangle"
          Icon={TriangleIcon}
          onClick={() => {}}
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
