import {
  ImageBackground,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { messages } from '../../../assets/data/messages';
import Message from '../Message';
import InputBox from '../InputBox';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getChatRoom } from '../../graphql/queries';

type Props = {
  id: string;
  users: {
    user: {
      id: string;
      name: string;
      image: string;
    };
  }[];
};

type chatRoomType = {
  data: {
    getChatRoom: {
      LastMessage: string;
      Messages: {
        items: {
          createdAt: string;
          id: string;
          image: string;
          message: string;
          chatroomID: string;
          userID: string;
        };
      };
    };
  };
};

const Chat = () => {
  const [user, setUser] = useState(null);
  const [chatRoom, setChatRoom] = useState(null);
  const route = useRoute();
  const { id, users } = route.params as Props;
  const navigation = useNavigation();

  useEffect(() => {
    const fetchChatRoom = async () => {
      const response = (await API.graphql(
        graphqlOperation(getChatRoom, {
          id: id,
        })
      )) as chatRoomType;
      setChatRoom(response.data?.getChatRoom);
    };
    fetchChatRoom();
  }, []);

  useEffect(() => {
    const authUser = async () => {
      const user = await Auth.currentAuthenticatedUser();

      const userItem = users.find((item) => item.user.id !== user.attributes.sub);
      setUser(userItem?.user);
    };
    authUser();
  }, [id, users]);
  navigation.setOptions({
    title: `${user?.name}`,
  });

  if (!chatRoom) {
    return <ActivityIndicator />;
  }
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
          data={chatRoom?.Messages.items}
          renderItem={({ item }) => <Message message={item} />}
          style={styles.list}
          inverted
        />
        <InputBox chatRoomId={id} />
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
