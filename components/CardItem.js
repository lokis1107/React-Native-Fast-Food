import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { ShoppingCartIcon } from "react-native-heroicons/solid";
import { TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";

const CardItem = ({ item, index }) => {
  const navigation = useNavigation()
  return (
    <Animatable.View delay={index*120} key={index} animation={"slideInRight"}>
    <View
      className=" h-96 w-60 rounded-2xl px-4 ml-5 mt-14"
      style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
    >
      <View className="flex-row justify-center">
        <Image source={item.image} className=" h-36 w-36" />
      </View>
      <View className="px-2 mt-10">
        <Text className="text-2xl font-bold text-white">{item.name}</Text>
        <Text className="text-lg font-bold text-white mt-3">
          {item.ingredients}
        </Text>
      </View>
      <View className="flex-row items-center justify-between">
        <Text className="text-xl font-bold text-white mt-20">
          $ {item.price}
        </Text>
        <TouchableOpacity className="mt-16" onPress={()=>navigation.navigate('Food', {...item})}>
          <View className="p-3 rounded-full bg-white">
            <ShoppingCartIcon size={28} color={"black"}/>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    </Animatable.View>
  );
};

export default CardItem;
