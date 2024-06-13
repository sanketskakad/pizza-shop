import { defineStore } from 'pinia';
import { ref } from 'vue';
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import { useAlert } from '@/store/useAlert';
import { useRouter } from 'vue-router';

export const useUser = defineStore('User', () => {
  const auth = getAuth();
  const isLogin = ref(false);
  const userCredential = ref<null | UserCredential>(null);
  const alertState = useAlert();
  const providerGoogle = new GoogleAuthProvider();
  const router = useRouter();
  const login = async (username: string, password: string) => {
    try {
      userCredential.value = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
      isLogin.value = true;
      router.push('/');
    } catch (e) {
      console.log(e);
    }
    return userCredential;
  };

  const signUp = async (username: string, password: string) => {
    try {
      userCredential.value = await createUserWithEmailAndPassword(
        auth,
        username,
        password
      );
      isLogin.value = true;
      router.push('/');
    } catch (e) {
      console.log(e);
      alertState.showAlert(e.message, 'Danger');
    }
    return userCredential;
  };

  const signInUsingGoogle = () => {
    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((_) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      // const uid = user.uid;
      // ...
      router.push('/');
    } else {
      router.push('/login');
    }
  });

  const logout = () => {
    signOut(auth);
  };
  return { signUp, login, isLogin, logout, userCredential, signInUsingGoogle };
});
