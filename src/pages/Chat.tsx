
import { useAuth } from "../context/AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ChatUI from "../components/ChatUI";

const Chat = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-background to-accent/30">
      <header className="p-4 flex justify-between items-center border-b bg-card">
        <h1 className="text-xl font-semibold">College Assistant</h1>
        <Button variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </header>
      
      <main className="flex-grow p-4 overflow-hidden">
        <div className="h-full max-w-4xl mx-auto">
          <ChatUI />
        </div>
      </main>
    </div>
  );
};

export default Chat;
