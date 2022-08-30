import { initializeApp } from 'firebase/app'
import { getStorage, ref } from 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyC8HJ8vNZ4sGHoTKYEEOvvOloxdnrOfqvw',
    authDomain: 'kseniapopova-resume.firebaseapp.com',
    projectId: 'kseniapopova-resume',
    storageBucket: 'kseniapopova-resume.appspot.com',
    messagingSenderId: '615719605668',
    appId: '1:615719605668:web:5f9118561a070d55e61d31',
    measurementId: 'G-CTVJXNB4RL',
}

const app = initializeApp(firebaseConfig)

export const storage = getStorage(app)
