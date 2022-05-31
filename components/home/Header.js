import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
} from "react-native";
import React from "react";
import { ScaledSheet, scale } from "react-native-size-matters";

import SocialsPageData from "../../data/SocialsPageData";
import Ionicons from "react-native-vector-icons/Ionicons";
import FeatherIcons from "react-native-vector-icons/Feather";

const Header = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={SocialsPageData.HomeScreen.HyprLogo.BW_Logo} />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        {/* <TouchableOpacity>
                <Image source={require('../../assets/camera.png')} style={styles.icon}  />
            </TouchableOpacity> */}

        {/* <Ionicons name="camera-outline" size={scale(30)} /> */}
        <Image source={SocialsPageData.HomeScreen.CameraIcon} style={{height:scale(35),width:scale(35)}}/>
        <Pressable
          style={{ alignContent: "center", alignItems: "center" }}
          onPress={() => navigation.navigate("ChatScreen_BottomTabs")}
        >
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>9</Text>
          </View>
          {/* <Image source={require('../../assets/message.png')} style={styles.icon} /> */}
          {/* <FeatherIcons
            name="message-square"
            size={scale(25)}
            style={{ marginTop: scale(3), marginLeft: 5 }}
          /> */}

<Image source={SocialsPageData.Chat.ChatIcon} style={{height:scale(28),width:scale(28),marginTop: scale(4), marginLeft: 5 }}/>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  logo: {
    width: "70@s",
    height: "45@s",
    alignItems: "flex-end",
    resizeMode: "contain",
  },

  container: {
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    height: scale(45),
    marginHorizontal: 20,
    marginTop: 5,
    marginLeft: 5,
  },

  iconsContainer: {
    flexDirection: "row",
  },

  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },

  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 26,
    bottom: 23,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },

  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
});

export default Header;
