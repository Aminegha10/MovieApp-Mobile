import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import image from "../../assets/images/image.png";
import mufasa from "../../assets/images/mufasa.png";
import moana from "../../assets/images/moana.png";
import { BlurView } from "expo-blur";
import star from "../../assets/images/star.png";
const PopularMovies = () => {
  const movies = [
    { id: 1, title: "Gladiator II", genre: "Action • Movie", image: image },
    {
      id: 2,
      title: "Mufasa: The Lion King",
      genre: "Sci-Fi • Movie",
      image: mufasa,
    },
    { id: 3, title: "Moana 2", genre: "Comedy • Movie", image: moana },
    { id: 4, title: "Joker 2", genre: "Drama • Movie", image: image },
  ];
  return (
    <View className=" mb-14">
      <Text className="text-white pl-3 text-[18px] font-bold mb-8">
        Popular Movies
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View className="pl-8 text-white flex-row gap-8 ">
          {movies.map((movie, index) => {
            return (
              <View key={movie.id} className="gap-4">
                <View className="relative">
                  <Image className="w-[116px] h-[167px]" source={movie.image} />
                  <Text className="text-white absolute font-bold bottom-[-10px] left-[-10px] text-[44px]">
                    {movie.id}
                  </Text>
                  <View className="absolute top-1 right-1">
                    <BlurView
                      style={styles.blurContainer}
                      intensity={30}
                      className="flex-row p-1  items-center justify-center gap-1 "
                    >
                      <Image className="w-2 h-3" source={star} />
                      <Text className="text-white font-bold">4.6</Text>
                    </BlurView>
                  </View>
                </View>

                <Text className="text-white  font-bold">Gladiator II</Text>
                <Text className="text-[#9CA4AB] text-[12px]">
                  {movie.genre}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default PopularMovies;

const styles = StyleSheet.create({
  blurContainer: {
    borderRadius: 100, // Rounded corners (3xl)
  },
});
