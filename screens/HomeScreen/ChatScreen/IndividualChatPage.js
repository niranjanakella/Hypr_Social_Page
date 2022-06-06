import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {scale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const IndividualChatPage = ({navigation}) => {
  return (
    <SafeAreaView style={{height: '100%'}}>
      <View
        style={{
          width: '100%',
          height: scale(100),
          flexDirection: 'row',
          backgroundColor: 'white',
          elevation: 12,
        }}>
        <View
          style={{
            width: scale(30),
            height: '100%',
            backgroundColor: 'Transparent',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <Ionicons
              name="chevron-back"
              size={scale(30)}
              style={{color: 'black', marginVertical: scale(35)}}
              onPress={() => navigation.navigate('ChatScreen_BottomTabs')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: scale(80),
            height: '100%',
            backgroundColor: 'Transparent',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/images/profile_page/chatimage.jpg')}
            style={{
              width: scale(60),
              height: scale(60),
              borderRadius: scale(10),
              marginVertical: scale(20),
            }}
          />
        </View>
        <View
          style={{
            width: scale(130),
            height: '100%',
            backgroundColor: 'Transparent',
            alignItems: 'flex-start',
          }}>
          <Text
            style={{
              fontSize: scale(20),
              marginVertical: scale(20),
              fontWeight: 'bold',
              color: 'black',
            }}>
            Alex
          </Text>
          <View
            style={{
              width: scale(80),
              height: scale(30),
              backgroundColor: 'Transparent',
              marginVertical: scale(-10),
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: '#0BDA51',
                width: scale(10),
                height: scale(10),
                borderRadius: scale(5),
                alignSelf: 'flex-start',
                marginVertical: scale(10),
              }}
            />
            <Text
              style={{
                fontSize: scale(13),
                fontWeight: '400',
                margin: scale(5),
              }}>
              active
            </Text>
          </View>
        </View>
        <View
          style={{
            height: '100%',
            width: scale(100),
            backgroundColor: 'Transparent',
            alignItems: 'flex-start',
            flexDirection: 'row',
          }}>
          <TouchableOpacity>
            <Ionicons
              name="videocam-outline"
              size={scale(35)}
              style={{
                color: 'black',
                marginVertical: scale(35),
                marginHorizontal: scale(10),
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="information-circle-outline"
              size={scale(35)}
              style={{
                color: 'black',
                marginVertical: scale(34),
                marginHorizontal: scale(10),
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Input />
    </SafeAreaView>
  );
};

const Input = () => {
  return (
    <LinearGradient
      colors={['#E600FF', '#4801FF', '#4801FF']}
      style={{
        width: '100%',
        height: scale(60),
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 1,
        borderTopRightRadius: scale(15),
        borderTopLeftRadius: scale(15),
        flexDirection: 'row',
      }}
      useAngle={true}
      angle={120}
      angleCenter={{x: 0.7, y: 0.5}}>
      {/* <View style={{width:scale(50), height:'100%', backgroundColor:'Transparent', alignItems:'center'}}>
         <Entypo name='attachment' size={scale(20)} style={{color:'white', alignSelf:'center', marginVertical:scale(30), width:scale(20)}} />
      </View> */}

      <View
        style={{
          width: scale(260),
          height: scale(40),
          paddingLeft: scale(10),
          fontSize: scale(16),
          backgroundColor: 'white',
          borderRadius: scale(10),
          marginVertical: scale(10),
          flexDirection: 'row',
          marginHorizontal: scale(10),
        }}>
        <TouchableOpacity>
          <Entypo
            name="emoji-happy"
            size={25}
            style={{color: '#B2BEB5', marginVertical: scale(6)}}
          />
        </TouchableOpacity>
        <TextInput
          style={{
            width: scale(185),
            height: scale(40),
            paddingLeft: scale(10),
            fontSize: scale(16),
            backgroundColor: 'white',
            borderRadius: scale(10),
            marginHorizontal: scale(5),
            flexDirection: 'row',
          }}
          multiline
          placeholder="Type your message "
          autoCapitalize="sentences"
        />
        <TouchableOpacity>
          <Entypo
            name="attachment"
            size={scale(20)}
            style={{color: '#B2BEB5', marginVertical: scale(10)}}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Entypo
          name="mic"
          size={scale(25)}
          style={{
            color: 'white',
            marginVertical: scale(15),
            marginHorizontal: scale(3),
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather
          name="send"
          size={scale(25)}
          style={{
            color: 'white',
            marginVertical: scale(15),
            marginHorizontal: scale(3),
          }}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default IndividualChatPage;
