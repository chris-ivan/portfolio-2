import { create } from "zustand";
import {
  KonvaHistoryType,
  KonvaNodeConfigType,
  KonvaNodeType,
  KonvaStateType,
  KonvaToolbarEnum,
} from "../interfaces/konva";
import {
  INITIAL_NODE_CONFIG,
  INITIAL_NODE_ID,
  getInitialNodes,
} from "../static/konva";

type ModifyNodeTypeCb =
  | KonvaNodeConfigType
  | ((prev: KonvaNodeConfigType) => KonvaNodeConfigType);

interface IKonvaStore {
  history: KonvaHistoryType;
  currentState: KonvaStateType;
  historyIndex: number;
  selectedNodeIds: string[];
  currentToolbar: KonvaToolbarEnum;
  isTransformingMultipleNodes: boolean;
  isEditingText: boolean;
  undo: () => void;
  redo: () => void;
  modifyNodes: (
    ids: string[],
    newAttrs: ModifyNodeTypeCb,
    addToHistory?: boolean
  ) => void;
  addNodes: (newNodes: KonvaNodeType[], setSelected?: boolean) => void;
  deleteNodes: (ids: string[]) => void;
  toggleNodeSelection: (id: string) => void;
  getSelectedNodes: () => KonvaNodeType[];
  setSelectedNodeIds: (id: string[]) => void;
  setCurrentToolbar: (toolbar: KonvaToolbarEnum) => void;
  setIsTransformingMultipleNodes: (isTransforming: boolean) => void;
  setIsEditingText: (isEditing: boolean) => void;
  setTheme: (theme: "light" | "dark") => void;
}

const handleChange =
  (
    cb: (curState: KonvaStateType) => KonvaStateType | void,
    addToHistory: boolean,
    newSelectedNodeIds?: string[]
  ) =>
  (state: IKonvaStore) => {
    const { history, historyIndex, currentState } = state;
    const curStateDeepCopy = structuredClone(currentState);

    const newState = cb(curStateDeepCopy);
    if (!newState) return {};

    if (!addToHistory) {
      return { currentState: newState };
    }

    const newHistory = [...history.slice(0, historyIndex), state.currentState];

    const selectedNodeIds = newSelectedNodeIds || state.selectedNodeIds;

    return {
      history: newHistory,
      historyIndex: historyIndex + 1,
      currentState: newState,
      selectedNodeIds,
    };
  };

const modifyNode = (
  ids: string[],
  node: KonvaNodeType,
  newAttrs: ModifyNodeTypeCb
): KonvaNodeType => {
  if (!ids.length) return node;
  if (!ids.includes(node.id)) return node;

  const newNode: KonvaNodeType = { ...node };
  if (typeof newAttrs === "function") {
    newNode.config = newAttrs(node.config);
  } else {
    newNode.config = newAttrs;
  }

  return newNode;
};

const handleModifyNodes = (
  ids: string[],
  newAttrs: ModifyNodeTypeCb,
  addToHistory = true
) =>
  handleChange((state) => {
    return state.map((node) => modifyNode(ids, node, newAttrs));
  }, addToHistory);

const handleAddNodes = (newNodes: KonvaNodeType[], setSelected = false) =>
  handleChange(
    (state) => {
      return [...state, ...newNodes];
    },
    true,
    setSelected ? newNodes.map((node) => node.id) : undefined
  );

const handleDeleteNodes = (ids: string[]) =>
  handleChange(
    (state) => {
      const newNodes = state.filter((node) => !ids.includes(node.id));
      return newNodes;
    },
    true,
    []
  );

const handleUndo = (state: IKonvaStore) => {
  const { history, historyIndex, currentState } = state;
  if (historyIndex <= 0) return {};

  const prevStateNodeIds = history[historyIndex - 1].map((node) => node.id);
  const selectedNodeIds = state.selectedNodeIds.filter((id) => {
    return prevStateNodeIds.includes(id);
  });

  const newIndex = historyIndex - 1;
  const newState = {
    historyIndex: newIndex,
    currentState: history[newIndex],
    history: history,
    selectedNodeIds,
  };

  if (historyIndex >= history.length) {
    newState.history = [...history, currentState];
  }

  return newState;
};

const handleRedo = (state: IKonvaStore) => {
  const { history, historyIndex } = state;
  if (historyIndex >= history.length - 1) return {};

  const newIndex = historyIndex + 1;

  const newState = {
    historyIndex: newIndex,
    currentState: history[newIndex],
    history: history,
  };

  if (historyIndex === history.length - 2) {
    newState.history = history.slice(0, newIndex);
  }

  return newState;
};

const handleGetSelectedNodes = (get: () => IKonvaStore) => {
  const { selectedNodeIds } = get();
  if (!selectedNodeIds.length) return [];

  const { currentState } = get();
  const nodes = currentState.filter((node) =>
    selectedNodeIds.includes(node.id)
  );

  return nodes;
};

const handleToggleNodeSelection = (id: string) => (state: IKonvaStore) => {
  const { selectedNodeIds } = state;
  const newSelectedNodeIds = selectedNodeIds.includes(id)
    ? selectedNodeIds.filter((nodeId) => nodeId !== id)
    : [...selectedNodeIds, id];

  return { selectedNodeIds: newSelectedNodeIds };
};

const convertStateTheme = (
  state: KonvaStateType,
  theme: "light" | "dark"
): KonvaStateType => {
  const newState = state.map((node): KonvaNodeType => {
    if (INITIAL_NODE_CONFIG[node.id as INITIAL_NODE_ID] === undefined)
      return node;
    const newConfig =
      INITIAL_NODE_CONFIG[node.id as INITIAL_NODE_ID][theme] || {};

    // @ts-ignore
    const newNode: KonvaNodeType = {
      ...node,
      config: { ...node.config, ...newConfig },
    };

    return newNode;
  });

  return newState;
};

export const updateKonvaHistoryTheme =
  (theme: "light" | "dark") => (state: IKonvaStore) => {
    const { history, currentState } = state;
    const newHistory = history.map((state) => convertStateTheme(state, theme));
    const newCurrentState = convertStateTheme(currentState, theme);

    return { history: newHistory, currentState: newCurrentState };
  };

export const useKonvaStore = create<IKonvaStore>((set, get) => ({
  history: [],
  currentState: getInitialNodes(),
  historyIndex: 0,
  selectedNodeIds: [INITIAL_NODE_ID.TITLE],
  currentToolbar: KonvaToolbarEnum.SELECT,
  isTransformingMultipleNodes: false,
  isEditingText: false,
  undo: () => set(handleUndo),
  redo: () => set(handleRedo),
  modifyNodes: (...args) => set(handleModifyNodes(...args)),
  addNodes: (...args) => set(handleAddNodes(...args)),
  deleteNodes: (...args) => set(handleDeleteNodes(...args)),
  toggleNodeSelection: (id) => set(handleToggleNodeSelection(id)),
  getSelectedNodes: () => handleGetSelectedNodes(get),
  setSelectedNodeIds: (id) => set({ selectedNodeIds: id }),
  setCurrentToolbar: (toolbar) => set({ currentToolbar: toolbar }),
  setIsTransformingMultipleNodes: (isTransforming) =>
    set({ isTransformingMultipleNodes: isTransforming }),
  setIsEditingText: (isEditing) => set({ isEditingText: isEditing }),
  setTheme: (theme) => set(updateKonvaHistoryTheme(theme)),
}));
