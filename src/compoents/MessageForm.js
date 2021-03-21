import React from 'react'
import {useState} from 'react';
import {sendMessage, isTyping } from 'react-chat-engine';
export default function MessageForm(props) {

    const [value, setValue] = useState('');
    const {chatId,creds} = props;
    const handleSubmit = (e) =>{
        e.preventDefault();
        const text = value.trim();
        if(text.length>0){
          sendMessage(creds,chatId,{text});  
        }

    }

    const handleChange = (event) =>{
        setValue(event.target.value);

    }

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input 
            className="message-input"
            placeholder="send a message"
            type="text"
            value={value}
            onChange={handleChange}
            onSubmit={handleSubmit}
            />
        </form>
    )
}
