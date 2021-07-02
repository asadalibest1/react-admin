import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAjxD8Vzqt1OKVvT-VkGMXWXdnvG0u-maQ",
  authDomain: "resmentem.firebaseapp.com",
  projectId: "resmentem",
  storageBucket: "resmentem.appspot.com",
  messagingSenderId: "620109555242",
  appId: "1:620109555242:web:28ea927873bf8cacf10553"
})




// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// })

export const auth = app.auth()
export default app
