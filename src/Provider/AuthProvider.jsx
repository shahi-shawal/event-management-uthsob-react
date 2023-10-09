import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Config/firebase.config"
export const AuthContex = createContext()

const AuthProvider = ({children}) => {
const googleProvider = new GoogleAuthProvider();
   const [user, setUser]= useState({})   
   const [loading, setLoading]= useState(true)
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const googlelogin= ()=>{
        return signInWithPopup(auth,googleProvider )
    }
   
    const login= (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = ()=>{
      return  signOut(auth)
    }

    // const profileupdate = ()=>{
    //     return updateProfile(auth.user)
    // }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user)=>{
            setUser(user)
            setLoading(false)
        }
        )
        return (unSubscribe)
    },[])
     console.log(user);
    const authInfo ={
        createUser,
        login,
        user,
        loading,
        logout,
        googlelogin
    }
    return (
        <div>
          <AuthContex.Provider value={authInfo}>
            {children}
            </AuthContex.Provider>  
        </div>
    );
};

export default AuthProvider;