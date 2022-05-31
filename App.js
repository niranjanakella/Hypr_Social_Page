import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { scale } from "react-native-size-matters";

// Navigation Stacks
import HomeScreenStack from "./components/navigation/HomeScreenStack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

export default function App() {
  return (
    <NavigationContainer>
      <HomeScreenStack />
    </NavigationContainer>
    // <HomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});