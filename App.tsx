import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ChatScreen from './src/components/Screens/ChatScreen';
import Chat from './src/components/Screens/Chat';


export default function App() {
  return (
    <View style={styles.container}>
      <Chat />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingVertical: 30
  },
});
