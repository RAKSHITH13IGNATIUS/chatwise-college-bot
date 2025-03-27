
import React, { createContext, useContext, useState, useEffect } from "react";

type User = {
  id: string;
  email: string;
  username: string;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, username: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Welcome messages that appear on login
const welcomeMessages = [
  "Welcome back, Einstein! Ready to fail another exam?",
  "Oh look, an engineering student who knows how to use a computer. Impressive.",
  "Back for more punishment? Your dedication to mediocrity is inspiring.",
  "Ah, the return of the procrastinator extraordinaire! Let me guess, assignment due tomorrow?",
  "Well, well, well... if it isn't my favorite sleep-deprived knowledge seeker.",
  "Great, you're back. I was running out of people to judge today.",
  "Welcome! Your caffeine addiction and I have been waiting for you.",
  "The ultimate time-waster returns! Your GPA just dropped 0.1 points for logging in.",
  "Oh joy, another engineering student with questions that could have been answered with a simple Google search.",
  "Welcome back! Your student loan just increased by $500 for opening this chat."
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing user session in localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem("user");
      }
    }
    setIsLoading(false);
  }, []);

  // Generate a random welcome message
  const getRandomWelcomeMessage = () => {
    const randomIndex = Math.floor(Math.random() * welcomeMessages.length);
    return welcomeMessages[randomIndex];
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // This is a mock login - in a real app, you'd call an API
      // For demo purposes, we'll just create a fake user
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      const mockUser = {
        id: `user_${Date.now()}`,
        email,
        username: email.split('@')[0],
      };
      
      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
      localStorage.setItem("welcomeMessage", getRandomWelcomeMessage());
    } catch (error) {
      console.error("Login error:", error);
      throw new Error("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, username: string, password: string) => {
    setIsLoading(true);
    try {
      // This is a mock signup - in a real app, you'd call an API
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      const mockUser = {
        id: `user_${Date.now()}`,
        email,
        username,
      };
      
      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
      localStorage.setItem("welcomeMessage", getRandomWelcomeMessage());
    } catch (error) {
      console.error("Signup error:", error);
      throw new Error("Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("welcomeMessage");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
