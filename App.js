import './App.css';
import React, {useState} from "react"


function App() 
{
    const [messages, setMessages] = React.useState(["a", "b"])


 
  return (
    <div className = "msg"> 
            {
                messages.length === 0 ?
                <h1>You're all caught up!</h1> :
                <h1>You have {messages.length} unread {messages.length > 1 ? "messages" : "message"}</h1>
            }
        </div>
      
  )
}



export default App;
