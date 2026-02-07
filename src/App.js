import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MessagesScreen from "./screens/red/MessagesScreen.js";
import ChatScreen from "./screens/red/ChatScreen.js";
import InstitutesScreen from "./screens/red/InstitutesScreen.js";
import HomeScreen from "./screens/red/HomeScreen.js";
import MenteesScreen from "./screens/red/MenteesScreen.js";
import SearchScreen from "./screens/red/SearchScreen.js";
import NotificationsScreen from "./screens/red/NotificationsScreen.js";
import NotFound from "./pages/NotFound.js";

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
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/notifications" element={<NotificationsScreen />} />
          <Route path="/institutes" element={<InstitutesScreen />} />
          <Route path="/mentees" element={<MenteesScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
