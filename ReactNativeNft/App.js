import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { AppNavigation } from "./AppNavigation";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
export default function App() {
  const [loaded] = useFonts({
    InternBold: require("./assets/fonts/Inter-Bold.ttf"),
    InternSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InternMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InternRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InternLight: require("./assets/fonts/Inter-Light.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer theme={theme}>
      <AppNavigation />
    </NavigationContainer>
  );
}
