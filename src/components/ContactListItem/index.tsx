import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useNavigation } from '@react-navigation/native';
import { ContactListType } from '../../types/ChatItemType';
dayjs.extend(relativeTime);

type Props = {
  user: ContactListType;
};
type navigationType = {
  navigate: (arg0: string, arg1: { id: string; name: string }) => void;
};
const ContactListItem = ({ user }: Props) => {
  const navigation: navigationType = useNavigation();
  return (
    <Pressable style={styles.container} onPress={() => console.warn('hello')}>
      <Image source={{ uri: user.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {user.name}
        </Text>
        <Text numberOfLines={2} style={styles.subtitle}>
          {user.status}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 14,
    marginVertical: 5,
    height: 70,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.4,
    elevation: 4,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#c4c4c43e',
  },
  subtitle: {
    color: '#003804',
  },
});

export default ContactListItem;
