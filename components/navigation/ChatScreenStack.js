import {View, Text} from 'react-native';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

//Screens
import IndividualChatPage from '../../screens/HomeScreen/ChatScreen/IndividualChatPage';
//Navigation Stack
import ChatScreen_BottomTabs from './BottomTabsNavigators/ChatScreen_BottomTabs';

const Tabs = createStackNavigator();

const ChatScreenStack = () => {
  return (
    <Tabs.Navigator
      initialRouteName="ChatScreen_BottomTabs"
      screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="ChatScreen_BottomTabs"
        component={ChatScreen_BottomTabs}
      />
      <Tabs.Screen name="IndividualChatPage" component={IndividualChatPage} />
    </Tabs.Navigator>
  );
};

export default ChatScreenStack;
