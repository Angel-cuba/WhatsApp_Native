import {
  ImageBackground,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { messages } from '../../../assets/data/messages';
import Message from '../Message';
import InputBox from '../InputBox';

type Props = {
  id: string;
  name: string;
};

const Chat = () => {
  const route = useRoute();
  const { id, name } = route.params as Props;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [name]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 90}
      style={styles.bg}
    >
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
