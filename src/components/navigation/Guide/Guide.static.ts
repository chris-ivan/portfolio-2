import { IS_APPLE } from "../../../utils/device";

export const CTRL = IS_APPLE ? "⌘" : "Ctrl";

export const GUIDES = [
  {
    label: "Horizontal scroll",
    codes: ["Shift", "scroll"],
  },
  {
    label: "Pan",
    codes: ["Space", "drag"],
  },
  {
    label: "Zoom to cursor",
    codes: [CTRL, "scroll"],
  },
  {
    label: "Zoom In",
    codes: [CTRL, "+"],
  },
  {
    label: "Zoom out",
    codes: [CTRL, "-"],
  },
  {
    label: "Prev section",
    codes: ["Page Up"],
  },
  {
    label: "Next section",
    codes: ["Page Down"],
  },
  {
    label: "Move around",
    codes: ["Arrow keys"],
  },
];
