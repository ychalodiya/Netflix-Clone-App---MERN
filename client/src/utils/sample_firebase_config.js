// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'Your firebase credentials',
	authDomain: 'Your firebase credentials',
	projectId: 'Your firebase credentials',
	storageBucket: 'Your firebase credentials',
	messagingSenderId: 'Your firebase credentials',
	appId: 'Your firebase credentials',
	measurementId: 'Your firebase credentials',
};

// Firebase Initialization
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
