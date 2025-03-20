import { View, Platform, Text } from "react-native";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { PlatformPressable } from "@react-navigation/elements";
import Octicons from "@expo/vector-icons/Octicons";
import { Heart, UserRound } from "lucide-react-native";

export default function MyTabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  const icons = {
    Home: ({ color }) => <Octicons name="home" size={24} color={color} />,
    Search: ({ color }) => <Octicons name="search" size={24} color={color} />,
    Save: ({ color }) => <Heart color={color} />,
    Profile: ({ color }) => <UserRound color={color} />,
  };

  return (
    <View className="bg-[#0F0D23] justify-between flex flex-row absolute bottom-7 left-1 right-1 rounded-full ">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
            
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className={`py-6 px-8 rounded-full flex flex-row gap-2 items-center ${
              isFocused ? "bg-[#D6C7FF]" : ""
            }`}
          >
            <View className="text-red-500">
              {isFocused
                ? icons[route.name]({ color: "#151312" })
                : icons[route.name]({ color: "#A8B5DB" })}
              {/* {icons.find((icon, index) => route.name == icon.name)?.icon} */}
            </View>
            {isFocused && (
              <Text className="text-[#151312] text-xl">{route.name}</Text>
            )}
          </PlatformPressable>
        );
      })}
    </View>
  );
}
