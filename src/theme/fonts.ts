import * as Font from "expo-font";
import { FontSource } from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    "Overpass-Regular":
      require("../assets/fonts/Overpass-Regular.ttf") as FontSource,
    "Overpass-Bold": require("../assets/fonts/Overpass-Bold.ttf") as FontSource,
  });
};
