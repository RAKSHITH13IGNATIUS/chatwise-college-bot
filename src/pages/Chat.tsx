
import { useAuth } from "../context/AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ChatUI from "../components/ChatUI";
import { LogOut, Skull } from "lucide-react";

const Chat = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="p-4 flex justify-between items-center border-b">
        <h1 className="text-xl font-semibold flex items-center gap-2">
          <Skull size={24} />
          ASK DSU
        </h1>
        <Button variant="outline" onClick={handleLogout} className="flex items-center gap-1">
          <LogOut size={16} />
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
