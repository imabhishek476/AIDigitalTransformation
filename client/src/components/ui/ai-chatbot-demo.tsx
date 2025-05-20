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
    content: "Hello! Welcome to MedCare AI Assistant. How can I help you today?",
    sender: "bot",
    timestamp: new Date()
  }
];

// Sample responses for the bot
const botResponses = [
  {
    trigger: ["appointment", "schedule", "book"],
    response: "I'd be happy to help you schedule an appointment. What day and time works best for you?"
  },
  {
    trigger: ["tomorrow", "next week", "monday", "tuesday", "wednesday", "thursday", "friday"],
    response: "I've checked Dr. Johnson's availability and can offer you an appointment at 10:00 AM or 2:30 PM. Which would you prefer?"
  },
  {
    trigger: ["morning", "10", "10:00", "10am"],
    response: "Perfect! I've scheduled your appointment with Dr. Johnson for tomorrow at 10:00 AM. You'll receive a confirmation text shortly. Is there anything else I can help you with?"
  },
  {
    trigger: ["afternoon", "2", "2:30", "2:30pm"],
    response: "Perfect! I've scheduled your appointment with Dr. Johnson for tomorrow at 2:30 PM. You'll receive a confirmation text shortly. Is there anything else I can help you with?"
  },
  {
    trigger: ["prescription", "refill", "medication"],
    response: "I can help with prescription refills. For security, I'll need to verify your identity through our secure portal. Would you like me to send you a secure verification link to your registered email or phone number?"
  },
  {
    trigger: ["verify", "verification", "secure", "email", "phone"],
    response: "Great! I've sent a secure verification link to your registered contact information. Once verified, you can safely submit your refill request through our HIPAA-compliant system. For your privacy, never share personal health information in this chat."
  },
  {
    trigger: ["test", "lab", "results", "labs"],
    response: "Your lab results are available in our secure patient portal. Due to privacy regulations, I can't discuss specific results here, but I can guide you to access them securely. Would you like me to send instructions to view your results in the patient portal?"
  },
  {
    trigger: ["portal", "access", "login"],
    response: "To access your secure patient portal: 1) Visit medcare.portal.com 2) Login with your credentials 3) Click 'Lab Results' in the dashboard. Need help logging in? I can connect you with our technical support team."
  },
  {
    trigger: ["insurance", "coverage", "policy"],
    response: "We accept most major insurance plans including BlueCross, Aetna, Cigna, and Medicare. For personalized coverage information, I can help you securely submit your insurance details through our verification system. Would you like to proceed with insurance verification?"
  },
  {
    trigger: ["forms", "paperwork", "registration"],
    response: "I can help you complete your registration paperwork digitally before your visit to save time! Would you like me to send a secure link to our online registration forms? They're HIPAA-compliant and will save you time in the waiting room."
  },
  {
    trigger: ["telehealth", "virtual", "video"],
    response: "Our telehealth services provide convenient access to healthcare from home. I can help you schedule a virtual appointment and send instructions for connecting to our secure video platform. Would you like to schedule a telehealth consultation?"
  },
  {
    trigger: ["hours", "open", "close"],
    response: "Our clinic is open Monday through Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 1:00 PM. We're closed on Sundays and holidays."
  },
  {
    trigger: ["directions", "location", "address", "parking"],
    response: "Our clinic is located at 123 Health Avenue. We have free parking in the adjacent garage. Would you like me to send you detailed directions from your location or information about public transportation options?"
  },
  {
    trigger: ["reminder", "notification", "alert"],
    response: "I can set up customized appointment reminders for you. Would you prefer text, email, or phone call reminders? You can also specify how far in advance you'd like to be reminded about upcoming appointments."
  },
  {
    trigger: ["cancel", "reschedule", "change appointment"],
    response: "I understand you need to modify your appointment. Our policy allows changes up to 24 hours before your scheduled time without any fee. Would you like to reschedule or cancel your current appointment?"
  },
  {
    trigger: ["thank", "thanks"],
    response: "You're welcome! If you have any other questions, feel free to ask. Have a great day!"
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
        message: "I'd like to schedule an appointment for tomorrow",
        delay: 1000
      },
      {
        message: "The morning appointment at 10am works great for me",
        delay: 5000
      },
      {
        message: "Can I complete my registration forms before my visit?",
        delay: 7000
      },
      {
        message: "I'd also like to see my recent lab results",
        delay: 7000
      },
      {
        message: "Great! Can you set up an appointment reminder for me?",
        delay: 7000
      },
      {
        message: "Thank you!",
        delay: 7000
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
                  ? 'bg-primary text-white rounded-tr-none' 
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