import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  BuildingLibraryIcon,
  ChevronLeftIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

const FoodScreen = (props) => {
  const navigation = useNavigation();
  let item = props.route.params;
  const [count, setCount] = useState(1);
  const [fav, setFav] = useState(false)

  return (
    <View className="flex-1">
      <View>
        <Image
          blurRadius={40}
          source={require("../images/background.png")}
          className=" h-80 w-full absolute"
          style={{ borderBottomRightRadius: 50, borderBottomLeftRadius: 50 }}
        />
        <View className="items-center justify-between px-4 flex-row">
          <TouchableOpacity
            className="p-3 mt-2 rounded-2xl bg-white"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon size={30} color={"black"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
            className="p-3 mt-2 rounded-2xl"
          >
            <HeartIcon size={30} color={fav ? "red" : "white"} onPress={()=>setFav(!fav)}/>
          </TouchableOpacity>
        </View>
        <View className="items-center justify-center -m-6">
          <Image source={item.image} className="h-44 w-44" />
          <Text className="text-2xl text-white font-bold mt-3">
            {item.name}
          </Text>
        </View>
        <View className="items-center px-4 flex-row ml-28 mt-14">
          <View className="bg-white flex-row rounded-2xl space-x-5">
            <TouchableOpacity
              className="bg-white p-3 rounded-2xl"
              onPress={() => setCount(count - 1)}
            >
              <MinusIcon size={25} color={"black"} />
            </TouchableOpacity>
            <Text className="text-2xl mt-2">{count}</Text>
            <TouchableOpacity
              className="bg-white p-3 rounded-2xl"
              onPress={() => {
                setCount(count + 1);
              }}
            >
              <PlusIcon size={25} color={"black"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Animatable.View delay={180} animation={"slideInLeft"}>
        <View className="px-4 mt-5 flex-row space-x-16 ml-5 overflow-hidden">
          <View>
            <Image
              source={require("../icons/calories.png")}
              className="h-8 w-8"
            />
            <Text className="mt-2 font-bold">120 g</Text>
          </View>
          <View>
            <Image source={require("../icons/clock.png")} className="h-8 w-8" />
            <Text className="mt-2 font-bold">20 Min</Text>
          </View>
          <View>
            <Image source={require("../icons/love.png")} className="h-8 w-8" />
            <Text className="mt-2 font-bold">10 M</Text>
          </View>
          <View>
            <Image
              source={require("../icons/weight.png")}
              className="h-8 w-8"
            />
            <Text className="mt-2 font-bold">100 g</Text>
          </View>
        </View>
      </Animatable.View>
      <Animatable.View delay={200} animation={"slideInUp"}>
      <View>
        <Text className="text-2xl font-bold mt-5 px-4">Description</Text>
        <Text className="text-lg font-bold px-4">{item.desc}</Text>
      </View>
      </Animatable.View>
      
      <View className="mt-4 px-4 flex-row items-center justify-between">
      <Animatable.View delay={180} animation={"slideInLeft"}>
      <View>
        <Text className="font-bold text-2xl">$ {item.price * count}</Text>
        </View>
        </Animatable.View>
        <Animatable.View delay={180} animation={"slideInRight"}>
        <View>
        <TouchableOpacity className="p-3 bg-gray-200 rounded-2xl px-4 flex-row">
          <Text className="text-2xl font-bold ml-5 mr-5">Buy now</Text>
          <BuildingLibraryIcon size={30} color={'black'} className=""/>
        </TouchableOpacity>
        </View>
</Animatable.View>
      </View>
    </View>
  );
};

export default FoodScreen;
