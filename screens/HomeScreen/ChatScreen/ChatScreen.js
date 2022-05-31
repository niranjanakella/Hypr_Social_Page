import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { scale } from "react-native-size-matters";

//Icon Packs
import Ionicons from "react-native-vector-icons/Ionicons";

const ChatScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Ionicons
        name="arrow-back-outline"
        size={scale(25)}
        style={{ color: "black", margin: scale(5), overflow: "hidden" }}
        onPress={() => navigation.navigate("HomeScreen")}
      />
      <Text>ChatScreen</Text>
    </SafeAreaView>
  );
};

export default ChatScreen;
