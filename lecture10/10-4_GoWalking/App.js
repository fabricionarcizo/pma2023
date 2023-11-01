import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts as useRoboto,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";

import { theme } from "./src/infrastructure/theme";

import { PedometerScreen } from "./src/screens/sensors/pedometer.screen";
import { PedometerContextProvider } from "./src/services/sensors/pedometer.context";

export default function App() {
  const [thinLoaded] = useRoboto({
    Roboto_100Thin,
  });

  const [lightLoaded] = useRoboto({
    Roboto_300Light,
  });

  const [regularLoaded] = useRoboto({
    Roboto_400Regular,
  });

  const [mediumLoaded] = useRoboto({
    Roboto_500Medium,
  });

  const [boldLoaded] = useRoboto({
    Roboto_700Bold,
  });

  const [blackLoaded] = useRoboto({
    Roboto_900Black,
  });

  if (
    !thinLoaded ||
    !lightLoaded ||
    !regularLoaded ||
    !mediumLoaded ||
    !boldLoaded ||
    !blackLoaded
  ) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <PedometerContextProvider>
          <PedometerScreen />
        </PedometerContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
