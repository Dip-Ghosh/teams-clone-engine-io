import React from 'react'
import {useState} from 'react';
import axios from 'axios'
export default function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const authObject = {
            'Project-ID' : '1d263b34-0d7d-4458-8f14-2d938beea169',
            'User-Name' : username,
            'User-Secret' : password
        }
        try{
            await axios.get('https://api.chatengine.io/chats',{
                headers: authObject
            });
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            window.location.reload();
        }catch(error){
            setError('Oops,incorrect Credentials.');
        }

    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form  onSubmit={handleSubmit}>
                    <input type="text" className="input" placeholder="Username"  required value={username} onChange={(e) =>setUsername(e.target.value)}/>
                    <input type="password" className="input" placeholder="Password"  required value={password} onChange={(e) =>setPassword(e.target.value)}/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chating</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}
