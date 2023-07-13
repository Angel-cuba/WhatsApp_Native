import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChatType } from '../../types/ChatItemType';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Auth } from 'aws-amplify';
dayjs.extend(relativeTime);

type Props = {
  chat: ChatType;
};
type userDataProps = {
  id: string;
  name: string;
  image: string;
};
type chatProps = {
  chatRoom: {
    id: string;
    lastMessage: {
      id: string;
      content: string;
      createdAt: string;
    };
    users: {
      items: {
        user: userDataProps;
      }[];
    };
  };
};
type navigationType = {
  navigate: (arg0: string, arg1: { id: string; users: {} }) => void;
};
const ChatListItem = ({ chat }: { chat: chatProps }) => {
  const [user, setUser] = useState(null);
  const navigation: navigationType = useNavigation();

  useEffect(() => {
    const authUser = async () => {
      const user = await Auth.currentAuthenticatedUser();

      const userItem = chat.chatRoom.users.items.find(
        (item) => item.user.id !== user.attributes.sub
      );
      setUser(userItem?.user);
    };
    authUser();
  }, []);
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate('Chat', {
          id: chat.chatRoom.id,
          users: chat.chatRoom.users.items,
        })
      }
    >
      <Image source={{ uri: user?.image }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            {user?.name}
          </Text>
          <Text style={styles.subtitle}>
            {dayjs(chat.chatRoom.lastMessage?.createdAt).fromNow(true)}
          </Text>
        </View>
        <Text numberOfLines={2} style={styles.subtitle}>
          {chat.chatRoom.lastMessage?.content}
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
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#7171714E',
  },
  row: {
    flexDirection: 'row',
  },
  name: {
    flex: 1,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#717171',
  },
});

export default ChatListItem;
