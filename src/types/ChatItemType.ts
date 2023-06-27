export type ChatType = {
    id: string;
    user: {
      image: string
      name: string
    },
    lastMessage: {
      text: string,
      createdAt: string
    }
}