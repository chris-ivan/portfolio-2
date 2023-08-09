import Draggable from "react-draggable";
import useScrollbar from "./useScrollbar";

const Scrollbar = () => {
  const scrollbar = useScrollbar();
  const { horizontalScrollbar, verticalScrollbar } = scrollbar;
  const { onDrag: onDragHorizontal, width, left } = horizontalScrollbar;
  const { onDrag: onDragVertical, height, top } = verticalScrollbar;

  return (
    <>
      <div className="fixed z-50 bottom-0 left-0 right-3 h-3 overflow-hidden border-t border-r border-solid border-light-grey dark:border-dark-grey">
        <Draggable
          onDrag={onDragHorizontal}
          bounds="parent"
          axis="x"
          position={{ x: left, y: 0 }}
        >
          <div
            style={{ width }}
            className="h-full border-l-2 border-r-2 border-solid border-grey bg bg-dark-grey dark:bg-black"
          />
        </Draggable>
      </div>
      <div className="fixed z-50 top-0 right-0 bottom-3 w-3 overflow-hidden border-l border-b border-solid border-light-grey dark:border-dark-grey">
        <Draggable
          onDrag={onDragVertical}
          bounds="parent"
          axis="y"
          position={{ x: 0, y: top }}
        >
          <div
            style={{ height }}
            className="h-full w-full border-t-2 border-b-2 border-solid border-grey bg-dark-grey dark:bg-black"
          />
        </Draggable>
      </div>
    </>
  );
};

export default Scrollbar;
