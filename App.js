import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./navigation/AppNavigation";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
