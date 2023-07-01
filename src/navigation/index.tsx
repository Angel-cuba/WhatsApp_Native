import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ChatsScreen from '../components/Screens/ChatsScreen'
import Chat from '../components/Screens/Chat'
import TabNavigator from './TabNavigator'
import ContactsScreen from '../components/Screens/ContactsScreen'

const Stack = createNativeStackNavigator()
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabNavigator} options={{headerShown: false}}/>
        <Stack.Screen name="ChatsScreen" component={ChatsScreen} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Contacts" component={ContactsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator