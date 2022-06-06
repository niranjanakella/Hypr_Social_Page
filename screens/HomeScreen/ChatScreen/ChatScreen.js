import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import {scale} from 'react-native-size-matters';
//import Animated, { Easing } from 'react-native-reanimated'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {ChatListData} from '../../../data/ChatListData';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {FlatList} from 'react-native';
import {Pressable} from 'react-native';

const ChatList_page = ({item, navigation}) => (
  <ScrollView style={{backgroundColor: 'white'}}>
    <Ionicons
      name="arrow-back-outline"
      size={scale(25)}
      style={{color: 'black', margin: scale(5), overflow: 'hidden'}}
      onPress={() => navigation.navigate('HomeScreen')}
    />
    <View
      style={{
        backgroundColor: 'white',
        width: '90%',
        height: scale(50),
        margin: scale(20),
        marginBottom: scale(5),
        marginTop: scale(5),
        borderRadius: scale(15),
        flexDirection: 'row',
        alignContent: 'space-between',
        alignItems: 'center',

        elevation: 14,
      }}>
      <View
        style={{
          width: '15%',
          height: '100%',
          borderBottomLeftRadius: scale(15),
          borderTopLeftRadius: scale(15),
          alignItems: 'center',
        }}>
        <EvilIcons name="search" size={scale(30)} style={{margin: scale(10)}} />
      </View>
      <TextInput
        style={{
          width: '70%',
          height: '100%',
          paddingLeft: scale(5),
          fontSize: scale(18),
        }}
        placeholder="Search here "
      />
      <View
        style={{
          width: '15%',
          height: '100%',
          borderBottomRightRadius: scale(15),
          borderTopRightRadius: scale(15),
          alignItems: 'center',
        }}>
        <EvilIcons name="close" size={scale(25)} style={{margin: scale(12)}} />
      </View>
    </View>

    <Favourite />
    <Messages_List navigation={navigation} />
  </ScrollView>
);

const Favourite = ({item, index}) => (
  <View style={{marginLeft: scale(10)}}>
    <View style={{margin: scale(10)}}>
      <Text style={{fontSize: 30, fontWeight: '900', color: 'black'}}>
        Favourite
      </Text>
    </View>

    {/* <ScrollView horizontal = { true } showsHorizontalScrollIndicator = {false}>
          {ChatList.map((item, index) => (
            <View key={index} >
              <ImageBackground source={{ uri : item.image}} style={{height:80, width:80, marginHorizontal:scale(5), borderRadius:scale(20), overflow:'hidden', padding:scale(2) }}>

              </ImageBackground>
            </View>
          ))}
   </ScrollView> */}

    <FlatList
      data={ChatListData}
      renderItem={({item}) => (
        <View style={{alignContent: 'center'}}>
          {!!item.is_fav && (
            <>
              <Image
                source={{uri: item.image}}
                style={{
                  height: scale(80),
                  width: scale(80),
                  overflow: 'hidden',
                  alignItems: 'flex-start',
                  marginHorizontal: scale(5),
                  borderRadius: scale(20),
                  overflow: 'hidden',
                  padding: scale(2),
                }}
              />
              {!!item.is_active_now && (
                <View
                  style={{
                    marginTop: scale(-15),
                    marginLeft: scale(70),
                    backgroundColor: '#0BDA51',
                    width: scale(18),
                    height: scale(18),
                    borderRadius: 20,
                    alignItems: 'center',
                    borderColor: 'white',
                    borderWidth: scale(2),
                  }}
                />
              )}
            </>
          )}
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

const Messages_List = ({item, index, navigation}) => (
  <View style={{marginLeft: scale(10)}}>
    <View style={{margin: scale(10)}}>
      <Text style={{fontSize: 30, fontWeight: '900', color: 'black'}}>
        Messages
      </Text>
    </View>
    {ChatListData.map((item, index) => (
      <Pressable
        key={index}
        onPress={() => navigation.navigate('IndividualChatPage')}>
        <View
          key={index}
          style={{
            width: scale(325),
            height: scale(90),
            backgroundColor: 'white',
            borderRadius: scale(10),

            flexDirection: 'row',
            paddingVertical: scale(10),
            marginVertical: scale(8),
            alignItems: 'center',
            elevation: 8,
          }}>
          <View
            style={{
              width: scale(70),
              height: scale(70),
              margin: scale(10),
              borderRadius: scale(10),
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              backgroundColor: 'trasparent',
              zIndex: 0,
            }}>
            <ImageBackground
              source={{uri: item.image}}
              style={{
                width: scale(70),
                height: scale(70),

                borderRadius: scale(30),
                zIndex: 0,
              }}>
              {!!item.is_active_now && (
                <View
                  style={{
                    backgroundColor: '#0BDA51',
                    width: scale(12),
                    height: scale(12),
                    borderRadius: 10,
                    margin: scale(2),
                    alignItems: 'center',
                    borderColor: 'white',
                    borderWidth: scale(2),
                    zIndex: 1,
                  }}
                />
              )}
            </ImageBackground>
          </View>
          <View
            key={index}
            style={{
              backgroundColor: 'transparent',
              width: scale(140),
              height: scale(70),
              backgroundColor: 'transparent',
              alignItems: 'flex-start',
              margin: scale(5),
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: 'black',
                marginBottom: scale(10),
              }}>
              {item.user}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '300',
              }}>
              {item.message}
            </Text>
          </View>
          <View
            style={{
              width: scale(70),
              height: scale(70),
              backgroundColor: 'transparent',
              margin: scale(5),
              alignItems: 'center',
            }}>
            {!!item.unseen_messages && (
              <View
                style={{
                  backgroundColor: '#00A36C',
                  width: scale(25),
                  height: scale(25),
                  borderRadius: scale(5),
                  elevation: 5,
                  margin: scale(30),
                  overflow: 'hidden',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
                    fontWeight: '600',
                  }}>
                  {item.unseen_messages}
                </Text>
              </View>
            )}
          </View>
        </View>
      </Pressable>
    ))}
  </View>
);
export default ChatList_page;
