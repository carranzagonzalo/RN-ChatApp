import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBUZ4XDmcosyhLQgwGNm7_9SlkqNTaxi8Y',
  authDomain: 'chat-app-a3608.firebaseapp.com',
  databaseURL: 'https://chat-app-a3608.firebaseio.com',
  projectId: 'chat-app-a3608',
  storageBucket: 'chat-app-a3608.appspot.com',
  messagingSenderId: '449010011332',
  appId: '1:449010011332:web:8e60568931f751e79f8d91',
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
