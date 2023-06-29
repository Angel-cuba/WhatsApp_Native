import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { ChatType } from '../../types/ChatItemType';
import ChatListItem from '../ChatListItem';

const chat: ChatType = {
  id: '1',
  user: {
    image:
      'https://res.cloudinary.com/dqaerysgb/image/upload/v1687820061/samples/people/she_b84e5i.jpg',
    name: 'Ilda',
  },
  lastMessage: {
    content: 'Hello there',
    createdAt: '07:30',
  },
};
const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ChatScreen</Text>
      <ChatListItem chat={chat} />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
