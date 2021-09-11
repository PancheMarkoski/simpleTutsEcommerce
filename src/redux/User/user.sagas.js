import { put, call, takeLatest, all } from 'redux-saga/effects'
import userTypes from "./user.types"
import { auth, handleUserProfile, GoogleProvider, getCurrentUser } from '../../firebase/utils'
import { signInSuccess, signOutSuccess, resetPasswordSuccess, resetPasswordError } from './user.action'
import { handleResetPasswordAPI } from './user.helpers'

export function* getSnapshotFromUserAuth(user, additionalData = {}) {
  try {
    const userRef = yield call(handleUserProfile, { user: user, additionalData: additionalData });
    const snapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: snapshot.id,
        ...snapshot.data()
      })
    );

  } catch (err) {
    // console.log(err);
  }
}

export function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);

  } catch (err) {
    // console.log(err);
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* isUserAuthenticated() {
  const userAuth = yield getCurrentUser()
  if (!userAuth) return;
  yield getSnapshotFromUserAuth(userAuth)
}

export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOutUser() {
  yield auth.signOut()
  yield put(
    signOutSuccess()
  )
}

export function* onSignOutUserStart() {
  yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser)
}

export function* signUpUser({ payload: { email, password, firstName, lastName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password)
    const additionalData = { firstName, lastName }
    yield getSnapshotFromUserAuth(user, additionalData)

  } catch (error) {
    // console.log(error)              
  }
}

export function* onSignUpUserStart() {
  yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUser)
}

export function* resetPassword({ payload }) {
  try {
    yield call(handleResetPasswordAPI, payload);
    yield put(
      resetPasswordSuccess()
    );

  } catch (err) {
    yield put(
      resetPasswordError(err)
    )
  }
}

export function* onResetPasswordStart() {
  yield takeLatest(userTypes.RESET_PASSWORD_START, resetPassword);
}

export function* signInGoogle() {
  const { user } = yield auth.signInWithPopup(GoogleProvider)
  const userName = user.displayName.split(" ");
  const firstName = userName[0]
  const lastName = userName[1]
  const additionalData = { firstName, lastName };
  console.log(additionalData)
  yield getSnapshotFromUserAuth(user, additionalData)
}

export function* onSignInGoogleStart() {
  yield takeLatest(userTypes.SIGN_IN_GOOGLE_START, signInGoogle)
}

export default function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutUserStart),
    call(onSignUpUserStart),
    call(onResetPasswordStart),
    call(onSignInGoogleStart)
  ])
}