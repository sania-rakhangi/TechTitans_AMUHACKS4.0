import React, { useState, useEffect, useRef } from 'react';
import { FaComments, FaPaperPlane, FaTimes, FaRobot, FaUser } from 'react-icons/fa';

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { id: 1, sender: 'bot', text: 'Hi there! How can I help you today?', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const messagesEndRef = useRef(null);
  
  // Auto scroll to bottom of messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory, isOpen]);
  
  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (message.trim() === '') return;
    
    // Add user message to chat
    const newMessage = {
      id: chatHistory.length + 1,
      sender: 'user',
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setChatHistory([...chatHistory, newMessage]);
    setMessage('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      let botResponse;
      
      // Simple auto-responses based on keywords
      if (message.toLowerCase().includes('homework')) {
        botResponse = "To access your homework assignments, go to the Subjects tab and select the subject. You'll find homework listed for each unit.";
      } else if (message.toLowerCase().includes('badge') || message.toLowerCase().includes('reward')) {
        botResponse = "You can view all your earned badges in the Badges section. Complete activities to earn more badges!";
      } else if (message.toLowerCase().includes('password')) {
        botResponse = "To change your password, go to Settings > Account Settings. If you've forgotten your password, please ask your parent or guardian to help reset it.";
      } else {
        botResponse = "Thanks for your message! Our support team will get back to you soon. In the meantime, is there anything else I can help you with?";
      }
      
      const botMessage = {
        id: chatHistory.length + 2,
        sender: 'bot',
        text: botResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setChatHistory(prevHistory => [...prevHistory, botMessage]);
    }, 1000);
  };
  
  return (
    <>
      {/* Chat bubble button */}
      <button 
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-50 transition-all duration-300 ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-yellow-500 hover:bg-yellow-600'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes className="text-white text-xl" /> : <FaComments className="text-white text-xl" />}
      </button>
      
      {/* Chat window */}
      <div 
        className={`fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-lg shadow-xl z-40 transition-all duration-300 transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
      >
        {/* Chat header */}
        <div className="bg-yellow-500 text-white p-4 rounded-t-lg flex items-center justify-between">
          <h3 className="font-medium flex items-center">
            <FaRobot className="mr-2" /> Chat Support
          </h3>
          <span className="text-xs bg-green-500 px-2 py-0.5 rounded-full">Online</span>
        </div>
        
        {/* Chat messages */}
        <div className="p-4 h-80 overflow-y-auto bg-gray-50">
          {chatHistory.map(msg => (
            <div 
              key={msg.id} 
              className={`mb-3 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-xs p-3 rounded-lg ${msg.sender === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-white text-gray-700 border border-gray-200'}`}
              >
                <div className="flex items-center mb-1">
                  {msg.sender === 'user' ? (
                    <FaUser className="text-xs text-blue-500 mr-1" />
                  ) : (
                    <FaRobot className="text-xs text-yellow-500 mr-1" />
                  )}
                  <span className="text-xs text-gray-500">{msg.time}</span>
                </div>
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Chat input */}
        <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-3 flex items-center">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
          <button 
            type="submit"
            className="ml-2 bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600 transition"
          >
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatSupport;