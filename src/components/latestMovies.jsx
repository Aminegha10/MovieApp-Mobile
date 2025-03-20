import { Image, StyleSheet, Text, View } from "react-native";
import redOne from "../../assets/images/redOne.png";
import wicked from "../../assets/images/wicked.png";
import venom from "../../assets/images/venom.png";
import aftermath from "../../assets/images/aftermath.png";


const latestMovies = () => {
  const movies = [
    { id: 1, title: "Red One", genre: "Action • Movie", image: redOne },
    {
      id: 2,
      title: "Venom: The Last",
      genre: "Sci-Fi • Movie",
      image: venom,
    },
    { id: 3, title: "Wicked", genre: "Comedy • Movie", image: wicked },
    { id: 4, title: "Joker 2", genre: "Drama • Movie", image: aftermath },
    { id: 5, title: "Red One", genre: "Action • Movie", image: redOne },
    {
      id: 6,
      title: "Venom: The Last",
      genre: "Sci-Fi • Movie",
      image: venom,
    },
    { id: 7, title: "Wicked", genre: "Comedy • Movie", image: wicked },
    { id: 8, title: "Joker 2", genre: "Drama • Movie", image: aftermath },
    { id: 9, title: "Red One", genre: "Action • Movie", image: redOne },
  ];
  return (
    <View className="pb-32">
      <Text className="text-white pl-3 text-[18px] font-bold mb-8">
        Latest Movies
      </Text>
      <View className="px-3 text-white flex-row flex-wrap gap-6 ">
        {movies.map((movie, index) => {
          return (
            <View key={movie.id} className="gap-4">
              <View className="relative">
                <Image className="w-[116px] h-[167px]" source={movie.image} />
              </View>

              <Text className="text-white  font-bold">{movie.title}</Text>
              <Text className="text-[#9CA4AB] text-[12px]">{movie.genre}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default latestMovies;

const styles = StyleSheet.create({});
