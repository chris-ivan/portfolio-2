import TextComponent from "./TextComponent";
import { IKonvaText } from "../../../interfaces/konva";
import { useState, useEffect } from "react";
import TextInput from "./TextInput";
import { useKonvaStore } from "../../../store/konvaStore";
import useText from "./useText";

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
        <TextInput
          nodeRef={useTextData.shapeRef}
          onBlur={onBlur}
          textData={props}
        />
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
