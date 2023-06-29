export type ChatType = {
    id: string;
    user: {
      image: string
      name: string
    },
    lastMessage: {
      content: string,
      createdAt: string
    }
}