// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCj6nW24ZFGouLG10HuiKscWK6M7OO0cJI',
	authDomain: 'react-netflix-clone-df74f.firebaseapp.com',
	projectId: 'react-netflix-clone-df74f',
	storageBucket: 'react-netflix-clone-df74f.appspot.com',
	messagingSenderId: '309629179128',
	appId: '1:309629179128:web:d3b8786e334f1a5c4c170d',
	measurementId: 'G-CX3L5E78N7',
};

// Firebase Initialization
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
