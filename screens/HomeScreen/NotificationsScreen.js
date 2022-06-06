import { View, Text, SafeAreaView } from "react-native";
import { Divider } from "react-native-elements";
import React from "react";
import { scale } from "react-native-size-matters";

import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

const NotificationsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          marginTop: scale(10),
        }}
      >
        <View style={{ marginLeft: scale(5) }}>
          <Text style={{ fontSize: 25, fontWeight: "900" }}>Notifications</Text>
        </View>
        <Entypo
          name="dots-three-vertical"
          size={scale(20)}
          style={{
            color: "black",
            marginRight: scale(5),
          }}
        />
      </SafeAreaView>

      <Divider
        width={5}
        style={{ marginTop: scale(5), marginBottom: scale(10) }}
        orientation="vertical"
      />
      {/* <BottomTabs navigation={navigation} /> */}
    </SafeAreaView>
  );
};

export default NotificationsScreen;
