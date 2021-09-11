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

export const handleUserProfile = async ({ user, additionalData }) => {
  if (!user) return;
  const { uid, displayName, email } = user
  const userRole = ['user'];
  const userRef = firestore.collection("users").doc(uid);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    if (!additionalData) {
      userRef.set({
        firstName: displayName.split(" ")[0],
        lastName: displayName.split(" ")[1],
        email: email,
        createdDate: new Date(),
        userRole,
        ...additionalData

      }, { merge: true })
    } else {
      userRef.set({
        email: email,
        createdDate: new Date(),
        userRole,
        ...additionalData
      }, { merge: true })
    }
  }
  return userRef;
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth)
    }, reject);
  })
}