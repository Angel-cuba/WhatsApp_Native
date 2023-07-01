import { View, FlatList } from 'react-native'
import React from 'react'
import { data } from '../../../assets/data/chats'
import ChatListItem from '../ChatListItem'
import ContactListItem from '../ContactListItem'

const ContactsScreen = () => {
  return (
    <View>
          <FlatList data={data} renderItem={({ item }) => <ContactListItem user={item.user} />} style={{backgroundColor: '#fafafa'}}/>
    </View>
  )
}

export default ContactsScreen