import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { View, Text } from '@/primitives';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <View className="flex min-h-screen items-center justify-center bg-muted">
      <View className="text-center">
        <Text className="block mb-4 text-4xl font-bold">404</Text>
        <Text className="block mb-4 text-xl text-muted-foreground">Oops! Page not found</Text>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </View>
    </View>
  );
};

export default NotFound;
