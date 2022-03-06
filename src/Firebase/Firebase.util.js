import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCB0fwIG8dFGmouGV7hlJ_2fHgQt36OTT8',
  authDomain: 'fake-shop-92bbc.firebaseapp.com',
  projectId: 'fake-shop-92bbc',
  storageBucket: 'fake-shop-92bbc.appspot.com',
  messagingSenderId: '941113140781',
  appId: '1:941113140781:web:20563ab8a91ce0e5c0faa4',
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
