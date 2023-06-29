import {
  ImageBackground,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import { messages } from '../../../assets/data/messages';
import Message from '../Message';
import InputBox from '../InputBox';

const Chat = () => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
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
