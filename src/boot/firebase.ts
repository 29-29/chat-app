import { FirebaseApp, initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
import { boot } from 'quasar/wrappers';
//// import admin from 'firebase-admin';

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
//// export const serviceAccount = require(`../../${process.env.FIREBASE_ADMIN_SDK}`);

//// admin.initializeApp({
////   credential: admin.credential.cert(serviceAccount),
//// });

export default boot(async () => {});

export const db = getFirestore(firebaseApp);
export const chatroomsCol = collection(db, 'chatrooms');
export const usersCol = collection(db, 'users');
export const messagesCol = (id: string) => {
  return collection(db, `chatrooms/${id}/messages`);
};
