import { View, Button, StyleSheet } from 'react-native'
import React from 'react'
import { Auth } from 'aws-amplify'

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Button onPress={() => Auth.signOut()} title='Sign out'/>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})