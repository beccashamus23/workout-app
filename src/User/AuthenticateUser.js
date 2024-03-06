import React, { useEffect, useState } from 'react';
import {fire} from './firebase';
import 'firebase/auth';
import firebase from 'firebase/app';

const AuthenticateUser = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
          setUser(authUser);
        });
    
        return () => {
          unsubscribe();
        };
      }, []);
      return (
        <div>
          {user ? (
            <p>Welcome, {user.email}!</p>
          ) : (
            <p>Please log in or register</p>
          )}
        </div>
      );
    };
    
export default AuthenticateUser;