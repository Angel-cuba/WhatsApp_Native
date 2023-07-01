import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const NotScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>NotScreen</Text>
      <Image source={{
        uri: 'https://res.cloudinary.com/dqaerysgb/image/upload/v1648218398/istockphoto-1132926013-612x612_t1xwec.jpg'
      }}
        style={styles.image}
        resizeMode='contain'
      />
    </View>
  )
}

export default NotScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'gray'
  },
  image: {
    width: '80%',
    aspectRatio: 2/1
  }
})