import SettingsButton from "./SettingsButton";
import { useNavigationStore } from "../../../store/navigationStore";

const AdventureSettingsMenu = () => {
  const navigation = useNavigationStore();

  const { showMiniMap, showNavigation, toggleMiniMap, toggleNavigation } =
    navigation;

  const navigationLabel = showNavigation
    ? "Disable Navigation"
    : "Enable Navigation";
  const miniMapLabel = showMiniMap ? "Disable Mini Map" : "Enable Mini Map";

  return (
    <>
      <SettingsButton label={navigationLabel} onClick={toggleNavigation} />
      <SettingsButton label={miniMapLabel} onClick={toggleMiniMap} />
    </>
  );
};

export default AdventureSettingsMenu;
