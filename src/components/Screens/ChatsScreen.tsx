import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { data } from '../../../assets/data/chats';
import ChatListItem from '../ChatListItem';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { listChatRooms } from '../../queries/CustomQueries';

type dataProps ={
  data: {
    getUser: {
      ChatRooms: {
        items: string[]
      }
    }
  } 
}
const ChatsScreen = () => {
  const [chatRoom, setChatRooms] = useState([])
  useEffect(() => {
    const fetchChatsRooms = async () => {
      const authUser = await Auth.currentAuthenticatedUser()
      const response = await API.graphql(
        graphqlOperation(listChatRooms, {
          id: authUser.attributes.sub
        })
      ) as dataProps
      setChatRooms(response.data.getUser.ChatRooms.items)
    }
    fetchChatsRooms()
  }, [])
  return (
    <SafeAreaView>
      <FlatList data={chatRoom} renderItem={({ item }) => <ChatListItem chat={item} />} style={{backgroundColor: '#fafafa'}}/>
    </SafeAreaView>
  );
};

export default ChatsScreen;
