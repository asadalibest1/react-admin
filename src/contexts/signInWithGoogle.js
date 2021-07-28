import { app, auth, firestore } from "../firebase"


export function signInWithGoogle() {
    let googleProvider = new app.auth.GoogleAuthProvider();
    
    auth.signInWithPopup(googleProvider)
        .then(() => {
            console.log("Success: account login and saving...");
        }).catch((error) => {
            return console.log(error.message)
        })

    signInGoogle(
        data.uid,
        data.photoURL,
        data.firstName,
        data.email,
    )
}


function signInGoogle(id, dp, firstName, email) {

    let value = {
        dp,
        firstName,
        email,
        lastName: "none",
        // phone: phoneRef.current.value,
        // address: addressRef.current.value,
        // createdOn: app.firestore.FieldValue.serverTimestamp(),
        // lastLogin: app.firestore.FieldValue.serverTimestamp(),
        // ip: ipv4,
    }

    users.doc(id).update(value)
        .then(res => {
            console.log("Success: account updated:");
        })
        .catch(error => {
            console.error("Error: account updat: ", error);
        });
}
