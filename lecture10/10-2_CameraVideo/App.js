import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme";

import { Navigation } from "./src/infrastructure/navigation";
import { CameraContextProvider } from "./src/services/camera/camera.context";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CameraContextProvider>
          <Navigation />
        </CameraContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
