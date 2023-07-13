import { View, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import ContactListItem from '../ContactListItem'
import { API, graphqlOperation} from 'aws-amplify'
import  {listUsers} from '../../graphql/queries'

const ContactsScreen = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
        API.graphql(graphqlOperation(listUsers)).then((results) => {
          const usersData = results.data?.listUsers?.items
          setUsers(usersData)
        } )
  }
  , [])
  return (
    <View>
          <FlatList data={users} renderItem={({ item }) => <ContactListItem user={item} />} style={{backgroundColor: '#fafafa'}}/>
    </View>
  )
}

export default ContactsScreen