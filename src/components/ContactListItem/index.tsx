import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useNavigation } from '@react-navigation/native';
import { ContactListType } from '../../types/ChatItemType';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createChatRoom, createUserChatRoom } from '../../graphql/mutations';
import { ChatRoomService } from '../../services/chatRoomService';
dayjs.extend(relativeTime);

type Props = {
  user: ContactListType;
};
type navigationType = {
  navigate: (arg0: string, arg1: { id: string; name: string }) => void;
};
type chatRoomData = {
  id: string;
  users: [string];
  lastMessage: string;
  createdAt: string;
};
type chatRoomProps = {
  data: {
    createChatRoom: chatRoomData;
  };
};
type existingChatRoom = {
  id: string;
  existingChatRoom: (arg: string) => void;
}
const ContactListItem = ({ user }: Props) => {
  const navigation: navigationType = useNavigation();

  const onPress = async () => {
    const authUser= await Auth.currentAuthenticatedUser()
    // Check first if there is already a chat room with user
    const existingChatRoom = await ChatRoomService(user.id) as unknown as existingChatRoom;
    if(existingChatRoom) {
      navigation.navigate('Chat', {
        id: existingChatRoom.id,
        name: user.name,
      });
      return;
    }
    //Create a chat room
    const newChat = (await API.graphql(
      graphqlOperation(createChatRoom, { input: {} })
    )) as chatRoomProps;
    if (!newChat.data?.createChatRoom) {
      console.log('Failed to create a chat room');
    }
    const newChatRoom = newChat.data?.createChatRoom;
    //Add the clicked user to the Chatroom
    await API.graphql(
      graphqlOperation(createUserChatRoom, {
        input: { chatRoomId: newChatRoom.id, userId: user.id },
      })
    );

    // Add the auth user to the chat room
    await API.graphql(
      graphqlOperation(createUserChatRoom, {
        input: { chatRoomId: newChatRoom.id, userId: authUser.attributes.sub },
      })
    );

    // Navigate to the chat room that has been created
    navigation.navigate('Chat', { 
      id: newChatRoom.id,
      name: user.name,
    });
  };
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{ uri: user.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {user.name}
        </Text>
        <Text numberOfLines={2} style={styles.subtitle}>
          {user.status}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 14,
    marginVertical: 5,
    height: 70,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#c4c4c43e',
  },
  subtitle: {
    color: '#003804',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.4,
    elevation: 4,
  },
});

export default ContactListItem;
