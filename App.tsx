import { useEffect, useState } from "react";
import Welcome from "./src/screens/Welcome";
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

  return <Welcome />;
}
