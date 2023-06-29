import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ChatType } from '../../types/ChatItemType';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

type Props = {
  chat: ChatType;
};
const ChatListItem = ({ chat }: Props) => {
  return (
    <View style={styles.container}>
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
    </View>
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
