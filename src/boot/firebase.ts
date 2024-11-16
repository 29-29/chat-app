import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  collection,
  connectFirestoreEmulator,
  getFirestore,
} from 'firebase/firestore';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { boot } from 'quasar/wrappers';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export const firebaseApp: FirebaseApp = initializeApp({
  apiKey: 'AIzaSyCT4tQBRSL-dN_5DbEoIn-fwL3Y5NSZEsc',
  authDomain: 'ahmad-chat-app-f1122.firebaseapp.com',
  projectId: 'ahmad-chat-app-f1122',
  storageBucket: 'ahmad-chat-app-f1122.firebasestorage.app',
  messagingSenderId: '389289109657',
  appId: '1:389289109657:web:108810f32e48bc83b63008',
  measurementId: 'G-WCLYN8BQ3J',
});

export default boot(async () => {});

const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const chatroomsCol = collection(db, 'chatrooms');
export const usersCol = collection(db, 'users');
export const messagesCol = (id: string) => {
  return collection(db, `chatrooms/${id}/messages`);
};

const emulatorPorts = {
  auth: 'http://localhost:9099',
  firestore: {
    host: 'localhost',
    port: 8080,
  },
};

const useEmulator = process.env.NODE_ENV == 'development';
if (useEmulator) {
  connectAuthEmulator(auth, emulatorPorts.auth);
  connectFirestoreEmulator(
    db,
    emulatorPorts.firestore.host,
    emulatorPorts.firestore.port
  );
}
