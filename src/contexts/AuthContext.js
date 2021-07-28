import React, { useContext, useState, useEffect } from "react"
import { app, auth, firestore } from "../firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUserData, setCurrentUserData] = useState('')
  const [currentUser, setCurrentUser] = useState('')
  const [loading, setLoading] = useState(true)

  const users = firestore.collection("/users");

  function addUsersId(id, email, password) {

    users.doc(id).set({
      email,
      password
    })
      .then(function (docRef) {
        console.log("Success: id created: ", docRef);
      })
      .catch(function (error) {
        console.error("Error: id created: ", error);
      });
  }

  function signInWithGoogle() {
    let googleProvider = new app.auth.GoogleAuthProvider();

    auth.signInWithPopup(googleProvider)
    .then(() => {
        console.log("Success: account login and saving...");
    }).catch((error) => {
        return console.log(error.message)
    })
 }
 
 if(currentUser.displayName !== null ){
  //  alert(currentUser.displayName)
 }

// function signInGoogle(id, dp, firstName, email){
  
//   let value = {
//     dp,
//     firstName,
//     email,
//     lastName: "none",
//     // phone: phoneRef.current.value,
//     // address: addressRef.current.value,
//     // createdOn: app.firestore.FieldValue.serverTimestamp(),
//     // lastLogin: app.firestore.FieldValue.serverTimestamp(),
//     // ip: ipv4,
// }

//   users.doc(id).update(value)
//   .then(res => {
//       console.log("Success: account updated:");
//   })
//   .catch(error => {
//       console.error("Error: account updat: ", error);
//   });
// }

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
      .then((res) => {
        addUsersId(
          res.user.uid,
          res.user.email,
          password
        )

      })
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(user => {

      if (user) {
        
        firestore
          .collection("users").doc(user.uid)
          .onSnapshot((doc) => {
            // console.log("Current data: ", doc.data());
            setCurrentUserData(doc.data())
          });
      }
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    currentUserData,
    login,
    signup,
    signInWithGoogle,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
