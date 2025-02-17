import React, { useState } from "react";
import { Send } from "lucide-react";

const FoodChatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! What would you like to eat today?", sender: "bot" }
  ]); 
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    // Placeholder for AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "Let me find something delicious for you!", sender: "bot" }]);
    }, 1000);
  };

  return (
    <div className='w-screen min-h-screen overflow-x-hidden bg-gradient-to-r from-indigo-900 to-purple-800 text-white flex flex-col p-6'>
      <div className='flex flex-row h-full w-full gap-5'>
        {/* Left Section - Website Details */}
        <div className='w-1/3 bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-extrabold text-yellow-400'>🍽️ Welcome</h1>
          <p className='text-lg mt-4 text-gray-300'>Explore a variety of delicious foods and get recommendations tailored to your taste.</p>
          <button className='mt-6 bg-gradient-to-r from-blue-500 to-green-400 text-white p-3 rounded-3xl hover:scale-105 transition'>Learn More</button>
        </div>
        
        {/* Right Section - Chatbot */}
        <div className='w-2/3 bg-gray-900 rounded-lg shadow-2xl flex flex-col h-[80vh] p-6 overflow-y-auto'>
          <div className='text-center text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent'>
            🍔 Food AI Chatbot
          </div>
          <div className='flex-1 overflow-y-auto p-4 space-y-4 mt-4'>
            {messages.map((msg, index) => (
              <div key={index} className={`p-3 max-w-[75%] rounded-xl text-lg shadow-lg ${msg.sender === "bot" ? "bg-gray-700 self-start" : "bg-blue-500 self-end text-white"}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className='flex items-center gap-2 border-t pt-4'>
            <input 
              type='text' 
              className='flex-1 border border-gray-600 rounded-lg p-3 bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500' 
              placeholder='Type your message...'
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button className='bg-gradient-to-r from-blue-500 to-green-400 text-white p-3 rounded-xl hover:scale-105 transition' onClick={sendMessage}>
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodChatbot;