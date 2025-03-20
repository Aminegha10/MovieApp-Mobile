import Home from "../screens";
import Profile from "../screens/Profile";
import Save from "../screens/Save";
import Search from "../screens/Search";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "../components/tabBar";
import { View, Text } from "react-native";
const index = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      {/* <View className="flex-1 bg-[#030014]  pt-24 items-center"></View> */}
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          // headerTransparent: true,
        }}
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Save" component={Save} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </>
  );
};

export default index;
