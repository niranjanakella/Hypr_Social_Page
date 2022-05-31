import { View, Text, SafeAreaView } from "react-native";
import React from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

import { scale } from "react-native-size-matters";

const ProfilePageOptions = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Ionicons
        name="arrow-back-outline"
        size={scale(25)}
        style={{ color: "black", margin: scale(5), overflow: "hidden" }}
        onPress={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
};

export default ProfilePageOptions;
