import React, { useContext , useState} from "react";
import {auth} from "../firebase"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthContext({ children }) {
    const [currntuser, setCurrntuser] = useStateState();
    const value = {
        currentuser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}