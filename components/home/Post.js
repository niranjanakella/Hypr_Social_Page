import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import React from "react";
import postFooterIcon from "../../data/postFooterIcon";
import { scale, ScaledSheet } from "react-native-size-matters";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import { BlurView } from "@react-native-community/blur";
import { updateHypes } from "../../data/posts";

const Post = ({ post, postIndex }) => {
  const [state, setState] = React.useState({
    hypebuttonState: false,
    hypeUpdate: 0,
    savePost: false,
    sendPost: false,
  });

  const handleHypePressed = () => {
    setState({
      ...state,
      hypebuttonState: !state.hypebuttonState,
    });
    // alert(state.hypebuttonState)
    updateHypes(postIndex, state.hypebuttonState ? -1 : 1);
  };

  const handleSavePost = () => {
    setState({
      ...state,
      savePost: !state.savePost,
    });
  };

  const handleSendPost = () => {
    setState({
      ...state,
      sendPost: !state.sendPost,
    });
  };

  const PostHeader = () => (
    <SafeAreaView
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        height: scale(50),
      }}
    >
      <LinearGradient
        colors={["rgba(50,50,50,50)", "rgba(0,0,0,0)"]}
        style={{
          flex: 1,

          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 3,
            marginTop: 3,
          }}
        >
          <LinearGradient
            colors={[
              // "#E600FF",
              // "#17C8FF",
              // "#329BFF",
              // "#4C64FF",
              // "#6536FF",
              // "#8000FF",

              // "#AC32E4",
              // "#7918F2",

              "#E600FF",
              "#4801FF",
              "#4801FF",

              // background-image: linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%);

            ]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={{
              height: scale(38),
              width: scale(38),
              alignItems: "center",
              justifyContent: "center",
              borderRadius: scale(10),
            }}
            useAngle={true}
              angle={145}
              angleCenter={{x: 0.5, y: 0.5}}
          >
            <Image
              source={{ uri: post.profile_picture }}
              style={styles.story}
            />
          </LinearGradient>

          <Text style={{ marginLeft: 5, fontWeight: "bold", color: "white" }}>
            {post.user}
          </Text>
        </View>
        {/* <EntypoIcons Icon="dots-three-vertical" /> */}

        <View>
          <MaterialIcons name="dots-vertical" color="#fff" size={25} />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );

  const PostImage = () => (
    <View
      style={{ height: 510, borderRadius: scale(50), marginBottom: scale(15) }}
      >
      {/* <View style={{height:40, width:'100%',backgroundColor:"red"}}> */}
      <View style={{ zIndex: 1 , elevation:16}}>
        <ImageBackground
          source={{ uri: post.imageUrl }}
          style={styles.PostImage}
        >
          <PostHeader />

          {/* <View style={{width:'100%', height:'20%', alignContent:'space-between', borderRadius:10}}>
           <BlurView blurType='dark' style = {{flexDirection:'row', justifyContent:'space-between', margin:scale(5), alignItems:'center'}}>
              <View style={{flexDirection:'row', alignItems:'center', marginRight:5}}>
                <Image  source={{ uri: post.profile_picture }} style={{ width:50, height:50, borderRadius:20,
        marginLeft:6,
        borderWidth:3,
        orderColor:'#42C0FB'}}/>
                <Text style={{marginLeft:5, fontWeight:'bold', color:'white' }}>{post.user}</Text>
              </View>
              
             
           </BlurView>
         </View> */}
          {/* </ImageBackground> */}
          {/* </View> */}

          <PostFooter />
        </ImageBackground>
      </View>

      <View style={{ zIndex: 2, marginTop: scale(5),elevation:16 }}>
        <Likes />
        <Caption />
        <CommentSection />
        <Comments />
      </View>

      <View
        style={{
          backgroundColor: "white",
          borderBottomRightRadius: scale(20),
          borderBottomLeftRadius: scale(20),
          height: scale(130),
          width: scale(340),
          marginLeft: scale(5),
          marginTop: scale(-120),
          paddingTop: scale(15),
          opacity: 0.55,
          zIndex: 0,
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 10 },
          shadowOpacity: 0.3,
          shadowRadius: 3,
          elevation:15,
        }}
      ></View>
    </View>
  );

  const PostFooter = () => (
    <>
      <View
        style={{
          marginLeft: scale(10),
          height: scale(30),
          width: scale(210),
          borderRadius: scale(20),
          marginTop: scale(230),
          overflow: "hidden",
        }}
      >
        <BlurView
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 0,
          }}
          blurType="light"
          blurAmount={100}
          reducedTransparencyFallbackColor="black"
        />

        <View
          style={{
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "row",
            zIndex: 1,
          }}
        >
          {/* <View style = {{backgroundColor: "red",flexDirection:'row', width:'32%',}}> */}

          {/* <IoniconsIcons  name={1===0?"heart-outline":"heart-sharp"} color={1===0?'#000':'#C70039'} size={scale(32)} /> */}

          {/* <SvgIcons IconName= {state.hypebuttonState ? "BW-Hype":"Colored-Hype" } width={50} height={45} /> */}

          <EvilIcons
            name={"comment"}
            color={"#000"}
            size={scale(35)}
            style={{ width: scale(40) }}
          />
          <FontAwesomeIcons
            name={"send-o"}
            color={"#000"}
            size={scale(22)}
            style={{ width: scale(40) }}
          />

          <TouchableOpacity onPress={handleSavePost}>
            <Image
              source={
                state.savePost
                  ? postFooterIcon.SavePost.PostSaved
                  : postFooterIcon.SavePost.PostUnSaved
              }
              style={{
                width: scale(25),
                height: scale(25),
                marginRight: scale(10),
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleHypePressed}>
            <Image
              source={
                state.hypebuttonState
                  ? postFooterIcon.Hype.Hyped
                  : postFooterIcon.Hype.UnHyped
              }
              style={{ width: scale(25), height: scale(30) }}
            />
          </TouchableOpacity>
        </View>

        {/* <SvgIcons IconName="save" width={50} height={45} /> */}
        {/* <Icon imageStyle={styles.RightFooterIcon} imageUrl={postFooterIcon[3].imageUrl} size={scale(30)} /> */}

        {/* </View> */}
      </View>

      {/* <View style={{marginLeft: scale(10), height:scale(35),width:scale(250),  borderRadius:scale(20), overflow:'hidden', marginTop:scale(-37), zIndex:2}}>
  
   <View style={{justifyContent:'space-evenly', alignItems:'center',flexDirection:'row' }}>
  
    <TouchableOpacity>
    <Image source={postFooterIcon.Hype.Hyped} style={{width:scale(30),height:scale(40), marginLeft:scale(5)}} />
    </TouchableOpacity>
    <EvilIcons name={"comment"} color={"#000"} size={scale(41)} />
    <FontAwesomeIcons name={"send-o"} color={"#000"} size={scale(28)} />
    

    <Image source={postFooterIcon.SavePost.PostUnSaved} style={{width:scale(30),height:scale(30), marginRight:scale(10)}} />

  </View>
</View> */}
    </>
  );

  const Icon = ({ imageStyle, imageUrl }) => (
    <View>
      <TouchableOpacity>
        <Image style={imageStyle} source={{ uri: imageUrl }} />
      </TouchableOpacity>
    </View>
  );

  const Likes = () => (
    <Text style={{ fontWeight: "600", marginStart: 15 }}>
      {post.hypes} Hypes
    </Text>
  );

  const Caption = () => (
    <View style={{ flexDirection: "row", marginLeft: 15 }}>
      <Text style={{ fontSize: 15, fontWeight: "700" }}>{post.user} </Text>
      <Text style={{ marginTop: 2, fontSize: 15, fontWeight: "600" }}>
        {post.caption}
      </Text>
    </View>
  );

  // there are 3 cases :
  //1. zero comments then view nothing
  //2. 1 comment then view 'comment',
  //3. more then 1 comment view 'comments',

  const CommentSection = () => (
    <View style={{ marginLeft: 15 }}>
      {!!post.comments.length && (
        <Text style={{ color: "#C0C0C0" }}>
          View {post.comments.length > 1 ? "all" : ""} {post.comments.length}{" "}
          {post.comments.length > 1 ? "comments" : "comment"}
        </Text>
      )}
    </View>
  );

  const Comments = () => (
    <>
      {post.comments.slice(0, 2).map((comment, index) => (
        <View
          key={index}
          style={{ marginLeft: 15, flexDirection: "row", marginTop: 5 }}
        >
          <Text style={{ fontWeight: "700" }}>{comment.user} </Text>
          <Text>{comment.comment}</Text>
        </View>
      ))}
    </>
  );

  return (
    <View>
      <PostImage />
    </View>
  );
};

const styles = ScaledSheet.create({
  story: {
    width: "35@s",
    height: "35@s",
    borderRadius: "10@s",
    // borderColor:'#FE9934',
  },

  footerIcon: {
    width: "30@s",
    height: "30@s",
    margin: "10@s",
  },

  RightFooterIcon: {
    width: "32@s",
    height: "32@s",
    margin: "10@s",
  },

  PostImage: {
    height: 370,
    borderRadius: 15,
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: scale(340),
  },

  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default Post;
