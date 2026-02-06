import { View, Text } from '@/primitives';

const Index = () => {
  return (
    <View className="flex min-h-screen items-center justify-center bg-background">
      <View className="text-center">
        <Text className="block mb-4 text-4xl font-bold">Welcome to Your Blank App</Text>
        <Text className="block text-xl text-muted-foreground">Start building your amazing project here!</Text>
      </View>
    </View>
  );
};

export default Index;
