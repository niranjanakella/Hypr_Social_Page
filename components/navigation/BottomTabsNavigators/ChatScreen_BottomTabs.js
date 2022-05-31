import { View, Text } from "react-native";
import React from "react";
import { scale } from "react-native-size-matters";

//Screens
import ChatScreen from "../../../screens/HomeScreen/ChatScreen/ChatScreen";
import CallsScreen from "../../../screens/HomeScreen/ChatScreen/CallsScreen";
import ChatSettingsScreen from "../../../screens/HomeScreen/ChatScreen/ChatSettingsScreen";

//Icon Packs
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

//Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTabs = createBottomTabNavigator();

const ChatScreen_BottomTabs = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarStyle: {
          height: scale(71),
          paddingTop: scale(5),
        },
        headerShown: false,
      }}
      initialRouteName="ChatScreen"
    >
      <BottomTabs.Screen
        name="CallsScreen"
        component={CallsScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="call" color={color} size={scale(25)} />
          ),
          tabBarActiveTintColor: "#FF6600",
          tabBarInactiveTintColor: "grey",
        }}
      />
      <BottomTabs.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Entypo name="chat" color={color} size={scale(25)} />
          ),
          tabBarActiveTintColor: "#FF6600",
          tabBarInactiveTintColor: "grey",
        }}
      />
      <BottomTabs.Screen
        name="ChatSettingsScreen"
        component={ChatSettingsScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-sharp" color={color} size={scale(25)} />
          ),
          tabBarActiveTintColor: "#FF6600",
          tabBarInactiveTintColor: "grey",
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default ChatScreen_BottomTabs;
