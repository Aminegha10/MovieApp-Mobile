import { View, Text, ScrollView, Image } from "react-native";
import SquidGame from "../../assets/images/SquidGame.png";
import star from "../../assets/images/star.png";
import arrow1 from "../../assets/images/arrow1.png";
import arrow from "../../assets/images/arrow.png";
import Play from "../../assets/images/Play.png";
import { LinearGradient } from "expo-linear-gradient";
export default function Save() {
  return (
    <ScrollView
      className="bg-[#030014] flex-1  "
      showsVerticalScrollIndicator={false}
    >
      <View className="pb-32">
        {/* HeroSection Picture */}
        <View className="mb-8 relative  ">
          <Image source={SquidGame} className="object-cover w-full" />
          <Image className="absolute bottom-[-22px] right-3" source={Play} />
          <LinearGradient
            colors={["#000000", "#00000000"]}
            style={{ height: 80, width: "100%", position: "absolute", top: 0 }}
          />
        </View>
        <View className="px-3 gap-8">
          {/* Title */}
          <Text className="text-white text-[20px] font-bold">Squid Game 2</Text>
          {/* Movies Info */}
          <View className="flex-row gap-4">
            <Text className="text-[#A8B5DB]">2024</Text>
            <Text className="text-[#A8B5DB]">.</Text>
            <Text className="text-[#A8B5DB]">PG-13</Text>
            <Text className="text-[#A8B5DB]">.</Text>
            <Text className="text-[#A8B5DB]">2h 46m</Text>
          </View>
          {/* Rating */}
          <View className="flex-row  gap-2 mb-4">
            <View className="bg-[#221F3D] flex-row p-3 items-center gap-2 rounded-xl">
              <Image source={star} />
              <Text className="text-white">
                8.9 <Text className="text-[#A8B5DB]">/10 (200K)</Text>
              </Text>
            </View>
            <View className="bg-[#221F3D] items-center flex-row p-3 gap-2 rounded-xl">
              <Image source={arrow} />
              <Text className="text-white">1</Text>
            </View>
          </View>
          {/* OverView */}
          <View className="gap-2">
            <Text className="text-[#A8B5DB]">Overview</Text>
            <Text className="text-[#FFFFFF] leading-8">
              Hundreds of cash-strapped players accept a strange invitation to
              compete in children's games. Inside, a tempting prize awaits with
              deadly high stakes: a game that has a whopping 45.6 billion-won
              prize at stake.
            </Text>
          </View>
          {/* realease Date */}
          <View className="gap-2">
            <Text className="text-[#A8B5DB]">Release date</Text>
            <Text className="text-[#D6C7FF]">
              December 26, 2024 (Worldwide)
            </Text>
          </View>
          {/* Genre */}
          <View className="gap-2">
            <Text className="text-[#A8B5DB]">Generes</Text>
            <View className="flex-row gap-4">
              <View className="p-4 bg-[#0F0D23] rounded-full">
                <Text className="text-white">Adventure</Text>
              </View>
              <View className="p-4 bg-[#0F0D23] rounded-full">
                <Text className="text-white">Action</Text>
              </View>
              <View className="p-4 bg-[#0F0D23] rounded-full">
                <Text className="text-white">Comedy</Text>
              </View>
              <View className="p-4 bg-[#0F0D23] rounded-full">
                <Text className="text-white">Romance</Text>
              </View>
            </View>
          </View>
          {/* Budget & Revenue */}
          <View className="flex-row gap-3">
            <View className="gap-2">
              <Text className="text-[#A8B5DB]">Budget</Text>
              <Text className="text-[#D6C7FF]">$21.4 million</Text>
            </View>
            <View className="gap-2">
              <Text className="text-[#A8B5DB]">Revenue</Text>
              <Text className="text-[#D6C7FF]">$900 Million</Text>
            </View>
          </View>
          {/* Tagline */}
          <View className="gap-2">
            <Text className="text-[#A8B5DB]">Tagline</Text>
            <Text className="text-[#D6C7FF]">
              45.6 Billion Won is Child's Play
            </Text>
          </View>
          {/* Production Company */}
          <View className=" ">
            <Text className="text-[#A8B5DB]">Production Companies</Text>
            <View className="flex-wrap flex-row gap-2">
              <Text className="text-[#D6C7FF]">Legendary Entertainment </Text>
              <Text className="text-[#D6C7FF]">.</Text>
              <Text className="text-[#D6C7FF]">Warner Bros. Entertainment</Text>
              <Text className="text-[#D6C7FF]">. </Text>
              <Text className="text-[#D6C7FF]">Villeneuve Films</Text>
            </View>
          </View>
          {/* Button */}
          <LinearGradient
            colors={["#D6C7FF", "#AB8BFF"]}
            start={{ x: 0, y: 0 }} // Start position (left)
            end={{ x: 1, y: 0 }} // End position (right)
            style={{ borderRadius: 8 }} // Apply border radius to the LinearGradient
          >
            <View className=" text-[#121212] p-4 flex-row gap-2 justify-center items-center">
              <Text>Visit Homepage</Text>
              <Image source={arrow1} />
            </View>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
}
