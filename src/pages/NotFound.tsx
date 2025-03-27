
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-accent/30 p-4">
      <div className="text-center max-w-md animate-fade-in bg-card rounded-xl p-8 shadow-lg">
        <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Even your ability to navigate a website is questionable...
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          The page you're looking for doesn't exist. Did you fail Geography too?
        </p>
        <Button
          onClick={() => navigate("/")}
          className="transition-all-200"
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
