import React, { useContext } from "react";
import Photo from "../image/women.webp";
import {signOut} from "firebase/auth"
import {auth} from "../Firebase";
import { AuthContext } from "../context/AuthContext";


const NavBar=() =>{

   const {currentUser} = useContext(AuthContext)

    return(<>
        <div className="navbar">
            <span className="logo">Let's Chat</span>
            <div className="user">
                <img src={currentUser.photoURL} alt="" />
                <span>{currentUser.displayName}</span>
                <button onClick={()=>signOut(auth)}>Log out</button>
            </div>
        </div>

    </>
    );
}

export default NavBar;