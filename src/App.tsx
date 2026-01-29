import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MessagesScreen from "./screens/red/MessagesScreen";
import ChatScreen from "./screens/red/ChatScreen";
import InstitutesScreen from "./screens/red/InstitutesScreen";
import HomeScreen from "./screens/red/HomeScreen";
import MenteesScreen from "./screens/red/MenteesScreen";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MessagesScreen />} />
          <Route path="/chat/:chatId" element={<ChatScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/institutes" element={<InstitutesScreen />} />
          <Route path="/mentees" element={<MenteesScreen />} />
          <Route path="/profile" element={<MessagesScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
