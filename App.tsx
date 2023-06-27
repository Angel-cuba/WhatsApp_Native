import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListItem from './src/components/ChatListItem';
import { ChatType } from './src/types/ChatItemType';

const chat: ChatType = {
  id: '1',
  user: {
    image: 'https://res.cloudinary.com/dqaerysgb/image/upload/v1687820061/samples/people/she_b84e5i.jpg',
    name: 'Ilda'
  },
  lastMessage: {
    text: 'Hello there',
    createdAt: '07:30'
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <ChatListItem chat={chat}/>
      <ChatListItem chat={chat}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
