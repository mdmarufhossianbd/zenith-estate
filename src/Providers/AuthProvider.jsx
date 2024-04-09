import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext } from 'react';
import app from '../Firebase/Firebase.config';



export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    // user create
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user login
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

   

    const authInfo = {
        createUser,
        loginUser,
        
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