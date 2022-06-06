import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Header from '../../components/home/Header';
import Stories from '../../components/home/Stories';
import Post from '../../components/home/Post';
import {POSTS} from '../../data/posts';

import SocialsPageData from '../../data/SocialsPageData';
import {BlurView} from '@react-native-community/blur';
import {scale} from 'react-native-size-matters';

const HomeScreen = ({navigation}, props) => {
  return (
    <>
      <View style={{height: Dimensions.height}}>
        <ImageBackground
          source={SocialsPageData.HomeScreen.Background.BackgroundImage}
          style={{height: '100%'}}>
          <SafeAreaView>
            {/* <BlurView
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
            blurType="light"
            blurAmount={20}
            reducedTransparencyFallbackColor="white"
          /> */}

            {/* Home Screen Header */}
            <Header navigation={navigation} />

            {/* <ScrollView contentContainerStyle={{ paddingBottom: "50%" }}>
          <Stories />
          {POSTS.map((post, index) => (
              <Post post={post} key={index} postIndex={index} />
            ))}

            </ScrollView> */}

            {/* Flat List Posts to save memory */}
            <FlatList
              data={POSTS}
              // style={{height:"92%"}}
              overScrollMode="never"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: '20%'}}
              renderItem={({item, index}) => (
                <Post
                  post={item}
                  key={index}
                  postIndex={index}
                  navigation={navigation}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
              ListHeaderComponent={
                <View>
                  <Stories />
                </View>
              }
            />

            {/* Bottom Navigation Container */}
          </SafeAreaView>
        </ImageBackground>
        {/* <BottomTabs icons={BottomTabIcons} navigation={navigation} /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  BackGround: {
    backgroundColor: '#f6b092',
    flex: 1,
  },
});

export default HomeScreen;
