import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import { Message, MessageContext } from "./contexts/MessageContext";

function App() {
  const message: Message = {
    name: "Dinesh",
    greeting: "How are you doing?",
  };

  return (
    <div className="App">
      <MessageContext.Provider value={message}>
        <Greet></Greet>
      </MessageContext.Provider>
    </div>
  );
}

export default App;
