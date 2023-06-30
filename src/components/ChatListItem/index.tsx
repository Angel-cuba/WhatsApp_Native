import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChatType } from '../../types/ChatItemType';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

type Props = {
  chat: ChatType;
};
type navigationType = {
  navigate: (arg0: string) => void;
};
const ChatListItem = ({ chat }: Props) => {
  const navigation: navigationType = useNavigation();
  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate('Chat')}>
      <Image source={{ uri: chat.user.image }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            {chat.user.name}
          </Text>
          <Text style={styles.subtitle}>{dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text>
        </View>
        <Text numberOfLines={2} style={styles.subtitle}>
          {chat.lastMessage.content}
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
