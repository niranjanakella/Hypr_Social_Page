import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';
import {USERS} from '../../data/users';
import {Divider} from 'react-native-elements';
import {s, scale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

import MaskedView from '@react-native-community/masked-view';

//Icon Pack
import Fontisto from 'react-native-vector-icons/Fontisto';

const Stories = () => {
  return (
    <View style={{marginBottom: 13, marginLeft: scale(5)}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/*ADD STORY ICON */}
        <Pressable>
         <MaskedView 
            style={{flexDirection: 'row'}}
            maskElement={
              <View
                style={{
                  // Transparent background because mask is based off alpha channel.
                  backgroundColor: 'transparent',

                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    height: scale(55),
                    width: scale(55),
                    backgroundColor: 'transparent',
                    borderColor: 'black',
                    borderWidth: scale(2),
                    borderRadius: scale(10),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Fontisto name="plus-a" size={scale(25)} />
                </View>
              </View>
            }
          >

            
            <LinearGradient
              colors={[
                '#E600FF',
                '#4801FF',
                '#4801FF',
              ]}
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 1.0}}
              style={{
                height: scale(55),
                width: scale(60),
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: scale(10),
                marginRight: scale(5),
              }}
              useAngle={true}
              angle={145}
              angleCenter={{x: 0.5, y: 0.5}}
            />
          </MaskedView>

{/* <LinearGradient
              colors={[
                // "#FBBC92",
                // "#FE9855",
                // "#FF8533",
                // "#FF7A22",
                // "#FF6600",

                '#E600FF',
                '#4801FF',
                '#4801FF',
              ]}
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 1.0}}
              style={{
                height: 65.5,
                width: 65.5,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: scale(10),
                marginRight: scale(5),
              }}
              useAngle={true}
              angle={145}
              angleCenter={{x: 0.5, y: 0.5}}
            >
              <View  style={{backgroundColor:'white', height:scale(50),width:scale(50), borderRadius:scale(5), justifyContent:'center' }} >
              <Fontisto name="plus-a" size={scale(25)} color={'black'} style={{alignSelf:'center'}} />
              </View>
            </LinearGradient> */}
          <Text style={{alignSelf: 'center', color:'black'}}>Add Story</Text>
        </Pressable>

        {/* STORIES LIST */}
        {USERS.map((story, index) => (
          <View
            key={index}
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              marginRight: 5,
            }}
          >
            <LinearGradient
              colors={[
                // "#FBBC92",
                // "#FE9855",
                // "#FF8533",
                // "#FF7A22",
                // "#FF6600",

                '#E600FF',
                '#4801FF',
                '#4801FF',
              ]}
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 1.0}}
              style={{
                height: 65.5,
                width: 65.5,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: scale(10),
                marginRight: scale(5),
              }}
              useAngle={true}
              angle={145}
              angleCenter={{x: 0.5, y: 0.5}}
            
            >
              <Image source={{uri: story.image}} style={styles.story} />
            </LinearGradient>
            <Text
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 6, color:'black'
              }}
            >
              {story.user.length > 8
                ? story.user.slice(0, 7).toLowerCase() + '...'
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
      <Divider
        width={5}
        style={{marginTop: scale(5), marginBottom: scale(10)}}
        orientation="vertical"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
});

export default Stories;
