import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import { scale } from "react-native-size-matters";

//Navigation Stacks
import HomeScreen_BottomTabs from "./BottomTabsNavigators/HomeScreen_BottomTabs";
import ChatScreen_BottomTabs from "./BottomTabsNavigators/ChatScreen_BottomTabs";

// Icon Packs
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { createStackNavigator } from "@react-navigation/stack";

const HomeStack = createStackNavigator();

const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreen_BottomTabs"
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen
        name="HomeScreen_BottomTabs"
        component={HomeScreen_BottomTabs}
      />
      <HomeStack.Screen
        name="ChatScreen_BottomTabs"
        component={ChatScreen_BottomTabs}
      />
    </HomeStack.Navigator>
  );
};

export default HomeScreenStack;
