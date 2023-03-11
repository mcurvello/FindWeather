import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import Routes from "./src/routes";
import theme from "./src/theme";
import { loadFonts } from "./src/theme/fonts";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFontsAsync = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };

    loadFontsAsync();
  }, []);

  if (!fontsLoaded) {
    return;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor={theme.colors.dark} />
      <Routes />
    </>
  );
}
