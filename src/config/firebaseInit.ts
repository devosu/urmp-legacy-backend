// ./src/lib/firebaseInit.ts
//
// Firebase initialization module.

// Firebase type imports.
import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';

// Firebase essential imports.
import { config } from 'dotenv-safe';
import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Load environment variables.
config();

// Firebase configuration.
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Firestore configuration, export for testing.
 export const firestoreDatabaseID 
  = process.env.FIRESTORE_DATABASE_ID || 'template-ts-cucumber-setup-firestore';

// Modularized Firebase initialization.
export function initFirebaseApp(): { fbApp: FirebaseApp, fbAuth: Auth, fbStore: Firestore} {
  const fbApp = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
  const fbAuth = getAuth(fbApp);
  const fbStore = getFirestore(fbApp, firestoreDatabaseID);

  return { fbApp, fbAuth, fbStore };
}

// Backwards compatible exports, allowing for:
// import { fbApp, fbAuth, fbStore } from '@config/firebaseInit';
export const { fbApp, fbAuth, fbStore } = initFirebaseApp();
