import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon, LocationMarkerIcon } from "react-native-heroicons/outline";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  genre,
  rating,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-30 w-64 rounded-sm"
      />
      <View>
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-rox items-center space-x-1">
          <StarIcon color="red" opacity={0.9} size={22} />
          <Text className="text-sm">
            <Text className="text-red-500">{rating}</Text> - {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nerby - {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
