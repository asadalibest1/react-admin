import React, { useContext, useState, useEffect } from "react"
import { auth, firestore } from "../firebase"

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
        // firestore
        //   .collection("users").doc(user.uid)
        //   .get().then((doc) => {

        //     setCurrentUserData(doc.data())

        //   })
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
