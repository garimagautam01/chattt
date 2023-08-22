import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase";
import { onAuthStateChanged } from "firebase/auth";



export const AuthContextProvider = ({children}) =>{
    const [currentUser, SetCurrentUser] = useState({})

     useEffect(()=>{
        const unsub=onAuthStateChanged(auth,(user)=>{
            SetCurrentUser(user);
        });

        return() =>{
           unsub();
        }
     },[]);

     return(

     <AuthContext.Provider value={{currentUser}}>
        {children}
     </AuthContext.Provider>
     );
};
export const AuthContext = createContext();