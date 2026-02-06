import { View, Text } from '../components/primitives';

const Index = () => {
  return (
    <View className="flex min-h-screen items-center justify-center bg-background">
      <View className="text-center">
        <Text className="mb-4 text-4xl font-bold block">Welcome to Your Blank App</Text>
        <Text className="text-xl text-muted-foreground block">Start building your amazing project here!</Text>
      </View>
    </View>
  );
};

export default Index;
