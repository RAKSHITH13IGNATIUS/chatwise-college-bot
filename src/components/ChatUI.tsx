
import React, { useState, useRef, useEffect } from "react";
import { Send, Brain, Lightbulb, Zap, Skull } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChatMessage } from "./ChatMessage";
import { generateResponse, getWelcomeMessage } from "../utils/chatbotUtils";

export interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatUI: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });

  // Update gradient based on mouse position
  const handleMouseMove = (e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    setGradientPosition({ x, y });
  };

  // Setup mouse move listener
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Add welcome message on initial load
  useEffect(() => {
    const welcomeMessage = getWelcomeMessage();
    setMessages([
      {
        id: "welcome",
        text: welcomeMessage,
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
  }, []);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  // Focus input field
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!input.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    try {
      const response = await generateResponse(input);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error generating response:", error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble processing that right now. Even AI has off days, especially when dealing with engineering students.",
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  // Pick a random icon for the header
  const randomIcon = () => {
    const icons = [
      <Brain size={20} key="brain" />,
      <Lightbulb size={20} key="lightbulb" />,
      <Zap size={20} key="zap" />,
      <Skull size={20} key="skull" />
    ];
    return icons[Math.floor(Math.random() * icons.length)];
  };

  // Dynamic gradient style
  const gradientStyle = {
    background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(18, 16, 35, 0.9) 0%, rgba(10, 10, 18, 0.98) 70%)`,
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto bg-card rounded-md overflow-hidden border relative">
      <div 
        className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out -z-10" 
        style={gradientStyle}
      />
      
      <div className="p-4 bg-primary/80 backdrop-blur-sm text-primary-foreground flex items-center justify-between z-10">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          {randomIcon()}
          ASK DSU
        </h2>
      </div>
      
      <div className="flex-grow overflow-y-auto p-4 space-y-4 max-h-[calc(100vh-200px)] z-10">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        
        {isTyping && (
          <div className="flex items-start max-w-[80%] rounded-md p-3 animate-pulse-subtle bg-chat-bot text-card-foreground">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <Separator />
      
      <form onSubmit={handleSendMessage} className="p-4 bg-card/30 backdrop-blur-sm z-10">
        <div className="flex space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about teachers or free classrooms..."
            className="flex-grow p-2 rounded-md border bg-background/80 focus:outline-none focus:ring-1 focus:ring-primary"
          />
          
          <Button 
            type="submit" 
            disabled={!input.trim() || isTyping}
            className="bg-primary hover:bg-primary/90 transition-all flex items-center gap-1"
            aria-label="Send message"
          >
            <Send size={18} />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatUI;
