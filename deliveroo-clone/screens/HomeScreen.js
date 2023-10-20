import { View, Text, Image, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-3">
      <Text className="text-yellow-300">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-900 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-500 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#FF77AA" />
            </Text>
          </View>
          <UserIcon size={28} color="#FF77AA" />
        </View>
        {/* Search Bar */}
        <View>
          <View className="">
            <SearchIcon />
            <TextInput
              placeholder="Restaurants and Cuisines"
              keyboardType="default"
            />
          </View>
          <AdjustmentsVerticalIcon color="#FF77AA" />
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
