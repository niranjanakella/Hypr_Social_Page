import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  FlatList,
  SafeAreaView,
  Platform,
} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { scale } from "react-native-size-matters";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Profile_posts } from "../../data/profile_posts";
import { My_pictures } from "../../data/My_posts.js";

const HeaderComponent = ({ navigation }) => {
  return (
    <View>
      <LinearGradient
        colors={["#FF6600", "#FF6600","#FF6600","#FEDC38"]}
        style={{
          height: Platform.OS === "ios" ? scale(130) : scale(110),
          flexDirection: "row",
          width: "100%",
        }}
      >
        <SafeAreaView
          style={{
            width: "100%",
          }}
        >
          <View
            style={{
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            <Entypo
              name="dots-three-vertical"
              size={scale(20)}
              style={{
                color: "white",
                marginTop: scale(10),
                marginRight: scale(5),
              }}
              onPress={() => navigation.navigate("ProfileScreenOptions")}
            />
          </View>
        </SafeAreaView>
      </LinearGradient>

      <Image
        source={require("../../assets/images/profile_page/men_profile_pic.jpg")}
        style={{
          width: 105,
          height: 105,
          borderRadius: 30,
          marginTop: scale(-60),
          borderColor: "white",
          borderWidth: 3,
          alignSelf: "center",
        }}
      />
      <View
        style={{
          marginTop: -20,
          backgroundColor: "white",
          width: scale(30),
          height: scale(30),
          marginLeft: scale(200),
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name="camera-plus-outline" size={scale(25)} />
      </View>

      <View style={{ width: "100%", height: scale(60), alignItems: "center" }}>
        <View style={{ flexDirection: "row", marginTop: scale(5) }}>
          <Image
            source={require("../../assets/icons/pngs/hyprseller.png")}
            style={{
              width: scale(20),
              height: scale(20),
              marginRight: scale(-5),
            }}
          />
          <Text
            style={{
              alignSelf: "center",
              fontSize: scale(25),
              color: "black",
              marginBottom: scale(5),
              fontFamily: "Arial",
              fontWeight: "bold",
            }}
          >
            {" "}
            MarGon
          </Text>
        </View>

        <Text
          style={{
            alignSelf: "center",
            fontSize: scale(15),
            color: "black",
            marginBottom: scale(12),
            fontFamily: "Arial",
            fontWeight: "600",
          }}
        >
          Rome, Italy
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginLeft: scale(5),
          marginRight: scale(5),
          justifyContent: "space-evenly",
          marginTop: scale(10),
        }}
      >
        <View
          style={{
            alignItems: "center",
            width: scale(90),
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "900", color: "black", fontSize: 20 }}>
            {" "}
            456
          </Text>
          <Text style={{ fontWeight: "700" }}> Followers</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            width: scale(90),
            justifyContent: "center",
            borderColor: "#DFD8C8",
            borderLeftWidth: 1,
            borderRightWidth: 1,
          }}
        >
          <Text style={{ fontWeight: "900", color: "black", fontSize: 20 }}>
            {" "}
            456
          </Text>
          <Text style={{ fontWeight: "700" }}> Following</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            width: scale(90),
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "900", color: "black", fontSize: 20 }}>
            {" "}
            456
          </Text>
          <Text style={{ fontWeight: "700" }}> Posts</Text>
        </View>
      </View>

      <Featured_post />
      {/* <My_posts /> */}
      <View style={{ marginLeft: scale(10), marginTop: scale(30) }}>
        <Text style={{ fontSize: 25, fontWeight: "900" }}>Posts</Text>
      </View>
    </View>
  );
};

