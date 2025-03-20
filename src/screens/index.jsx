// import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Button,
  Text,
  View,
  SafeAreaView,
  Image,
} from "react-native";
import Logo from "../../assets/images/Logo.png";
import SearchBar from "../components/searchBar";
import PopularMovies from "../components/PopularMovies.jsx";
import LatestMovies from "../components/latestMovies.jsx";
import { ScrollView } from "react-native";

export default function Home() {
  // const [count, setCount] = useState(0);
  // const handleTextPress = () => {
  //   setCount(count + 1);
  // };
  return (
    <>
      <ScrollView
        className="bg-[#030014] flex-1 gap-10 "
        showsVerticalScrollIndicator={false}
      >
        {/* Logo */}
        <View className="items-center mt-20">
          <Image source={Logo} className="mb-8" />
        </View>
        {/* Search Bar */}
        <SearchBar />
        {/* Popular Movies */}
        <PopularMovies />
        {/* Latest Movies */}
        <LatestMovies />
      </ScrollView>
    </>
  );
}
