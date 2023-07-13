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
                  image
                  name
                  }
               }
            }
         LastMessage {
            id
            content
            createdAt
            }
              }
            }
          }
      }
    }`;
