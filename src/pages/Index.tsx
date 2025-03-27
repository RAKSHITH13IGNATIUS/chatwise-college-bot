
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "../context/AuthContext";

const Index = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    // If already logged in, redirect to chat
    if (user) {
      navigate("/chat");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-accent/30">
      <div className="text-center max-w-2xl px-6 animate-fade-in">
        <h1 className="text-4xl font-bold mb-6 sm:text-5xl">College Assistant</h1>
        <p className="text-xl mb-8 text-muted-foreground">
          Your sarcastic guide to finding teachers and free classrooms
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            onClick={() => navigate("/login")}
            className="px-8 py-6 text-lg bg-primary hover:bg-primary/90 transition-all-200"
          >
            Login
          </Button>
          
          <Button
            onClick={() => navigate("/signup")}
            variant="outline"
            className="px-8 py-6 text-lg hover:bg-accent transition-all-200"
          >
            Sign Up
          </Button>
        </div>
        
        <div className="mt-12 p-4 bg-card rounded-lg text-left">
          <h2 className="text-lg font-medium mb-3">What can this do?</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Find a teacher's cabin and contact information</li>
            <li>• Check which classrooms are free right now</li>
            <li>• Get sarcastic responses that question your life choices</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
