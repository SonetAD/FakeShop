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
import { useState } from 'react';
import firebaseApp from './Firebase.util';
import react from 'react';

export const AuthContext = react.createContext(null);

function Auth() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const auth = getAuth(firebaseApp);

  let authStateChange = onAuthStateChanged(auth, (user) => {
    if (user) {
      setName(user.displayName);
      setEmail(user.email);
    } else {
      setName('');
      setEmail('');
    }
    unsubscribe();
  });

  function unsubscribe() {
    authStateChange = null;
  }
  async function Signup(userName, email, password) {
    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(newUser, {
        displayName: userName,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function Signin(email, password) {
    try {
      console.log('i am signin');
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.code);
    }
  }
  async function SigninWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {}
  }
  async function Signout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    name,
    email,
    error,
    Signup,
    Signin,
    Signout,
    SigninWithGoogle,
    unsubscribe,
  };
}

export default function withAuthContext(component) {
  const App = new component();
  return () => {
    return (
      <AuthContext.Provider value={Auth()}>{App.render()}</AuthContext.Provider>
    );
  };
}
