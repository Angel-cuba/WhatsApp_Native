import { View, Text, ImageBackground, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import React from 'react';
import { messages } from '../../../assets/data/messages';
import Message from '../Message';

const Chat = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={{
          uri: 'https://res.cloudinary.com/dqaerysgb/image/upload/v1628020659/samples/animals/three-dogs.jpg',
        }}
        style={styles.bg}
        blurRadius={2}
      >
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          style={styles.list}
          inverted
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  bg: {
    height: '100%',
  },
  list: {
    padding: 10,
  },
});
