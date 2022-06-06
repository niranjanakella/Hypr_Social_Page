import {View, Text} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

//Screens
import ChatScreen from '../../../screens/HomeScreen/ChatScreen/ChatScreen';
import CallsScreen from '../../../screens/HomeScreen/ChatScreen/CallsScreen';
import ChatSettingsScreen from '../../../screens/HomeScreen/ChatScreen/ChatSettingsScreen';

//Icon Packs
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';

//Navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTabs = createBottomTabNavigator();

const ChatScreen_BottomTabs = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: Platform.OS === 'android' ? scale(45) : scale(71),
          paddingTop: scale(5),
        },
        headerShown: false,
      }}
      initialRouteName="ChatScreen">
      <BottomTabs.Screen
        name="CallsScreen"
        component={CallsScreen}
        options={{
          tabBarLabel: '',

          tabBarIcon: ({focused, color}) =>
            focused ? (
              <MaskedView
                style={{
                  flexDirection: 'row',
                  marginTop: scale(3),
                  marginLeft: scale(5),
                }}
                maskElement={
                  <Ionicons name="call" color={color} size={scale(25)} />
                }>
                <LinearGradient
                  colors={['#E600FF', '#4801FF', '#4801FF']}
                  start={{x: 0.0, y: 1.0}}
                  end={{x: 1.0, y: 1.0}}
                  style={{
                    height: scale(30),
                    width: scale(30),
                    alignItems: 'center',
                    justifyContent: 'center',
                    // borderRadius: scale(10),
                    // marginRight: scale(5),
                  }}
                  useAngle={true}
                  angle={145}
                  angleCenter={{x: 0.5, y: 0.5}}
                />
              </MaskedView>
            ) : (
              <Ionicons name="call" color={color} size={scale(25)} />
            ),
          tabBarActiveTintColor: '#FF6600',
          tabBarInactiveTintColor: 'grey',
        }}
      />
      <BottomTabs.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          tabBarLabel: '',

          tabBarIcon: ({focused, color}) =>
            focused ? (
              <MaskedView
                style={{
                  flexDirection: 'row',
                  marginTop: scale(5),
                  marginLeft: scale(5),
                }}
                maskElement={
                  <Entypo name="chat" color={color} size={scale(25)} />
                }>
                <LinearGradient
                  colors={['#E600FF', '#4801FF', '#4801FF']}
                  start={{x: 0.0, y: 1.0}}
                  end={{x: 1.0, y: 1.0}}
                  style={{
                    height: scale(30),
                    width: scale(30),
                    alignItems: 'center',
                    justifyContent: 'center',
                    // borderRadius: scale(10),
                    // marginRight: scale(5),
                  }}
                  useAngle={true}
                  angle={145}
                  angleCenter={{x: 0.5, y: 0.5}}
                />
              </MaskedView>
            ) : (
              <Entypo name="chat" color={color} size={scale(25)} />
            ),
          tabBarActiveTintColor: '#FF6600',
          tabBarInactiveTintColor: 'grey',
        }}
      />
      <BottomTabs.Screen
        name="ChatSettingsScreen"
        component={ChatSettingsScreen}
        options={{
          tabBarLabel: '',

          tabBarIcon: ({focused, color}) =>
            focused ? (
              <MaskedView
                style={{flexDirection: 'row', marginBottom: scale(2)}}
                maskElement={
                  <Ionicons
                    name="settings-sharp"
                    color={color}
                    size={scale(25)}
                  />
                }>
                <LinearGradient
                  colors={['#E600FF', '#4801FF', '#4801FF']}
                  start={{x: 0.0, y: 1.0}}
                  end={{x: 1.0, y: 1.0}}
                  style={{
                    height: scale(25),
                    width: scale(25),
                    alignItems: 'center',
                    justifyContent: 'center',
                    // borderRadius: scale(10),
                    // marginRight: scale(5),
                  }}
                  useAngle={true}
                  angle={145}
                  angleCenter={{x: 0.5, y: 0.5}}
                />
              </MaskedView>
            ) : (
              <Ionicons name="settings-sharp" color={color} size={scale(25)} />
            ),
          tabBarActiveTintColor: '#FF6600',
          tabBarInactiveTintColor: 'grey',
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default ChatScreen_BottomTabs;
