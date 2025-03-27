
import React from "react";
import { cn } from "@/lib/utils";
import { Message } from "./ChatUI";

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

  return (
    <div
      className={cn(
        "flex animate-message-fade-in",
        isBot ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={cn(
          "rounded-md p-3 max-w-[80%] border",
          isBot 
            ? "bg-chat-bot text-primary-foreground" 
            : "bg-chat-user text-foreground"
        )}
      >
        <div className="text-sm">{formattedText}</div>
        <div className="text-[10px] opacity-70 text-right mt-1">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};
