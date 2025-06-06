import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { Bot, User, Loader2 } from 'lucide-react';

// Types for our messages
interface Message {
  id: number;
  content: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

// Initial messages to demonstrate the conversation
const initialMessages: Message[] = [
  {
    id: 1,
    content: "Hello! Welcome to [Medical Practice Name]. How can I assist you today?",
    sender: "bot",
    timestamp: new Date()
  }
];

// Sample responses for the bot - these are predetermined to match the exact flow from the script
const botResponses = [
  {
    trigger: ["hi,", "hello", "hey", "appointment", "schedule"],
    response: "Great! What type of appointment are you looking to schedule?"
  },
  {
    trigger: ["dermatologist", "skin", "derm"],
    response: "Got it! The earliest available appointment is with Dr. Patel on Tuesday at 10 AM. Does that work for you?"
  },
  {
    trigger: ["meeting", "later", "later in the day", "can we do it later"],
    response: "No problem! Dr. Patel has an opening at 2 PM on the same day. Would that be better?"
  },
  {
    trigger: ["yes", "perfectly", "works perfectly", "2 pm works"],
    response: "Great! Your appointment is confirmed for Tuesday at 2 PM. Anything else I can help with?"
  }
];

// Default response if no triggers match
const defaultResponse = "I understand. For complex inquiries, I can connect you with our medical staff. Would you like me to do that, or is there something else I can help with?";

export function AIChatbotDemo() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [demoMode, setDemoMode] = useState(true);
  const [demoStep, setDemoStep] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to the bottom of the messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // This handles the automated demo flow
  useEffect(() => {
    if (!demoMode) return;
    
    const demoScript = [
      {
        message: "Hi, I need to schedule an appointment.",
        delay: 1000
      },
      {
        message: "I need to see a dermatologist.",
        delay: 5000
      },
      {
        message: "Actually, I have a meeting then. Can we do it later in the day?",
        delay: 6000
      },
      {
        message: "Yes, 2 PM works perfectly.",
        delay: 6000
      }
    ];
    
    if (demoStep < demoScript.length) {
      const timer = setTimeout(() => {
        handleUserMessage(demoScript[demoStep].message);
        setDemoStep(prev => prev + 1);
      }, demoScript[demoStep].delay);
      
      return () => clearTimeout(timer);
    }
    
    // Restart the demo after completion
    if (demoStep === demoScript.length) {
      const resetTimer = setTimeout(() => {
        setMessages(initialMessages);
        setDemoStep(0);
      }, 10000);
      
      return () => clearTimeout(resetTimer);
    }
  }, [demoMode, demoStep]);
  
  // Function to generate a bot response based on user input
  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    for (const item of botResponses) {
      if (item.trigger.some(keyword => input.includes(keyword))) {
        return item.response;
      }
    }
    
    return defaultResponse;
  };
  
  // Function to handle sending a message
  const handleUserMessage = (text: string) => {
    if (!text.trim()) return;
    
    // Generate a unique ID
    const timestamp = new Date().getTime();
    
    // Add user message
    const newUserMessage: Message = {
      id: timestamp,
      content: text,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      
      const newBotMessage: Message = {
        id: timestamp + 1, // Ensure unique ID
        content: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newBotMessage]);
      setIsTyping(false);
    }, 1500);
    
    // Clear input if not in demo mode
    if (!demoMode) {
      setInputValue('');
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (demoMode) return; // Prevent manual input in demo mode
    handleUserMessage(inputValue);
  };
  
  return (
    <motion.div 
      variants={fadeInUp}
      className="w-full h-[500px] bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 flex flex-col"
    >
      {/* Header */}
      <div className="bg-primary p-4 text-white flex items-center">
        <Bot className="mr-2" size={24} />
        <div>
          <h3 className="font-bold">MedCare AI Assistant</h3>
          <p className="text-xs opacity-80">Online • Responds instantly</p>
        </div>
      </div>
      
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] p-3 rounded-lg ${
                message.sender === 'user' 
                  ? 'bg-blue-400 text-white rounded-tr-none shadow-sm' 
                  : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none shadow-sm'
              }`}
            >
              <div className="flex items-start mb-1">
                {message.sender === 'bot' && (
                  <Bot size={16} className="mr-1 mt-1 text-primary" />
                )}
                <div>{message.content}</div>
                {message.sender === 'user' && (
                  <User size={16} className="ml-1 mt-1 text-white" />
                )}
              </div>
              <div 
                className={`text-xs ${
                  message.sender === 'user' ? 'text-primary-foreground/80' : 'text-gray-500'
                } text-right`}
              >
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex mb-4 justify-start">
            <div className="bg-white p-3 rounded-lg border border-gray-200 rounded-tl-none shadow-sm flex items-center">
              <Loader2 className="h-4 w-4 mr-2 text-primary animate-spin" />
              <span className="text-sm text-gray-500">MedCare AI is typing...</span>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input area */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={demoMode ? "Demo Mode - Automated Conversation" : "Type your message..."}
            disabled={demoMode}
            className="flex-1 bg-transparent border-none focus:outline-none text-gray-700 disabled:text-gray-400"
          />
          <button
            type="submit"
            disabled={demoMode || !inputValue.trim()}
            className="ml-2 bg-primary text-white p-2 rounded-full disabled:opacity-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
        <div className="text-xs text-center mt-2 text-gray-400">
          {demoMode ? "Automated demo in progress..." : "Chat with our AI assistant"}
        </div>
      </form>
    </motion.div>
  );
}