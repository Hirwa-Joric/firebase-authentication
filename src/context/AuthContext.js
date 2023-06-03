import React, { useContext , useState} from "react";
import {auth} from "../firebase"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthContext({ children }) {
    const [currntuser, setCurrntuser] = useStateState();

    function signUp(email,password) {       
        auth.createUserWithEmailAndPassword(email,password)
    }

    const value = {
        currentuser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}