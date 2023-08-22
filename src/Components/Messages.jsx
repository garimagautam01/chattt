import React from "react";
import Message from "./Message";
import {ChatContext} from "../context/ChatContext";
import { useContext } from "react";
import { useState,useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import {db} from "../Firebase";
import {doc} from "firebase/firestore";


const Messages=() =>{
    const [messages,setMessages]= useState([]);
    const {data}= useContext(ChatContext);

    useEffect(()=>{
        const unSub= onSnapshot(doc(db,"chats",data.chatId),(doc)=>{
            doc.exists() && setMessages(doc.data().messages)
        })

        return () =>{
            unSub()
        }
    },[data.chatId])

    return(
        <>
            <div className="messages">
            {messages.map((m)=>(
                <Message message={m} key={m.id}/>
            ))}
            </div>
        </>
    );
}


export default Messages;