const Featured_post = ({ post }) => (
  <View style={{ margin: scale(5) }}>
    <View style={{ marginLeft: scale(5), marginTop: scale(30) }}>
      <Text style={{ fontSize: 25, fontWeight: "900" }}>Featured</Text>
    </View>

    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={Profile_posts}
      renderItem={({ item }, index) => (
        <View
          key={index}
          style={{
            marginTop: scale(10),
            marginBottom: scale(10),
            shadowColor: "#747474",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.6,
            shadowRadius: 8,
            justifyContent:'center',

          }}
        >
          <ImageBackground
            source={{ uri: item.image }}
            style={{
              height: scale(260),
              width: scale(300),
              marginHorizontal: scale(10),
              borderRadius: scale(20),
              overflow: "hidden",
              padding: scale(10),
              elevation:6
            }}
          >
            <View
              style={{
                width: scale(50),
                height: scale(20),
                alignItems: "center",
                flexDirection: "row",
                zIndex: 1,
              }}
            >
              <Image
                source={require("../../assets/icons/pngs/golden_hypr_icon.png")}
                style={{ height: scale(20), width: scale(20) }}
              />
              <Text
                style={{ color: "white", fontSize: 13, fontWeight: "bold" }}
              >
                {item.featured_hyps}
              </Text>
            </View>
            <View
              style={{
                width: scale(50),
                height: scale(20),
                alignItems: "center",
                flexDirection: "row",
                backgroundColor: "black",
                borderRadius: scale(20),
                opacity: 0.5,
                marginTop: scale(-20),
                zIndex: 0,
              }}
            ></View>
          </ImageBackground>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
    {/*       
      {Profile_posts.map((post, index) => (
        <View
          key={index}
          style={{
            marginTop: scale(10),
            marginBottom: scale(10),
            shadowColor: "#747474",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.6,
            shadowRadius: 8,
          }}
          >
          <ImageBackground
            source={{ uri: post.image }}
            style={{
              height: scale(260),
              width: scale(300),
              marginHorizontal: scale(10),
              borderRadius: scale(20),
              overflow: "hidden",
              padding: scale(10),
            }}
          >
            <View
              style={{
                width: scale(50),
                height: scale(20),
                alignItems: "center",
                flexDirection: "row",
                zIndex: 1,
              }}
            >
              <Image
                source={require("../assets/icons/pngs/golden_hypr_icon.png")}
                style={{ height: scale(20), width: scale(20) }}
              />
              <Text
                style={{ color: "white", fontSize: 13, fontWeight: "bold" }}
              >
                {post.featured_hyps}
              </Text>
            </View>
            <View
              style={{
                width: scale(50),
                height: scale(20),
                alignItems: "center",
                flexDirection: "row",
                backgroundColor: "black",
                borderRadius: scale(20),
                opacity: 0.5,
                marginTop: scale(-20),
                zIndex: 0,
              }}
            ></View>
          </ImageBackground>
        </View>
      ))} */}
    {/* </ScrollView> */}
  </View>
);

const ProfileScreen = ({ navigation }) => (
  <View>
    {/* {My_pictures.map((item,index) => (
      <View key ={index} style={{marginTop:scale(10)}} >
        <ImageBackground source={{ uri : item.imageUrl}} style={{height:scale(200), width:scale(160), borderRadius:scale(20), overflow:'hidden',paddingVertical:scale(10)}} />
      </View>
   ))}*/}
    <FlatList
      data={My_pictures}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            marginTop: scale(15),
            alignContent: "center",
            alignSelf: "center",
            // backgroundColor: "orange",
            marginLeft: scale(6),

            shadowColor: "#828282",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.4,
            shadowRadius: 8,

            elevation:10
          }}
        >
          <ImageBackground
            source={{ uri: item.imageUrl }}
            style={{
              height: scale(190),
              width: scale(160),
              borderRadius: scale(20),
              overflow: "hidden",
              margin: scale(2),
              alignItems: "flex-start",
            }}
          >
            <View
              style={{
                width: scale(50),
                height: scale(20),
                margin: scale(5),
                alignItems: "center",
                flexDirection: "row",
                zIndex: 1,
              }}
            >
              <Image
                source={require("../../assets/icons/pngs/golden_hypr_icon.png")}
                style={{ height: scale(20), width: scale(20) }}
              />
              <Text
                style={{ color: "white", fontSize: 13, fontWeight: "bold" }}
              >
                {item.num_of_hyps}
              </Text>
            </View>
            <View
              style={{
                width: scale(50),
                height: scale(20),
                alignItems: "center",
                flexDirection: "row",
                backgroundColor: "black",
                borderRadius: scale(20),
                opacity: 0.5,
                marginTop: scale(-24),
                margin: scale(5),
                zIndex: 0,
              }}
            ></View>
          </ImageBackground>
        </View>
      )}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={<HeaderComponent navigation={navigation} />}
    />
  </View>
);

export default ProfileScreen;
