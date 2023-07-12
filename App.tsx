import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigator from './src/navigation';
import { API, Amplify, Auth, graphqlOperation } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import { useEffect } from 'react';
import { getUser } from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});

type userData = {
  id: string;
  name: string;
  image: string;
  status: string;
}
type dataProps = {
  data: {
    getUser: userData
  }
}

function App() {
  useEffect(() => {
    const user = async () => {
        const user = await Auth.currentAuthenticatedUser({
          bypassCache: true,
        });
    const userData  = await API.graphql(graphqlOperation(getUser, {
      id: user.attributes.sub
    })) as dataProps
    if(userData.data.getUser) {
      console.log("User is already registered in database");
      return;
    }
    const newUser = {
      id: user.attributes.sub,
      name: user.email,
      image: 'https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png',
      status: 'Hey, I am using WhatsApp',
    }
    await API.graphql(graphqlOperation(createUser, {input: newUser}))
    }
    user();
  }, [])
  
  return (
    <View style={styles.container}>
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
  },
});

export default withAuthenticator(App);
