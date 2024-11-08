import { Timestamp } from 'firebase/firestore';

export interface Chatroom {
  code: string;
  name: string;
  users: string[];
}

export interface Message {
  author: string;
  message: string;
  timestamp: Timestamp;
}

export interface User {
  id: string;
  displayName: string;
  photoURL: string;
  rooms: string[];
}
