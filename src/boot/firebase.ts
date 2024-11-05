import { boot } from 'quasar/wrappers';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { VueFire, VueFireAuth } from 'vuefire';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCT4tQBRSL-dN_5DbEoIn-fwL3Y5NSZEsc',
  authDomain: 'ahmad-chat-app-f1122.firebaseapp.com',
  projectId: 'ahmad-chat-app-f1122',
  storageBucket: 'ahmad-chat-app-f1122.firebasestorage.app',
  messagingSenderId: '389289109657',
  appId: '1:389289109657:web:108810f32e48bc83b63008',
  measurementId: 'G-WCLYN8BQ3J',
});

const db = getFirestore(firebaseApp);

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  app.use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()],
  });
});

export { firebaseApp, db };
