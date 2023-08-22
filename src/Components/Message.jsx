import React from "react";
import Photo from "../image/women.webp";
import {AuthContext} from "../context/AuthContext";
import {ChatContext} from "../context/ChatContext";
import { useContext } from "react";

const Message = ({message}) =>{

    const {currentUser} = useContext(AuthContext);
    const {data} = useContext(ChatContext);
    console.log(message);
    return(<>
        <div className="message owner">
            {/* <div className="messageInfo">
                <img src={Photo} alt="" />
                <span>just now</span>
            </div>
            <div className="messageContent">
             <p>Hello</p>
             <img src={Photo} alt="" />
            </div> */}
        </div>
    </>
    );
}

export default Message;