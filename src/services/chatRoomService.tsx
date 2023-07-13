import { API, Auth, graphqlOperation } from 'aws-amplify';

type chatRoom = {
  data: {
    getUser: {
      ChatRooms: {
        items: ChatRoomItem[];
      };
    };
  };
};
type ChatRoomItem = {
  chatRoom: {
    users: {
      items: {
        user: {
          id: string;
          name: string;
          picture: string;
          status: string;
        };
      }[];
    };
  };
};
export const ChatRoomService = async (userId) => {
  const response = (await API.graphql(
    graphqlOperation(listChatRooms, {
      id: userId,
    })
  )) as chatRoom;
  const chatRooms = response.data?.getUser?.ChatRooms?.items;
  const userInChatRoom = chatRooms.find((chatRoomItem) => {
    return chatRoomItem.chatRoom.users.items.some((userItem) => userItem.user.id === userId);
  });
  return userInChatRoom;
};

export const listChatRooms = /* GraphQl */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      ChatRooms {
        items {
          chatRoom {
            id
            users {
              items {
                user {
                  id
                  }
               }
            }
              }
            }
          }
      }
    }`;
