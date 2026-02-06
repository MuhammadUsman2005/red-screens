import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <View className="flex min-h-screen items-center justify-center bg-muted">
      <View className="text-center">
        <Text className="mb-4 text-4xl font-bold">404</Text>
        <Text className="mb-4 text-xl text-muted-foreground">Oops! Page not found</Text>
        <TouchableOpacity onPress={() => { window.location.href = '/'; }}>
          <Text className="text-primary underline">Return to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotFound;
