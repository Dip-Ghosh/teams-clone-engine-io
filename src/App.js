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
          projectID='43842d9b-87c1-4b6c-8225-9fe4ad5eb595'
          userName= {localStorage.getItem('username')}
          userPassword= {localStorage.getItem('password')}
          renderChatFeed = {
              (chatAppProps) => <ChatFeed {...chatAppProps}/>
          }
    />
     </div>
  );
}

export default App;
