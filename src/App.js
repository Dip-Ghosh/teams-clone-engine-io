import logo from './logo.svg';
import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './compoents/ChatFeed';
function App() {
  return (
    <div className="App">
       <ChatEngine
          height="100vh"
          publicKey='7f7affba-311d-41da-995a-5b96f47cd9b6'
          userName='admin'
          userPassword='123456'
          renderChatFeed = {(chatAppProps) => 
          <ChatFeed {...chatAppProps}/> 
  }
    />
    </div>
  );
}

export default App;
