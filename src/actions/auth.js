import Swal from 'sweetalert2';
import { firebase, googleAuthProvider } from '../firebase/fconfig';
import { types } from '../type/types';
import { notesLogout } from './notes';

export const startLoginEmailPassword = (email, password) => {
  return async (dispatch) => {
    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      dispatch(login(user.uid, user.displayName));
    } catch (error) {
      console.error(error);
      Swal.fire('Login error', error.message, 'error');
    }
  };
};

export const startRegisterEmailPassword = (email, password, name) => {
  return async (dispatch) => {
    const userCred = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    const { uid } = userCred.user;
    console.log(userCred);

    await userCred.user.updateProfile({ displayName: name });
    dispatch(login(uid, name));
  };
};

export const startGoogleLogin = () => {
  return async (dispatch) => {
    const auth = await firebase.auth().signInWithPopup(googleAuthProvider);
    const { uid, displayName } = auth.user;
    dispatch(login(uid, displayName));
  };
};

export const login = (uid, displayName) => ({
  type: types.authLogin,
  payload: {
    uid,
    displayName,
  },
});

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
    dispatch(notesLogout());
  };
};

export const logout = () => {
  return {
    type: types.authLogout,
  };
};
