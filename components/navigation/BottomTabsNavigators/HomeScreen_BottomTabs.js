import {
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

//Screens
import HomeScreen from '../../../screens/HomeScreen/HomeScreen';
import NotificationsScreen from '../../../screens/HomeScreen/NotificationsScreen';
import SearchScreen from '../../../screens/HomeScreen/SearchScreen';
import AddPostScreen from '../../../screens/HomeScreen/AddPostScreen';

//Navigation Stacks
import ProfileScreenNavigator from '../ProfileScreenNavigator';

// Icon Packs
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SocialsPageData from '../../../data/SocialsPageData';

const BottomTabs = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      style={{Top: -30, justifyContent: 'center', alignItems: 'center'}}
      onPress={onPress}>
      <View
        style={{
          height: 70,
          width: 70,
          borderRadius: 35,
          backgroundColor: '#e32f45',
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const HomeScreen_BottomTabs = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: Platform.OS === 'android' ? scale(45) : scale(71),
          paddingTop: scale(5),
        },
        headerShown: false,
      }}>
      <BottomTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            // <MaterialCommunityIcons
            //   name="home-variant"
            //   color={color}
            //   size={scale(30)}
            // />
            <Image
              source={
                focused
                  ? SocialsPageData.BottomNavigation.HomeScreenIcon.Active
                  : SocialsPageData.BottomNavigation.HomeScreenIcon.Inactive
              }
              style={{height: scale(28), width: scale(28)}}
            />
          ),
          tabBarActiveTintColor: '#FF6600',
          tabBarInactiveTintColor: 'grey',
        }}
      />

      <BottomTabs.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <MaskedView
                style={{flexDirection: 'row'}}
                maskElement={
                  <MaterialCommunityIcons
                    name="bell-outline"
                    color={color}
                    size={scale(30)}
                  />
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
              <MaterialCommunityIcons
                name="bell-outline"
                color={color}
                size={scale(30)}
              />
            ),
          tabBarActiveTintColor: '#FF6600',
          tabBarInactiveTintColor: '#A2A2A2',
        }}
      />

      <BottomTabs.Screen
        name="AddPostScreen"
        component={AddPostScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Image
              source={SocialsPageData.BottomNavigation.AddPostIcon}
              style={{
                height: scale(55),
                width: scale(55),
                marginTop: scale(-10),
              }}
            />
          ),
          // tabBarButton: (props) => {
          //   <CustomTabBarButton {...props} />;
          // },
          tabBarActiveTintColor: '#FF6600',
          tabBarInactiveTintColor: '#A2A2A2',
        }}
      />
      <BottomTabs.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <MaskedView
                style={{flexDirection: 'row'}}
                maskElement={
                  <Octicons
                    name="search"
                    size={scale(24)}
                    color={color}
                    style={{marginTop: scale(2), marginLeft: scale(2)}}
                  />
                }>
                <LinearGradient
                  colors={['#E600FF', '#4801FF', '#4801FF']}
                  start={{x: 0.0, y: 1.0}}
                  end={{x: 1.0, y: 1.0}}
                  style={{
                    height: scale(24),
                    width: scale(24),
                    // alignItems: 'center',
                    // justifyContent: 'center',
                    // borderRadius: scale(10),
                    // marginRight: scale(5),
                  }}
                  useAngle={true}
                  angle={145}
                  angleCenter={{x: 0.5, y: 0.5}}
                />
              </MaskedView>
            ) : (
              <Octicons
                name="search"
                size={scale(24)}
                color={color}
                style={{marginTop: scale(4)}}
              />
            ),
          tabBarActiveTintColor: '#FF6600',
          tabBarInactiveTintColor: '#A2A2A2',
        }}
      />

      <BottomTabs.Screen
        name="ProfileScreenNavigator"
        component={ProfileScreenNavigator}
        options={{
          tabBarLabel: '',

          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  overflow: 'hidden',
                  borderRadius: scale(50),
                  marginTop: scale(5),
                  height: scale(38),
                  width: scale(38),
                  justifyContent: 'center',
                  alignItems: 'center',
                  // borderColor: "#FF6600",
                }}>
                <LinearGradient
                  colors={['#E600FF', '#4801FF', '#4801FF']}
                  start={{x: 0.0, y: 1.0}}
                  end={{x: 1.0, y: 1.0}}
                  style={{
                    height: scale(38),
                    width: scale(38),
                    alignItems: 'center',
                    justifyContent: 'center',
                    // borderRadius: scale(10),
                    // marginRight: scale(5),
                  }}
                  useAngle={true}
                  angle={145}
                  angleCenter={{x: 0.5, y: 0.5}}>
                  <View
                    style={{
                      overflow: 'hidden',
                      borderRadius: scale(50),
                      height: scale(34),
                      width: scale(34),
                      justifyContent: 'center',
                      alignItems: 'center',
                      // borderColor: "#FF6600",
                    }}>
                    <Image
                      source={SocialsPageData.BottomNavigation.ProfileIcon}
                      style={{height: scale(36), width: scale(36)}}
                    />
                  </View>
                </LinearGradient>
              </View>
            ) : (
              <View
                style={{
                  overflow: 'hidden',
                  borderRadius: scale(50),
                  marginTop: scale(5),
                  height: scale(35),
                  width: scale(35),
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: '#FF6600',
                }}>
                <Image
                  source={SocialsPageData.BottomNavigation.ProfileIcon}
                  style={{height: scale(35), width: scale(35)}}
                />
              </View>
            ),
          // tabBarActiveTintColor: () => {setState({
          //   ...state,
          //   ProfilePressed: !state.ProfilePressed,
          // })},
          // tabBarInactiveTintColor: () => {setState({
          //   ...state,
          //   ProfilePressed: !state.ProfilePressed,
          // })},
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default HomeScreen_BottomTabs;
