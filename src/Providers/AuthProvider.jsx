import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [reload, setReload] = useState(false)
    // user create
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user profile
    const updateUserProfile = (name, photo, email) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            email: email,
            photoURL: photo,
            
        })
    }

    // user login
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }

    // user State checking
   useEffect (()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        setLoading(false);
    })
    return () => {
        unSubscribe();
    }
   },[reload])

    const authInfo = {
        createUser,
        user,
        loginUser,
        logOut,
        loading,
        updateUserProfile,
        setReload
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object
}


export default AuthProvider;