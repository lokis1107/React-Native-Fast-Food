import { View, Text } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { categories, foodItems } from "../data";
import { TextInput } from "react-native";
import * as Animatable from 'react-native-animatable';
import CardItem from "../components/CardItem";

const HomeScreen = () => {
  const [activate, setActivate] = useState("Burger");
  return (
    <View className="flex-1 relative">
      <Image
        blurRadius={25}
        source={require("../images/background.png")}
        className="h-full w-full absolute"
      />

      <SafeAreaView>
        <View className="flex-row justify-between items-center px-4 p-5">
          <TouchableOpacity
            style={{ backgroundColor: "rgba(255,255,255, 0.2)" }}
          >
            <Bars3BottomLeftIcon size={35} color={"black"} />
          </TouchableOpacity>
        </View>
        <View>
          <Text className="px-4 text-4xl font-bold text-gray-900">
            Fast Food<Text className="font-extrabold"> Restaurant</Text>
          </Text>
        </View>
        <View className="flex-row items-center justify-between">
          <View className="flex-row px-4 bg-white p-5 rounded-2xl ml-5 mr-5 mt-8">
            <MagnifyingGlassIcon size={18} color={"black"} />
            <TextInput
              className="px-3 pt-5 -mt-6 flex-1"
              placeholder="Search"
            />
          </View>
        </View>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-10 px-2"
          >
            {categories.map((item, index) => {
              let isActivate = item == activate;
              let TextColor = `text-xl ${isActivate ? "font-bold" : ""}`;
              return (
                <Animatable.View delay={index*100} animation={"slideInDown"} key={index}>
                <TouchableOpacity
                  key={index}
                  className="ml-3 mr-4"
                  onPress={() => setActivate(item)}
                >
                  <Text className={TextColor}>{item}</Text>
                  {isActivate ? (
                    <View>
                      <Image
                        source={require("../images/line.png")}
                        className="ml-4"
                      />
                    </View>
                  ) : null}
                </TouchableOpacity>
                </Animatable.View>
              );
            })}
          </ScrollView>
        </View>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mr-2">
            {
              foodItems.map((item,index)=> <CardItem item={item} index={index} key={index} />)
            }
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
