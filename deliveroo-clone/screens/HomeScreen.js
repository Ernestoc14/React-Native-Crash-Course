import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
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
    <SafeAreaView className="bg-white">
      <Text className="text-yellow-300">
        {/* Header */}
        <View className="flex-row items-center mx-4 px-2 space-x-2">
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
        <View className="flex-row items-center space-x-2 pb-2 mx-4 px-2">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-1 m-2">
            <MagnifyingGlassIcon color="#FF77AA" />
            <TextInput
              placeholder="Restaurants and Cuisines"
              keyboardType="default"
            />
          </View>
          <AdjustmentsVerticalIcon color="#FF77AA" />
        </View>

        {/* Body */}
            <ScrollView>
              {/* Categories */}

              {/* Featured Rows */}
            </ScrollView>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
