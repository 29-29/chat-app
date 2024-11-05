import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
import { boot } from 'quasar/wrappers';
// import { VueFire, VueFireAuth } from 'vuefire';
// import { computed, onUnmounted, ref } from 'vue';
// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// const firebaseApp = initializeApp({
//   apiKey: 'AIzaSyCT4tQBRSL-dN_5DbEoIn-fwL3Y5NSZEsc',
//   authDomain: 'ahmad-chat-app-f1122.firebaseapp.com',
//   projectId: 'ahmad-chat-app-f1122',
//   storageBucket: 'ahmad-chat-app-f1122.firebasestorage.app',
//   messagingSenderId: '389289109657',
//   appId: '1:389289109657:web:108810f32e48bc83b63008',
//   measurementId: 'G-WCLYN8BQ3J',
// });

// export const db = getFirestore(firebaseApp);
// export const auth = getAuth(firebaseApp);

// export function useAuth() {
//   const user = ref(null);
//   const unsubscribe = auth.onAuthStateChanged((_user) => (user.value = _user));
//   onUnmounted(unsubscribe);
//   const isLogin = computed(() => user.value !== null);

//   const signIn = async () => {
//     const googleProvider = new GoogleAuthProvider();
//     await signInWithPopup(auth, googleProvider);
//   };

//   const signOut = () => auth?.signOut();

//   return { user, isLogin, signIn, signOut };
// }

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async () => {
  initializeApp({
    apiKey: 'AIzaSyCT4tQBRSL-dN_5DbEoIn-fwL3Y5NSZEsc',
    authDomain: 'ahmad-chat-app-f1122.firebaseapp.com',
    projectId: 'ahmad-chat-app-f1122',
    storageBucket: 'ahmad-chat-app-f1122.firebasestorage.app',
    messagingSenderId: '389289109657',
    appId: '1:389289109657:web:108810f32e48bc83b63008',
    measurementId: 'G-WCLYN8BQ3J',
  });
});
