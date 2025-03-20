import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../components/searchBar";
import SearchedMovies from "../components/searchedMovies";
import Logo from "../../assets/images/Logo.png";

const Search = () => {
  return (
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
           {/* Latest Movies */}
           <SearchedMovies />
         </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({});
