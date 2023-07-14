import { StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createMessage } from '../../graphql/mutations';

const InputBox = ({chatRoomId}) => {
  const [message, setMessage] = useState('');
  const onSend = async () => {
    const authUser = await Auth.currentAuthenticatedUser() 
      await API.graphql(
        graphqlOperation(
          createMessage, {
            input: {
              content: message,
              userID: authUser.attributes.sub,
              chatroomID: chatRoomId
            }
          }
        )
      ) 
    setMessage('');
  };
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <AntDesign name="plus" size={24} color="royalblue" />
      <TextInput
        style={styles.input}
        value={message}
        placeholder="Type your message"
        onChangeText={setMessage}
      />
      <MaterialIcons style={styles.send} name="send" size={24} color="white" onPress={onSend} />
    </SafeAreaView>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
    fontSize: 16,
  },
  send: {
    backgroundColor: 'royalblue',
    borderRadius: 15,
    padding: 7,
    overflow: 'hidden',
  },
});
