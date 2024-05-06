

import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDVnn7jaW3iPVSpyc2MRErXlEldpu01u0M",
    authDomain: "codecrushmpsb.firebaseapp.com",
    projectId: "codecrushmpsb",
    storageBucket: "codecrushmpsb.appspot.com",
    messagingSenderId: "754518363122",
    appId: "1:754518363122:web:7650a05e9cbd98c5f8f96b",
    measurementId: "G-JRLDHP1PXH"
  };


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);

