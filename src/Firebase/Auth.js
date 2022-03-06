import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { useState, useEffect } from 'react';
import firebaseApp from './Firebase.util';
import react from 'react';

export const AuthContext = react.createContext(null);

function Auth() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const auth = getAuth(firebaseApp);
  let authStateChange = async (handleChange) => {
    await onAuthStateChanged(auth, handleChange);
  };
  useEffect(() => {
    return () => {
      authStateChange = null;
    };
  });
  async function Signup(userName, email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      async function handleAuthChange(user) {
        if (user) {
          await updateProfile(user, {
            displayName: userName,
          });
          setName(user.displayName);
          setEmail(user.email);
        }
      }
      authStateChange(handleAuthChange);
    } catch (error) {
      console.log(error);
    }
  }
  async function Signin(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      function handleAuthChange(user) {
        setName(user.displayName);
        setEmail(user.email);
        console.log(user.displayName);
      }
      authStateChange(handleAuthChange);
    } catch (error) {
      console.log(error);
    }
  }
  async function SigninWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      function handleAuthChange(user) {
        setName(user.displayName);
        setEmail(user.email);
        console.log(user.displayName);
      }
      authStateChange(handleAuthChange);
    } catch (error) {
      console.log(error);
    }
  }
  async function Signout() {
    try {
      const msg = await signOut(auth);
      console.log(msg);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    name,
    email,
    Signup,
    Signin,
    Signout,
    SigninWithGoogle,
  };
}

export default function withAuthContext(component) {
  return () => {
    return (
      <AuthContext.Provider value={Auth()}>{component()}</AuthContext.Provider>
    );
  };
}
