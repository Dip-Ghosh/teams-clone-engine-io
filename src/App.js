import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './compoents/ChatFeed';
import Login from './compoents/Login';
function App() {

  if(!localStorage.getItem('username')) return <Login/>
  return (
    <div className="App">
       <ChatEngine
          height="100vh"
          projectID='1d263b34-0d7d-4458-8f14-2d938beea169'
          userName= {localStorage.getItem('username')}
          userPassword= {localStorage.getItem('password')}
          renderChatFeed = {(chatAppProps) =>
          <ChatFeed {...chatAppProps}/> 
  }
    />
     </div>
  );
}

export default App;
