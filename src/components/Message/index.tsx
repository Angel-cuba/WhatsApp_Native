import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { MessagesType } from '../../types/ChatItemType';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const Message = ({ message }: { message: MessagesType }) => {
  const ownerMessage = () => {
    return message.user.id === 'u1';
  };
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: ownerMessage() ? '#323232' :  '#fff',
          alignSelf: ownerMessage() ? 'flex-end' : 'flex-start',
        },
      ]}
    >
      <Text
        style={{
          color: ownerMessage() ? '#fff' : '#000',
        }}
      >
        {message.content}
      </Text>
      <Text style={[styles.time, {
            color: ownerMessage() ? '#E3E3E3': '#515151',
      }]}>{dayjs(message.createdAt).fromNow()}</Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 8,
    maxWidth: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 1,
    shadowOpacity: 0.18,
    shadowRadius: 1.22,

  },
  time: {
    alignSelf: 'flex-end',
  },
});
