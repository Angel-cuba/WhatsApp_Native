import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const ChatListItem = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://res.cloudinary.com/dqaerysgb/image/upload/v1687820061/samples/people/she_b84e5i.jpg'}} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>Girls</Text>
          <Text style={styles.subtitle}>4:30</Text>
        </View>
        <Text numberOfLines={2} style={styles.subtitle}>Hello dude!</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flexDirection: 'row',
    marginHorizontal: 14,
    marginVertical: 5,
    height: 70
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#7171714E'
  },
  row:{
    flexDirection: 'row'
  },
  name: {
    flex: 1,
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#717171'
  }
})

export default ChatListItem