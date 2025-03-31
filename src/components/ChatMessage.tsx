
import React from "react";
import { cn } from "@/lib/utils";
import { Message } from "./ChatUI";
import { User, Bot, Brain, Coffee, Skull, Zap, Lightbulb } from "lucide-react";

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === "bot";

  // Format the message text with line breaks
  const formattedText = message.text.split('\n').map((text, i) => (
    <React.Fragment key={i}>
      {text}
      {i < message.text.split('\n').length - 1 && <br />}
    </React.Fragment>
  ));

  // Random bot icon with more variety
  const getBotIcon = () => {
    const icons = [
      <Bot size={16} />, 
      <Brain size={16} />, 
      <Coffee size={16} />, 
      <Skull size={16} />, 
      <Zap size={16} />, 
      <Lightbulb size={16} />
    ];
    return icons[Math.floor(Math.random() * icons.length)];
  };

  return (
    <div
      className={cn(
        "flex animate-message-fade-in",
        isBot ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={cn(
          "rounded-md p-3 max-w-[80%] border backdrop-blur-sm",
          isBot 
            ? "bg-chat-bot/90 text-primary-foreground" 
            : "bg-chat-user/90 text-foreground"
        )}
      >
        <div className="flex items-start gap-2">
          {isBot ? (
            <span className="mt-0.5">{getBotIcon()}</span>
          ) : (
            <span className="mt-0.5"><User size={16} /></span>
          )}
          <div>
            <div className="text-sm">{formattedText}</div>
            <div className="text-[10px] opacity-70 text-right mt-1">
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
