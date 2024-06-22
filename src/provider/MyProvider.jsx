import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../auth/firebase.config";

export const MyContext = createContext();

const auth = getAuth(app)

const MyProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google Provider declare
    const googleProvider = new GoogleAuthProvider();

    // user create function 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signIn in with google 
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // user login with email password
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useState(() => {
        const subscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            return subscribe();
        }

    }, [])

    // user logout function
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const info = {
        user,
        loading,
        createUser,
        signInWithGoogle,
        userLogin,
        logOut,
        updateUserProfile
    }
    return (
        <MyContext.Provider value={info}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;