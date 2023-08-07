import "react-native-gesture-handler";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import * as SplashScreen from "expo-splash-screen";
import Home from "./src/screens/Home";
import { dark } from "./src/theme";
import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ThemeProvider theme={dark}>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <Routes />
    </ThemeProvider>
  );
}
