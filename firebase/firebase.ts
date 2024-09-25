import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const fs = require('fs');
const yaml = require('js-yaml');
const dotenv = require('dotenv');

// Function to load YAML and set environment variables
function loadSecrets() {
try {
     // Read the secret.yml file
    const secrets = yaml.load(fs.readFileSync('secret.yml', 'utf8'));
    
     // Set the API key as an environment variable
    process.env.API_KEY = secrets.API_KEY;

    console.log('Secrets loaded and API key set to environment variables');
} catch (error) {
    console.error('Error loading secrets:', error);
}
}

// Call the function to load the secrets
loadSecrets();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: "G-E4DB71J8L1"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const storage = getStorage(app);

// export
export { app, firestore, storage };