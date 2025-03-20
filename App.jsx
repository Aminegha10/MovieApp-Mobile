import AppContainer from "./src/navigations";
import { NavigationContainer } from "@react-navigation/native";
import "./global.css";
import { Text, View } from "react-native";

// Import the screens

function App() {
  return (
    <NavigationContainer>
      <AppContainer  />
    </NavigationContainer>
  );
}

export default App;
