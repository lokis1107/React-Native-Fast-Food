import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screen/HomeScreen";
import FoodScreen from "../screen/FoodScreen";

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Food" component={FoodScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

export default AppNavigation;
