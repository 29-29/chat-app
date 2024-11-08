import { Timestamp } from 'firebase/firestore';

export interface Chatroom {
  code: string;
  name: string;
  users: string[];
  latestMessageId: string;
}

export interface Message {
  author: string;
  message: string;
  timestamp: Timestamp;
  latest_message: string;
}

export interface User {
  id: string;
  displayName: string;
  photoURL: string;
  rooms: string[];
}
