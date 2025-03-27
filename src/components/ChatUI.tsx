
import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
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

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto bg-card rounded-xl overflow-hidden chat-box-shadow">
      <div className="p-4 bg-primary text-primary-foreground">
        <h2 className="text-xl font-semibold">College Assistant</h2>
        <p className="text-sm opacity-90">Find teachers and free classrooms (with a side of sarcasm)</p>
      </div>
      
      <div className="flex-grow overflow-y-auto p-4 space-y-4 max-h-[calc(100vh-200px)] bg-accent/30">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        
        {isTyping && (
          <div className="flex items-start max-w-[80%] rounded-lg p-3 animate-pulse-subtle bg-chat-bot text-card-foreground">
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
      
      <form onSubmit={handleSendMessage} className="p-4 bg-card">
        <div className="flex space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about teachers or free classrooms..."
            className="flex-grow p-2 rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-primary"
          />
          
          <Button 
            type="submit" 
            disabled={!input.trim() || isTyping}
            className="bg-primary hover:bg-primary/90 transition-all"
          >
            <Send size={18} />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatUI;
