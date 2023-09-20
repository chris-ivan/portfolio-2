import TextComponent from "./TextComponent";
import { IKonvaText } from "../../../interfaces/konva";
import { useState, useEffect, lazy, Suspense } from "react";
import { useKonvaStore } from "../../../store/konvaStore";
import useText from "./useText";

const TextInput = lazy(() => import("./TextInput"));

const Text = (props: IKonvaText) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const useTextData = useText(props);
  const {
    selectedNodeIds,
    modifyNodes,
    setSelectedNodeIds,
    setIsEditingText,
    deleteNodes,
  } = useKonvaStore.getState();

  useEffect(() => {
    const isSelected = selectedNodeIds.includes(props.id);

    if (!isSelected) {
      setIsEditing(false);
    }
  }, [props.id, selectedNodeIds]);

  const onDoubleClick = () => {
    setIsEditing(true);
    setSelectedNodeIds([props.id]);
    setIsEditingText(true);
  };

  const onBlur = (text: string) => {
    setIsEditing(false);
    setIsEditingText(false);

    if (text === "") {
      deleteNodes([props.id]);
    } else {
      modifyNodes([props.id], {
        ...props.config,
        text,
      });
    }
  };

  return (
    <>
      {isEditing && (
        <Suspense>
          <TextInput
            nodeRef={useTextData.shapeRef}
            onBlur={onBlur}
            textData={props}
          />
        </Suspense>
      )}
      <TextComponent
        useTextProps={useTextData}
        onDoubleClick={onDoubleClick}
        textData={{
          ...props,
          config: {
            ...props.config,
            opacity: isEditing ? 0 : props.config.opacity,
          },
        }}
      />
    </>
  );
};

export default Text;
