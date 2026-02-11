// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCS-WYZlDwSYqIokpKHaJJqS1JzYZumuA8',
  authDomain: 'movies-rating-website.firebaseapp.com',
  projectId: 'movies-rating-website',
  storageBucket: 'movies-rating-website.firebasestorage.app',
  messagingSenderId: '778536536570',
  appId: '1:778536536570:web:938052bd3a3ad165debc43',
  measurementId: 'G-TVBPCPHPVN',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)

export { analytics, app, auth }
