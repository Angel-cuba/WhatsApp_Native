import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Entypo } from '@expo/vector-icons';
import NotScreen from '../components/Screens/NotScreen';
import ChatsScreen from '../components/Screens/ChatsScreen';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Chats' screenOptions={{
      tabBarStyle: {
        backgroundColor: '#fafafa',
      }
    }}>
      <Tab.Screen
        name="Status"
        component={NotScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-whatsapp" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Calls"
        component={NotScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="call-outline" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Camera"
        component={NotScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="camera-outline" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatsScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles" size={size} color={color} />
          ),
          headerRight: () => (
            <Entypo onPress={() => navigation.navigate('Contacts')} name="new-message" size={24} color="black" style={{
              marginRight: 20
            }}/>
          )
        })}
      />
      <Tab.Screen
        name="Settings"
        component={NotScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="settings-outline" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
