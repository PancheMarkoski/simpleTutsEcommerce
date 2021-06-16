import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { firebaseConfig } from './config'

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({
        prompt: 'select_account'
  });
// export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export const handleUserProfile = async (user, ...additionalData) => {
  if(!user) return;
  const {uid, displayName, email} = user
  
  const userRef = firestore.collection("users").doc(uid);
  if(displayName) {      
      userRef.set({
        firstName: displayName.split(" ")[0],
        lastName:  displayName.split(" ")[1],
        email: email,
        createdDate: new Date(), 
        ...additionalData
        
    })
    .then(() => {
        console.log("Document successfully written!");
        userRef.get().then((doc) => {
          if (doc.exists) {
              console.log("Document data:", doc.data());
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
  } else {
        userRef.set({
            email: email,
            createdDate: new Date(), 
            ...additionalData
            
        })
        .then(() => {
            console.log("Document successfully written!");
            userRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });      
  }
return userRef;
}

