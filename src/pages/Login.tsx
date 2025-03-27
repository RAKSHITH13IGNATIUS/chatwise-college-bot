
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(email, password);
      toast.success("Login successful!");
      navigate("/chat");
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-accent/30 p-4">
      <div className="w-full max-w-md animate-fade-in">
        <Card className="shadow-lg border-0 overflow-hidden">
          <CardHeader className="bg-primary text-primary-foreground pb-6">
            <CardTitle className="text-xl">Welcome Back</CardTitle>
            <CardDescription className="text-primary-foreground/80">
              Log in to access your favorite sarcastic chatbot
            </CardDescription>
          </CardHeader>
          
          <form onSubmit={handleSubmit}>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="transition-all-200"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="transition-all-200"
                />
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4">
              <Button 
                type="submit" 
                className="w-full transition-all-200" 
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Log in"}
              </Button>
              
              <div className="text-sm text-center">
                Don't have an account?{" "}
                <Link 
                  to="/signup" 
                  className="text-primary hover:underline transition-all-200"
                >
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
        
        <div className="mt-4 text-center text-xs text-muted-foreground">
          <p>Demo accounts work with any email and password</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
