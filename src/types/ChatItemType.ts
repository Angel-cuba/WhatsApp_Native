export type ChatType = {
  id: string;
  user: {
    id: string;
    image: string;
    name: string;
  };
  lastMessage: {
    id: string;
    content: string;
    createdAt: string;
  };
};

export type MessagesType = {
  id: string;
  content: string;
  createdAt: string;
  user: {
    id: string;
    name: string;
  };
};
