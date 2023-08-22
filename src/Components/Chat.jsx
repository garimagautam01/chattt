import React from "react";
import Messages from "./Messages";
import Input from "./Input";
import calls from "../image/video.png";
import contact from "../image/contact.png";
import info from "../image/info.png";
import {ChatContext} from "../context/ChatContext";
import { useContext } from "react";

const Chat=() =>{
    const {data}= useContext(ChatContext);
    return(<>
         <div className="chat">
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                    <img src={calls} alt="" />
                    <img src={contact} alt="" />
                    <img src={info} alt="" />
                </div>
            </div>
            <Messages />
            <Input /> 
         </div>
    </>
    );
}

export default Chat;