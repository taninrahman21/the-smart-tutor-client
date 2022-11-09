import React from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const authInfo = {user, creatUser}; 
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default UserContext;