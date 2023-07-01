import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NotScreen from '../components/Screens/NotScreen';
import ChatsScreen from '../components/Screens/ChatsScreen';

const Tab = createBottomTabNavigator()
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Status" component={NotScreen} />
      <Tab.Screen name="Calls" component={NotScreen} />
      <Tab.Screen name="Camera" component={NotScreen} />
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Settings" component={NotScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator