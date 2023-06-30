import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { data } from '../../../assets/data/chats';
import ChatListItem from '../ChatListItem';

const ChatsScreen = () => {
  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={({ item }) => <ChatListItem chat={item} />} />
    </SafeAreaView>
  );
};

export default ChatsScreen;
