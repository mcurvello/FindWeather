import * as Font from "expo-font";
import { FontSource } from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    Overpass_300Regular:
      require("../assets/fonts/Overpass-Light.ttf") as FontSource,
    Overpass_400Regular:
      require("../assets/fonts/Overpass-Regular.ttf") as FontSource,
    Overpass_600SemiBold:
      require("../assets/fonts/Overpass-SemiBold.ttf") as FontSource,
    Overpass_700Bold:
      require("../assets/fonts/Overpass-Bold.ttf") as FontSource,
  });
};
