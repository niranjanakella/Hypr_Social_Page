import { View, Text } from "react-native";
import React from "react";

//Screens
import ProfileScreen from "../../screens/HomeScreen/ProfileScreen";
import ProfileScreenOptions from "../../screens/HomeScreen/ProfileScreenOptions";

import { createStackNavigator } from "@react-navigation/stack";

const ProfileScreenTabs = createStackNavigator();

const ProfileScreenNavigator = () => {
  return (
    <ProfileScreenTabs.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileScreenTabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
      />
      <ProfileScreenTabs.Screen
        name="ProfileScreenOptions"
        component={ProfileScreenOptions}
      />
    </ProfileScreenTabs.Navigator>
  );
};

export default ProfileScreenNavigator;
