import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import configureStore from "@store/configureStore";

import HomeScreen from "@screens/Home/Home";
import StrengthScreen from "@screens/Strength/Strength";
import VolumeScreen from "@screens/Volume/Volume";
import VolatilityScreen from "@screens/Volatility/Volatility";
import SentimentScreen from "@screens/Sentiment/Sentiment";
import NotificationsScreen from "@screens/Notifications/Notifications";
import SettingsScreen from "@screens/Settings/Settings";
import SplashScreen from "@screens/Splash/Splash";

const store = configureStore();

// Register Screens
Navigation.registerComponent(
  "heatmap.SplashScreen",
  () => SplashScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "heatmap.HomeScreen",
  () => HomeScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "heatmap.StrengthScreen",
  () => StrengthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "heatmap.VolumeScreen",
  () => VolumeScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "heatmap.VolatilityScreen",
  () => VolatilityScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "heatmap.SentimentScreen",
  () => SentimentScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "heatmap.NotificationsScreen",
  () => NotificationsScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "heatmap.SettingsScreen",
  () => SettingsScreen,
  store,
  Provider
);

// Start a App
// startMainTabs();

Navigation.startSingleScreenApp({
  screen: {
    screen: "heatmap.SplashScreen",
    title: ""
  }
});
