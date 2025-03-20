import React from "react";
import { Octicons } from "@expo/vector-icons";
import { Text, View, TextInput } from "react-native";
const SearchBar = () => {
  return (
    <View className="px-4 mb-8 w-full">
      <View className="w-full flex-row py-4 px-4 bg-[#0F0D23] rounded-full ">
        <Octicons name="search" className="mr-2" size={24} color="#AB8BFF" />
        <TextInput
          text
          placeholder="Search through 300+ movies online"
          placeholderTextColor="#A8B5DB"
          className="  w-full rounded-full flex-row text-[#A8B5DB] "
        />
      </View>
    </View>
  );
};

export default SearchBar;
