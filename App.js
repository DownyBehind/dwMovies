import React, { useState } from "react";
import { Text, Image } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import Tabs from "./navigation/Tabs";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    await Font.loadAsync(Ionicons.font);
  };
  const isDark = useColorScheme() === "dark";
  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      ></AppLoading>
    );
  }
  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <Tabs></Tabs>
    </NavigationContainer>
  );
}
