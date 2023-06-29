import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import React from 'react';
import { data } from '../../../assets/data/chats';
import ChatListItem from '../ChatListItem';

const ChatScreen = () => {
  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={({ item }) => <ChatListItem chat={item} />} />
    </SafeAreaView>
  );
};

export default ChatScreen;
